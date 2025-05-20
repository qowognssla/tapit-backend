import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import Store from '../models/store.model.js';

export const login = async (req, res) => {
  const { username, password, type } = req.body; // type: 'user' 또는 'store'
  const Model = type === 'user' ? User : Store;

  const entity = await Model.findOne(type === 'user' ? { username } : { storeId: username });
  if (!entity || !(await entity.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: entity._id, type },
    process.env.JWT_SECRET,
    { expiresIn: '12h' } // 12시간 세션 유지
  );

  res.json({ token });
};

// 비밀번호 초기화 (간단 버전)
export const resetPassword = async (req, res) => {
  const { username, newPassword, type } = req.body;
  const Model = type === 'user' ? User : Store;

  const entity = await Model.findOne(type === 'user' ? { username } : { storeId: username });
  if (!entity) {
    return res.status(404).json({ message: 'Not found' });
  }

  entity.password = newPassword;
  await entity.save();

  res.json({ message: 'Password reset successful' });
};
