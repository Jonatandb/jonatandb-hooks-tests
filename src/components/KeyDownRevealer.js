import React from 'react'
import useKeyDown from '../hooks/useKeyDown'

const KeyDownRevealer = () => {
    const [showMessage, setShowMessage] = useKeyDown({
        "j": true,
        Escape: false
    }, false)

    return (
        <div>
            <h3>- KeyDownRevealer -> using useKeyDown() custom hook:</h3>
            {
                showMessage ? (
                    <p>
                        Great! Now press Escape to go back.
                    </p>
                ) : (
                        <p>
                            Just press "j" key and you will see...
                        </p>
                    )
            }
            <button onClick={() => setShowMessage(prevState => !prevState)}><small>(Toggle manually)</small></button>
        </div>
    )
}

export default KeyDownRevealer
