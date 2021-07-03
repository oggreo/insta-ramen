<template>
  <div class="recipe-list">
    <div id="title">
      Recipe
    </div>
    <hr>
    <div
      class="recipe-component"
      v-for="recipe in recipes"
      :key="recipe.id"
    >
      {{ recipe.id + 1 }}. {{ recipe.detail }}
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "RecipeList",
  data() {
    return {
      recipes: [
        {
          detail: "Cut tomato",
          id: 0
        },
        {
          detail: "Chop potato",
          id: 1
        },
        {
          detail: "Slice cucumber",
          id: 2
        },
        {
          detail: "Cry with onion",
          id: 3
        }
      ]
    };
  }
};
</script>

<style scoped>
.recipe-list {
  width: 450px;
}

.recipe-component {
  display: flex;
  padding-left: 5px;
}

input {
  padding-left: 20px;
}

#recipe-detail {
  text-align: center;
}

#title {
  text-align: left;
  font-weight: bold;
}

</style>
