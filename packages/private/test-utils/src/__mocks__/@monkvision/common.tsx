import { InteractiveStatus } from '@monkvision/types';

const {
  permutations,
  suffix,
  words,
  capitalize,
  uncapitalize,
  toCamelCase,
  getRGBAFromString,
  getHexFromRGBA,
  shadeColor,
  InteractiveVariation,
  getInteractiveVariants,
  zlibCompress,
  zlibDecompress,
  MonkDefaultPalette,
  createTheme,
  createEmptyMonkState,
  MonkActionType,
} = jest.requireActual('@monkvision/common');

export = {
  /* Actual exports */
  permutations,
  suffix,
  words,
  capitalize,
  uncapitalize,
  toCamelCase,
  getRGBAFromString,
  getHexFromRGBA,
  shadeColor,
  InteractiveVariation,
  getInteractiveVariants,
  zlibCompress,
  zlibDecompress,
  MonkDefaultPalette,
  createTheme,
  MonkActionType,

  /* Mocks */
  useMonkTheme: jest.fn(() => createTheme()),
  MonkThemeProvider: jest.fn(({ children }) => <>{children}</>),
  isGotOneAction: jest.fn(() => false),
  isGotManyAction: jest.fn(() => false),
  isDeletedOneAction: jest.fn(() => false),
  isDeletedManyAction: jest.fn(() => false),
  useMonkState: jest.fn(() => ({ state: createEmptyMonkState(), dispatch: jest.fn() })),
  monkReducer: jest.fn(createEmptyMonkState),
  MonkProvider: jest.fn(({ children }) => <>{children}</>),
  i18nLinkSDKInstances: jest.fn(),
  useI18nLink: jest.fn(),
  i18nCreateSDKInstance: jest.fn(),
  i18nWrap: jest.fn((component) => component),
  useInteractiveStatus: jest.fn(({ componentHandlers }) => ({
    status: InteractiveStatus.DEFAULT,
    eventHandlers: componentHandlers,
  })),
  useQueue: jest.fn(() => ({
    length: 0,
    processingCount: 0,
    onHoldCount: 0,
    totalItems: 0,
    isFull: false,
    isAtMaxProcessing: false,
    push: jest.fn(),
    failedItems: [],
    clearFailedItems: jest.fn(),
    clear: jest.fn(),
  })),
  useResponsiveStyle: jest.fn(() => ({ responsive: jest.fn(() => null) })),
  useWindowDimensions: jest.fn(() => ({ width: 0, height: 0, isPortrait: false })),
  useObjectTranslation: jest.fn(() => ({ tObj: jest.fn(() => {}) })),
  useSightLabel: jest.fn(() => ({ label: jest.fn(() => {}) })),
};