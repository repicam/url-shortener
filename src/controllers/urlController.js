import { checkUrlAndSave } from '../services/urlService.js'

export const getUrl = async ( short ) => {
  
}

export const saveUrl = async ( newUrl ) => {
  const url = await checkUrlAndSave( newUrl )
  return url
}