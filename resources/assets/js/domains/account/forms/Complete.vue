<script>
  export default {
    name: 'CompleteForm',
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
          username: '',
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
          username: {
            required: true
          },
          name: {
            required: true
          }
        }
      }
    },
    methods: {
      onSubmit() {
        if (!this.canSubmit) return

        let FormData = this.$prepareFormData(this.user)

        axios.post(route('AccountApi::complete'), FormData)
          .then(this.redirect)
          .catch(this.$handleRequestError)
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
                Adicionar Outras Informações Pessoais
            </header>
            <main class="card__content complete-form__fields">

<<<<<<< HEAD
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
                    <label for="username" class="input__label">Apelido*</label>
                    <input type="text"
                           class="input__control"
                           name="username"
                           id="username"
                           v-model="user.username"
                           v-validate="validation.username"
                           placeholder="Digite seu bairro">
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
                              name="state">Estado*
                </states-input>
                <cities-input v-if="user.state_id"
                              v-model="user.city_id"
                              :state="user.state_id"
                              placeholder="Escolha uma cidade"
                              name="city">Cidade*
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
=======
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
                <label for="username" class="input__label">Apelido*</label>
                <input type="text"
                       class="input__control"
                       name="username"
                       id="username"
                       v-model="user.username"
                       v-validate="validation.username"
                       placeholder="Digite seu apelido">
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
                          name="state">Estado*
            </states-input>
            <cities-input v-if="user.state_id"
                          v-model="user.city_id"
                          :state="user.state_id"
                          placeholder="Escolha uma cidade"
                          name="city">Cidade*
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
>>>>>>> fa0bcd4e65dee976b6f11bccf4d8b826abbcd08b

                <button class="btn btn--primary" :disabled="!canSubmit">Salvar</button>
            </main>
        </template>
        <template v-else>
            <header class="card__header complete-form__header bg-green-500">
                Sucesso!
            </header>
            <main class="card__content complete-form__fields">
                <p>Você finalizou o seu cadastro!</p>
                <p>Ainda falta confirma seu email! Cheque sua caixa postal e spams caso não encontre.</p>
            </main>
        </template>
    </form>
</template>