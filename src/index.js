const express = require("express");
const Gun = require("gun");

const app = express();
const port = 3000;

app.use(Gun.serve);

const server = app.listen(port, () => console.log("Server on port", port));

Gun({ web: server, radisk: false });
