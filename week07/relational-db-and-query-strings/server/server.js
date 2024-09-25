import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const port = "8080"
const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

app.get("/", function (request, response) {
    response.json("You are looking at my root route.");
  });


app.listen(port, function () {
    console.log(`Server is listening on port ${port}...`);
  });
