import debug from "debug";
import app from "./app";
import dotenv from "dotenv";
import http from "http";
import env from "../src/config/enviroment";

dotenv.config();

const logger = debug("log");
const PORT = env.PORT;
const server = http.createServer(app);

server.listen(PORT, () => {
  logger(`Find me on port on port ${PORT}`);
});
