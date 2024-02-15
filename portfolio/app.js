const next = require("next");
require("dotenv").config();

const port = process.env.PORT || "8080";
const dev = process.env.NODE_ENV === "development";

const app = next({dev});
const handle = app.getRequestHandler();
const { createServer } = require("http");
const { parse } = require("url");

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const log = {
      rpk: {
        log: {
          level: "info",
          type: "access",
          timestamp: new Date(),
        },
        req: {
          url: req.url,
          headers: {
            host: req.headers.host,
            "user-agent": req.headers["user-agent"],
            accept: req.headers.accept,
          },
          method: req.method,
          httpVersion: "1.1",
          originalUrl: req.headers.referer,
        },
      },
    };
    
    console.log(JSON.stringify(log));
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`>> Ready on http://localhost:${port}`);
  });
});


