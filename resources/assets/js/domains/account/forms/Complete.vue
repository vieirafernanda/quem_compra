<script>
  export default {
    name: 'CompleteForm',
    data() {
      return {
        user: {
          username: '',
          state: '',
          city: '',
          cpf: '',
          phone: '',
          neighborhood: ''
        },
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
          !!user.state &&
          !!user.city &&
          !!user.phone &&
          !!user.neighborhood
        )
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
        window.location.href = route('Account::index')
      }
    }
  }
</script>


<template>
    <form @submit.prevent="onSubmit" class="card card--md complete-form w-full sm:w-full lg:w-1/2">
        <header class="card__header complete-form__header">
            Adicionar Outras Informações Pessoais
        </header>
        <main class="card__content complete-form__fields">

            <div class="input__container">
                <label for="username" class="input__label">Apelido*</label>
                <input type="text"
                       class="input__control"
                       name="username"
                       id="username"
                       v-model="user.username"
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
            <states-input v-model="user.state"
                          placeholder="Escolha um estado"
                          name="state">Estado*
            </states-input>
            <cities-input v-if="user.state"
                          v-model="user.city"
                          :state="user.state"
                          placeholder="Escolha uma cidade"
                          name="city">Cidade*
            </cities-input>
            <div v-if="user.city" class="input__container">
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
    </form>
</template>