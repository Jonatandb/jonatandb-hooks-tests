import { useState, useEffect } from 'react'
import { showLogs } from '../settings'
import { CHAT_API } from '../ChatAPI'
import { useMemo } from 'react'

const useFriendStatus = friendId => {
    const [isOnline, setIsOnline] = useState(null)
    const ChatAPI = useMemo(() => new CHAT_API(), [])

    const handleStatusChange = status => {
        setIsOnline(status.isOnline)
    }

    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange)
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange)
        }
    }, [ChatAPI, friendId])

    showLogs && console.warn('useFriendStatus: friendId:', friendId, ' - isOnline:', isOnline, 'ChatAPI:', ChatAPI)

    return [isOnline]
}

export default useFriendStatus