// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {

    function photoFocus() {
        console.log('Good!')             
    }

    function photoBlur() {
        console.log('Hey! Eyes on me!')        
    }

    return (
        <button 
            onFocus={photoFocus} onBlur={photoBlur}>Eyes on me</button> 
    )
} 

export default EyesOnMe 




