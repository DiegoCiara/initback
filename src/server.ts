import app from './app';
const https = require("https");
import {readFileSync} from "fs"
import {join} from "path"
https
  .createServer({
    key: readFileSync(join(__dirname, "key.pem")),
    cert: readFileSync(join(__dirname, "cert.pem")),
  },app)
  .listen(3333, ()=>{
    console.log('server is runing at port 4000')
  });
