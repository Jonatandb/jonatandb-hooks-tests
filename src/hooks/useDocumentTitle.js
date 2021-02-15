import { useEffect } from "react"

const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = (title ? title + " - " : "") + "Jonatandb React Hooks Tests"
    }, [title])
}

export default useDocumentTitle
