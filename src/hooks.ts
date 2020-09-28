import { ref, watch, onMounted } from 'vue'
import { Ref } from 'vue'

export const useHeight = (element: Ref<Element>, watchSource: any) => {
  const height = ref('0')
  const calcHeaderHeight = () => {
    if (!element.value) return
    height.value = window.getComputedStyle(element.value).height
  }
  watch(watchSource, calcHeaderHeight)
  onMounted(calcHeaderHeight)
  return height
}
