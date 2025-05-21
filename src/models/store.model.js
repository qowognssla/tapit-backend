import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const storeSchema = new mongoose.Schema({
  storeId: { type: String, required: true, unique: true },  // 로그인 아이디 (상점 전용)
  name: { type: String, required: true },                   // 상점명
  owner: { type: String, required: true },               // 상점주 이름
  password: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  memo: { type: String },
  managers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // 연결된 관리자
  status: {
    type: String,
    enum: ['active', 'inactive', 'dormant', 'terminated'],
    default: 'active'
  },
}, { timestamps: true });

// 비밀번호 암호화
storeSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 비밀번호 비교 메소드
storeSchema.methods.matchPassword = async function(enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('Store', storeSchema);
