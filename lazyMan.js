class Lazy {
	constructor(name){
		this.name = name;
		this.todo = [];
		//自我介绍为第一个 如有sleepfirst的话 第二个执行
		this.todo.push(()=>{
			console.log(`Hi! This is ${this.name}!\n`);
			this.next();
		})
		//关键 跳至下个事件循环阶段，执行todo里面的function
		setTimeout(()=>{
			this.next();
		})
	}
	//类似中间件的写法 抽象出来的 不然每个都加很麻烦
	next(){
		const fn = this.todo.shift();
		fn && fn();
	}
	//unshift进去 保证第一个执行 return this是为了链式调用
	sleepFirst(time){
		console.log(`Wake up after ${time}!\n`);
		this.todo.unshift(()=>{
			setTimeout(()=>{
				this.next();
			}, time * 1000);
		})
		return this;
	}
	eat(sth){
		this.todo.push(()=>{
			console.log(`Eat ${sth}!\n`);
			this.next();
		});
		return this;
	}
	sleep(time){
		this.todo.push(()=>{
			console.log(`Wake up after ${time}s!\n`);
			setTimeout(()=>{
				this.next();
			}, time * 1000);
		});
		return this;
	}
}