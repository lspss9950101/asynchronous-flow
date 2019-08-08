class flow{
	constructor(){
		this.index = 0;
		this.args = [];
		this.err = () => {};
	}

	setArgs(...args){
		this.args = args;
		return this;
	}

	setErrorHandler(errorHandler){
		this.err = errorHandler;
		return this;
	}

	flow(...series){
		this.series = series;
		if(!this.series.every((obj) => (typeof obj === 'function')))
			throw new TypeError('types must be functions');
		else this.conduct();
	}

	conduct(err){
		if(this.index >= this.series.length)return;

		if(err){
			this.err();
			return;
		}

		if(this.index < this.series.length - 1)
			this.series[this.index++].apply(this, [...this.args, this.conduct.bind(this)]);
		else this.series[this.index++].apply(this, this.args);
	}
}

module.exports = flow;
