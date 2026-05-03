// РУММИ Premium Interactions

document.addEventListener('DOMContentLoaded', () => {
    // 1. Умный Observer для анимаций при скролле (Плавное появление)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Подключаем наблюдение за элементами со скроллом
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // 2. Эффект магнитной кнопки для главных кнопок (Micro-interaction)
    const magneticButtons = document.querySelectorAll('.hover-card');
    
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Легкое смещение кнопки в сторону курсора
            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
        });

        btn.addEventListener('mouseleave', () => {
            // Возврат в исходное положение с пружинящим эффектом
            btn.style.transform = `translate(0px, 0px) scale(1)`;
        });
    });

    console.log('РУММИ Premium UI initialized ✨');
});

// Глобальная функция для имитации загрузки в конструкторе
function generateDesign() {
    const overlay = document.getElementById('loadingOverlay');
    if(overlay) {
        overlay.style.display = 'flex';
        setTimeout(() => {
            window.location.href = 'gallery.html';
        }, 2000);
    }
}
