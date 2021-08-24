import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Song from "./components/Song";
import axios from 'axios';
import Info from "./components/Info";


function App() {
  const [letterSearch, setLetterSearch] = useState({});
  const [letter, setLetter] = useState('');
  const [info, setInfo] = useState({})


  useEffect(() => {
    if (Object.keys(letterSearch).length === 0) return;

    const consultarApi = async () => {
      const { artista, cancion } = letterSearch;

      /*const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;*/
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      
      
      const [letra, informacion] = await Promise.all([
       /* axios(url),*/
        axios(url2)
      ]);

      /*setLetter(letra.data.lyrics);*/
      setInfo(informacion.data.artists[0]);

      
    };
    consultarApi();
  }, [letterSearch, info]);

  return (
    <> 
      <Form setLetterSearch={setLetterSearch} />

    <div className="container">
        <div className="row">
           <div className="col-md-6">
             <Info info={info}/>
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
