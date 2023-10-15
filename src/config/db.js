import { connect } from 'mongoose'

export const connectDB = () => {
  connect(
    process.env.MONGO_DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  ).then( () => {
    console.log( 'Conectado a MongoDB' )
  } ).catch( ( error ) => {
    console.log( `Error conectando a MongoDB: ${ error }` )
  } )
}