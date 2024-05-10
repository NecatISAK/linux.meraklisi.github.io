function showContent(haberId) {
    const content = document.getElementById(haberId);
    alert(content.querySelector('.description').innerText);
}
