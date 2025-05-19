import Store from '../models/store.model.js';

export const createStore = async (req, res) => {
  const store = await Store.create(req.body);
  res.status(201).json(store);
};

export const getAllStores = async (req, res) => {
  const stores = await Store.find().populate('managers');
  res.json(stores);
};
