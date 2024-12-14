const mongoose = require('mongoose');

const BlacklistTokenSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now , expires:86400},

});

// Create an index on the expiresAt field for efficient querying
//jwtBlacklistSchema.index({ expiresAt: 1 });

//const JwtBlacklist = mongoose.model('JwtBlacklist', jwtBlacklistSchema);


module.exports = mongoose.model('BlacklistToken',BlacklistTokenSchema);