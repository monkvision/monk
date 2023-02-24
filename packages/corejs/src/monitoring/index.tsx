import * as Sentry from '@sentry/browser';
import { BrowserTracing } from '@sentry/tracing';
import React, { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo } from 'react';
import { Primitive } from '@sentry/types';

import { MonitoringContext, MonitoringProps, SentryTransactionStatus } from './types';

export * from './types';

/**
 * Monitoring context which will create wrapper for monitoring functionality.
*/
export const Context = createContext<MonitoringContext | null>(null);

/**
 * Monitoring wrapper used to abstract Sentry functionality.
 *
 * @param {MonitoringProps} data - Configuration for sentry to override default configuration.
 * @return {React.ReactNode}
*/
export function MonitoringProvider({ children, config }: PropsWithChildren<MonitoringProps>) {
  useEffect(() => {
    Sentry.init({
      dsn: config.dsn,
      environment: config.environment,
      debug: config.debug,
      tracesSampleRate: config.tracesSampleRate,
      integrations: [
        new BrowserTracing({ tracePropagationTargets: config.tracingOrigins }),
      ],
    });
  }, []);

  /**
   * Updates user context information for future events.
   *
   * @param id {string} set user for in sentry
   * @return {void}
  */
  const setMonitoringUser = useCallback((id: string): void => {
    Sentry.setUser({ id });
  }, []);

  /**
   * Set key:value that will be sent as tags data with the event.
   *
   * Can also be used to unset a tag, by passing `undefined`.
   *
   * @param key String key of tag
   * @param value Value of tag
   * @return {void}
  */
  const setMonitoringTag = useCallback((key: string, value: Primitive): void => {
    Sentry.setTag(key, value);
  }, []);

  /**
   * Error handler function which is used to capture errors in sentry.
   *
   * @param error {Error | string} - Caught error that to be send to Sentry.io
   * @returns {string | null}
   */
  const errorHandler = useCallback((error: Error | string): string | null => {
    if (!Sentry) {
      return null;
    }

    return Sentry.captureException(error);
  }, []);

  /**
   * Measure the performance of application based on functionality and operation based on it.
   * Return type of the function is the IIFE, which will helps to close the transaction and complete the measurement.
   *
   * @param name {string} - Name of transaction
   * @param operation {string} - Operation of transaction to be performed
   * @param [data] {{[key: string]: number | string}} - Data to be added on transaction
   * @returns {() => void} - Which will helps to close the transaction and complete the measurement.
  */
  const measurePerformance = useCallback((name: string, op: string, data?: { [key: string]: number | string }): (() => void) => {
    // This will create a new Transaction
    const transaction = Sentry.startTransaction({ name, data, op });

    // Set transaction on scope to associate with errors and get included span instrumentation
    // If there's currently an unfinished transaction, it may be dropped
    Sentry.getCurrentHub().configureScope((scope) => {
      scope.setSpan(transaction);
    });

    return () => {
      transaction.setStatus(SentryTransactionStatus);
      transaction.finish();
    };
  }, []);

  /**
   * Set the custom measurement on particular transaction
   *
   * @param transactionName Name of the transaction
   * @param name Name of the measurement
   * @param value Value of the measurement
   * @param [unit] Unit of the measurement. (Defaults to an empty string)
   * @return {void}
   */
  const setMeasurement = useCallback((transactionName: string, name: string, value: number, unit?: string): void => {
    const transaction = Sentry.startTransaction({ name: transactionName, op: name });

    setTimeout(() => {
      transaction.setMeasurement(name, value, unit);
      transaction.setMeasurement('frames_total', value, unit);
      transaction.setStatus(SentryTransactionStatus);
      transaction.finish();
    }, 100);
  }, []);

  const monitoringContextValue = useMemo(
    () => ({ setMonitoringUser, setMonitoringTag, errorHandler, measurePerformance, setMeasurement }),
    [setMonitoringUser, setMonitoringTag, errorHandler, measurePerformance, setMeasurement],
  );

  return (
    <Context.Provider value={monitoringContextValue}>
      {children}
    </Context.Provider>
  );
}

/**
 * Custom hook which will provide monitoring context which will expose all the functionality.
*/
export function useMonitoring() {
  return useContext(Context);
}