import { useEffect, useState } from 'react'

const initialPosition = { x: null, y: null }

const useMousePosition = () => {
    const [position, setPosition] = useState(initialPosition)

    useEffect(() => {
        const handleMouseMove = e => {
            const { clientX: x, clientY: y } = e
            setPosition({
                x,
                y
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return position
}

export default useMousePosition
