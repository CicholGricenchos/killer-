exports.sheerHeartAttack = function(){
	Object.defineProperty(Object.prototype, 'kq', {
		value: function(func, ...args){
			return func.call(this, this, ...args)
		}
	})

	Object.defineProperty(Function.prototype, 'new', {
		value: function(...args){
			return new this(...args)
		}
	})
}