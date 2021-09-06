import { UsersList } from "../../../users";
import User from "./Users/UserSchema";

export async function autoCreateUsers() {
  const userCreated = await User.countDocuments();
  if (userCreated <= 0) {
    for (var i = 0; i < UsersList.length; i++) {
      const newUser = new User(UsersList[i]);
      await newUser.save();
    }
  }
}
