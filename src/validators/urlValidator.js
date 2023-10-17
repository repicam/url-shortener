const sanitizeUrl = ( url ) => {
  if ( url.startsWith( 'https' ) )
    url = url.replace( 'https://', '' )
  
  if ( url.startsWith( 'http' ) )
    url = url.replace( 'http://', '' )

  if ( url.endsWith( '/' ) )
    url = url.slice( 0, -1 )

  return url
}

export const fetchTest = ( req, res, next ) => {
  const url = sanitizeUrl( req.body.url )
  const urlToFetch = `http://${ url }`
  fetch( urlToFetch )
    .then( response => {
      if ( response.ok ) {
        req.urlSanitized = url
        next()
      } else {
        res.status( 404 ).send( { "error": "URL doesn't respond" } )
      }
    } )
    .catch( error => {
      res.status( 404 ).send( { "error": `URL not exist: ${error.message}` } )
    } )
}