import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [file, setFile] = useState();

function handleChange(event) {
  setFile(event.target.files[0]);
}

function handleSubmit() {
  const url = "http://localhost:4000/uploads";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", file.name);
  const config = {
    header: {
      "content-type": 'multipart/form-data',
    }
  };
  axios.post(url, formData, config).then((response) => {
    console.log(response.data);
  });
  
}

  return (
    <div className="container">
        <h1>File Upload Stefan Dascalescu</h1>
        <div className="input-group">
                <label for='name'>Your name</label>
                <input name='name' id='name' placeholder="Enter your name" />
            </div>
            <div className="input-group">
                <label for='files'>Select files</label>
                <input id='files' type="file" onChange={handleChange} />
            </div>
            <button class="submit-btn" onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default App;
