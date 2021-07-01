<template>
  <div id="title">
    <h1>Honkaku recipes to ramenhance your instant noodles</h1>
  </div>

  <div class="ramens">
    <div id="popular">
      <h2>Popular</h2>
    </div>
    <RamenCard v-for="ramen in ramens" :key="ramen.id" :ramen="ramen" />

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'RamenList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page !== 1"
        >Prev Page</router-link
      >

      <router-link
        id="page-next"
        :to="{ name: 'RamenList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next Page</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import EventCard from "@/components/EventCard.vue";
import RamenCard from '@/components/RamenCard.vue'
import EventServices from '../services/EventServices.js'
import { watchEffect } from 'vue'

export default {
  name: 'Ramenlist',
  props: ['page'],
  components: {
    RamenCard
  },
  data() {
    return {
      ramens: null,
      totalEvents: 0
    }
  },
  created() {
    watchEffect(() => {
      // when reactive objects that are accessed inside this function change,
      // run this function again

      this.ramens = null // clears the card
      EventServices.getEvents(4, this.page)
        .then(response => {
          this.ramens = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch(error => {
          console.log(error)
        })
    })
  },
  computed: {
    hasNextPage() {
      const totalPages = Math.ceil(this.totalEvents / 4)
      return this.page < totalPages
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 50px;
}

.ramens {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 650px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

#popular {
  width: 650px;
  text-align: left;
}
</style>
