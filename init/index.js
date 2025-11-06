const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

main().then(() =>{
    console.log("connected to db");
})
.catch((err) =>{
    console.log(err);
});

async function main(){
    await mongoose.connect(process.env.ATLASDB_URL);
}

const initDb=async () =>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj) => ({
        ...obj,
        owner:'6630c1d75269f567bedaf09c',
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
}

initDb();
