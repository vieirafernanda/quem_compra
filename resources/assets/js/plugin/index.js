import Components from './components'
import Helpers from './helpers'
import Directives from './directives'
import Mixins from './mixins'
import Plugins from './plugins'

export const install = Vue => {
  Object.keys(Components)
    .forEach(component => {
      Vue.component(component, Components[component])
    })

  Object.keys(Helpers)
    .forEach(helper => {
      Vue.prototype[helper] = Helpers[helper]
    })

  Object.keys(Directives)
    .forEach(directive => {
      Vue.directive[directive] = Directives[directive]
    })

  Object.keys(Mixins)
    .forEach(mixin => {
      Vue.directive[mixin] = Mixins[mixin]
    })

  Object.keys(Plugins)
    .forEach(plugin => {
      Vue.use(Plugins[plugin])
    })
}

export default {
  install
}