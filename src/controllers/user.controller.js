import User from '../models/user.model.js';

// 사용자 추가
export const createUser = async (req, res) => {
  try {
    const { username, name, password, status, stores } = req.body;
    const newUser = await User.create({ username, name, password, status, stores });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 사용자 목록 조회
export const getUserList = async (req, res) => {
  try {
    const users = await User.find().populate('stores');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 사용자 정보 수정
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 사용자 삭제
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
