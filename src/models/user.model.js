import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },  // 로그인 아이디
  name: { type: String, required: true },                    // 실제 이름
  password: { type: String, required: true },
  stores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Store' }], // 관리하는 상점 목록
  status: {
    type: String,
    enum: ['active', 'inactive', 'dormant', 'terminated'],
    default: 'active'
  },
}, { timestamps: true });

// 비밀번호 암호화
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 비밀번호 비교 메소드
userSchema.methods.matchPassword = async function(enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);
