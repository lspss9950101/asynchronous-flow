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
