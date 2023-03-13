import express from "express";

const configViewEngine = (app) => {
  app.use(express.static(".src/public"));
  app.set("view engine", "ejs"); //can code js in html file
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
