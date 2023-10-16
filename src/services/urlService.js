import { v4 as uuidv4 } from 'uuid'
import { findByUrl, saveUrl } from '../repositories/urlRepository.js'

export const checkUrlAndSave = async ( newUrl ) => {
  const urlExists = await findByUrl( newUrl )

  if ( urlExists.length !== 0 ) {
    const { original, shortId } = urlExists[ 0 ]
    return { original, shortId }
  }

  const shortIdGen = uuidv4().substring( 0, 8 )
  const urlToSave = { original: newUrl, shortId: shortIdGen }

  const { original, shortId } = await saveUrl( urlToSave )
  return { original, shortId }
}