import React, { useState, useEffect } from 'react'

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width
}

export default function ShowWindowWidth() {
  const width = useWindowWidth()
  return (
    <div style={{ border: '1px solid green', margin: '5px', maxWidth: '200px' }}>
      Window width: {width}
    </div>
  )
}
