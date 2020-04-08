import React from 'react'

const KomponenAku = () => {
    const btnHandler = () => {
        alert('You click me!')
    }
    let hello = 'testing'
    return (
        <div>
            <input onClick={btnHandler} type="button" value="Click Me!"/>
        <p>{hello}</p>
        </div>
    )
}
const NewScreen = () => {
    return (
        <div>
            <h1>Halo! Aku screen baru!</h1>
            <KomponenAku />
        </div>
    )
}

export default NewScreen