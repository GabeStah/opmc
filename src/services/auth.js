// https://www.gatsbyjs.org/tutorial/authentication-tutorial/
export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("opmcUser")
    ? JSON.parse(window.localStorage.getItem("opmcUser"))
    : {}
const setUser = user =>
  window.localStorage.setItem("opmcUser", JSON.stringify(user))
export const handleLogin = ({ password }) => {
  console.log(`handleLogin`)
  console.log(`password: ${password}`)
  console.log(`OPMC_MEMBER_PASSWORD: ${process.env.OPMC_MEMBER_PASSWORD}`)
  if (password === process.env.OPMC_MEMBER_PASSWORD) {
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
