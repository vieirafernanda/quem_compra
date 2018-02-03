<script>
  export default {
    name: 'Login',
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
          remember: false
        }
      }
    },
    computed: {
      validation() {
        return {
          email: Vue.$validationFields.username,
          password: Vue.$validationFields.password
        }
      }
    },
    methods: {
      login() {
        if (this.errors.any()) return
        let FormData = this.$prepareFormData(this.user)
        axios[this.method](this.route, FormData)
          .then(this.redirect)
          .catch(this.$handleRequestError)
      },
      redirect() {
        window.location.href = this.redirectUrl
      }
    },
    created() {
      console.log(this.$validator)
      console.log(this.$validator.locale)
    }
  }
</script>
