setTimeout(() => {
    console.log('This will log in 5 seconds')
}, 2000);


function greet(){
    console.log('Hello from greet function')
}
setTimeout(greet, 8000)




setTimeout(() => {
    console.log('data fetched')
} )

console.log('data fetching')

setTimeout(() => {
    console.log('data')
}, 4000)


const sampleData = [
    {id:1, name: 'item 1', description: 'Description for item 1'},
    {id:2, name: 'item 2', description: 'Description for item 2'},
    {id:3, name: 'item 3', description: 'Description for item 3'}
]

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(sampleData)
        }, 2000)
    })
}