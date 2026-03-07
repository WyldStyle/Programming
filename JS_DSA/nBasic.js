//  basic Save
function greet(name) {
  console.log('using ctrl + c/ d , .save, .load, .editor');
}

//  Web Server in Node.js
import { createServer } from 'http'; // http is a module
const server = createServer((request, response) => {
  response.write('hello world this is me')
  response.end();
}); // createServer is a fn in http module
server.listen(8081, () => {
  //() is a callback fn will take no parameter
  console.log(
    `Server is listening to 
    http://localhost:${server.address().port}`,
    // $ string template
  );
});



