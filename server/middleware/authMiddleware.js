import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config( {path: '.../.env'} )

export const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) throw new Error();

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};