let data = {price: 5, quantity: 2}
let target, total, salePrice

class Dep {
constructor(){
this.subscribers = []  //our storage
}
depend() {
if(target && !this.subscribers.includes(target)){ //if there is a target & we dont already have it
this.subscribers.push(target) //add it to subscribers
}
}
notify(){
this.subscribers.forEach(sub => sub()) //run all our subscribers
}
}

Object.keys(data).forEach(key => {
let internalValue = data[key]

const dep = new Dep()

Object.defineProperty(data, key, {
get(){
dep.depend() // the target we running
return internalValue
},
set(newVal){
internalValue = newVal
dep.notify() // return saved targets
}
})
})

function watcher(myFunc){
target = myFunc
target()
target = null
}

watcher(() => {
total = data.price * data.quantity
})

watcher(() => {
salePrice = data.price * 0.9
})
