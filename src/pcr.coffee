request = require "request"

class PCR
  apiHost: "http://api.penncoursereview.com/v1/"

  constructor: (@token) ->
    if not @token
      @token = "public"

  api: (endpoint, params, cb) ->
    # Optional params argument
    if typeof params is "function"
      cb = params
      params = {}
    params.token = @token

    request
      url: "#{@apiHost}#{endpoint}"
      method: "GET"
      qs: params
    , (err, body, response) ->
      json = JSON.parse(response)
      if err
        throw err
      cb json
    return
