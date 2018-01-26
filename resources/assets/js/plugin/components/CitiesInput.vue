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
      state: {
        type: String,
        required: true
      },
      value: {
        required: true
      }
    },
    data() {
      return {
        cities: []
      }
    },
    created() {
      this.setCities()
    },
    watch: {
      state() {
        this.setCities()
      }
    },
    methods: {
      onChange(ev) {
        this.$emit('input', ev.target.value)
      },
      setCities() {
        axios.get(route('CepApi::cities', [this.state]))
          .then(({data}) => {
            this.cities = data
            this.$emit('loaded')
          })
          .catch(this.$handleRequestError)
      }
    },
  }
</script>

<template>
    <div v-if="cities.length" class="input__container">
        <label :for="id" class="input__label">
            <slot></slot>
        </label>
        <select :value="value" @change="onChange" :name="name || id" :id="id || name" class="input__control">
            <option value="">{{ $props.placeholder }}</option>
            <option v-for="city in cities" :key="city.id" :value="city.id">{{ city.name }}</option>
        </select>
    </div>
</template>