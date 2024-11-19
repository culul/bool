document.querySelectorAll('article a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const article = this.parentElement;
        const content = article.querySelector('p');
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
        this.textContent = this.textContent === 'Read more...' ? 'Read less...' : 'Read more...';
    });
});