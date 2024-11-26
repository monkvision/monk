import {
  DamageType,
  ImageType,
  MonkEntityType,
  RepairOperationType,
  VehiclePart,
} from '@monkvision/types';

export default {
  damages: [
    {
      id: 'damage-id-1',
      entityType: MonkEntityType.DAMAGE,
      inspectionId: 'id-1',
      type: DamageType.SCRATCH,
      size: 65,
      parts: ['part-id-1', 'part-id-2'],
      relatedImages: [],
    },
    {
      id: 'damage-id-2',
      entityType: MonkEntityType.DAMAGE,
      inspectionId: 'id-1',
      type: DamageType.DENT,
      size: 12,
      parts: ['part-id-2', 'part-id-3'],
      relatedImages: [],
    },
  ],
  images: [
    {
      id: '6a5e9a4c-8752-c1e6-6a34-38338074eda1',
      entityType: MonkEntityType.IMAGE,
      inspectionId: 'id-1',
      label: {
        de: 'Hinten Seitlich Niedrig Links',
        en: 'Rear Lateral Low Left',
        fr: 'Arrière Gauche Latéral - vue basse',
      },
      sightId: 'ffocus18-S3kgFOBb',
      createdAt: 1715092125965,
      path: 'https://www.googleapis.com/download/storage/v1/b/core-preview-images/o/rear_lateral_low_left.jpeg-eefefe38-b25b-471f-89ad-8adb2cbcca1f.jpeg?generation=1702474029543236&alt=media',
      thumbnailPath:
        'https:///?image_url=https%3A%2F%2Fwww.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Fcore-preview-images%2Fo%2Frear_lateral_low_left.jpeg-eefefe38-b25b-471f-89ad-8adb2cbcca1f.jpeg%3Fgeneration%3D1702474029543236%26alt%3Dmedia&width=192&height=108',
      width: 1920,
      height: 1080,
      size: 141539,
      mimetype: 'image/jpeg',
      type: ImageType.BEAUTY_SHOT,
      status: 'compliance_running',
      viewpoint: {
        confidence: 0.9847987294197083,
        prediction: 'left',
      },
      additionalData: {
        category: 'exterior',
        sight_id: 'ffocus18-S3kgFOBb',
        created_at: '2024-05-07T14:28:45.965Z',
        label: {
          de: 'Hinten Seitlich Niedrig Links',
          en: 'Rear Lateral Low Left',
          fr: 'Arrière Gauche Latéral - vue basse',
        },
      },
      renderedOutputs: [],
      views: [],
    },
    {
      id: 'a842f4bf-5404-215b-a828-56c053220d1c',
      entityType: MonkEntityType.IMAGE,
      inspectionId: 'id-1',
      label: {
        de: 'Motorhaube',
        en: 'Hood',
        fr: 'Capot',
      },
      sightId: 'ffocus18-3TiCVAaN',
      createdAt: 1715092125965,
      path: 'https://www.googleapis.com/download/storage/v1/b/core-preview-images/o/hood.jpeg-8d7dadf7-414d-4771-9d0e-127312706291.jpeg?generation=1702474029549060&alt=media',
      thumbnailPath:
        'https:///?image_url=https%3A%2F%2Fwww.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Fcore-preview-images%2Fo%2Fhood.jpeg-8d7dadf7-414d-4771-9d0e-127312706291.jpeg%3Fgeneration%3D1702474029549060%26alt%3Dmedia&width=192&height=108',
      width: 1920,
      height: 1080,
      size: 160207,
      mimetype: 'image/jpeg',
      type: ImageType.BEAUTY_SHOT,
      status: 'success',
      viewpoint: {
        confidence: 0.4582550525665283,
        prediction: 'front_left',
      },
      additionalData: {
        category: 'exterior',
        sight_id: 'ffocus18-3TiCVAaN',
        created_at: '2024-05-07T14:28:45.965Z',
        label: {
          de: 'Motorhaube',
          en: 'Hood',
          fr: 'Capot',
        },
      },
      renderedOutputs: [],
      views: [],
    },
  ],
  inspections: [
    {
      id: 'id-1',
      entityType: MonkEntityType.INSPECTION,
      tasks: [],
      images: ['6a5e9a4c-8752-c1e6-6a34-38338074eda1', 'a842f4bf-5404-215b-a828-56c053220d1c'],
      damages: ['damage-id-1', 'damage-id-2'],
      parts: ['part-id-1', 'part-id-1'],
      vehicle: '051b7118-915f-4bec-0571-d367967967ab',
      wheelAnalysis: [],
      severityResults: [],
      pricings: ['id-1'],
      pdfUrl: 'pdf_url-1',
      additionalData: {
        'additional_data-1': 'additional_data-1',
      },
    },
  ],
  parts: [
    {
      id: 'part-id-1',
      entityType: MonkEntityType.PART,
      inspectionId: 'id-1',
      type: VehiclePart.HOOD,
      damages: [],
      relatedImages: [],
    },
    {
      id: 'part-id-1',
      entityType: MonkEntityType.PART,
      inspectionId: 'id-1',
      type: VehiclePart.FENDER_FRONT_LEFT,
      damages: [],
      relatedImages: [],
    },
  ],
  renderedOutputs: [],
  severityResults: [],
  tasks: [],
  vehicles: [
    {
      id: '051b7118-915f-4bec-0571-d367967967ab',
      inspectionId: 'id-1',
      entityType: MonkEntityType.VEHICLE,
      brand: 'Toyota',
      model: 'Aygo',
      plate: '',
      type: 'car',
      vin: '1HGEJ8244YL06777',
      color: null,
      exteriorCleanliness: null,
      interiorCleanliness: null,
      dateOfCirculation: null,
      duplicateKeys: null,
      expertiseRequested: null,
      carRegistration: null,
      vehicleQuotation: null,
      tradeInOffer: null,
      ownerInfo: null,
      additionalData: {
        brand: {
          confidence: 0.8455246090888977,
          prediction: 'Toyota',
        },
        model: {
          confidence: 0.8455246090888977,
          prediction: 'Aygo',
        },
        plate: {
          confidence: -1,
          prediction: '',
        },
        vehicle_type: 'car',
      },
    },
  ],
  views: [],
  pricings: [
    {
      inspectionId: 'id-1',
      id: 'id-1',
      entityType: MonkEntityType.PRICING,
      relatedItemType: 'part',
      relatedItemId: 'related_item_id-1',
      pricing: 3,
      operations: [RepairOperationType.POLISHING, RepairOperationType.SANDING],
      hours: {
        'test-3': 4,
      },
    },
  ],
  partOperations: [],
};