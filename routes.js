const file = require("fs");

const requstHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
  
    if (url === "/") {
      res.setHeader("conte-type", "text/html");
      res.write("<html>");
      res.write("<head><title>NODE.JS</title></head>");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="date" ><button type ="submit">submit</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
  
    const body = [];
  
    if (url === "/message" && method == "POST") {
      req.on("data", (chunk) => {
        body.push(chunk);
        console.log(body);
      });
  
      req.on("end", () => {
        const copy = Buffer.concat(body).toString();
        const message = copy.split("=");
        file.writeFileSync("list-Name", message[1]);
        console.log(copy);
      });
  
      res.setHeader("Location", "/");
      res.statusCode = 302;
    }
  
    res.setHeader("conte-type", "text/html");
    res.write("<html>");
    res.write("<head><title>NODE.JS</title></head>");
    res.write("<body><h1>welcome to NODE JS</h1></body>");
    res.write("</html>");
}

// module.exports = {
//     handler:requstHandler,
//     someText:'welcome  to hello world',
// }

exports.handler=requstHandler;
exports.someText = 'welcome  to hello world';