import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import dbConnect from "./modules/core/db";
import routes from "./modules/core/routes";


const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()
dbConnect()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
routes(app)


app.get("/", (req, res) => {
    res.send("Hello App!");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
// const start = async () => {
//     try {
//         app.listen(PORT, () => {
//             console.log(`Example app listening on port ${PORT}`)
//         })
//     } catch (e) {
//         console.log(e)
//     }
// }
// start()
