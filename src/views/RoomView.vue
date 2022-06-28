<template>
  <div class="row">
  <div class="pack col-md-12">
    <div class="card" v-for="card in cards" :key="card.id" :disabled="user.vote" :class="{'isMine': myVote == card.value }" @click="vote(card.value)">
        {{ card.label }}
    </div>
  </div>
  </div>
    <hr />
    <div class="form-check form-switch" style="padding-left:50px">
      <input class="form-check-input" type="checkbox" role="switch" v-model="user.isSpectator" @click="this.$socket.emit('isSpectator')" >
      <label class="form-check-label" for="flexSwitchCheckDefault">I'm spectator</label>
    </div>
    <div class="users">
      <template v-for="u in room" class="room" :key="u">
        <div v-if="!u.isSpectator" :class="{'card': true, 'isMine': user.id == u.id && u.vote }">
          <template v-if="u.isVoted" >
            <template v-if="u.vote">
              {{ u.vote }}
            </template>
            <template v-else > 
              ?
            </template>
          </template>
          <template v-else >
            &nbsp;
          </template>
        </div>
      </template>
    </div>
    <div v-if="sd">
        Average: {{ sd.average }} <strong>(SD = {{ sd.sd }})</strong>
    </div>
    <div v-if="user.isAdmin" class="d-grid gap-2 col-6 mx-auto mt-5">
      <button
       @click="this.$socket.emit('showVotes')"
      type="button" class="btn btn-outline-secondary btn-lg">
      Show votes
      </button>
      <button
       @click="this.$socket.emit('clear')"
      type="button" class="btn btn-outline-secondary btn-lg">
      Reset</button>
    </div>

    
</template>

<script>
export default {
  watch: {
    '$store.state.socket' : {
      handler(socket) {
        this.room = socket.room
        this.voted = socket.voted
        this.room.find(user => {
          if (user.id === socket.clientId) {
            this.user = user
          }
        })
      },
      deep: true
    }
  },
  computed: {
    myVote() {
      return this.$store.state.socket.myVote
    },
    sd() {
      return this.$store.state.socket.sd
    },
  },
  data() {
    return {
      room: [],
      user: {},
      votes: [],
      cards: [
        { id: 1, value: '0', label: '0' },
        { id: 2, value: '0.5', label: '1/2' },
        { id: 3, value: '1', label: '1' },
        { id: 4, value: '2', label: '2' },
        { id: 5, value: '3', label: '3' },
        { id: 6, value: '5', label: '5' },
        { id: 7, value: '8', label: '8' },
        { id: 8, value: '13', label: '13' },
        { id: 9, value: '20', label: '20' },
        { id: 10, value: '40', label: '40' },
        { id: 11, value: '100', label: '100' },
        { id: 12, value: '∞', label: '∞' }
      ]
    }
  },
  methods: {
    vote(value) {
      if (!this.user.vote && !this.user.isSpectator) {
        this.$socket.emit('vote', value)
        this.$store.state.socket.myVote = value
      }
    },
    clear() {
      this.$socket.emit('clear')
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.$socket.emit('joinRoom', { room: this.$route.params.id } )
    }
  }
}
</script>

<style scoped>
.users {
  display: contents;
  flex-direction: row wrap;
  width: 100%;
  height: 100%;
}
.pack {
  display: contents;
  flex-direction: row wrap;
  width: 100%;
  height: 100%;
}
.card {
  width: 80px;
  height: 100px;
  min-width: 80px;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin: 10px;
  display: flex inline;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}
.isMine {
  background: #d6e0a5;
}
.iconButton {
  width: 1.5rem;
  height: 1.5rem;
  fill: #6c757d;
}
.btn .iconButton {
  width: 1.5rem;
  fill: #6c757d;
}
.btn:hover .iconButton {
  fill: #fff;
}
</style>
