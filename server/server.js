"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.silvester = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var silvester;
(function (silvester) {
    let bombs;
    let port = process.env.PORT;
    if (port == undefined) {
        port = 5005;
    }
    let databaseUrl = "mongodb+srv://MoStein:olympiamuenchen@cluster0.ywjph.mongodb.net/Fireworks?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + port);
        server.listen(port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        bombs = mongoClient.db("Silvester").collection("Fireworks");
    }
    function handleRequest(_request, _response) {
        console.log("Server here, what's up?");
        _request.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeFireworks(url.query);
        }
        _response.end();
    }
    function storeFireworks(_bomb) {
        // console.log("storing now");
        bombs.insertOne(_bomb);
    }
})(silvester = exports.silvester || (exports.silvester = {}));
//# sourceMappingURL=server.js.map