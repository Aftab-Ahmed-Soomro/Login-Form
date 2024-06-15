function Login() {
    window.location.href = 'login.html';
}

function Login2() {
    event.preventDefault();
    // let dbEmail = "aftab.ahmed@gmail.com";
    // let dbPassword = "12345";
    let userEmail = document.getElementById("email");
    let userpassword = document.getElementById("password");
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let error = document.getElementById('error');

    // if (userEmail === dbEmail && userpassword.value === dbPassword) {
    //     if (userpassword.length < 5) {
    //         alert("password must be greater than 4");
    //     }
    //     else {
    //         window.location.href = 'task.html';
    //     }
    //     // window.location.href = 'task.html';
    // }
    // else {
    //     alert("Incorrect Credentials");
    // }

    if (emailRegex.test(userEmail.value) || passwordRegex.test(userpassword.value)) {
        if (emailRegex.test(userEmail.value)) {
            if (passwordRegex.test(userpassword.value)) {
                event.preventDefault();
                error.innerText = '';
                Swal.fire({
                    icon: "success",
                    title: "LOGIN !",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else {
                event.preventDefault();
                error.innerText = 'Incorrect Password';
            }
        }
        else {
            event.preventDefault();
            error.innerText = 'Incorrect Email';
        }
    }
    else {
        event.preventDefault();
        error.innerText = 'Incorrect Credentials';
    }
}

let isOpen = true;
function eyeOpenClose() {
    let eye = document.getElementById('eye');
    isOpen = !isOpen
    if (isOpen) {
        eye.className = "fa-solid fa-eye";
        password.type = 'text';
    }
    else {
        eye.className = "fa-solid fa-eye-slash";
        password.type = 'password';
    }
}