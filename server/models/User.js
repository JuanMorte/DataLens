import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  subscription: {
    isSubscribed: { type: Boolean, default: false },
    plan: { type: String, default: 'free' },
    startDate: Date,
    endDate: Date,
    autoRenew: { type: Boolean, default: true }
  }, 
  paymentHistory: [{
    amount: Number,
    date: Date,
    plan: String,
    transactionId: String
  }]
}, { timestamps: true });

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

export default mongoose.model('User', UserSchema);