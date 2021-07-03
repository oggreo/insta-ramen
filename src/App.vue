<template>
  <div id="nav">
    <div id="orange-strip"></div>
    <div id="nav-logo">
      <img src="./assets/ramen_logo.png" alt="" />
      <div id="nav-logo-text">
        InstaRamen
      </div>
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
  height: 75px;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: inherit;
}

h4 {
  font-size: 20px;
}
</style>
