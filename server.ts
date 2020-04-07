import * as http from "http";

let server = http.createServer();
server.on("request", listener);
server.listen(80);

function listener(req: http.IncomingMessage, res: http.ServerResponse) {
    let data: Array<Buffer> = [];
    if (req.url === "/addokay" && req.method === "GET") {
        req.on("data", (chunk: string | Buffer) => {
            if(Buffer.isBuffer(chunk)) {
                data.push(chunk);
            }
        });
        req.on("end", () => {
            let finalBuffer = Buffer.concat(data);
            let result = finalBuffer.toString();
            res.end(result + "\nOKAY\n");        
        })
    } else if(req.url === "/" && req.method === "GET") {
        res.end("HELLO. IT IS OUR INDEX FILE\n");
    } else {
        res.end("PAGE NOT FOUND\n");
    }
}
