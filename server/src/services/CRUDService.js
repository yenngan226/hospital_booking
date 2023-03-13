import bcrypt from "bcryptjs";
import db from "../models/index";
import omit from "lodash/omit";

let salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashedPW = await hashUserPassword(data.password);
      const newUser = {
        address: data.address,
        password: hashedPW,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        gender: data.gender === 1 ? true : false,
        roleId: data.roleId,
        phoneNumber: data.phoneNumber,
      };
      await db.User.create(newUser);
      delete newUser.password;
      resolve(newUser);
      console.log("hashpw");
      console.log(hashedPW);
    } catch (error) {
      console.log(error);
    }
  });
};

const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPW = bcrypt.hashSync(password, salt);
      resolve(hashPW);
    } catch (error) {}
  });
};

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    try {
      const users = db.User.findAll({ raw: true });
      resolve(users);
    } catch (error) {
      console.log(error);
    }
  });
};

const getUserInfoById = (id) => {
  return new Promise((resolve, reject) => {
    try {
      const userInfor = db.User.findOne({ where: { id: id }, raw: true });
      if (userInfor) {
        resolve(userInfor);
      } else {
        resolve({});
      }
    } catch (error) {
      error;
    }
  });
};
const updateUserInfor = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: id } });
      if (user) {
        user.set(data);
        await user.save();
        user = user.toJSON();
        delete user.password;
        resolve(user);
      } else {
        resolve("User not found");
      }
    } catch (error) {
      console.log(error);
    }
  });
};

const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({ where: { id: id } });
      if (user) {
        await user.destroy();
        resolve({ message: `Deleted user id ${id}` });
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  createNewUser,
  getAllUsers,
  getUserInfoById,
  updateUserInfor,
  deleteUser,
};
