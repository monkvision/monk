import { useCallback, useState } from 'react';
import monk from '@monkvision/corejs';

import { Severity } from '../../../resources';

function getSeverity(severityNumber) {
  switch (severityNumber) {
    case 1:
      return Severity.LOW;
    case 2:
      return Severity.MEDIUM;
    case 3:
      return Severity.HIGH;
    default:
      return null;
  }
}

function getPictures(inspection) {
  return inspection.images.map((image) => ({
    id: image.id,
    width: image.width,
    height: image.height,
    mimetype: image.mimetype,
    url: image.path,
    label: image.additional_data?.label ?? undefined,
  }));
}

function getDamages(inspection) {
  return inspection.severity_results?.map((severityResult) => ({
    id: severityResult.id,
    part: severityResult.label,
    images: inspection.parts?.find(
      (inspectionPart) => (inspectionPart.id === severityResult.related_item_id),
    )?.related_images?.map((relatedImage) => ({ url: relatedImage.path })) ?? [],
    severity: getSeverity(severityResult.value.custom_severity.level),
    pricing: severityResult.value.custom_severity.pricing,
  })) ?? [];
}

export default function useProcessInspection() {
  const [isInspectionReady, setIsInspectionReady] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [damages, setDamages] = useState([]);

  const resetState = useCallback(() => {
    setIsInspectionReady(false);
    setPictures([]);
    setDamages([]);
  }, []);

  const processInspection = useCallback((axiosResponse) => {
    setIsInspectionReady(axiosResponse.data.tasks.every(
      (task) => (task.status === monk.types.InspectionStatus.DONE),
    ));
    setPictures(getPictures(axiosResponse.data));
    setDamages(getDamages(axiosResponse.data));
  }, []);

  return {
    processInspection,
    resetState,
    isInspectionReady,
    pictures,
    damages,
    setDamages,
  };
}
