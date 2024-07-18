import { InteractiveStatus } from '@monkvision/types';

function createMockLoadingState() {
  return {
    isLoading: false,
    error: null,
    start: jest.fn(),
    onSuccess: jest.fn(),
    onError: jest.fn(),
  };
}

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
  MonkDefaultPalette,
  createTheme,
  createEmptyMonkState,
  MonkActionType,
  getFileExtensions,
  uniq,
  flatMap,
  STORAGE_KEY_AUTH_TOKEN,
  complianceIssueLabels,
  imageStatusLabels,
  getInspectionImages,
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
  MonkDefaultPalette,
  createTheme,
  MonkActionType,
  getFileExtensions,
  uniq,
  flatMap,
  STORAGE_KEY_AUTH_TOKEN,
  createEmptyMonkState,
  complianceIssueLabels,
  imageStatusLabels,
  getInspectionImages,

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
  useI18nSync: jest.fn(),
  i18nCreateSDKInstance: jest.fn(),
  i18nWrap: jest.fn((component) => component),
  useInteractiveStatus: jest.fn((props) => ({
    status: InteractiveStatus.DEFAULT,
    eventHandlers: props?.componentHandlers,
  })),
  changeAlpha: jest.fn((c) => c),
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
  useObjectTranslation: jest.fn(() => ({ tObj: jest.fn(() => '') })),
  useSightLabel: jest.fn(() => ({ label: jest.fn(() => '') })),
  useAsyncEffect: jest.fn(),
  useLoadingState: jest.fn(() => createMockLoadingState()),
  useLangProp: jest.fn(),
  isMobileDevice: jest.fn(() => false),
  zlibCompress: jest.fn(() => ''),
  zlibDecompress: jest.fn(() => ''),
  MonkAppStateProvider: jest.fn(() => <></>),
  useMonkAppState: jest.fn(() => ({
    loading: createMockLoadingState(),
    config: {},
    authToken: null,
    inspectionId: null,
    vehicleType: null,
    steeringWheel: null,
    setAuthToken: jest.fn(),
    setInspectionId: jest.fn(),
    setVehicleType: jest.fn(),
    setSteeringWheel: jest.fn(),
  })),
  getEnvOrThrow: jest.fn((name) => name),
  useInterval: jest.fn(),
  useAsyncInterval: jest.fn(),
  useSearchParams: jest.fn(() => ({ get: jest.fn(() => null) })),
  useObjectMemo: jest.fn((obj) => obj),
  getLanguage: jest.fn(),
  usePreventExit: jest.fn(() => ({ allowRedirect: jest.fn() })),
};
