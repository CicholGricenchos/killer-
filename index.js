var killerqueen = {
	sheerHeartAttack(){
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

		Promise.immediately = function(){
			return new Promise(resolve => resolve())
		}
	},

	eachFrame(callback){
		var handler = function(){
			if(callback() != false){
				requestAnimationFrame(handler)
			}
		}
		requestAnimationFrame(handler)
	}
}

module.exports = killerqueen