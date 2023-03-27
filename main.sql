/*
 Navicat Premium Data Transfer

 Source Server         : dotnet
 Source Server Type    : SQLite
 Source Server Version : 3030001
 Source Schema         : main

 Target Server Type    : SQLite
 Target Server Version : 3030001
 File Encoding         : 65001

 Date: 15/03/2023 20:41:05
*/

PRAGMA foreign_keys = false;

-- ----------------------------
-- Table structure for Users
-- ----------------------------
DROP TABLE IF EXISTS "Users";
CREATE TABLE "Users" (
  "id" INTEGER NOT NULL,
  "firstName" TEXT,
  "lastName" TEXT,
  "email" TEXT,
  PRIMARY KEY ("id")
);

-- ----------------------------
-- Records of Users
-- ----------------------------
INSERT INTO "Users" VALUES (1, 'Jean', 'Kal', 'jeankal@gmail.com');
INSERT INTO "Users" VALUES (2, 'Denis', 'Loadman', 'denis.loadman@gmail.com');

-- ----------------------------
-- Table structure for sqlite_sequence
-- ----------------------------
DROP TABLE IF EXISTS "sqlite_sequence";
CREATE TABLE "sqlite_sequence" (
  "name",
  "seq"
);

-- ----------------------------
-- Records of sqlite_sequence
-- ----------------------------

PRAGMA foreign_keys = true;
