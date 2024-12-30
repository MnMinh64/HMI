// Lấy tất cả các thẻ 'a' trong danh sách navbar
const navLinks = document.querySelectorAll('.navbar li a');

// Lặp qua từng thẻ 'a'
navLinks.forEach(link => {
    // Thêm sự kiện click vào mỗi thẻ 'a'
    link.addEventListener('click', function(event) {
        // Loại bỏ class 'active' khỏi tất cả các thẻ 'a'
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Thêm class 'active' vào thẻ 'a' được click
        this.classList.add('active');

    });
});

// Xử lý phần Friends
const friendsLink = document.getElementById('friends-link');
const friendsSection = document.querySelector('.friends-section');
const profileSection = document.querySelector('.profile-header');
const statsOverviewSection = document.querySelector('.stats-overview');
const statsDetailsSection = document.querySelector('.stats-details');
const detailedStatsSection = document.querySelector('.detailed-stats');
const matchHistorySection = document.querySelector('.match-history');

friendsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chuyển hướng trang

    // Ẩn/hiện phần Friends
    if (friendsSection.style.display === 'none') {
        friendsSection.style.display = 'block';
        profileSection.style.display = 'none';
        statsOverviewSection.style.display = 'none';
        statsDetailsSection.style.display = 'none';
        detailedStatsSection.style.display = 'none';
        matchHistorySection.style.display = 'none';

        // Highlight menu Friends
        friendsLink.classList.add('active-section');

        // Bỏ highlight các menu khác
        document.querySelector('.sidebar a[href="#profile"]').classList.remove('active-section');
        document.querySelector('.sidebar a[href="#message"]').classList.remove('active-section');
        document.querySelector('.sidebar a[href="#stat"]').classList.remove('active-section');
    } else {
        friendsSection.style.display = 'none';
        profileSection.style.display = 'flex';
        statsOverviewSection.style.display = 'flex';
        statsDetailsSection.style.display = 'flex';
        detailedStatsSection.style.display = 'block';
        matchHistorySection.style.display = 'block';

        // Bỏ highlight menu Friends
        friendsLink.classList.remove('active-section');
    }
});