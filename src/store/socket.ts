import { createStore } from 'vuex'

export default createStore({
    state: {
        clientId: '',
        roomId: '',
        myVote: null,
        sd: null,
        room: [] as Array<any>,
        voted: [] as Array<string>,
        votes: {} as Map<string, string>
    },
    getters: {
    },
    mutations: {
        roomDetail: (state, payload) => {
            state.room = payload
        },
        newRoom: (state, payload) => {
            state.roomId = payload
        },
        id: (state, payload) => {
            state.clientId = payload
        },
        userJoined: (state, payload: string) => {
            state.room.push(payload)
        },
        voted: (state, payload: string) => {
            const index = state.room.findIndex(item => item.id === payload)
            if (index != -1) {
                state.room[index].isVoted = true
            }
        },
        userLeft: (state, payload: string) => {
            state.room = state.room.filter(r => r.id !== payload)
        },
        showVotes: (state, payload: any) => {
            state.room = payload
        },
        isSpectator: (state, payload: any) => {
            const index = state.room.findIndex(item => item.id === payload.id)
            if (index != -1) {
                state.room[index].isSpectator = payload.isSpectator
                state.room[index].isVoted = false
                state.room[index].vote = null
                state.myVote = null
            }
        },
        clear: (state, payload: any) => {
            state.voted = []
            state.room = payload
            state.myVote = null
            state.sd = null
        },
        sd: (state, payload: any) => {
            state.sd = payload
        }
    },
    actions: {
        socket_id: ({ commit }, payload) => {
            commit('id', payload)
        },
        socket_newRoom: ({ commit }, payload) => {
            commit('newRoom', payload)
        },
        socket_roomDetail: ({ commit }, payload) => {
            commit('roomDetail', payload)
        },
        socket_userJoined: ({ commit }, payload) => {
            commit('userJoined', payload)
        },
        socket_voted: ({ commit }, payload) => {
            commit('voted', payload)
        },
        socket_userLeft: ({ commit }, payload) => {
            commit('userLeft', payload)
        },
        socket_showVotes: ({ commit }, payload) => {
            commit('showVotes', payload)
        },
        socket_isSpectator: ({ commit }, payload) => {
            commit('isSpectator', payload)
        },
        socket_clear: ({ commit }, payload) => {
            commit('clear', payload)
        },
        socket_sd: ({ commit }, payload) => {
            commit('sd', payload)
        }
    }
  })