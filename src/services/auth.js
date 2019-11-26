// https://www.gatsbyjs.org/tutorial/authentication-tutorial/
export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("opmcUser")
    ? JSON.parse(window.localStorage.getItem("opmcUser"))
    : {}
export const setUser = user =>
  window.localStorage.setItem("opmcUser", JSON.stringify(user))
export const handleLogin = async ({ password }) => {
  const res = await fetch(`/api/auth?password=${password}`)
  const success = await res.text()
  if (success === 'true') {
    return setUser({
      username: `opmcmember`,
      name: `John Doe`,
      email: `john@opmenschorus.com`,
    })
  }
  return false
}
export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}
export const logout = callback => {
  setUser({})
  callback()
}
