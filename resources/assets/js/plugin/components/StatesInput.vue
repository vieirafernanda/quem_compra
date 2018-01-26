<script>
  export default {
    props: {
      id: {
        type: String,
        required: false
      },
      placeholder: {
        type: String,
        required: false,
        default: 'Escolha uma opção'
      },
      name: {
        type: String,
        required: true
      },
      value: {
        required: true
      }
    },
    data() {
      return {
        states: []
      }
    },
    created() {
      axios.get(route('CepApi::states'))
        .then(({data}) => {
          this.states = data
          this.$emit('loaded')
        })
        .catch(this.$handleRequestError)
    },
    methods: {
      onChange(ev) {
        this.$emit('input', ev.target.value)
      }
    },
  }
</script>

<template>
    <div class="input__container">
        <label :for="id" class="input__label"><slot></slot></label>
        <select :value="value" @change="onChange" :name="name || id" :id="id || name" class="input__control">
            <option value="">{{ $props.placeholder }}</option>
            <option v-for="state in states" :key="state.id" :value="state.id">{{ state.name }}</option>
        </select>
    </div>
</template>