exports.handler = function(event, context, callback) {
  // your server-side functionality
  // console.log(event)
  if (
    event.queryStringParameters.password &&
    event.queryStringParameters.password === process.env.OPMC_MEMBER_PASSWORD
  ) {
    callback(null, {
      statusCode: 200,
      body: "true",
    })
  } else {
    callback(null, {
      statusCode: 200,
      body: "false",
    })
  }
}
