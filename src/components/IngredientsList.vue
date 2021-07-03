<template>
  <div class="ingredients-list">
    <div id="title">
      Ingredients
    </div>
    <hr>
    <div
      class="ingredient-component"
      v-for="ingredient in ingredients"
      :key="ingredient.id"
    >
      <input type="checkbox" />
      <div id="ingredient-name">{{ ingredient.name }}</div>
      <div id="ingredient-amount">{{ ingredient.amount }}</div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "IngredientsList",
  data() {
    return {
      ingredients: [
        {
          name: "tomato",
          amount: "3 tons",
          id: 0
        },
        {
          name: "potato",
          amount: "30 tons",
          id: 1
        },
        {
          name: "cucumber",
          amount: "9 tons",
          id: 2
        },
        {
          name: "onion",
          amount: "300 tons",
          id: 3
        }
      ]
    };
  }
};
</script>

<style scoped>
.ingredients-list {
  width: 450px;
}

.ingredient-component {
  display: flex;
  justify-content: space-between;
}

input {
  padding-left: 20px;
}

#title {
  text-align: left;
  font-weight: bold;
}

#ingredient-amount {
  padding-right: 20px;
}

</style>
