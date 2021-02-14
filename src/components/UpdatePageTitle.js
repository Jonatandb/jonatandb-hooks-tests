import React from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

const UpdatePageTitle = () => {
    const setPageTitle = useDocumentTitle('')
    return (
        <>
            <h3>- UpdatePageTitle -> using useDocumentTitle() custom hook:</h3>
            <div style={{ maxWidth: '200px', padding: '10px', margin: '20px' }}>            <button onClick={() => setPageTitle('Test 1')}>Update title with: <code>Test 1</code></button>
                <button onClick={() => setPageTitle('Test 2')}>Update title with: <code>Test 2</code></button>
                <button onClick={() => setPageTitle('Test 3')}>Update title with: <code>Test 3</code></button>
            </div>
        </>
    )
}

export default UpdatePageTitle
