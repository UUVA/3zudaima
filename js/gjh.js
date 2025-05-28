// ============ 固定导航栏 ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ============ 返回顶部按钮 ============
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============ 平滑滚动到锚点 ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});