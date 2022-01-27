const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000 ; 

app.get("/", (req,res) => {
    res.status(200).send("<h1>Hello from </h1>");
});
app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
      username: "Adarshofficial",
      folowers: 66,
      follows: 70,
    };
  
    res.status(200).json(instaSocial);
  });
  
  app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
      username: "AdarshPage",
      folowers: 88,
      follows: 10,
    };
  
    res.status(200).json(instaSocial);
  });
  
  app.get("/api/v1/linkedin", (req, res) => {
    const instaSocial = {
      username: "Adarsh S Nair",
      folowers: 800,
      follows: 80,
    };
  
    res.status(200).json(instaSocial);
  });
  
  app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({ param: req.params.token });
  });
  

app.listen(PORT,() => {
    console.log(`server is running at ${PORT}`);
});