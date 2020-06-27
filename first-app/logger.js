//(function (exports, require, module, _filename, _dirname) {
    //console.log(_filename);
    //console.log(_dirname);
/*var url = 'http://mylogger.io/log';

function log(message) {
    //Send an HTTP request
    console.log(message);
}*/

/*module.exports.log = log;or*/
// module.exports=log;
//exports.log=log;//or this but cannot exports=log;
//})for demonstration
//module.exports.endPoint = url;


const EventEmitter = require('events');
//const emitter = new EventEmitter();//Now we don't need emitter object because we are extending all it's properties inside logger.
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter
{
    /*function*/ log(message) {//here we didn't need keyword function when we are putting inside class,because inside class it is consider as method.
        //Send an HTTP request
        console.log(message);
    
        //Raise a Event
    /*emitter*/this.emit('messageLogged', { id:1, url: 'http://' });//here we replace emitter with this keyword which is act as object since we didn't need event emitter object.
    }
}


module.exports=Logger;