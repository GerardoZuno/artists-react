import React from 'react'

function Song({letter}) {

    if(letter.length === 0) return null

    return (
        <>
         <h2>Letra Cancion</h2>   
         <p className="letra">{letter}</p>
        </>
    )
}

export default Song
