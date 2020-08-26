function randomNumber() {
    return Math.ceil(Math.random() * 999999);
}

document.getElementById('btn').addEventListener('click', function () {
    document.getElementById('result').innerText = randomNumber();
});