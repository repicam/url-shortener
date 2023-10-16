const sanitizeUrl = ( url ) => {
  if ( url.startsWith( 'https' ) )
    return url.replace( 'https://', '' )
  
  if ( url.startsWith( 'http' ) )
    return url.replace( 'http://', '' )

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
        res.status( 404 ).send( { "error": "URL not exist" } )
      }
    } )
    .catch( error => {
      res.status( 404 ).send( { "error": "URL not exist" } )
    } )
}