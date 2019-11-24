---
path: "/blog/my-first-post"
date: "2019-05-04"
title: "My first blog post"
image: "https://cdn.pixabay.com/photo/2018/07/01/20/01/book-3510326_960_720.jpg"
type: "post"
categories:
  - Featured
---

This is my first test post.

```js
result.data.allWordpressPost.nodes.forEach(post => {
  createPage({
    path: post.path,
    component: path.resolve(`../src/pages/post.js`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      // slug: post.slug,
      // path: post.path,
      post: post,
    },
  })
})
```

## Here's a header

Another thing.
