import { Outlet, useNavigate } from 'react-router-dom';
import { MonkAppParamsProvider, MonkProvider, useMonkTheme } from '@monkvision/common';
import { useTranslation } from 'react-i18next';
import { Page } from '../pages';

export function App() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { rootStyles } = useMonkTheme();

  return (
    <MonkAppParamsProvider
      onFetchAuthToken={() => navigate(Page.CREATE_INSPECTION)}
      onUpdateLanguage={(lang) => i18n.changeLanguage(lang)}
    >
      <MonkProvider>
        <div className='app-container' style={rootStyles}>
          <Outlet />
        </div>
      </MonkProvider>
    </MonkAppParamsProvider>
  );
}