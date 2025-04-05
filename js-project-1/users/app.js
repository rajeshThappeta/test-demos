let usersCards = document.querySelector('.users-cards');

let usersList = [];

//fetch data
async function fetchUsers() {
    let res = await fetch('https://reqres.in/api/users?page=2');
    let usersInfo = await res.json();
    usersList = usersInfo.data;
    displayUsersInTable(usersList)
}


function displayUsersInTable(usersList) {

    //clear existing of previous render(this help to start with new users after delete)
    usersCards.innerHTML = null;
    usersList.forEach(user => {

        let userCard = document.createElement("div");

        let button = document.createElement("button");
        button.textContent = 'More >>';

        userCard.setAttribute("class", "user-card");
        userCard.innerHTML = `<img src=${user.avatar} width="150px" height="150px" >
                                   <br>
                                    <button onclick='gotoUser(${JSON.stringify(user)})'>More >></button>
                                     <button onclick='deleteUser(${JSON.stringify(user)})'>x</button>
                                    `

        usersCards.appendChild(userCard);


    });





}

// document.addEventListener('DOMContentLoaded',()=>{
//     // fetchUsers()
// },false)

fetchUsers()


function gotoUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
    window.location = '../user/userPage.html'
}


function deleteUser(user) {
    // console.log(user)
    let remainingUsers = usersList.filter(userObj => user.id !== userObj.id)
    usersList = [...remainingUsers]
    displayUsersInTable(usersList)
}

function showUser(user) {
    console.log("first")
    console.log(user)
}