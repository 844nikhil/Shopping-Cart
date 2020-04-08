const mongoose = require('mongoose')
mongoose.set('debug', true) 

const User = mongoose.model("Users")
const createUser = (data) => {
    console.log("inside post")
    const user = new User(data);
    
    return user.save();
}

const getAllUsers = () => User.find();

const getUserById = (id) => User.findOne({ _id: id });

const deleteUser = (id) => User.deleteOne({ _id: id });

const editUser = (user, data) => {
    const { firstName, lastName, email, phoneNo } = data;
    const currentUser = user;
    currentUser.firstName = firstName;
    currentUser.lastName = lastName;
    currentUser.phoneNo = phoneNo;
    currentUser.email = email;
    return user.save();
}

module.exports = { createUser, getAllUsers, getUserById, deleteUser, editUser }
