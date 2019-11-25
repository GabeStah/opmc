import React, { Component } from "react"
import moment from "moment"

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: props.post || [],
    }
  }

  render() {
    return (
      <section className="bg-white py-8">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <div className="w-full sm:w-1/2 p-6">
            {this.state.post.featured_media &&
              this.state.post.featured_media.source_url && (
                <img
                  src={this.state.post.featured_media.source_url}
                  alt={this.state.post.featured_media.alt_text || ""}
                />
              )}
          </div>
          <h1 className="w-full font-bold text-3xl text-gray-800 px-6">
            {this.state.post.title}
          </h1>
          <h5 className={"w-full text-sm text-gray-500 px-6"}>
            {moment(this.state.post.date).fromNow()}
          </h5>
          <div
            className="text-gray-800 px-6 mb-5"
            dangerouslySetInnerHTML={{ __html: this.state.post.content }}
          />
        </div>
      </section>
    )
  }
}
