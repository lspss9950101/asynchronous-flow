# Installation #
```
npm install asynchronous-flow
```
# Usage #
## Import ##
```
var flow = require('asynchronous-flow');
```
## Instantiate ##
```
var asyncSeries = new flow();
```
## Additional Config ##
```
asyncSeries.setArgs(/*args*/)
	.setErrorHandler(/*handler function*/);
```
### setArgs ###
Set the arguments passed through every function.
Can passed multiple arguments.
### setErrorHandler ###
Set the handler function to handle error thrown by next(err).
## Asynchronous Function ##
The last argument of target function must be a function next.(Similar to Express)
## Example ##
```
var flow = require('./../index.js');

function func1(arg, next){
	console.log(arg.val++);
	next();
}

function func2(arg, next){
	console.log(arg.val++);
	next('error test');
}

var args = {val: 0};

var tmp = new flow();
tmp.setArgs(args)
	.setErrorHandler(() => {console.log('Terminated')})
	.flow(func1, func2, (arg) => {
		console.log(arg.val);
	});
```
