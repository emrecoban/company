import mongoose from "mongoose"

try {
    await mongoose.connect(process.env.MONGO);
} catch (error) {
    handleError(error);
}


