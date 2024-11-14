// Definition: A callback is a function passed into another function as an argument, which is then invoked
// inside the outer function to complete some kind of routine or action.
// Function definition with a callback parameter



function sayHello(name, callback){
    console.log('Hello' + name)
    callback();
}

function sayGoodbye() {
    console.log('Welcome to my website')
}

sayHello("Martins", sayGoodbye);





const greet = (name, callback) => {
    console.log('Hello' + name)
    callback();
}

const question = () => {
    console.log('How are you doing?')
}

greet("Laide", question)



const greetUser = (name, firstCallback, secondcallback) => {
    console.log('Hello' + name)
    firstCallback()
    secondcallback()
}

const welcomeMessage = () =>{
    console.log('Welcome to our app')
}

const offerservice = () => {
    console.log('pls how can we help you')
}

greetUser("martins", welcomeMessage, offerservice)


const user = (name, schoolAndCourse, company) => {
    console.log('My name is ${name}')
    schoolAndCourse()
    company()
}
const schoolAndCourse = ()=> {
    console.log('I am studying frontend development at New Horizons')
}

const company = () => {
    console.log('I will like to work with Amazon')
}
