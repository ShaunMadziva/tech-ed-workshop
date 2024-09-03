import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (request, response) {
  response.json("You are looking at my root route.");
});

app.post("/joke", function (request, response) {
  response.json(request.body); // we are sending back the request, to prove we got it!
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080...");
});
