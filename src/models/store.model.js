import mongoose from 'mongoose'

const storeSchema = new mongoose.Schema({
  name: String,
  id: String,
  phone: String,
  owner: String,
  manager: String,
  memo: String,
  status: { type: String, enum: ['Active', 'Deactive', 'Pending'], default: 'Pending' }
})

export default mongoose.model('Store', storeSchema)
