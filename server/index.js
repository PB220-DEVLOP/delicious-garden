import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


import User from './models/User.js';
import FoodItem from './models/FoodItem.js';
import Table from './models/Table.js';


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('Connected to MongoDB');
})

// api routes starts here


// signup api starts here
app.post('/signup', async (req, res) => {
    const { name, phone, email, password, role } = req.body;

// validation to check if all fields are filled starts here
    const emptyFields = [];

    if (!name) emptyFields.push('name');
    if (!phone) emptyFields.push('phone');
    if (!email) emptyFields.push('email');
    if (!password) emptyFields.push('password');
    if (!role) emptyFields.push('role');

    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(', ')} are required`
        })
    }

// validation to check if all fields are filled ends here


// validation to check if email already exists starts here
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"
        })
    }
// validation to check if email already exists ends here

// validation to check if phone already exists starts here
    const existingUserPhone = await User.findOne({ phone: phone });
    if (existingUserPhone) {
        return res.json({
            success: false,
            message: "Phone already exists"
        })
    }
// validation to check if phone already exists ends here

    const user = new User({
        name: name,
        phone: phone,
        email: email,
        password: password,
        role: role
    })

    const savedUser = await user.save();

    res.json({
        success: true,
        message: "User created successfully",
        data: savedUser
    })
})
// signup api ends here


//  login api starts here
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.json({
            success: false,
            message: "Email and password are required"
        })
    }

    const existingUser = await User.findOne({ email: email, password: password });
    
    if(existingUser){
        return res.json({
            success: true,
            message: "Login successful",
            data: existingUser
        })
    }
    else
    {
        return res.json({
            success: false,
            message: "Invalid email or password"
        })
    }
})
//  login api starts here


app.post("/createFoodItem", async(req,res)=>{
    const {title, description,imgUrl,price,category} = req.body;
    
    const foodItem = new FoodItem({
        title: title,
        description: description,
        imgUrl: imgUrl,
        price: price,
        category: category
    })

    const savedFoodItem = await foodItem.save();

    res.json({
        success: true,
        message: "Food Item created successfully",
        data: savedFoodItem
    })
})


// Food item Search by category
// http://localhost:5000/foodItemsByCategory?category=pizz
app.get("/foodItemsByCategory", async(req, res)=>{
    const {category} = req.query;
  
    const foodItems = await FoodItem.find({
      category: {$regex: category, $options: 'i'}
    })
  
      res.json({
          success: true,
          message: "Food Items fetched successfully",
          data: foodItems
      })
})

// Food item Search by title
// http://localhost:5000/foodItems?title=pizza
app.get("/foodItemsbytitle", async(req, res)=>{
    const {title} = req.query;

    const foodItems = await FoodItem.find({
        title: {$regex: title, $options: 'i'}
    })

    res.json({
        success: true,
        message: "Food Items fetched successfully",
        data: foodItems
    })
})

// Create Table api starts here
app.post("/createTable", async(req,res)=>{
    const {tableNumber} = req.body;

    const existingTable =  await Table.findOne({ tableNumber : tableNumber });
    if(existingTable){ 
        return res.json({
        success : true,
        message : "Table already exists..."
    })
}
    const table = new Table({
        tableNumber : tableNumber,
        occupied : false
    })

    const savedTable = await table.save();
       
    res.json({
        success : true,
        message : "Table created successfully"
    })
})
// Create Table ends here

//  table alredy occupied or present api starts here
app.post("/bookTable", async (req, res) => {
    const { tableNumber, userId } = req.body;

    const existingTable = await Table.findOne({ tableNumber: tableNumber });
    if (existingTable && existingTable.occupied) {
        return res.json({
            success: false,
            message: "Table already occupied"
        })
    }

    if(existingTable){
        existingTable.occupied = true;
        existingTable.occupiedBy = userId;
        await existingTable.save();
    }

    res.json({
        success: true,
        message: "Table booked successfully",
        data: existingTable
    })
})
//  table alredy occupied or present api ends here


// api routes ends here

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})