import { v4 as uuidv4 } from 'uuid'
import { findByShortId, findByUrl, saveUrl, updateClicksUrl } from '../repositories/urlRepository.js'

export const checkUrlAndSave = async ( newUrl ) => {
  const urlExists = await findByUrl( newUrl )

  if ( urlExists ) {
    const { original, shortId } = urlExists
    return { original, shortId }
  }

  const shortIdGen = uuidv4().substring( 0, 8 )
  const urlToSave = { original: newUrl, shortId: shortIdGen }

  const { original, shortId } = await saveUrl( urlToSave )
  return { original, shortId }
}

export const getUrlByShortId = async ( shortId ) => {
  const url = await findUrlExistsByShortId( shortId )

  url.clicks = url.clicks + 1
  await updateClicksUrl( url )

  return `http://${ url.original }`
}

export const getStatisticsByShortId = async ( shortIdSearch ) => {
  const { original, shortId, clicks } = await findUrlExistsByShortId( shortIdSearch )
  return { original, shortId, clicks }
}

const findUrlExistsByShortId = async ( shortId ) => {
  const url = await findByShortId( shortId )

  if ( !url )
    throw new Error( 'Short url not found' )

  return url
}