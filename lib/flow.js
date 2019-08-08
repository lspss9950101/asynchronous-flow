class flow{
	constructor(...args){
		this.args = args;
		this.index = 0;
	}

	flow(...series){
		this.series = series;
		if(!this.series.every((obj) => (typeof obj === 'function')))
			throw new TypeError('types must be functions');
		else this.conduct();
	}

	conduct(err){
		if(this.index >= this.series.length)return;

		if(err)
			throw new Error(err);

		if(this.index < this.series.length - 1)
			this.series[this.index++].apply(this, [...this.args, this.conduct.bind(this)]);
		else this.series[this.index++].apply(this, this.args);
	}
}

module.exports = flow;
