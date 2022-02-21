const express = require("express");
const app = express();
const port = process.env.SYSTEM_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server running at localhost:${port}`));
