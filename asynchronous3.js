async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/api/users');
    if (!response.ok) {
        throw new Error('User data contains some error')
    }
    return response.json();
}

// function to display data in HTML
async function displayUserData() {
    const userList = document.getElementById('user-list');
    try{
        const users = await fetchUserData();
        const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`)
        userList.innerHTML = listItems;
    }catch (error) {
        console.log('error fetching data:', error)
        userList.innerHTML = `<li> Error Fetching User data. please try again later. </li>`  // Display an error message in the user-list
    }
}

// Select the 'view' button element
const viewButton = document.getElementById('view');
// Select the 'hide' button element
const hideButton = document.getElementById('hide');
// Select the user list container element
const userList = document.getElementById('user-list');


// Add a click event listener to the 'view' button
viewButton.addEventListener('click', () => {  // Make the the user list container visible
    userList.style.display = 'block'; 
    displayUserData(); // call the function to display user data
});

// Add a click event listener to the 'hide' button
hideButton.addEventListener('click', () => { // Hide the user list container
    userList.style.display = 'none'; 
});