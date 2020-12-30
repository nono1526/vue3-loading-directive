<template>
  <div v-if="visible" class="loading">loading...</div>
</template>

<script>
import { ref } from 'vue'
import { useIsLoading } from '../directives/loading'
export default {
  setup (props) {
    return {
      visible: useIsLoading()
    }
  }
}
</script>)

<style>
.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
  
</style>