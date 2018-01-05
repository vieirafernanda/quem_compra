export const $filesFromInput = event => {
  const files = Object.values(event.target.files).slice(0, 10);
  let payload = []

  Object.keys(files)
    .forEach(file => {
      if (files[file].name.slice(files[file].name.lastIndexOf('.')).match(/(exe)/)) {
        return
      }
      if ((files[file].size / 1024 / 1024) <= 2) {
        payload.push(files[file])
      } else {
        $bus.$emit('flash', {
          level: 'red',
          message: `O arquivo ${files[file].name} excede o tamanho máximo de 2mb\n e por isso não será enviado para o servidor`
        })
      }
    })

  return payload
}

export default {
  $filesFromInput
}