<template>
  <div class="ramen-card">
    <div id="ramen-image">
    </div>
    
    <router-link
      class="event-link"
      :to="{ name: 'EventDetails', params: { id: ramen.id} }"
    >
      <!-- <img src="../assets/logo.png" alt= {{ ramen.title }} width="20px" height="20px"> -->
      <h4>{{ ramen.title }}</h4>
      <div id="details"> 
        {{ ramen.cooking_time }} | {{ ramen.diet }}
      </div>
    </router-link>

    <div id='like-button'> 
      <LikeButton />
    </div>
  </div>
</template>

<script>
import LikeButton from "@/components/LikeButton.vue";
export default {
  // name: "EventCard",
  name: "RamenCard",
  props: {
    ramen: {
      type: Object,
      required: true
    }
  },
  components: {
    LikeButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ramen-card {
  padding: 20px;
  width: 650px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
}

.ramen-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}

#ramen-image {
  width: 100px;
  border: 1px solid #39495c;
}

#like-button {
  display: flex;
  align-items: center;
}

</style>
