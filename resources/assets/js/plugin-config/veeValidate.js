export default {
  errorBagName: 'validationErrors',
  fieldsBagName: 'validationFields',
  delay: 0,
  locale: 'pt-BR',
  dictionary: null,
  strict: true,
  classes: true,
  classNames: {
    touched: 'input__control--touched',
    untouched: 'input__control--untouched',
    valid: 'input__control--valid',
    invalid: 'input__control--invalid',
    pristine: 'input__control--pristine',
    dirty: 'input__control--dirty',
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  i18n: null,
  i18nRootKey: 'validations',
  aria: true
}