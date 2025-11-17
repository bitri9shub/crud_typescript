import mongoose from "mongoose"

function connectdb(db_uri: string) {
    mongoose.connect(db_uri, { dbName: 'crud_ts' })
        .then(() => { console.log("db connected") })
        .catch((err) => console.log("db error: ", err))
}

export default connectdb