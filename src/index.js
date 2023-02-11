import { config } from "dotenv";
import { connect } from "mongoose";
import express from "express";
import { userRouter } from "./routes/user.js";

// Load configs
config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "";

// Init express server
const app = express();

try {
    await connect(MONGODB_URI);

    app.use(express.json());
    app.use("/users", userRouter);

    // Begin listening
    app.listen(
        PORT,
        () => console.log(`Server listening on port ${PORT}`)
    );
}

catch (err) {
    console.error(err);
}
