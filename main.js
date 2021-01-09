menu.onclick = function alertMenu() {
    let ac = document.getElementById('pageTopnav');
}
if(ac.className === 'topnav'){
    ac.className = ac.className + ' responsive';
} else {
    ac = 'topnav';
}