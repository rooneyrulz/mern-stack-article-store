const http = require("http");
const App = require("../app");

const server = http.createServer(App);

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`server started on port ${port}!`));