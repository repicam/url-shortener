import { Router } from "express"
import { getUrl, saveUrl } from '../controllers/urlController.js'
import { fetchTest } from '../validators/urlValidator.js'

const router = Router()

router.get( '/:short', async ( req, res ) => {
  const { short } = req.params
  try {
    const url = await getUrl( short )
    res.redirect( url )
  } catch ( error ) {
    res.status( 404 ).send( { 'error': error } )
  }
} )

router.post( '/', fetchTest, async ( req, res ) => {
  const { urlSanitized } = req
  try {
    const shortUrl = await saveUrl( urlSanitized )
    res.send( shortUrl )
  } catch ( error ) {
    res.status( 404 ).send( { 'error': error } )
  }
} )

router.get( '/:short/statistics', async ( req, res ) => {
  const { short } = req.params
  try {
    const urlInfo = await getUrl( short )
    res.send( urlInfo )
  } catch ( error ) {
    res.status( 404 ).send( { 'error': error } )
  }
} )

export default router