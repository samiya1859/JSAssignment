// JavaScript for toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const profileIcon = document.querySelector('.profile-icon');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    // Open sidebar
    profileIcon.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    // Close sidebar
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !profileIcon.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});


alert("ok!")