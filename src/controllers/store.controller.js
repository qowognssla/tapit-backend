import Store from '../models/store.model.js';

export const createStore = async (req, res) => {
  const store = await Store.create(req.body);
  res.status(201).json(store);
};

export const getAllStores = async (req, res) => {
  const stores = await Store.find().populate('managers');
  res.json(stores);
};

export const updateStore = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Store.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteStore = async (req, res) => {
  try {
    const { id } = req.params;
    await Store.findByIdAndDelete(id);
    res.status(200).json({ message: 'Deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};