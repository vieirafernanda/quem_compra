const email = () => {
  const baseEmail = {
    required: true,
    min: 3,
  }
  return {
    email: {
      ...baseEmail,
      email: true,
    },
    username: {
      ...baseEmail,
    }
  }
}

const password = () => {
  const basePassword = {
    required: true,
    min: 6,
  };

  return {
    confirmedPassword: (field) => ({
      ...basePassword,
      confirmed: field,
    }),
    passwordConfirmation: basePassword,
    password: basePassword,
  }
}

export const $validationFields = {
  ...email(),
  ...password()
}

export default {
  $validationFields
}