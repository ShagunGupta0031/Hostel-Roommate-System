const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req,res)=>{
    try{
        console.log('Signup request:', req.body);
        const {name,email,password,regno,gender,year,branch,state,city} = req.body;
        if(!name||!email||!password||!regno) return res.status(400).json({message:'Fields missing'});
        const exists = await User.findOne({email});
        if(exists) return res.status(400).json({message:'Email already registered'});
        const hashed = await bcrypt.hash(password,10);
        const user = await User.create({name,email,password:hashed,regno,gender,year,branch,state,city,habits:[]});
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET||'secret123');
        res.json({token, user});
    }catch(err){
        console.log('Signup error:', err.message);
        res.status(500).json({message:err.message});
    }
};

exports.login = async (req,res)=>{
    try{
        console.log('Login request:', req.body);
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message:'User not found'});
        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(400).json({message:'Wrong password'});
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET||'secret123');
        res.json({token, user});
    }catch(err){
        console.log('Login error:', err.message);
        res.status(500).json({message:err.message});
    }
};