import {
  DebugMonitoringAdapter,
  LogContext,
  MonitoringAdapter,
  Severity,
  Transaction,
  TransactionContext,
} from '@monkvision/monitoring';

import * as Sentry from '@sentry/react';
import { Span } from '@sentry/types';

/**
 * Transaction statuses available in the Sentry platform.
 */
export enum SentryTransactionStatus {
  /**
   * The operation completed successfully.
   */
  OK = 'ok',
  /**
   * Unknown. Any non-standard HTTP status code.
   */
  UNKNOWN_ERROR = 'unknown_error',
  /**
   * The operation was cancelled (typically by the user).
   */
  CANCELLED = 'cancelled',
  /**
   * The operation was aborted, typically due to a concurrency issue.
   */
  ABORTED = 'aborted',
}

/**
 * Config required when instantiating the Sentry Monitoring Adapter.
 */
export interface SentryConfig {
  /**
   * DSN key for sentry.io application.
   */
  dsn: string;
  /**
   * The environment of your application (e.g. "production").
   *
   * @default 'local'
   */
  environment: string;
  /**
   * Enable debug functionality in the SDK itself.
   *
   * @default false
   */
  debug: boolean;
  /**
   * Release version of application.
   *
   * @default ''
   */
  release: string;
  /**
   * Sample rate to determine trace sampling.
   *
   * 0.0 = 0% chance of a given trace being sent (send no traces) 1.0 = 100% chance of a given trace being sent (send
   * all traces).
   *
   * @default 0.025
   */
  tracesSampleRate: number;
  /**
   * Custom tags to add in all transaction.
   */
  customTags?: { [tag: string]: string };
}

/**
 * Type definition for the config options given to the SentryMonitoringAdapter constructor.
 */
export interface SentryAdapterConfig extends Partial<SentryConfig> {
  /*
   * DSN key for sentry.io application.
   */
  dsn: string;
}

const defaultOptions: Omit<SentryConfig, 'dsn'> = {
  environment: 'local',
  debug: false,
  tracesSampleRate: 0.025,
  release: '',
};

/**
 * This is a Monitoring Adapter that connects the app to the Sentry platform.
 * There are four methods implemented which are `setUserId`, `log`, `handleError` and `createTransaction`,
 *
 * When initializing the adapter, the user have to pass required sentry configuration keys to make connection between
 * the application and Sentry. The `log` and `handleError` methods will log data and errors respectively in the Sentry
 * dashboards, as well as log them in the console. The `createTransaction` method used to measure performances in an
 * application at any given point.
 */
export class SentryMonitoringAdapter extends DebugMonitoringAdapter implements MonitoringAdapter {
  private readonly sentryOptions: SentryConfig;

  constructor(optionsParam: SentryAdapterConfig) {
    super();
    this.sentryOptions = {
      ...defaultOptions,
      ...optionsParam,
    };

    Sentry.init({
      ...this.options,
      beforeBreadcrumb: (breadcrumb) => (breadcrumb.category === 'xhr' ? null : breadcrumb),
    });

    if (this.sentryOptions.customTags) {
      Sentry.setTags(this.sentryOptions.customTags);
    }
  }

  override setUserId(id: string): void {
    Sentry.setUser({ id });
  }

  override log(msg: string, context?: LogContext | Severity): void {
    super.log(msg, context);
    Sentry.captureMessage(msg, context);
  }

  override handleError(err: Error | string, context?: Omit<LogContext, 'level'>): void {
    super.handleError(err, context);
    Sentry.captureException(err, context);
  }

  override createTransaction(context: TransactionContext): Transaction {
    const transaction = Sentry.startTransaction({
      name: context.name ?? '',
      data: context.data ?? {},
      op: context.operation ?? '',
      description: context.description ?? '',
      traceId: context.traceId ?? '',
      tags: context.tags ?? {},
      sampled: true,
    });
    const transactionSpans: Record<string, Span> = {};

    return {
      setTag: (tagName: string, tagValue: string) => transaction.setTag(tagName, tagValue),
      startMeasurement: (name: string, data?: Record<string, number | string>) => {
        transactionSpans[name] = transaction.startChild({
          op: name,
          data: data ?? {},
        });
      },
      stopMeasurement: () => (name: string) => {
        if (transactionSpans[name]) {
          transactionSpans[name].setStatus(SentryTransactionStatus.OK);
          transactionSpans[name].finish();
          delete transactionSpans[name];
        }
      },
      finish: (status: string = SentryTransactionStatus.OK) => {
        transaction.setStatus(status);
        transaction.finish();
      },
    };
  }
}