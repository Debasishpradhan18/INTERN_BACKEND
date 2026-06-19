import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,


    },
    PhoneNo:{
        type: String,
        required: true,

    },
    gender:{
        type: String,
        required: true,
        enum: ["male","female","custom"],


    },
    email:{
        type: String,
        required: true,
        unique: true,


    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user","admin"],
    
    }


}, 


{
    timestamps: true,

});

const UserModel = mongoose.model("User", UserSchema);


export default UserModel;