// Haber içeriğini göstermek için
function showContent(haberId) {
    // Haberin içeriğini göster
    const content = document.getElementById(haberId + '-content');
    content.style.display = 'block';

    // Haber kartlarını gizle
    const haberlerSection = document.getElementById('haberler');
    haberlerSection.style.display = 'none';
}

// Tüm haber kartlarını göstermek için
function showAllContent() {
    // Tüm haber içeriklerini gizle
    const contents = document.querySelectorAll('.card-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Haber kartlarını göster
    const haberlerSection = document.getElementById('haberler');
    haberlerSection.style.display = 'flex';
}
