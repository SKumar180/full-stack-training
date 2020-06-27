/*function sayHello(name) {
    console.log('Hello ' + name);
}
//sayHello('Shubham');
console.log(window);*/
/*these are all global variables
console.log(); //global

setTimeout();
clearTimeout();

setInterval()//used to call function repeatedly after a delay
clearInterval()//used to stop calling the function repeatedly
window.console.log();//browser provide this window object
window.setTimeout()
var message= '';
window.message
global.console.log()
global.setTimeout()
*/
/*var message= '';
console.log(global.message);//answer will be undefined
console.log(module);*/
/*var*/ /*const logger*/
//const log = require('./logger');
//logger=1;
//console.log(logger);
/*logger.*/
//log('message');
/*const path = require('path');
var pathObj = path.parse(_filename);
console.log(pathObj);*/
/*const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);*/
/*const fs = require('fs');
const files= fs.readdirSync('./');
console.log(files);
fs.readdir('./', function(err, files){// if we replace ./ by $ then we get error
if(err) console.log('Error', err);
else console.log('Result', files);
});*/
/*const EventEmitter = require('events');
//const emitter = new EventEmitter();//we don't need emitter object

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
/*emitter*///logger.on('messageLogged', (arg) => {//here we replace emitter with logger since we don't need this.
    //console.log('Listener called', arg);
//});
//here it only print message in logger.js ,it didn't going to caught eventlistener

//logger.log('message');*/

const  http = require('http');

const server=http.createServer((req, res) => {
    if(req.url==='/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url=== '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});//here server is object which store the result aftercreateServer() is executed and also a event emitter which can use addListener,emit(),on() etc.

//server.on('connection', (socket) => {
   // console.log('New connection...');
//})
server.listen(3000);

console.log('Listening on port 3000...');

//Making  a noise, produce - signalling