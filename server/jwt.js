import crypto from 'crypto';

// Generate a random string of 32 bytes (256 bits)
const jwtSecretKey = crypto.randomBytes(32).toString('hex');

console.log('JWT Secret Key:', jwtSecretKey);
