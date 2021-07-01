<template>
  <div id="nav">
    <div id="orange-strip"></div>
    <div id="nav-logo">
      <img src="./assets/logo.png" alt="" />
      InstaRamen
    </div>
  </div>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
  height: 50px;
  border-bottom: solid 1px gray;
}

#orange-strip {
  width: inherit;
  height: 20%;
  background-color: orange;
}

#nav-logo {
  width: inherit;
  height: 80%;
}

img {
  height: inherit;
}

h4 {
  font-size: 20px;
}
</style>
