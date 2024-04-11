---
sidebar_position: 2
---

# Getting Started
## PhotoCapture
If you plan on integrating the PhotoCapture workflow into your app, you can first start by installing the required
dependencies :

```shell
yarn add @monkvision/inspection-capture-web @monkvision/sights
```

You can then create a new page in your application that will implement the PhotoCapture component in the following way :

```tsx
import { sights } from '@monkvision/sights';
import { PhotoCapture } from '@monkvision/inspection-capture-web';

const apiConfig = {
  apiDomain: 'MONK_API_DOMAIN',
  authToken: 'YOUR_AUTH0_ACCESS_TOKEN',
};

const sights = [
  sights['fesc20-H1dfdfvH'],
  sights['fesc20-WMUaKDp1'],
  sights['fesc20-LTe3X2bg'],
  sights['fesc20-hp3Tk53x'],
];

export function MonkCapturePage() {
  const handleSuccess = () => {
    // Redirect to another page once the inspection is complete.
  };

  return (
    <PhotoCapture
      inspectionId={inspectionId}
      apiConfig={apiConfig}
      sights={sights}
      onComplete={handleSuccess}
    />
  );
}
```

In the code snippet above, you can replace :
- `MONK_API_DOMAIN` by the Monk APi Domain that you plan on using :
  - `api.monk.ai/v1` for production
  - `api.preview.monk.ai/v1` for preview
- `YOUR_AUTH0_ACCESS_TOKEN` by the Auth0 authentication token that you previously generated by logging in
- `sights` with an array of sights of your choice obtained from the `@monkvision/sights` package.

For additional configuration options for this component, please refer to the
[InspectionCaptureWeb documentation page](docs/packages/inspection-capture-web.md).