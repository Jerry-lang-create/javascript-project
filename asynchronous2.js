const sampleData = [
    {id:1, name: 'item 1', description: 'Description for item 1'},
    {id:2, name: 'item 2', description: 'Description for item 2'},
    {id:3, name: 'item 3', description: 'Description for item 3'}
]

async function fetchData(){
    console.log('Fetching data ............')

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sampleData)
            console.log('Data successfully fetched', sampleData)
        }, 5000)
    })
}

// fetchData();

async function displayData() {
    const dataList = document.getElementById('data-list')
    try{
        const data = await fetchData()
        const listItems = data.map(item => `<li>${item.name}:${item.description}</li>`).join('');
        dataList.innerHTML = listItems;
    } catch(error) {
        console.log(error)
    }
}


displayData()