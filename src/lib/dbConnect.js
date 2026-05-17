import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

/**
 * Next.js-এ প্রতিবার রিলোডে যেন নতুন করে ডাটাবেজ কানেকশন তৈরি না হয়, 
 * সেজন্য কানেকশনটি গ্লোবাল ক্যাশে (Global Cache) সেভ করে রাখা হয়।
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log("🚀 MongoDB Connected Successfully!");
      return mongooseInstance;
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;