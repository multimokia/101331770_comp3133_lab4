import { Router } from "express";
import { createMultipleUsers } from "../services/users.service.js";

const router = Router();

router.route("/")
    .post(async (req, res) => {
        try {
            return res.status(201).json(await createMultipleUsers(req.body));
        }

        catch (err) {
            return res.status(500).json({ error: err.message });
        }
    });

export { router as userRouter };
