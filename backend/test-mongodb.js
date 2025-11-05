// test-mongodb.js
// Quick script to test MongoDB connection
require('dotenv').config();
const mongoose = require('mongoose');

console.log('🔍 Testing MongoDB Connection...\n');

// Show what we're connecting to (hide password)
if (process.env.MONGO_URI) {
  const hiddenUri = process.env.MONGO_URI.replace(/:([^:@]+)@/, ':****@');
  console.log('Connection String:', hiddenUri);
} else {
  console.log('❌ MONGO_URI not found in .env file');
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('\n✅ MongoDB Connected Successfully!');
    console.log('✅ Database:', mongoose.connection.name);
    console.log('✅ Host:', mongoose.connection.host);
    console.log('\n🎉 Your backend is ready to start!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('\n❌ MongoDB Connection Failed!');
    console.error('Error:', err.message);
    console.log('\n💡 Troubleshooting:');
    
    if (err.message.includes('bad auth') || err.message.includes('authentication failed')) {
      console.log('   - Check your username and password in MONGO_URI');
      console.log('   - Make sure user has database permissions in MongoDB Atlas');
      console.log('   - URL-encode special characters in password');
    } else if (err.message.includes('ENOTFOUND') || err.message.includes('getaddrinfo')) {
      console.log('   - Check your internet connection');
      console.log('   - Verify the MongoDB cluster URL is correct');
    } else if (err.message.includes('IP') || err.message.includes('whitelist')) {
      console.log('   - Whitelist your IP address in MongoDB Atlas Network Access');
    }
    
    console.log('\n📚 See BACKEND_TROUBLESHOOTING.md for more help');
    process.exit(1);
  });
