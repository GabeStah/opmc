import React, { Component } from "react"
import PostFeatured from "./postFeatured"

export default class Featured extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: props.posts || [],
    };
  }

  render () {
    return <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Featured</h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"/>
        </div>
        {this.state.posts.map((post) => {
          return <PostFeatured key={post.guid} post={post} />
        })}
      </div>
    </section>
  }
}
