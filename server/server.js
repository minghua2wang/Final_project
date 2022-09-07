const express = require('express');
const { MongoClient } = require('mongodb');
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const dbFunction = async (dbName) => {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db(dbName);
    console.log('connected!');

    const users = await db.collection("users").find().toArray();
    console.log(users);

    client.close();
    console.log("disconnected!");
};

dbFunction("minghua");
