import React, { useState, useEffect } from 'react'
// import { Route, Link } from 'wouter'
import './App.css'
import Counter from './Counter'

// import Home from './pages/Home'
// import SearchResults from './pages/SearchResults'

const ChatAPI = {
  friends: [],

  subscribeToFriendStatus(friendId, handleStatusChange) {
    let friend = this.friends.filter(f => f.friendId === friendId)[0]

    if (friend !== undefined) {
      // console.log('ChatAPI ->', friendId, 'Estaba suscripto, se omite suscripción!')
      return
    }

    console.log('ChatAPI -> Suscribiendo a :', friendId)

    let isOnline = null

    const timerId = setInterval(() => {
      isOnline = Math.floor(Math.random() * 10) + 1 > 5 ? true : false
      console.log('ChatAPI -> Tick de:', friendId)
      // console.log('isOnline ahora es ->', isOnline)

      const currentFriend = this.friends.filter(f => f.friendId === friendId)[0]

      if (currentFriend.isOnline !== isOnline) {
        // console.log(friendId, 'isOnline estaba en:', currentFriend.isOnline, 'y pasa a:', isOnline)
        currentFriend.isOnline = isOnline
        currentFriend.handleStatusChange({ isOnline })
      }
    }, 5000)

    friend = {
      friendId,
      handleStatusChange,
      isOnline,
      timerId,
    }

    this.friends.push(friend)

    console.log('ChatAPI -> friendId:', friendId, 'Suscripto! ->', JSON.stringify(this.friends))
  },

  unsubscribeFromFriendStatus(friendId, handleStatusChange) {
    console.log('ChatAPI -> Desuscribiendo a :', friendId)

    let currentFriend = this.friends.filter(f => f.friendId === friendId)[0]

    if (currentFriend !== undefined) {
      clearInterval(currentFriend.timerId)
      this.friends = this.friends.filter(f => f.friendId !== friendId)
      console.log(
        'ChatAPI -> friendId:',
        friendId,
        'Desuscripto!, friends:',
        JSON.stringify(this.friends)
      )
    } else {
      console.log(
        'ChatAPI -> friendId:',
        friendId,
        'No Desuscripto!, friends:',
        JSON.stringify(this.friends)
      )
    }
  },
}

const CHAT_API = Object.create(ChatAPI)

const useFriendStatus = friendId => {
  const [isOnline, setIsOnline] = useState(null)

  const handleStatusChange = status => {
    setIsOnline(status.isOnline)
  }

  useEffect(() => {
    console.log('useFriendStatus suscribiendo a:', friendId)
    CHAT_API.subscribeToFriendStatus(friendId, handleStatusChange)
    return () => {
      console.log('useFriendStatus desuscribiendo a:', friendId)
      CHAT_API.unsubscribeFromFriendStatus(friendId, handleStatusChange)
    }
  }, [friendId])

  return isOnline
}

const FriendItem = ({ friend }) => {
  const isOnline = useFriendStatus(friend.id)
  const color = isOnline === null ? 'black' : isOnline ? 'green' : 'red'
  console.log('FriendItem:', friend.id, '-> isOnline:', isOnline, '-> color:', color)
  return <p style={{ color }}>{friend.name}</p>
}

const FriendStatus = ({ friend }) => {
  const isOnline = useFriendStatus(friend.id)
  const status = isOnline === null ? 'Cargando...' : isOnline ? 'Online' : 'Offline'
  console.log('FriendStatus:', friend.id, '-> isOnline:', isOnline, '-> status:', status)
  return <p>Status: {status}</p>
}

export default function App() {
  const [friends] = useState([
    { id: 1, name: 'Jonatandb' },
    { id: 2, name: 'Sponwate' },
  ])
  console.log('**********  Renderizando App *************')
  //  alert(    'Verificar por qué FriendStatus no se actualiza cuando cambia el estado de mi hook useFriendStatus()'  )
  return (
    <div>
      {friends.map(friend => {
        console.log('App renderizando:', friend.id)
        return (
          <div
            key={friend.id}
            style={{ border: '2px solid pink', margin: '10px', padding: '20px', maxWidth: '200px' }}
          >
            <FriendItem friend={friend} />
            <FriendStatus friend={friend} />
          </div>
        )
      })}
      <hr />
      <Counter initialCount={100} />
    </div>
  )
}
