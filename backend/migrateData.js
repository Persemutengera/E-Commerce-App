import mongoose from "mongoose";
import "dotenv/config";

const migrate = async () => {
  try {
    // Connect to Atlas (default database doesn't matter)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Access both databases
    const testDb = mongoose.connection.useDb("test");
    const ecommerceDb = mongoose.connection.useDb("e-commerce");

    // Copy products
    const testProducts = await testDb.collection("products").find({}).toArray();

    if (testProducts.length > 0) {
      // Remove _id to avoid duplicate key errors
      testProducts.forEach(doc => delete doc._id);

      await ecommerceDb.collection("products").insertMany(testProducts);
      console.log(` Copied ${testProducts.length} products`);
    } else {
      console.log("No products found in test database.");
    }

    // Copy users
    const testUsers = await testDb.collection("users").find({}).toArray();

    if (testUsers.length > 0) {
      testUsers.forEach(doc => delete doc._id);

      await ecommerceDb.collection("users").insertMany(testUsers);
      console.log(` Copied ${testUsers.length} users`);
    } else {
      console.log("No users found in test database.");
    }

    console.log(" Migration completed successfully!");
    process.exit(0);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

migrate();