const fr = {
  translation: {
    closeEarlyModal: {
      cancel: 'Annuler',
      confirm: 'Confirmer',
    },
    camera: {
      permissionDenied: 'Impossible d\'accéder à la caméra : permission refusée.',
    },
    controls: {
      takePicture: 'Prendre La Photo',
      fullScreen: 'Plein Écran',
      exitFullScreen: 'Quitter Plein Écran',
      settings: 'Paramètres',
      quit: 'Quitter',
      addDamage: 'Zoom Dégât',
    },
    layout: {
      rotateDevice: 'Veuillez tourner votre appareil ↪',
      unlockPortraitMode: 'Vous avez peut-être besoin de déverouiller le mode portrait depuis les paramètres de votre appareil',
    },
    uploadCenter: {
      view: {
        title: 'Vérification de la qualité des images',
        subtitle: 'Plus la qualité est élevée, plus les résultats de l\'inspection seront précis',
        verifying: 'Vérification en cours...',
        tooMuchTodo: 'Impossible de vérifier toutes les images, cela pourrait affecter la précision des résultats',
        allRejected: 'Impossible d\'upload les images, veuillez réessayer',
        loading: 'Chargement...',
        retakeAll: 'Reprendre ces photos',
        submit: 'Passer',
      },
      subtitle: {
        unknown: 'Impossible de vérifier la qualité de l\'image',
        pending: 'Chargement...',
        failed: 'Impossible d\'upload l\'image',
        idle: 'Dans la file d\'attente.',
        queueBlocked: 'Impossible de vérifier la qualité de l\'image (file d\'attente bloquée)',
        reasonsStart: 'Cette image',
        reasonsJoin: 'et',
        reasons: {
          blurriness: 'est floue',
          underexposure: 'est sous-exposée (trop sombre)',
          overexposure: 'est sur-exposée (trop lumineuse)',
          TOO_ZOOMED: 'est trop zoomée',
          NOT_ZOOMED_ENOUGH: 'est trop loin du véhicule',
          WRONG_ANGLE: 'est prise depuis un angle incorrect',
          UNKNOWN_VIEWPOINT: 'ne s\'aligne pas avec le guide photo',
          WRONG_CENTER_PART: 'n\'est pas centrée au bon endroit',
          MISSING_PARTS: 'ne contient pas les bonnes parties de la voiture',
          HIDDEN_PARTS: 'contient certaines parties de voiture qui ne sont pas assez visibles',
          NO_CAR_BODY: 'n\'a pas de véhicule clair',
          UNKNOWN_SIGHT: 'ne peut pas être analysée pour la couverture de voiture',
          INTERIOR_NOT_SUPPORTED: 'ne peut pas être analysée pour la couverture de voiture',
        },
      },
      variant: {
        reupload: {
          label: 'Réupload l\'image',
          sublabel: 'appuyez ici pour réupload...',
        },
        inQueue: {
          label: 'Dans la file d\'attente',
        },
        recheck: {
          label: 'Revérifier l\'image',
          sublabel: 'appuyez ici pour revérifier...',
        },
        retake: {
          label: 'reprendre la photo',
          sublabel: 'appuyez ici pour reprendre la photo...',
        },
      },
    },
    partSelector: {
      help: {
        title: 'Dégât Additionnel',
        content: 'Afin d\'ajouter un dégât additionnel à l\'inspection, veuillez sélectionner la partie de voiture où se trouve le dégât.',
        cancel: 'Annuler',
        okay: 'Ok !',
      },
      modal: {
        title: 'Sélectionnez des parties de véhicule',
        subtitle: 'Veuillez sélectionner des parties de véhicule en utilisant les flèches pour tourner.',
        cancel: 'Annuler',
        confirm: 'Confirmer',
      },
      overlay: {
        title: 'Photo additionelle',
        indication: 'Veuillez veiller à bien prendre le dégât en photo.',
      },
      parts: {
        bumper_back: 'Pare-chocs arrière',
        bumper_front: 'Pare-chocs avant',
        door_back_right: 'Portière arrière droite',
        door_back_left: 'Portière arrière gauche',
        door_front_left: 'Portière avant droite',
        door_front_right: 'Portière avant gauche',
        fender_back_left: 'Aile arrière gauche',
        fender_back_right: 'Aile arrière droite',
        fender_front_left: 'Aile avant gauche',
        fender_front_right: 'Aile avant droite',
        fog_light_back_left: 'Phare anti-brouillard arrière gauche',
        fog_light_back_right: 'Phare anti-brouillard arrière droit',
        fog_light_front_left: 'Phare anti-brouillard avant gauche',
        fog_light_front_right: 'Phare anti-brouillard avant droit',
        grill_low: 'Grille bas',
        grill_radiator: 'Grille radiateur',
        handle_back_left: 'Poignée arrière gauche',
        handle_back_right: 'Poignée arrière droite',
        handle_front_left: 'Poignée avant gauche',
        handle_front_right: 'Poignée avant droite',
        head_light_left: 'Phare gauche',
        head_light_right: 'Phare droit',
        mirror_left: 'Rétroviseur gauche',
        mirror_right: 'Rétroviseur droit',
        quarter_window_back_left: 'Vitres latérale arrière gauche',
        quarter_window_back_right: 'Vitres latérale arrière droite',
        quarter_window_front_left: 'Vitres latérale avant gauche',
        quarter_window_front_right: 'Vitres latérale avant droite',
        rocker_panel_left: 'Bas de caisse gauche',
        rocker_panel_right: 'Bas de caisse droit',
        tail_light_left: 'Feu arrière gauche',
        tail_light_right: 'Feu arrière droite',
        wheel_back_left: 'Roue arrière gauche',
        wheel_back_right: 'Roue arrière droite',
        wheel_front_left: 'Roue avant gauche',
        wheel_front_right: 'Roue avant droite',
        window_back_left: 'Vitre arrière gauche',
        window_back_right: 'Vitre arrière droite',
        window_corner_left: 'Vitre d\'angle gauche',
        window_corner_right: 'Vitre d\'angle droite',
        window_front_left: 'Vitre avant gauche',
        window_front_right: 'Vitre avant droite',
        windshield_back: 'Pare-brise arrière',
        windshield_front: 'Pare-brise avant',
        front_spoiler: 'Aileron avant',
        rear_spoiler: 'Aileron arrière',
        hood: 'Capot',
        petrol_door: 'Trappe à essence',
        pillar: 'Carrosserie',
        roof: 'Toit',
        trunk: 'Coffre',
      },
    },
  },
};

export default fr;
