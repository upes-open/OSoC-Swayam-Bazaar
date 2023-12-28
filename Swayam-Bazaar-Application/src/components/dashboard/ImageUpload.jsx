import React, { useState } from 'react';
import "./style/ImageUpload.css"

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedFile) {
      
      console.log("Selected file:", selectedFile);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'left' }}>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {selectedFile && (
        <div>
          <h3>Selected Image Preview</h3>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected Image"
            style={{ maxWidth: '100%' }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
