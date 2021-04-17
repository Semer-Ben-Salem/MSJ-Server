//  user router

const express = require("express");
const { user } = require("../../configSQL");
const router = express.Router();
// getting the logic from controller
const userController = require("../controllers/signup");

// ************************************** get all users ************************************** \\
router.get("/fetch", userController.getAllUsers);

// ************************************** create one user ************************************** \\
router.post("/create", (req, res) => {
  userController
    .createOneUser(req.body)
    .then(() => {
      res.send({ message: "created" });
    })
    .catch((err) => res.send({ message: "not created" }));
});

// ************************************** get one user by id ************************************** \\
router.put("/oneUser", (req, res) => {
  userController
    .getOneUser(req.body.id)
    .then((data) => {
      res.send({ message: "done" });
    })
    .catch((err) => res.send({ message: "error occured" }));
});

// ************************************** update one by id ************************************** \\
router.put("/update/:id", (req, res) => {
  userController.updateUser(req.params.id, req.body);
});

// ************************************** to do later ************************************** \\
router.post("/auth", function (req, res) {
  res.send("auth");
});

// ************************************** to do later  ************************************** \\

router.get("/profile", userController.getAllUsers);

module.exports = router;
