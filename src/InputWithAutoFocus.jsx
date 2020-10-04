import React, { useRef } from 'react'

export default function InputWithAutoFocus() {
  const inputEl = useRef(null)
  const onMouseOver = () => {
    // `current` apunta al elemento de entrada de texto montado
    inputEl.current.focus()
  }
  return (
    <>
      <input ref={inputEl} type='text' onMouseOver={onMouseOver} />
    </>
  )
}
