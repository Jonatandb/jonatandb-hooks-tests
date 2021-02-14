import { useEffect, useState } from "react"

const useLocalStorage = (key, defaultValue, callback) => {

    const initialState = () => {
        const valueFromStorage = JSON.parse(
            window.localStorage.getItem(key) || JSON.stringify(defaultValue)
        )
        if (callback) {
            callback(valueFromStorage)
        }
        return valueFromStorage
    }

    const [storage, setStorage] = useState(initialState)

    useEffect(() => {

        window.localStorage.setItem(key, JSON.stringify(storage))

    }, [storage, key])

    return [storage, setStorage]
}

export default useLocalStorage