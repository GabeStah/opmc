import React, { Component } from "react"
import PostCard from "./postCard"

export default class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: props.posts || [],
    }
  }

  render() {
    return (
      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Blog Posts
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>
          {this.state.posts.map(post => {
            return <PostCard key={post.guid} post={post} />
          })}
          {/*<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">*/}
          {/*  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">*/}
          {/*    <a href="/" className="flex flex-wrap no-underline hover:no-underline">*/}
          {/*      <p className="w-full text-gray-600 text-xs md:text-sm px-6">Title B</p>*/}
          {/*      <div className="w-full font-bold text-xl text-gray-800 px-6">Lorem ipsum dolor sit amet.</div>*/}
          {/*      <p className="text-gray-800 text-base px-6 mb-5">*/}
          {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et*/}
          {/*        sit amet ligula.*/}
          {/*      </p>*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">*/}
          {/*    <div className="flex items-center justify-center">*/}
          {/*      <button>Action*/}
          {/*      </button>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">*/}
          {/*  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">*/}
          {/*    <a href="/" className="flex flex-wrap no-underline hover:no-underline">*/}
          {/*      <p className="w-full text-gray-600 text-xs md:text-sm px-6">Title C</p>*/}
          {/*      <div className="w-full font-bold text-xl text-gray-800 px-6">Lorem ipsum dolor sit amet.</div>*/}
          {/*      <p className="text-gray-800 text-base px-6 mb-5">*/}
          {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et*/}
          {/*        sit amet ligula.*/}
          {/*      </p>*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">*/}
          {/*    <div className="flex items-center justify-end">*/}
          {/*      <button>Action*/}
          {/*      </button>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </section>
    )
  }
}
