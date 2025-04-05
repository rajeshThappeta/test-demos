let user = JSON.parse(localStorage.getItem('user'));
let backButton=document.querySelector(".back")

let userDiv = document.querySelector('.user');

userDiv.innerHTML = `<img src=${user.avatar} width='600px'>
                    <p class="id">ID : ${user.id} </p>
                    <h1 class="name">${user.first_name} ${user.last_name}</h1>
                     <p class="email">${user.email} </p>
                    `

backButton.addEventListener('click',()=>{
    window.location='../users/index.html'
})