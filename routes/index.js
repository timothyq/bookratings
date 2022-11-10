import express from "express"; // Ge the router instance of Express
import userController from "../controllers/user.js"; // Get all exported functions in the user controller
import bookController from "../controllers/book.js"; // Get all exported functions in the user controller
import reviewController from "../controllers/review.js";
const router = express.Router();

// Map the `signup` request to the signup function
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/insertbook", bookController.insert);
router.post("/getbook", bookController.get);
router.post("/insertreview", reviewController.insert);
router.post("/getallbookreview", reviewController.getallbookreview);
router.post("/getalluserreview", reviewController.getalluserreview);
router.post("/getuserbookreview", reviewController.getuserbookreview);

export default router;
