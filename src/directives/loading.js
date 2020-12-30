import VLoading from '../components/VLoading.vue'
import { createApp, ref, inject } from 'vue'

const vLoadingSymbol = Symbol()

export function useIsLoading () {
  const isLoading = inject(vLoadingSymbol)
  if (!isLoading) {
    console.error('Has no isLoading provide!')
  }
  return isLoading
}

export default {
  beforeMount (el, binding) {
    // create VLoading component
    const vLoading = createApp(VLoading)
    // use ref binding state
    const isLoading = ref(false)
    isLoading.value = binding.value
    // provide isLoading state for VLoading component
    vLoading.provide(vLoadingSymbol, isLoading)

    if (!['relative', 'absolute'].includes(el.style.position)) {
      el.style.position = 'relative'
    }

    // bind isLoading ref on el
    el.vLoading = isLoading

    vLoading.mount(el)
  },
  updated (el, binding) {
    el.vLoading.value = binding.value
  }
}