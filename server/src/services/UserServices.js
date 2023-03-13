import bcrypt from "bcryptjs";

const db = require("../models");
let salt = bcrypt.genSaltSync(10);

const handleLoginServices = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      const isExist = await checkEmailExist(email);

      if (isExist) {
        let user = await db.User.findOne({
          where: { email: email },
          attributes: ["email", "roleId", "password", "updatedAt", "createdAt"],
          raw: true,
        });
        if (user) {
          let checkPassword = await bcrypt.compareSync(password, user.password);

          if (checkPassword) {
            delete user.password;
            userData.errCode = 0;
            userData.errMessage = "Đăng nhập thành công";
            userData.user = user;
          } else {
            userData.errCode = 4;
            userData.errMessage = "Password không đúng";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User không tồn tại`;
        }
        resolve(userData);
      } else {
        userData.errCode = 1;
        userData.errMessage = `Email không tồn tại`;
      }
      resolve(userData);
    } catch (error) {
      console.log(error);
    }
  });
};
const checkEmailExist = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let isExist = await db.User.findOne({ where: { email: email } });

      if (isExist) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = { handleLoginServices };
