import { useEffect, useState } from 'react'

const useKeyDown = (map, defaultValue) => {
    const [match, setMatch] = useState(defaultValue)

    useEffect(() => {

        const handleKeyDown = ({ key }) => {
            console.log('key detected:', key)
            console.log('map', map)
            setMatch(prevMatch => Object.keys(map).some(k => k === key)
                ? map[key]
                : prevMatch
            )
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [match, setMatch]
}

export default useKeyDown