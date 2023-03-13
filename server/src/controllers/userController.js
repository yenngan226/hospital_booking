import UserServices from "../services/UserServices";

const db = require("../models");

let handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(500).json({
      errCode: 1,
      errMsg: "Không được để trống email",
    });
  } else if (!password) {
    return res.status(500).json({
      errCode: 1,
      errMsg: "Không được để trống password",
    });
  }
  try {
    let userData = await UserServices.handleLoginServices(email, password);
    return res.status(200).json({
      errCode: userData.errCode,
      errMessage: userData.errMessage,
      data: userData.user ? userData.user : {},
    });
  } catch (error) {}
};

module.exports = {
  handleLogin,
};
