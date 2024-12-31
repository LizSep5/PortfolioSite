function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}

document.querySelectorAll('.highlight').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior for now
        const destination = e.target.textContent.toLowerCase(); // Get text of the link
        window.location.href = `/${destination}.html`; // Navigate to a page
    });
});