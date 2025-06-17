import torch
from transformers import AutoImageProcessor, SiglipForImageClassification
from PIL import Image

# Load model and processor
model_name = "prithivMLmods/deepfake-detector-model-v1"
model = SiglipForImageClassification.from_pretrained(model_name)
processor = AutoImageProcessor.from_pretrained(model_name)

id2label = {
    "0": "fake",
    "1": "real"
}

def classify_image_pil(image: Image.Image) -> dict:
    image = image.convert("RGB")
    inputs = processor(images=image, return_tensors="pt")
    with torch.no_grad():
        outputs = model(**inputs)
        logits = outputs.logits
        probs = torch.nn.functional.softmax(logits, dim=1).squeeze().tolist()
    return {id2label[str(i)]: round(probs[i], 3) for i in range(len(probs))}
