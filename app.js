const http = require("http");
const port = 3000;

http
  .createServer((req, res) => {
    const responseJson = {
      slackUsername: "Bodeveloper",
      backend: true,
      age: 22,
      bio: "I am a self taught software developer who is passionate about backend development - my fist backend language was PHP then I later moved to using nodejs and c#.",
    };
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(JSON.stringify(responseJson));
    res.end();
  })
  .listen(port, console.log("working"));
