<template>
  <img  alt="Vue logo" src="./assets/logo.png" />
  <div class="block" v-loading="isLoadingFirst"></div>
  <div class="block" v-loading="isLoadingSecond"></div>
  <button @click="toggleLoadingFirst">toggle first</button>
  <button @click="toggleLoadingSecond">toggle second</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {ref} from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    const isLoadingFirst = ref(true)
    const isLoadingSecond = ref(false)
    const toggleLoadingFirst = () => {
      isLoadingFirst.value = !isLoadingFirst.value
    }
    const toggleLoadingSecond = () => {
      isLoadingSecond.value = !isLoadingSecond.value
    }
    return {
      toggleLoadingFirst,
      toggleLoadingSecond,
      isLoadingFirst,
      isLoadingSecond
    }
  }
}
</script>

<style>
  
.block {
  width: 300px;
  height: 300px;
  background-color: red;

}
</style>