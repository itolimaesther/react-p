import React, {useState} from 'react'

function Room() {
    const [light, setLight] = useState(true)

    const lightness = light ? 'lit' : 'dark'

    const toggleLight = () => {
        setLight(!light)
    }

    return (
        <div>
            The room is {lightness}
            <button onClick={toggleLight}>
                lightswitch
            </button>

            
        </div>
    )
}

export default Room
