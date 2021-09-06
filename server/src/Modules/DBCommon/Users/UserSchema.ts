import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;
import autoIncrement from "mongoose-auto-increment";

const schema = new Schema({
  _id: { type: Number, ref: "user" },
  name: String,
  mode: String,
  age: Number,
  activeSubscription: Boolean,
});

autoIncrement.initialize(mongoose.connection); // 3. initialize autoIncrement
schema.plugin(autoIncrement.plugin, "user"); // 4. use autoIncrement
mongoose.model("user", schema);

export default mongoose.model("users", schema);
