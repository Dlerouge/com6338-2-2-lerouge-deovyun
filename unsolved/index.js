// Your code here
function greet () {
    const name = prompt("What is your name?");
    alert("Hello, " + name)
    const age = parseInt(prompt("How old are you?"), 10);
    const hadBirthday = confirm("Have you had your birthday yet this year?");
    const currentYear = new Date().getFullYear();
    let birthYear;
    if (hadBirthday) {
        birthYear = currentYear - age;
    } else {
        birthYear = currentYear - age - 1;
    }
    alert("You were born in " + birthYear + ".");
}