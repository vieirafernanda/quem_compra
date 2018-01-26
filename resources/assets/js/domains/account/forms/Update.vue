<script>
  export default {
    name: 'UpdateForm',
    props: {
      auth: {
        type: Object,
        required: true
      },
    },
    data() {
      return {
        user: {
          name: '',
          state_id: '',
          city_id: '',
          cpf: '',
          phone: '',
          neighborhood: ''
        },
        finished: false
      }
    },
    computed: {
      cpfMask() {
        return [
          '###.###.###-##',
          '##.###.###/####-##'
        ]
      },
      phoneMask() {
        return [
          '(##) ####-####',
          '(##) #####-####'
        ]
      },
      canSubmit() {
        let user = this.user
        return (
          !!user.state_id &&
          !!user.city_id &&
          !!user.phone &&
          !!user.neighborhood
        )
      },
      validation() {
        return {
          name: {
            required: true
          }
        }
      }
    },
    mounted() {
      this.$set(this, 'user', {
        name: this.auth.name,
        cpf: this.auth.cpf,
        phone: this.auth.phone,
      })
    },
    methods: {
      onSubmit() {
        if (!this.canSubmit) return

        let FormData = this.$prepareFormData(this.user)

        axios.post(route('AccountApi::update'), FormData)
          .then(this.redirect)
          .catch(this.$handleRequestError)
      },
      setState() {
        this.$set(this, 'user', {
          ...this.user,
          state_id: this.auth.state_id.toString()
        })
      },
      setCity() {
        this.$set(this, 'user', {
          ...this.user,
          city_id: this.auth.city_id.toString()
        })
        this.user.neighborhood = this.auth.neighborhood
      },
      redirect({data}) {
        this.finished = true
        const FOUR_SECONDS = 4000
        setTimeout(() => {
          window.location.pathname = '/'
        }, FOUR_SECONDS)
      }
    }
  }
</script>


<template>
    <form @submit.prevent="onSubmit" class="card card--md complete-form w-full sm:w-full lg:w-1/2">
        <template v-if="!finished">

            <header class="card__header complete-form__header">
                Atualizar Suas Informações Pessoais
            </header>
            <main class="card__content complete-form__fields">

                <div class="input__container">
                    <label for="username" class="input__label">Nome*</label>
                    <input type="text"
                           class="input__control"
                           name="name"
                           id="name"
                           v-model="user.name"
                           v-validate="validation.name"
                           placeholder="Digite seu nome">
                </div>
                <div class="input__container">
                    <label for="cpf" class="input__label">Cpf / Cnpj</label>
                    <the-mask class="input__control"
                              type="tel"
                              placeholder="Digite seu Cpf ou Cnpj"
                              :mask="cpfMask"
                              name="cpf"
                              id="cpf"
                              v-model="user.cpf"/>
                </div>
                <div class="input__container">
                    <label for="phone" class="input__label">Telefone*</label>
                    <the-mask class="input__control"
                              type="tel"
                              id="phone"
                              :mask="phoneMask"
                              v-model="user.phone"
                              placeholder="Digite seu telefone"
                              name="phone"/>
                </div>
                <states-input v-model="user.state_id"
                              placeholder="Escolha um estado"
                              name="state"
                              @loaded="setState">Estado*
                </states-input>
                <cities-input v-if="user.state_id"
                              v-model="user.city_id"
                              :state="user.state_id"
                              placeholder="Escolha uma cidade"
                              name="city"
                              @loaded="setCity">Cidade*
                </cities-input>
                <div v-if="user.city_id" class="input__container">
                    <label for="neighborhood" class="input__label">Bairro*</label>
                    <input type="text"
                           class="input__control"
                           name="neighborhood"
                           id="neighborhood"
                           v-model="user.neighborhood"
                           placeholder="Digite seu bairro">
                </div>

                <button class="btn btn--primary" :disabled="!canSubmit">Salvar</button>
            </main>
        </template>
        <template v-else>
            <header class="card__header complete-form__header bg-green-500">
                Sucesso!
            </header>
            <main class="card__content complete-form__fields">
                <p>Você atualizou o seu cadastro!</p>
            </main>
        </template>
    </form>
</template>