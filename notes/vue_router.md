# Use a Route parameter with params as Props


### Can we use URL parameter as component Props

Inside router index.js we define the paramer in side path and add props to be true.

`/src/router/index.js
const routes = [
    { path: 'events/:page', 
      component: Events, 
      props: true
    }
]`


We can access from the template by

<template>
    <h1> You are on page {{ page }} </h1>
</template>


<script> 
export default {
    props: ['page']

}

</script>


### Can we configure a component from a router
`/src/router/index.js
const routes = [
    { path: 'events/:page', 
      component: Events, 
      props: { showExtra: true} 
    }
]`

<template>
    <h1> You are on page {{ page }} </h1>
    <div v-if="showExtra"> Extra stuff <div>
</template>


### How can we transform query paramters?

`/src/router/index.js
const routes = [
    { path: 'events/:page', 
      component: Events, 
      // props: { showExtra: true} 
      props: (route) => ({ showExtra: route.query.e })
      // you can transform query parameters like this
    }
]`




