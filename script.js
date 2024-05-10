// Haber içeriğini göstermek için
function showContent(haberId) {
    // Haberin içeriğini al
    const content = document.getElementById(haberId);

    // İçerik div'ini göster
    content.style.display = 'block';

    // Tüm diğer haber kartlarını gizle
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.id !== haberId) {
            card.style.display = 'none';
        }
    });
}

// Geri butonuna tıklanınca tüm haber kartlarını göster
function showAllContent() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'block';
    });
}
