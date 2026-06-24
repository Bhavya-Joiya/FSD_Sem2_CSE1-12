function check() {
    let n = parseInt(document.getElementById("num").value);

    if (isNaN(n)) {
        document.getElementById("result").innerHTML = "Please enter a number";
        return;
    }

    if (n % 2 === 0) {
        document.getElementById("result").innerHTML = "Even Number";
    } else {
        document.getElementById("result").innerHTML = "Odd Number";
    }
}