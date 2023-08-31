const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const multer = require('multer');

const url = "mongodb+srv://admin:admin123@socailmediaappdb.4kp6w8r.mongodb.net/?retryWrites=true&w=majority"

// Connect to MongoDB
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Event handlers for successful connection and error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images")
    }, 
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
});
console.log("st: ",storage.destination)
const upload = multer(storage);
app.post('/api/upload', upload.single("file"), (req, res) => {
    console.log("st: ",storage.destination)
    try{
        return res.status(200).json("File uploaded successfully");
    }catch(err){
        res.status(500).json(err);
    } 
});


app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
    console.log('Backend server is running! on 8800');
});

