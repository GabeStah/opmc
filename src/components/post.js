import React, { useState } from "react"
import moment from "moment"

export default (props) => {
  const [post] = useState(props.post)
  // const data = useStaticQuery(graphql`
  //     query {
  //         image: file(relativePath: { eq: ${post.image} }) {
  //             childImageSharp {
  //                 fluid(maxWidth: 1000) {
  //                     ...GatsbyImageSharpFluid
  //                 }
  //             }
  //         }
  //     }
  // `)
  if (post) {
    return (
      <section className="bg-white py-8">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <div className="w-full sm:w-1/2 p-6">
            {post.image && (
              <img
                src={post.image.replace("static/", "")}
                alt={post.image.alt_text || ""}
              />
            )}
          </div>
          <h1 className="w-full font-bold text-3xl text-gray-800 px-6">
            {post.title}
          </h1>
          <h5 className={"w-full text-sm text-gray-500 px-6"}>
            {moment(post.date).fromNow()}
          </h5>
          <div
            className="text-gray-800 px-6 mb-5"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    )
  } else {
    return (<></>)
  }
}
