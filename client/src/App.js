import React from 'react';
import Axios from 'axios';
import Application from './Pages/Application';

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });


  return (
    <Application />
  );
}

export default App;
