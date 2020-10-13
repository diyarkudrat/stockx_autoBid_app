const express = require('express');

app = express();

cors = require('cors');
app.use(cors());


app.get("/", (req, res) => {
    res.send({ message: "Hello World"});
});



port = process.env.PORT || 5000;
app.listen(port, () => console.log("Backend server listening on port:" + port));