import React, { useState } from 'react';

const UploadScan = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:3000/api/scan', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error('Upload failed:', err);
      setResult({ success: false, message: 'Error during upload' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
      <h2>Deepfake Scan</h2>
      <input type="file" onChange={handleFileChange} accept="image/*,video/*" />
      <button onClick={handleUpload} disabled={loading || !file} style={{ marginTop: '1rem' }}>
        {loading ? 'Scanning...' : 'Upload & Scan'}
      </button>

      {result && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Scan Result:</strong>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UploadScan;
