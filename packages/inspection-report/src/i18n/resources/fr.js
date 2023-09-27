import { carPartLabels } from '../../resources';

const fr = {
  translation: {
    damageReport: {
      title: 'Rapport de Dégâts',
      tabs: {
        overviewTab: {
          label: 'Apperçu',
        },
        photosTab: {
          label: 'Photos',
        },
      },
      buttons: {
        done: 'Done',
      },
      parts: {
        ...carPartLabels.fr,
      },
      error: {
        message: 'Une erreur inattendue est survenue lors de la récupération des résultats de l\'inspection.',
        retry: 'Réessayer',
      },
      loading: 'Récupération des résultats...',
      notReady: 'Inspection en cours...',
      validate: 'Valider',
      newInspection: 'Nouvelle inspection',
      download: 'Télécharger le rapport',
      pdfStatus: {
        generating: 'Génération du rapport PDF en cours...',
        ready: 'Le rapport PDF est prêt',
        error: 'Une erreur s\'est produite lors de la génération de votre rapport PDF. Veuillez réessayer.',
      },
      modals: {
        validate: {
          message: 'Êtes-vous sûr(e) de vouloir valider ce rapport ? Vous ne pourrez plus le modifier après cela.',
          yes: 'Oui',
          cancel: 'Annuler',
        },
        validateWithPDF: {
          message: '\'Êtes-vous sûr(e) de vouloir valider ce rapport et générer le PDF ? Vous ne pourrez plus le modifier après cela.',
          yes: 'Oui',
          cancel: 'Annuler',
        },
        newInspection: {
          message: 'Si vous commencer une nouvelle inspection vous perdrez ce rapport. Êtes-vous sûr(e) de vouloir continuer ?',
          yes: 'Oui',
          cancel: 'Annuler',
        },
      },
    },
    gallery: {
      empty: 'Cette inspection n\'a pas encore de photo.',
      renderedOutput: '(rendu d\'image)'
    },
    damageManipulator: {
      damages: 'Dégâts',
      damaged: 'Cette partie est endommagée',
      notDamaged: 'Cette partie n\'est pas endommagée',
      replaced: 'Cette pièce doit être remplacé',
      notReplaced: 'Cette pièce ne doit pas être remplacé',
      severity: 'Sévérité',
      minor: 'Mineure',
      moderate: 'Modéré',
      major: 'Majeur',
      repairCost: 'Coût de réparation',
      done: 'Terminé',
    },
    severityLabels: {
      pricingOnly: 'Dégâts',
      low: 'Mineur',
      medium: 'Modéré',
      high: 'Majeur',
      none: 'Inconnu',
    },
  },
};

export default fr;
