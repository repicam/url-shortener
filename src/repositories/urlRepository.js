import Url from '../models/urlModel.js'

export const findByUrl = async ( url ) => {
  return await Url.find( { original: url } )
}

export const saveUrl = async ( urlObject ) => {
  return await Url.create( urlObject )
}