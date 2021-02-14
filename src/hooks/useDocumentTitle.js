import { useEffect, useState } from "react"

const useDocumentTitle = () => {
    const [title, setTitle] = useState()

    useEffect(() => {

        document.title = (title ? title + " - " : "") + "Jonatandb React Hooks Tests"

    }, [title])

    return setTitle
}

export default useDocumentTitle
