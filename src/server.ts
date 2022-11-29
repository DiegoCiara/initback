import app from './app';
const https = require("https");
import {readFileSync} from "fs"
https
  .createServer({
    key: readFileSync("key.pem"),
    cert: readFileSync("cert.pem"),
  },app)
  .listen(3333, ()=>{
    console.log('server is runing at port 4000')
  });
