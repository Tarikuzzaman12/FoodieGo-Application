"use server"

import bcrypt from 'bcrypt'
import dbConnect from "@/lib/dbconnect"
import { collectionNameObj } from "@/lib/dbconnect"

export const loginUser = async(payload) => {
  const { email, password } = payload;

  const userCollection = await dbConnect(collectionNameObj.userCollection);

  const user = await userCollection.findOne({ email });
  if (!user) return null;

  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) return null;

  return user;
};
