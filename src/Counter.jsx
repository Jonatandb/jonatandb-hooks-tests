import React, { useReducer } from 'react'

const init = initialState => {
  return { count: initialState }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    case 'same':
      return state
    default:
      throw Error()
  }
}

export default function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init)
  console.log('Counter render()')
  return (
    <div style={{ border: '1px solid green', maxWidth: '200px', padding: '10px' }}>
      {state.count}
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'same' })}>=</button>
    </div>
  )
}

// Sin useReducer():
// export default function Counter({ initialCount }) {
//   const [count, setCount] = useState(initialCount)
//   return (
//     <div style={{ border: '1px solid green', maxWidth: '200px', padding: '10px' }}>
//       {count}
//       <button onClick={() => setCount(initialCount)}>Reset</button>
//       <button onClick={() => setCount(prev => prev + 1)}>+</button>
//       <button onClick={() => setCount(prev => prev - 1)}>-</button>
//     </div>
//   )
// }
