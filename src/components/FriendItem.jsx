import React from 'react'
import { showLogs } from '../settings'
import useFriendStatus from '../hooks/useFriendStatus'

const FriendItem = ({ friend: { id, name } }) => {
    const [isOnline] = useFriendStatus(id)
    const color = isOnline === null ? 'black' : isOnline ? 'green' : 'red'

    showLogs && console.log('FriendItem:', id, '-> isOnline:', isOnline, '-> color:', color)

    return <div>
        Friend: <span style={{ color }}>{name}</span>
    </div>

}

export default FriendItem