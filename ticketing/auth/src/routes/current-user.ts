import { Router, Request, Response } from "express";
import { body } from "express-validator";

const router = Router();

router.get(
  "/api/users/currentuser",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  (req: Request, res: Response) => {
    const { email, password } = req.body;
  }
);

export { router as currentUserRouter };
