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
