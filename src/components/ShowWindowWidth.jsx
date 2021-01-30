import React from 'react'
import useWindowWidth from '../hooks/useWindowWidth'

const ShowWindowWidth = () => {
  const width = useWindowWidth()

  return <>
    <h3>- Detect window width and on-resizing using custom hook:</h3>
    <div style={{ maxWidth: '200px', padding: '10px', margin: '20px' }} title='Detect window width and on-resizing using custom hook'>
      <div style={{ margin: '5px', maxWidth: '200px' }}>
        Window width: {width}
      </div>
    </div>
  </>
}

export default ShowWindowWidth
