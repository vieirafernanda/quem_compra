<script>
  export default {
    name: 'FastRegister',
    props: {
      route: {
        type: String,
        required: true
      },
      method: {
        type: String,
        required: true,
        validator: Vue.$routeMethodPropValidation
      },
      redirectUrl: {
        type: String,
        required: false,
        default: `${location.protocol}//${location.host}/conta`
      }
    },
    data() {
      return {
        user: {
          email: '',
          password: '',
          password_confirmation: '',
        }
      }
    },
    computed: {
      validation() {
        return {
          email: this.$validationFields.email,
          password: this.$validationFields.confirmedPassword('password_confirmation'),
          password_confirmation: this.$validationFields.passwordConfirmation
        }
      }
    },
    methods: {
      register() {
        if (this.errors.any()) return
        let FormData = this.$prepareFormData(this.user)
        axios[this.method](this.route, FormData)
          .then(this.redirect)
          .catch(this.$handleRequestError)
      },
      redirect() {
        window.location.href = this.redirectUrl
      }
    }
  }
</script>
