import { carPartLabels } from '../../resources';

const en = {
  translation: {
    damageReport: {
      title: 'Damage Report',
      tabs: {
        overviewTab: {
          label: 'Overview',
        },
        photosTab: {
          label: 'Photos',
        },
      },
      buttons: {
        done: 'Done',
      },
      parts: {
        ...carPartLabels.en,
      },
      error: {
        message: 'An unexpected error occurred while fetching the inspection results.',
        retry: 'Retry',
      },
      inspectionInError: {
        message: 'Sorry, an unexpected error occurred during the inspection. Please contact the support with the following information :',
        id: 'Inspection ID',
        tasks: 'Failed tasks',
        startNewInspection: 'New Inspection',
      },
      loading: 'Fetching inspection results...',
      notReady: 'Inspection still in progress...',
      validate: 'Validate',
      newInspection: 'New Inspection',
      inspection: 'Inspection ID',
      vinNumber: 'VIN',
      download: 'Download Report',
      pdfStatus: {
        generating: 'Your PDF report is being generated...',
        ready: 'Your PDF report is ready',
        error: 'An error occurred during the generation of your PDF report. Please try again.',
      },
      modals: {
        validate: {
          message: 'Are you sure you want to validate this report? You won\'t be able to edit the report after this.',
          yes: 'Yes',
          cancel: 'Cancel',
        },
        validateWithPDF: {
          message: 'Are you sure you want to validate this report and generate the PDF? You won\'t be able to edit the report any more.',
          yes: 'Yes',
          cancel: 'Cancel',
        },
        newInspection: {
          message: 'If you start a new inspection, you will loose this report. Are you sure you want to continue?',
          yes: 'Yes',
          cancel: 'Cancel',
        },
      },
      pictures: 'Pictures',
      partsPictures: 'Parts Pictures',
      zoomedPicturesOfThePart: 'Zoomed pictures of the part',
      showDamages: 'See damages',
      hideDamages: 'Hide damages',
    },
    gallery: {
      empty: 'This inspection does not have any photo yet.',
      withDamages: '(with damages)'
    },
    damageManipulator: {
      damages: 'Damages',
      damaged: 'This part is damaged',
      notDamaged: 'This part isn\'t damaged',
      replaced: 'This part needs to be replaced',
      notReplaced: 'This part doesn\'t need to be replaced',
      severity: 'Severity',
      minor: 'Minor',
      moderate: 'Moderate',
      major: 'Major',
      repairCost: 'Repair Cost',
      done: 'Done',
    },
    severityLabels: {
      pricingOnly: 'Damages',
      low: 'Minor',
      medium: 'Moderate',
      high: 'Major',
      none: 'Unknown',
    },
  },
};

export default en;
