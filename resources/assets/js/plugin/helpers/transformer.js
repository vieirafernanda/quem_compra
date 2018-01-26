import Transformers from '@/transformers'

export const $transform = (transformer, ...params) => {
  if (Transformers.hasOwnProperty(transformer)) return Transformers[transformer](...params)
  return false
}

export default {
  $transform
}