import dotenv from "dotenv"
import path from "path"
import app from "./config/server";
import connectdb from "./config/db";


dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

app.listen(process.env.PORT, () => {
    if (!process.env.MONGO_URI) {
        console.log("MONGO_URI undefined.")
        process.exit(1)
    }
    connectdb(process.env.MONGO_URI)
    console.log(`http://127.0.0.1:${process.env.PORT}/`);
});