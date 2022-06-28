<script setup lang="ts">
</script>

<template>
<div>
  Distributed scrum planning poker for estimating agile projects. <br />
  
  Share the url or room number with other team members to join the room.
    <div class="row justify-content-md-center mt-5">
    <div class="col-md-4">
      Enter room number
      <div class="input-group">
        <input type="text" class="form-control" v-model="room" placeholder="Room" aria-label="Room" aria-describedby="button-addon2">
        <button @click="join()" class="btn btn-outline-secondary" type="button" id="button-addon2">Join</button>
      </div>
    </div>
  </div>
  <div class="row justify-content-md-center">
    <div class="col-md-4">
        or
    </div>
  </div>
  <div class="row justify-content-md-center mt-2">
    <div class="col-md-4">
      <button @click="newRoom()" type="button" class="btn btn-secondary">Create new room</button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
export default {
  watch: {
    '$store.state.socket.roomId' : {
      handler(socket) {
        this.$router.push({ name: 'room', params: { id: socket } })
      }
    }
  },
  data() {
    return {
      room: ''
    }
  },
  methods: {
    join() {
      if (this.room) {
        this.$router.push({ name: 'room', params: { id: this.room } })
      }
    },
    newRoom() {
      var that = (this) as any
      that.$socket.emit('newRoom')
    }
  }
}
</script>
