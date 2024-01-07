import React, { useState } from 'react';
import "./style/ImageUpload.css"

function ImageUpload({onImageSelect}) {
  const [selectedFile, setSelectedFile] = useState(null);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      onImageSelect(file);
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
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
      </form>
      {selectedFile && (
        <div>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
