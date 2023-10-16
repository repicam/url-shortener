import { checkUrlAndSave, getStatisticsByShortId, getUrlByShortId } from '../services/urlService.js'

export const getUrl = async ( short ) => {
  return await getUrlByShortId( short )
}

export const saveUrl = async ( newUrl ) => {
  return await checkUrlAndSave( newUrl )
}

export const getUrlStatistics = async ( short ) => {
  return await getStatisticsByShortId( short )
}