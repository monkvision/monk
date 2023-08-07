global.console = {
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
} as any;

import { SentryMonitoringAdapter } from '../../src/adapters/sentryMonitoringAdapter';

interface ConsoleSpy {
  debug: jest.SpyInstance | null;
  info: jest.SpyInstance | null;
  warn: jest.SpyInstance | null;
  error: jest.SpyInstance | null;
}

describe('Empty Monitoring Adapter', () => {
  const consoleSpy: ConsoleSpy = {
    debug: jest.spyOn(global.console, 'debug'),
    info: jest.spyOn(global.console, 'info'),
    warn: jest.spyOn(global.console, 'warn'),
    error: jest.spyOn(global.console, 'error'),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('setUserId function', () => {
    it('should display a warning in the console when used', () => {
      const adapter = new SentryMonitoringAdapter();
      adapter.setUserId('test id');
      expect(consoleSpy.warn).toHaveBeenCalled();
    });

    // it('should not display a warning in the console is showUnsupportedMethodWarnings is set to false', () => {
    //   const adapter = new SentryMonitoringAdapter({ showUnsupportedMethodWarnings: false });
    //   adapter.setUserId('test id');
    //   expect(consoleSpy.warn).not.toHaveBeenCalled();
    // });
  });

  // describe('log function', () => {
  //   it('should display a warning in the console when used', () => {
  //     const adapter = new SentryMonitoringAdapter();
  //     adapter.log('test msg');
  //     expect(consoleSpy.warn).toHaveBeenCalled();
  //   });

  //   it('should not display a warning in the console is showUnsupportedMethodWarnings is set to false', () => {
  //     const adapter = new SentryMonitoringAdapter({ showUnsupportedMethodWarnings: false });
  //     adapter.log('test msg');
  //     expect(consoleSpy.warn).not.toHaveBeenCalled();
  //   });
  // });

  // describe('handleError function', () => {
  //   it('should display a warning in the console when used', () => {
  //     const adapter = new SentryMonitoringAdapter();
  //     adapter.handleError(new Error('test error'));
  //     expect(consoleSpy.warn).toHaveBeenCalled();
  //   });

  //   it('should not display a warning in the console is showUnsupportedMethodWarnings is set to false', () => {
  //     const adapter = new SentryMonitoringAdapter({ showUnsupportedMethodWarnings: false });
  //     adapter.handleError(new Error('test error'));
  //     expect(consoleSpy.warn).not.toHaveBeenCalled();
  //   });
  // });

  // describe('createTransaction function', () => {
  //   it('should display a warning in the console when used', () => {
  //     const adapter = new SentryMonitoringAdapter();
  //     adapter.createTransaction({});
  //     expect(consoleSpy.warn).toHaveBeenCalled();
  //   });

  //   it('should not display a warning in the console is showUnsupportedMethodWarnings is set to false', () => {
  //     const adapter = new SentryMonitoringAdapter({ showUnsupportedMethodWarnings: false });
  //     adapter.createTransaction({});
  //     expect(consoleSpy.warn).not.toHaveBeenCalled();
  //   });

  //   it('should create a dummy transaction', () => {
  //     const adapter = new SentryMonitoringAdapter();
  //     const transaction = adapter.createTransaction({});
  //     expect(() => {
  //       transaction.setTag('test', 'value');
  //       transaction.startMeasurement('test');
  //       transaction.stopMeasurement('test');
  //       transaction.finish('test');
  //     }).not.toThrow();
  //   });
  // });
});
