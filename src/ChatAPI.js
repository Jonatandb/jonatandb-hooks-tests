import { showLogs } from "./settings"

export class CHAT_API {

    constructor() {
        this.friends = []
        this.id = Date.now()

        if (typeof CHAT_API.instance === 'object') {

            showLogs && console.log('CHAT_API -> constructor -> id:', CHAT_API.instance.id)

            return CHAT_API.instance
        }

        showLogs && console.log('CHAT_API -> constructor -> id:', this.id)

        CHAT_API.instance = this
        return this
    }

    subscribeToFriendStatus(friendId, handleStatusChange) {
        let friend = this.friends.find(f => f.friendId === friendId)

        showLogs && console.warn('ChatAPI -> Suscribiendo a friendId:', friendId)

        if (friend !== undefined) {
            friend.subscriptions.push({ handleStatusChange })

            showLogs && console.warn('ChatAPI -> Suscripción a friendId:', friendId, 'agregada. this.friends ->', JSON.stringify(this.friends))

            return
        }

        let isOnline = null

        const timerId = setInterval(() => {
            isOnline = Math.floor(Math.random() * 10) + 1 > 5 ? true : false

            showLogs && console.warn('ChatAPI -> Tick de:', friendId, 'isOnline:', isOnline)

            const currentFriend = this.friends.find(f => f.friendId === friendId)
            if (currentFriend.isOnline !== isOnline) {
                currentFriend.isOnline = isOnline
                currentFriend.subscriptions.forEach(s => {
                    if (s)
                        s.handleStatusChange({ isOnline })
                })
            }
        }, 5000)

        friend = {
            friendId,
            subscriptions: [{ handleStatusChange }],
            isOnline,
            timerId,
        }

        this.friends.push(friend)

        showLogs && console.warn('ChatAPI -> Suscripto!     :', friendId, ' this.friends ->', JSON.stringify(this.friends))

    }

    unsubscribeFromFriendStatus(friendId, handleStatusChange) {

        showLogs && console.warn('ChatAPI -> Desuscribiendo a :', friendId)

        let currentFriend = this.friends.filter(f => f.friendId === friendId)[0]

        if (currentFriend !== undefined) {
            clearInterval(currentFriend.timerId)
            this.friends = this.friends.filter(f => f.friendId !== friendId)

            showLogs && console.warn('ChatAPI -> friendId:', friendId, 'Desuscripto!, friends:', JSON.stringify(this.friends))

        } else {

            showLogs && console.warn('ChatAPI -> friendId:', friendId, 'No Desuscripto!, friends:', JSON.stringify(this.friends))

        }
    }
}