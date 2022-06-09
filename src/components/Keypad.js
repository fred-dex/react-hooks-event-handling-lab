// Code Keypad Component Here
import React from 'react'

function Keypad() {

    function newKeypad() {
        console.log('Entering password...')
    }

    return (
        <input type='password' onChange={newKeypad}/>
    )
}

export default Keypad