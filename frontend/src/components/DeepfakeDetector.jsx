import React, { useState } from "react";

const DeepfakeDetector = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    // later: call inference backend here
  };

  const clearImage = () => {
    setImage(null);
    setResult("");
  };

  const analyzeImage = () => {
    // Call API here and setResult()
    setResult("Real (92.3%)"); // Placeholder
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 p-4 text-center font-serif flex justify-center">
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-2xl text-purple-900 font-bold mb-1">Deepfake Detector</h2>
        <p className="text-sm text-gray-700 mb-4">
          Upload an image to classify whether it's real or fake using a deepfake detection model
        </p>

        <div className="bg-purple-100 rounded-xl shadow-md p-6 mb-4 mx-auto">
          <label className="cursor-pointer block border-dashed border-2 border-purple-300 rounded-lg p-6 hover:bg-purple-50">
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            <div className="text-purple-700">
              <p>Drop Image Here</p>
              <p>—or—</p>
              <p>Click to Browse</p>
            </div>
          </label>

          {image && (
            <img
              src={image}
              alt="Uploaded"
              className="mt-4 mx-auto rounded-lg max-h-64 object-contain"
            />
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={clearImage}
            className="bg-pink-200 hover:bg-pink-300 px-6 py-2 rounded-md shadow-md"
          >
            Clear
          </button>
          <button
            onClick={analyzeImage}
            className="bg-blue-300 hover:bg-blue-400 px-6 py-2 rounded-md shadow-md"
          >
            Analyze Image
          </button>
        </div>

        <h3 className="text-purple-900 font-semibold mb-2">Deepfake Classification</h3>
        <div className="bg-purple-100 rounded-xl p-4 mb-4 mx-auto min-h-[100px]">
          {result ? (
            <p className="text-purple-800">{result}</p>
          ) : (
            <p className="text-gray-400">Awaiting analysis...</p>
          )}
        </div>

        <button className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-xl shadow-md flex items-center mx-auto">
          <span className="mr-2">🚩</span>
          <span className="text-purple-900 font-medium">Flag for Review</span>
        </button>
      </div>
    </div>
  );
};

export default DeepfakeDetector;
