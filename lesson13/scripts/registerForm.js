function handleRegistration() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let oldUsersData = localStorage.getItem('usersData');
    oldUsersData = JSON.parse(oldUsersData);            

    let user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
    }
    
    if (oldUsersData === null) {
        localStorage.setItem('usersData', JSON.stringify([user]));
        window.location.href = "./loginForm.html"
    } else {
        
            for (let user of oldUsersData) {
                if (user.username === username) {
                    let errorMessage = document.getElementById("error");
                    errorMessage.style.color = "red";
                    errorMessage.innerHTML = "This username is already used!"
                } else {
                    oldUsersData.push(user);
                    localStorage.setItem('usersData', JSON.stringify(oldUsersData));
                    window.location.href = "./loginForm.html"
                }
                
            }
    }
}