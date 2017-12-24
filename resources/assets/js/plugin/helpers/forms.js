export const $prepareFormData = payload => {
  let Data = new FormData

  Object.keys(payload)
    .forEach((attribute) => {
      if (payload[attribute].constructor === Array) {
        Object.keys(payload[attribute])
          .forEach(index => {
            Data.append(`${attribute}[${index}]`, payload[attribute][index])
          })
      }
      Data.append(attribute, payload[attribute])
    })

  return Data
}

export const $prepareFormDataForOnly = (payload, keys = []) => {
  keys = keys.length ? keys : Object.keys(payload)
  let Data = {}

  Object.keys(payload)
    .filter(key => keys.includes(key))
    .forEach(key => Data[key] = payload[key])

  return $prepareFormData(Data)
}

export default {
  $prepareFormData,
  $prepareFormDataForOnly
}