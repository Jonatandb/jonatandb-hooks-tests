import React from 'react'
import Collapse from './components/Collapse'
import Counter from './components/Counter'
import FriendItem from './components/FriendItem'
import FriendStatus from './components/FriendStatus'
import InputWithAutoFocus from './components/InputWithAutoFocus'
import KeyDownRevealer from './components/KeyDownRevealer'
import ShowMousePosition from './components/ShowMousePosition'
import ShowWindowWidth from './components/ShowWindowWidth'
import TodoList from './components/TodoList'
import UpdatePageTitle from './components/UpdatePageTitle'

const friends = [
  { id: 1, name: 'Jonatandb' },
  { id: 2, name: 'Sponwate' },
]

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px auto', maxWidth: '70%' }}>

      <Collapse collapse collapsedTitle={`Counter -> using useReducer().`}>
        <Counter initialCount={100} />
      </Collapse>

      <Collapse collapse collapsedTitle={`InputWithAutoFocus -> using useRef().`}>
        <InputWithAutoFocus />
      </Collapse>

      <Collapse collapse collapsedTitle={`ShowWindowWith -> using useWindowWidth() custom hook.`}>
        <ShowWindowWidth />
      </Collapse>

      <Collapse collapse collapsedTitle="Connection status detection - Simulation using useFriendStatus() custom hook.">
        <h3>- {friends[0].name} conection status:</h3>
        <div style={{ padding: '10px', margin: '20px', padingLeft: '20px', display: 'flex', flexDirection: 'row' }}>
          <FriendItem friend={friends[0]} />
          <FriendStatus friend={friends[0]} style={{ marginLeft: '10px' }} />
        </div>
        <Collapse collapse collapse collapsedTitle={`Click to show ${friends[1].name} conection status`}>
          <div style={{ padding: '10px', margin: '10px 0', display: 'flex', flexDirection: 'row' }}>
            <FriendItem friend={friends[1]} />
            <FriendStatus friend={friends[1]} style={{ marginLeft: '10px' }} />
          </div>
        </Collapse>
      </Collapse>

      <Collapse collapse collapsedTitle={`TodoList using useLocalStorage() custom hook.`}>
        <TodoList />
      </Collapse>

      <Collapse collapse collapsedTitle={`Set page title using useDocumentTitle() custom hook.`}>
        <UpdatePageTitle />
      </Collapse>

      <Collapse collapse collapsedTitle={`Detect keydown using useKeyDown() custom hook.`}>
        <KeyDownRevealer />
      </Collapse>

      <Collapse collapse collapsedTitle={`Detect mouse position using useMousePosition() custom hook.`}>
        <ShowMousePosition />
      </Collapse>
    </div>
  )
}