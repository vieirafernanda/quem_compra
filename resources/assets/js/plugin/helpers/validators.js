export const $routeMethodPropValidation = value => /^(get|post|head|put|patch)$/.test(value)

export default {
  $routeMethodPropValidation
}