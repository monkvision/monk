---
sidebar_position: 3
---

# Configuration
Most of the web applications integrating the MonkJs SDK will need the same configuration properties. To simplify the
syntax when configuring your app, we provide a TypeScript interface called `CaptureAppConfig` that contains the usual
configuration properties needed. You can create a file in your app that will contain the MonkJs configuration, so that
it will be easy to modify the config properties if needed:

```typescript
import { CaptureAppConfig } from '@monkvision/types';

export const MonkJsConfig: CaptureAppConfig = {
  ...
};
```

This configuration object can then be passed to components like `<MonkAppStateProvider>` or `<PhotoCapture>`.

## Available Configuration Options
The following table lists the available configuration options in the `CaptureAppConfig` interface :

| Name                               | Type                                         | Description                                                                                                                                                                                          | Required                                          | Default Value               |
|------------------------------------|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|-----------------------------|
| allowManualLogin                   | `boolean`                                    | Indicates if manual login and logout should be enabled or not.                                                                                                                                       | ✔️                                                |                             |
| fetchFromSearchParams              | `boolean`                                    | Indicates if the app state (auth token, inspection ID etc.) should be fetched from the URL search params.                                                                                            | ✔️                                                |                             |
| allowVehicleTypeSelection          | `boolean`                                    | Indicates if manual vehicle type selection should be enabled if the vehicle type is not defined.                                                                                                     | ✔️                                                |                             |
| enableSteeringWheelPosition        | `boolean`                                    | Indicates if the capture Sights should vary based on the steering wheel position (right or left).                                                                                                    | ✔️                                                |                             |
| defaultVehicleType                 | `VehicleType`                                | Default vehicle type to use if no vehicle type has been specified.                                                                                                                                   | ✔️                                                |                             |
| defaultSteeringWheelPosition       | `SteeringWheelPosition`                      | Default steering wheel position to use if no steering wheel position has been specified.                                                                                                             | if `enableSteeringWheelPosition` is set to `true` |                             |
| sights                             | `Record<..., string[]>`                      | A map associating each vehicle type supported by the app to a list of sight IDs. If `enableSteeringWheelPosition` is set to `true`, it's a map associating each steering wheel position to this map. | ✔️                                                |                             |
| allowCreateInspection              | `boolean`                                    | Indicates if automatic inspection creation should be enabled in the app.                                                                                                                             | ✔️                                                |                             |
| createInspectionOptions            | `CreateInspectionOptions`                    | Options used when automatically creating an inspection.                                                                                                                                              | if `allowCreateInspection` is set to `true`       |                             |
| apiDomain                          | `string`                                     | The API domain used to communicate with the API.                                                                                                                                                     | ✔️                                                |                             |
| requiredApiPermissions             | `MonkApiPermission[]`                        | Required API permission that the user must have to use the current app.                                                                                                                              |                                                   |                             |
| palette                            | `Partial<MonkPalette>`                       | Custom color palette to use in the app.                                                                                                                                                              |                                                   |                             |
| enforceOrientation                 | `DeviceOrientation`                          | Use this prop to enforce a specific device orientation for the Camera screen.                                                                                                                        |                                                   |                             |
| showCloseButton                    | `boolean`                                    | Indicates if the close button should be displayed in the HUD on top of the Camera preview.                                                                                                           |                                                   | `false`                     |
| startTasksOnComplete               | `<code>boolean &#124; TaskName[]</code>`     | Value indicating if tasks should be started at the end of the inspection. See the `inspection-capture-web` package doc for more info.                                                                |                                                   | `true`                      |
| tasksBySight                       | `Record<string, TaskName[]>`                 | Record associating each sight with a list of tasks to execute for it. If not provided, the default tasks of the sight will be used.                                                                  |                                                   |                             |
| format                             | `CompressionFormat`                          | The output format of the compression.                                                                                                                                                                |                                                   | `CompressionFormat.JPEG`    |
| quality                            | `number`                                     | Value indicating image quality for the compression output.                                                                                                                                           |                                                   | `0.8`                       |
| allowSkipRetake                    | `boolean`                                    | If compliance is enabled, this prop indicate if the user is allowed to skip the retaking process if some pictures are not compliant.                                                                 |                                                   | `false`                     |
| enableCompliance                   | `boolean`                                    | Indicates if compliance checks should be enabled or not.                                                                                                                                             |                                                   | `true`                      |
| enableCompliancePerSight           | `string[]`                                   | Array of Sight IDs that indicates for which sight IDs the compliance should be enabled.                                                                                                              |                                                   |                             |
| complianceIssues                   | `ComplianceIssue[]`                          | If compliance checks are enabled, this property can be used to select a list of compliance issues to check.                                                                                          |                                                   | `DEFAULT_COMPLIANCE_ISSUES` |
| complianceIssuesPerSight           | `Record<string, ComplianceIssue[]>`          | A map associating Sight IDs to a list of compliance issues to check.                                                                                                                                 |                                                   |                             |
| useLiveCompliance                  | `boolean`                                    | Indicates if live compliance should be enabled or not.                                                                                                                                               |                                                   | `false`                     |
| customComplianceThresholds         | `CustomComplianceThresholds`                 | Custom thresholds that can be used to modify the strictness of the compliance for certain compliance issues.                                                                                         |                                                   | XXXXXXXXXXXX                |
| customComplianceThresholdsPerSight | `Record<string, CustomComplianceThresholds>` | A map associating Sight IDs to custom compliance thresholds.                                                                                                                                         |                                                   | XXXXXXXXXXXX                |

## Live Configs
MonkJs will soon offer a way to set up live configurations in your web applications that will allow you to configure the
SDK on the go without having to re-deploy your app. This feature is still in development.