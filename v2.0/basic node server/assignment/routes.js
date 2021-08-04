const fs = require('fs');


function requestHandler(req,res){
    const url = req.url;
    const method = req.method;


    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/create-users" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
      }

      if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><ul><li>User1</li><li>User2</li></ul></body>');
        res.write('</html>');
        return res.end();
      }



      if (url === '/create-users' && method === 'POST') {
        const body = []
        req.on('data',(chunks)=>{
          body.push(chunks);
        });
    
       return req.on('end',()=>{
          const parsedString = Buffer.concat(body).toString();
          const message = parsedString.split('=')[1];
          
            console.log(message);


          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        });
    }


}



module.exports = requestHandler;