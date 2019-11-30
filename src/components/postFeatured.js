import React, { Component } from "react"
import moment from "moment"
import { Link } from "gatsby"

export default class PostFeatured extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: props.post || [],
    }
  }

  render() {
    return (
      <div className="flex flex-wrap flex-col-reverse sm:flex-row hover:bg-blue-100 hover:shadow-md">
        <Link
          to={this.state.post.fields.slug}
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none">
              {this.state.post.frontmatter.title}
            </h3>
            <h5 className={"mb-1 mt-2 text-sm"}>
              {moment(this.state.post.frontmatter.date).fromNow()}
            </h5>
            <div
              className="text-gray-600 mb-8"
              dangerouslySetInnerHTML={{
                __html:
                  this.state.post.excerpt && this.state.post.excerpt.length > 10
                    ? this.state.post.excerpt
                    : this.state.post.content.substr(0, 300),
              }}
            />
          </div>
          {this.state.post.frontmatter.image &&
            <div className="w-full sm:w-1/2 p-6">
              <img
                src={this.state.post.frontmatter.image.replace("static/", "")}
                alt={this.state.post.frontmatter.image.alt_text || ''}
              />
            </div>
          }
        </Link>
      </div>
    )
  }
  //
  // render() {
  //   return <div className="flex flex-wrap flex-col-reverse sm:flex-row">
  //     <div className="w-full sm:w-1/2 p-6 mt-6">
  //       <MoreMusicImage className={"w-full sm:h-64 mx-auto"}/>
  //     </div>
  //     <div className="w-full sm:w-1/2 p-6 mt-6">
  //       <div className="align-middle">
  //         <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Lorem ipsum dolor sit amet</h3>
  //         <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
  //           ipsum eu nunc commodo posuere et sit amet ligula.<br/><br/>
  //           Images from: <a className="text-orange-500 underline" href="https://undraw.co/">undraw.co</a></p>
  //       </div>
  //     </div>
  //   </div>
  // }
}
