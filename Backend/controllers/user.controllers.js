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
};

export const signInUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    // validation
    if(!name || !email || !password) res.status(400).json({message: 'All Field required'});
    // user check
    const user = await User.findOne({email});
    // validat user
    if(!user) res.status(400).json({message: 'user not found'});

    res.status(200).json({
        message: 'Logged In successfull',
        user
    })
}