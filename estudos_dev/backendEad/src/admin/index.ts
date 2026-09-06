// src/adminjs/index.ts
import AdminJs from "adminjs";
import AdminJsExpress from "@adminjs/express";
import AdminJsSequelize from "@adminjs/sequelize";
import { database } from "../database";
import { adminJsResources } from "./resource";
import { where } from "sequelize/dist";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import { locale } from "./locale";
import { Category, Course, Episode } from "../models";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authtenticationOptions } from "./authentication";

AdminJs.registerAdapter(AdminJsSequelize);

export const adminJs = new AdminJs({
  databases: [database],
  rootPath: "/admin",
  resources: adminJsResources,
  dashboard: dashboardOptions,
  locale: locale,
  branding: brandingOptions,
});

// export const adminJsRouter = AdminJsExpress.buildRouter (adminJs)
export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs,
  authtenticationOptions,
  null,
  {
    resave: false,
    saveUninitialized: false,
  }
);
