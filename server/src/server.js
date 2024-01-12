require('dotenv').config();
const connectDB = require("./db/index");
const app = require("./app");
const port = process.env.PORT || 8000;


connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port : ${port}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
