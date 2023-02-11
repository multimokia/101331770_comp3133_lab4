import { UserModel } from "../schema.js";

export async function getUsers() {
    return await UserModel.find();
}

export async function createMultipleUsers(users) {
    return await UserModel.insertMany(users);
}
