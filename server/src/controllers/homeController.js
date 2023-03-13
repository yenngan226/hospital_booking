import CRUDService from "../services/CRUDService";
const db = require("../models");

let getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (error) {}
};

const getCRUD = (req, res) => {
  // await CRUDService.createNewUser(req.body);
  return res.send("Get method:post crud from server");
};
const postCRUD = async (req, res) => {
  let response = await CRUDService.createNewUser(req.body);

  return res.send(response);
};

const readCRUD = async (req, res) => {
  const users = await CRUDService.getAllUsers();
  console.log(users);
  return res.send(users);
};
const getUserInfo = async (req, res) => {
  const id = req.params.userId;
  if (id) {
    const response = await CRUDService.getUserInfoById(id);
    if (response) {
      return res.send(response);
    } else {
      return res.send("User not found");
    }
  } else {
    return res.send("User not found");
  }
};

const updateUserInfo = async (req, res) => {
  const id = req.params.userId;
  const data = req.body;
  if (id) {
    const response = await CRUDService.updateUserInfor(id, data);
    if (response) {
      return res.send({ message: "update done", response: response });
    } else {
      return res.send("User not found");
    }
  } else {
    return res.send("User not found");
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.userId;
  const message = await CRUDService.deleteUser(id);
  return res.send(message);
};

module.exports = {
  getHomePage,
  postCRUD,
  getCRUD,
  readCRUD,
  getUserInfo,
  updateUserInfo,
  deleteUser,
};
