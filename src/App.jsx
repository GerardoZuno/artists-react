import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Song from "./components/Song";

function App() {
  const [letterSearch, setLetterSearch] = useState({});
  const [letter, setLetter] = useState('');


  useEffect(() => {
    if (Object.keys(letterSearch).length === 0) return;

    const consultarApi = async () => {
      const { artista, cancion } = letterSearch;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

        const response = await fetch(url);
        const result = await response.json();
        console.log(result.data.lyrics);
      
    };
    consultarApi();
  }, [letterSearch]);

  return (
    <> 
      <Form setLetterSearch={setLetterSearch} />

    <div className="container">
        <div className="row">
           <div className="col-md-6">
             1
           </div>
           <div className="col-md-6">
             <Song letter={letter}/>
           </div>
        </div>
    </div>
    </>

  );
}

export default App;
