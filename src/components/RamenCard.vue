<template>
  <div class="ramen-card">
    <div id="ramen-image">
      <img src="../assets/ramen_logo.png" alt="">
    </div>

    <router-link
      class="event-link"
      :to="{ name: 'EventDetails', params: { id: ramen.id } }"
    >
      <!-- <img src="../assets/logo.png" alt= {{ ramen.title }} width="20px" height="20px"> -->
      <h4>{{ ramen.title }}</h4>
      <div id="details">{{ ramen.cooking_time }} min | {{ ramen.diet }}</div>
    </router-link>

    <div id="like-button">
      <LikeButton :like="ramen.like"> </LikeButton>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ramen-card {
  padding-right: 20px;
  height: 150px;
  width: 650px;
  border: 1px solid #39495c;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 200px;
  height: 150px;
  border-right: 1px solid #39495c;
}

#like-button {
  display: flex;
  align-items: center;
}
</style>
