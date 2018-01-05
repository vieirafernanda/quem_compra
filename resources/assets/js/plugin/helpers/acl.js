import Policies from '@/policies'

export const $can = (permission, ...params) => {
  if (Policies.hasOwnProperty(permission)) return Policies[permission](window.authUser, ...params)

  return false;
}

export default {
  $can
}