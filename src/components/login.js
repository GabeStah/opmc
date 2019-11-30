import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import Alert from "./alert"

class Login extends React.Component {
  state = {
    // username: ``,
    password: ``,
    prevPath: this.props.location.state.prevPath,
    alert: this.props.location.state.prevPath && {
      title: "Login Required",
      message: "You must login to access that page.",
    },
  }

  handleKeyDown = async event => {
    if (event.key === "Enter") {
      event.preventDefault()
      if (await handleLogin(this.state)) {
        navigate(this.state.prevPath || `/`)
      } else {
        this.setState((state, props) => {
          return {
            alert: {
              title: "Invalid Password",
              message:
                "The password you entered is incorrect.  Please try again.",
            },
          }
        })
      }
    }
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    if (await handleLogin(this.state)) {
      navigate(this.state.prevPath || `/`)
    } else {
      this.setState((state, props) => {
        return {
          alert: {
            title: "Invalid Password",
            message:
              "The password you entered is incorrect.  Please try again.",
          },
        }
      })
    }
  }

  render() {
    if (isLoggedIn()) {
      navigate(this.state.prevPath || `/`)
    }

    return (
      <>
        <section className={"pt-32 p-10"}>
          {this.state.alert && (
            <Alert
              title={this.state.alert.title}
              message={this.state.alert.message}
            />
          )}
          <form
            className="w-full max-w-sm pt-5"
            onSubmit={event => {
              this.handleSubmit(event).then(r => {
                navigate(this.state.prevPath || `/`)
              })
            }}
          >
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-password"
                >
                  Password
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
                  id="inline-password"
                  type="password"
                  placeholder="**********"
                  name="password"
                  autoComplete={"new-password"}
                  onChange={this.handleUpdate}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
              <div className="md:w-1/3">
                <button
                  className="shadow bg-blue-300 hover:bg-blue-200 focus:shadow-outline focus:outline-none text-white font-bold ml-4 py-2 px-4 rounded"
                  type="button"
                  onClick={event => {
                    this.handleSubmit(event).then(r => {
                      console.log(`logging in`)
                    })
                  }}
                >
                  Login
                </button>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3" />
              <div className="md:w-2/3" />
            </div>
          </form>
        </section>
      </>
    )
  }
}

export default Login
