// 1010

// Greeting Function
function greet() {
    alert("Welcome to my Portfolio!");
}

// Contact Form Function
function submitForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {

        alert("Please fill all fields");
        return false;

    }

    alert("Thank you " + name +
          "! Your message has been submitted.");

    return false;
}
