import React from 'react'
import { showLogs } from '../settings'
import useFriendStatus from '../hooks/useFriendStatus'

const FriendStatus = ({ friend: { id, name }, style }) => {
    const [isOnline] = useFriendStatus(id)
    const status = isOnline === null ? 'Verificando...' : isOnline ? 'Online' : 'Offline'

    showLogs && console.log('FriendStatus:', id, '-> isOnline:', isOnline, '-> status:', status)

    return <div style={style}>Status:&nbsp;{isOnline === null ? 'Checking...' : status}</div>
}

export default FriendStatus