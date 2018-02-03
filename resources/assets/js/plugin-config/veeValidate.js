export default {
  delay: 0,
  dictionary: {
    pt_BR: {
      attributes: {
        'email': 'Email',
        'name': 'Nome',
        'password': 'Senha',
        'password_confirmation': 'Confirmação de senha',
        'phone': 'Telefone',
        'cel': 'Celular',
        'state': 'Estado',
        'state_id': 'Estado',
        'city_id': 'Cidade',
        'city': 'Cidade',
        'cep': 'Cep',
        'group_id': 'Grupo',
        'groups': 'Grupos',
        'neighborhood': 'Bairro',
        'street': 'Rua',
        'number': 'Numero'
      }
    }
  },
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