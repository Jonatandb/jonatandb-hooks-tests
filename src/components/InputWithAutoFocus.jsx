import React, { useRef } from 'react'

const InputWithAutoFocus = () => {
  const inputEl = useRef(null)

  const onMouseOver = () => {
    inputEl.current.focus() // `current` apunta al input html
    inputEl.current.select()
    inputEl.current.placeholder = 'Don\'t leave me!'
  }

  const onMouseLeave = () => {
    inputEl.current.blur() // `current` apunta al input html
    inputEl.current.placeholder = 'Hover over me to see the magic...'
  }

  return <>
    <h3>- Input with autofocus on hover using useRef():</h3>
    <div style={{ maxWidth: '200px', padding: '10px', margin: '20px' }} title='Input with autofocus on hover using useRef()'>
      <input
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        placeholder="Hover over me to see the magic..."
        ref={inputEl}
        type='text'
        style={{ width: '200px' }}
      />
    </div>
  </>
}

export default InputWithAutoFocus