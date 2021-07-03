<template>
  <div class="like-button">
    <div
      :style="{ visibility: isPushedUp === false ? 'visible' : 'hidden' }"
      @click="toggleUpButton"
      id="up-arrow"
    ></div>
    {{ count }}
    <!-- {{ like.count }} -->
    <div
      :style="{ visibility: isPushedDown === false ? 'visible' : 'hidden' }"
      id="down-arrow"
      @click="toggleDownButton"
    ></div>
  </div>
</template>

<script>
export default {
  name: "LikeButton",
  data() {
    return {
      count: 54,
      isPushedUp: false,
      isPushedDown: false
    };
  },
  methods: {
    toggleUpButton() {
      if (this.isPushedDown) {
        this.isPushedUp = false;
        this.isPushedDown = false;
      } else {
        this.isPushedUp = !this.isPushedUp;
      }
      this.count++;
    },
    toggleDownButton() {
      if (this.isPushedUp) {
        this.isPushedUp = false;
        this.isPushedDown = false;
      } else {
        this.isPushedDown = !this.isPushedDown;
      }
      this.count--;
    }
  },
  props: {
    like: {
      type: Object,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.like-button {
  padding: 5px;
  width: 50px;
  height: 70px;
  cursor: pointer;
  border: 1px solid #39495c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.like-button:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

#up-arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid black;
}

#down-arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid black;
}
</style>
