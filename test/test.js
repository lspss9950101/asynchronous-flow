var flow = require('./../index.js');

function func1(arg, next){
	console.log(arg.val++);
	next();
}

function func2(arg, next){
	console.log(arg.val++);
	next();
}

var arg = {val: 0};

var tmp = new flow(arg);
tmp.flow(func1, func2, (arg) => {
	console.log(arg.val);
});
