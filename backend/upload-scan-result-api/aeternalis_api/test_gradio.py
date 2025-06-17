import gradio as gr
from PIL import Image
from deepfake_detector import classify_image_pil

iface = gr.Interface(
    fn=classify_image_pil,
    inputs=gr.Image(type="pil"),
    outputs=gr.Label(num_top_classes=2, label="Deepfake Classification"),
    title="deepfake-detector-model",
    description="Upload an image to classify whether it is real or fake using a deepfake detection model."
)

if __name__ == "__main__":
    iface.launch()
