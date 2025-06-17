# Use a pipeline as a high-level helper
from transformers import pipeline

pipe = pipeline("image-classification", model="prithivMLmods/deepfake-detector-model-v1")

# Load model directly
from transformers import AutoProcessor, AutoModelForImageClassification

processor = AutoProcessor.from_pretrained("prithivMLmods/deepfake-detector-model-v1")
model = AutoModelForImageClassification.from_pretrained("prithivMLmods/deepfake-detector-model-v1")