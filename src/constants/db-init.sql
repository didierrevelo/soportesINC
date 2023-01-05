CREATE DATABASE IF NOT EXISTS `soportesinc`
USE soportesinc

CREATE TABLE items(
  id: int auto_increment primary key,
  reference: text not null,
  name: text not null,
  amount: number not null,
  description: text not null,
  createdAt datetime,
  updatedAt datetime
)
