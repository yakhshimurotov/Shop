import {Schema, model} from "mongoose";

const UserSchema = new Schema({
    fistName:{type: String, requider: true},
    lastName:{type: String, requider: true},
    email:{type: String, requider: true, unique: true},
    password:{type: String, requider: true},
});

const User = model("User", UserSchema);
export default User;