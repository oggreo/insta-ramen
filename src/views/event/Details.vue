<template>
  <div class="details" v-if="ramen">
    <div id="ramen-image">
      <img alt="" src="../../assets/ramen_logo.png">
    </div>
    <h1>{{ ramen.title }}</h1>
    <div id="ramen-title"></div>
    <div id="ramen-description">
    <p>{{ ramen.time }} on {{ ramen.date }} @ {{ ramen.location }}
      {{ ramen.description }}</p>
    </div>
    <IngredientsList></IngredientsList>
    <RecipeList></RecipeList>

  </div>
</template>

<script>
import EventService from "../../services/EventServices";
import IngredientsList from "@/components/IngredientsList";
import RecipeList from "@/components/RecipeList";

export default {
  props: ["id"],
  components: {
    IngredientsList,
    RecipeList
  },
  data() {
    return {
      ramen: null
    };
  },
  created() {
    // fetch event (by id) and set local event data
    EventService.getEvent(this.id)
      .then(response => {
        this.ramen = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.details {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#ramen-description {
  width: 450px;
  text-align: left;
}

#ramen-image {
  margin-top: 30px;
  border: 1px solid slategray;
  width: 300px;
  height: 300px;
}
</style>
