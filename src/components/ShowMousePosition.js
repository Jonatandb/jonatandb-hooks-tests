import React from 'react'
import useMousePosition from '../hooks/useMousePosition'

const ShowMousePosition = () => {
    const position = useMousePosition()
    return (
        <div>
            <h3>- ShowMousePosition -> using useMousePosiiton custom hook:</h3>
            <pre>
                {JSON.stringify(position, null, 2)}
            </pre>
        </div>
    )
}

export default ShowMousePosition