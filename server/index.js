const PORT = 3300 || process.env.PORT;
const server = require("./server");

server.listen(PORT, () => {
  console.log(`The server is Listening on Port:${PORT}`);
});
