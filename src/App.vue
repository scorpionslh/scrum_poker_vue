<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">About</h4>
              <p class="text-white">
                Project inspirated in <a class="links" target="_blank" href="https://hatjitsu.toolforge.org/">hatjitsu</a>, maded to study socket.io. <br />
                First person to create the room is the moderator. <br />
                Layout developed using bootstrap 5.
              </p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Source Code</h4>
              <ul class="list-unstyled">
                <li><a target="_blank" href="https://github.com/scorpionslh/scrum_poker_vue" class="text-white">Client Vue</a></li>
                <li><a target="_blank" href="https://github.com/scorpionslh/scrum_poker" class="text-white">Server socket</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M322.1 252v-1l-51.2-65.8s-12 1.6-25 15.1c-9 9.3-242.1 239.1-243.4 240.9-7 10 1.6 6.8 15.7 1.7.8 0 114.5-36.6 114.5-36.6.5-.6-.1-.1.6-.6-.4-5.1-.8-26.2-1-27.7-.6-5.2 2.2-6.9 7-8.9l92.6-33.8c.6-.8 88.5-81.7 90.2-83.3zm160.1 120.1c13.3 16.1 20.7 13.3 30.8 9.3 3.2-1.2 115.4-47.6 117.8-48.9 8-4.3-1.7-16.7-7.2-23.4-2.1-2.5-205.1-245.6-207.2-248.3-9.7-12.2-14.3-12.9-38.4-12.8-10.2 0-106.8.5-116.5.6-19.2.1-32.9-.3-19.2 16.9C250 75 476.5 365.2 482.2 372.1zm152.7 1.6c-2.3-.3-24.6-4.7-38-7.2 0 0-115 50.4-117.5 51.6-16 7.3-26.9-3.2-36.7-14.6l-57.1-74c-5.4-.9-60.4-9.6-65.3-9.3-3.1.2-9.6.8-14.4 2.9-4.9 2.1-145.2 52.8-150.2 54.7-5.1 2-11.4 3.6-11.1 7.6.2 2.5 2 2.6 4.6 3.5 2.7.8 300.9 67.6 308 69.1 15.6 3.3 38.5 10.5 53.6 1.7 2.1-1.2 123.8-76.4 125.8-77.8 5.4-4 4.3-6.8-1.7-8.2z"/></svg>
            <strong>Scrum Poker</strong>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" href="#navbarHeader" role="button" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>

    <main role="main">
        <div class="container mt-5 ">
          <RouterView />
        </div>
    </main>
</template>

<style>
@import "@/assets/base.css";
body {
  background-color: #e4e2e2 !important;
}
.icons {
  fill: #fff;
  width: 100px;
  padding-right: 30px;
}
.links:link {
 color: rgb(62, 135, 219);
 text-decoration: none;
 font-weight: bold;

}

.links:hover {
 color: rgb(88, 160, 241);
 border-color: #B1B1B1;
}

.links:visited {
 color: rgb(88, 160, 241);
 font-weight: bold;
}

</style>
