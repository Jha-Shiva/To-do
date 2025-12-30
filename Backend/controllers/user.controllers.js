import express from 'express';
import User from '../models/user.model.js';
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

export const registerUsers = async (req,res,next) => {
    // take input 
    const {name, email, password, profilePicture} = req.body

    // validation
    if(!name ||!email || !password) return res.status(400).json({message: 'please fill mandatory field'})

    // check existing user
    const existingUser = await User.findOne({ email });
    if(existingUser) return res.status(400).json({message: 'Already exist'})

    // hashed Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    // create new user
    const user = new User({
        name,
        email,
        password: hashedPassword,
        profilePicture
    });
    // save user
    await user.save();
     
    res.status(201).json({
        message : 'new user created',
        user,
    })
}