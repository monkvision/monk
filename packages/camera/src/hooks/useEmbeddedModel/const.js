const Models = {
  imageQualityCheck: {
    name: 'imageQualityCheck',
    uri: 'https://embedded-models.dev.monk.ai/IQA/Multitask/2022-04-12-mobilevit_xs/v0/checkpoints/epoch_7-val_loss%3D0.023.ckpt.onnx.savedmodel.tflite',
    minConfidence: {
      blurriness: 0.4,
      overexposure: 0.8,
      underexposure: 0.4,
    },
  },
  partDetectorModel: {
    name: 'partDetector',
    minConfidence: {
      partDetector: 0.4,
    },
  },
};

export default Models;
