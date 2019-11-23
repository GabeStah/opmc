import React, { Component } from "react"
import { Link } from 'gatsby'
import moment from "moment"

export default class PostCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      post: props.post || [],
    }
  }

  render () {
    const debug = true
    return <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow hover:bg-blue-100 hover:shadow-md">
        <Link to={this.state.post.path} className="flex flex-wrap no-underline hover:no-underline">
          <div className="w-full sm:w-1/2 p-6">
            <img src={this.state.post.featured_media.source_url} alt={this.state.post.featured_media.alt_text}/>
          </div>
          {/*<p className="w-full text-gray-600 text-xs md:text-sm px-6">{this.state.post.title}</p>*/}
          <div className="w-full font-bold text-xl text-gray-800 px-6">{this.state.post.title}</div>
          <h5 className={"w-full text-sm text-gray-500 px-6"}>{moment(this.state.post.date).fromNow()}</h5>
          <p className="text-gray-800 text-base px-6 mb-5" dangerouslySetInnerHTML={{ __html: this.state.post.excerpt && this.state.post.excerpt.length > 10 ? this.state.post.excerpt : this.state.post.content.substr(0, 300) }} />
        </Link>
      </div>
      {/*<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">*/}
      {/*  <div className="flex items-center justify-start">*/}
      {/*    <Link to={this.state.post.title.path}>Read More</Link>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  }
}
