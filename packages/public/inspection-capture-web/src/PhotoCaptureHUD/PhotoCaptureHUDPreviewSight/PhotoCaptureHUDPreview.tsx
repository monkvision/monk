import { Sight } from '@monkvision/types';
import { Button } from '@monkvision/common-ui-web';
import { forwardRef } from 'react';
import { usePhotoCaptureHUDPreview } from './hook';
import { PhotoCaptureHUDSightsSlider } from './components/PhotoCaptureHUDSightsSlider';
import { PhotoCaptureHUDCounter } from './components/PhotoCaptureHUDSightsCounter';
import { PhotoCaptureHUDSightsOverlay } from './components/PhotoCaptureHUDSightsOverlay';

export interface PhotoCaptureHUDPreviewProps {
  sights?: Sight[];
  currentSight?: Sight;
  onSightSelected?: (sight: Sight) => void;
  onAddDamage?: (state: boolean) => void;
  sightsTaken?: Sight[];
  onScrollToSelected?: (index: number, smooth: boolean) => void;
}

export const PhotoCaptureHUDPreview = forwardRef<HTMLDivElement, PhotoCaptureHUDPreviewProps>(
  (
    {
      sights,
      currentSight,
      onSightSelected,
      onAddDamage,
      sightsTaken,
      onScrollToSelected = () => {},
    },
    ref,
  ) => {
    const style = usePhotoCaptureHUDPreview();

    return (
      <div style={style.containerStyle}>
        <PhotoCaptureHUDSightsOverlay sight={currentSight} />
        <div style={style.top}>
          <PhotoCaptureHUDCounter totalSights={sights?.length} sightsTaken={sightsTaken?.length} />
          <Button
            icon='add'
            onClick={() => onAddDamage?.(true)}
            primaryColor='secondary-xdark'
            data-testid='monk-test-btn'
            style={style.addDamageButton}
          >
            Damage
          </Button>
        </div>
        <PhotoCaptureHUDSightsSlider
          sights={sights}
          currentSight={currentSight?.id}
          sightsTaken={sightsTaken}
          onSightSelected={onSightSelected}
          onScrollToSelected={onScrollToSelected}
          ref={ref}
        />
      </div>
    );
  },
);