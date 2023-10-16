import { model, Schema } from "mongoose"

const urlSchema = new Schema( {
  original: {
    type: String,
    required: true,
    unique: true
  },
  shortId: {
    type: String,
    required: true
  },
  clicks: {
    type: Number,
    default: 0
  },
}, {
  timestamps: true,
  versionKey: false
} )

const Url = model( 'Url', urlSchema )

export default Url