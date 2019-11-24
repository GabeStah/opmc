import React, { Component } from "react"

export default class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: props.page || [],
    }
  }

  render() {
    return (
      <section className="bg-white py-8">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <h1 className="w-full font-bold text-3xl text-gray-800 px-6">
            {this.state.page.title}
          </h1>
          <div
            className="text-gray-800 px-6 mb-5"
            dangerouslySetInnerHTML={{ __html: this.state.page.content }}
          />
        </div>
      </section>
    )
  }
}
