import Url from '../models/urlModel.js'

export const findByUrl = async ( url ) => {
  return await Url.findOne( { original: url } )
}

export const saveUrl = async ( urlObject ) => {
  return await Url.create( urlObject )
}

export const findByShortId = async ( shortId ) => {
  return await Url.findOne( { shortId } )
}

export const updateClicksUrl = async ( updatedUrl ) => {
  return await Url.findByIdAndUpdate( updatedUrl._id, updatedUrl )
}