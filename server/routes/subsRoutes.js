import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.put('/subscribe/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { subscription } = req.body;
    console.log(subscription)
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        subscription: {
          isSubscribed: subscription.isSubscribed,
          plan: subscription.plan,
          startDate: subscription.startDate,
          endDate: subscription.endDate,
          autoRenew: true
        }
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ 
      message: 'Subscription updated successfully',
      subscription: updatedUser.subscription 
    });
  } catch (error) {
    console.error('Subscription update error:', error);
    res.status(500).json({ error: 'Failed to update subscription' });
  }
});

export default router;