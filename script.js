// ===== БАЗА ДАННЫХ ТОВАРОВ =====
const products = [
    // ЛЕКАРСТВА
    { id: 1, name: "Ибупрофен 200мг №20", category: "Лекарства", price: 350, oldPrice: 420, manufacturer: "Фармстандард", image: "💊", rating: 4.8, reviews: 156, inStock: true },
    { id: 2, name: "Парацетамол 500мг №20", category: "Лекарства", price: 280, oldPrice: 350, manufacturer: "Фармстандард", image: "💊", rating: 4.7, reviews: 203, inStock: true },
    { id: 3, name: "Нурофен Экспресс 200мг", category: "Лекарства", price: 410, oldPrice: 480, manufacturer: "Reckitt Benckiser", image: "💊", rating: 4.8, reviews: 178, inStock: true },
    { id: 4, name: "Аспирин Кардио 100мг", category: "Лекарства", price: 210, oldPrice: 250, manufacturer: "Bayer", image: "💊", rating: 4.6, reviews: 145, inStock: true },
    { id: 5, name: "Цитрамон П", category: "Лекарства", price: 180, oldPrice: 220, manufacturer: "Фармстандард", image: "💊", rating: 4.5, reviews: 98, inStock: true },
    { id: 6, name: "Анальгин 500мг №10", category: "Лекарства", price: 150, oldPrice: 180, manufacturer: "Фармстандард", image: "💊", rating: 4.4, reviews: 87, inStock: true },
    { id: 7, name: "Но-шпа 40мг №60", category: "Лекарства", price: 420, oldPrice: 490, manufacturer: "Chinoin", image: "💊", rating: 4.9, reviews: 234, inStock: true },
    { id: 8, name: "Мезим Форте 10000", category: "Лекарства", price: 340, oldPrice: 400, manufacturer: "Berlin-Chemie", image: "💊", rating: 4.7, reviews: 167, inStock: true },
    { id: 9, name: "Сироп от кашля Доктор МОМ", category: "Лекарства", price: 290, oldPrice: 350, manufacturer: "Юник Фарма", image: "🥤", rating: 4.5, reviews: 76, inStock: true },
    { id: 10, name: "Називин капли 0.05%", category: "Лекарства", price: 180, oldPrice: 220, manufacturer: "Merck", image: "💧", rating: 4.3, reviews: 54, inStock: true },
    { id: 11, name: "Лоратадин 10мг №10", category: "Лекарства", price: 190, oldPrice: 230, manufacturer: "Вертекс", image: "💊", rating: 4.6, reviews: 112, inStock: true },
    { id: 12, name: "Супрастин 25мг №20", category: "Лекарства", price: 220, oldPrice: 270, manufacturer: "Egis", image: "💊", rating: 4.7, reviews: 89, inStock: true },
    
    // ВИТАМИНЫ
    { id: 13, name: "Витамин С 1000мг шипучий", category: "Витамины", price: 520, oldPrice: 650, manufacturer: "Эвалар", image: "🍊", rating: 4.9, reviews: 312, inStock: true },
    { id: 14, name: "Компливит №60", category: "Витамины", price: 380, oldPrice: 450, manufacturer: "Фармстандард", image: "💊", rating: 4.7, reviews: 203, inStock: true },
    { id: 15, name: "Витрум Пренатал", category: "Витамины", price: 890, oldPrice: 1050, manufacturer: "Unipharm", image: "🤰", rating: 4.9, reviews: 445, inStock: true },
    { id: 16, name: "Омега-3 1000мг", category: "Витамины", price: 650, oldPrice: 780, manufacturer: "Солагар", image: "🐟", rating: 4.8, reviews: 167, inStock: true },
    { id: 17, name: "Магне B6 Форте", category: "Витамины", price: 540, oldPrice: 620, manufacturer: "Sanofi", image: "💊", rating: 4.8, reviews: 234, inStock: true },
    { id: 18, name: "Кальций Д3 Никомед", category: "Витамины", price: 480, oldPrice: 550, manufacturer: "Nycomed", image: "💊", rating: 4.7, reviews: 189, inStock: true },
    { id: 19, name: "Солгар Витамин D3", category: "Витамины", price: 720, oldPrice: 850, manufacturer: "Solgar", image: "☀️", rating: 4.9, reviews: 278, inStock: true },
    { id: 20, name: "Цинк Хелат 25мг", category: "Витамины", price: 420, oldPrice: 490, manufacturer: "Эвалар", image: "💊", rating: 4.6, reviews: 98, inStock: true },
    
    // ГИГИЕНА
    { id: 21, name: "Зубная паста Lacalut White", category: "Гигиена", price: 220, oldPrice: 260, manufacturer: "Lacalut", image: "🪥", rating: 4.7, reviews: 234, inStock: true },
    { id: 22, name: "Зубная щетка Oral-B Medium", category: "Гигиена", price: 180, oldPrice: 220, manufacturer: "Oral-B", image: "🪥", rating: 4.6, reviews: 156, inStock: true },
    { id: 23, name: "Мыло жидкое Dettol", category: "Гигиена", price: 150, oldPrice: 180, manufacturer: "Dettol", image: "🧴", rating: 4.5, reviews: 98, inStock: true },
    { id: 24, name: "Дезодорант Rexona Cotton", category: "Гигиена", price: 210, oldPrice: 250, manufacturer: "Rexona", image: "🧴", rating: 4.6, reviews: 145, inStock: true },
    { id: 25, name: "Шампунь Head & Shoulders", category: "Гигиена", price: 320, oldPrice: 380, manufacturer: "P&G", image: "🧴", rating: 4.7, reviews: 312, inStock: true },
    { id: 26, name: "Влажные салфетки Huggies", category: "Гигиена", price: 90, oldPrice: 110, manufacturer: "Huggies", image: "🧻", rating: 4.8, reviews: 445, inStock: true },
    
    // МАМА И МАЛЫШ
    { id: 27, name: "Подгузники Pampers 4", category: "Мама и малыш", price: 890, oldPrice: 1050, manufacturer: "Pampers", image: "👶", rating: 4.9, reviews: 567, inStock: true },
    { id: 28, name: "Детская смесь Nutrilon 1", category: "Мама и малыш", price: 650, oldPrice: 750, manufacturer: "Nutricia", image: "🍼", rating: 4.8, reviews: 334, inStock: true },
    { id: 29, name: "Пюре ФрутоНяня яблоко", category: "Мама и малыш", price: 70, oldPrice: 85, manufacturer: "ФрутоНяня", image: "🥫", rating: 4.7, reviews: 223, inStock: true },
    { id: 30, name: "Детский крем Бюбхен", category: "Мама и малыш", price: 240, oldPrice: 280, manufacturer: "Bubchen", image: "🧴", rating: 4.8, reviews: 189, inStock: true },
    { id: 31, name: "Молокоотсос Philips", category: "Мама и малыш", price: 2450, oldPrice: 2900, manufacturer: "Philips", image: "🍼", rating: 4.7, reviews: 98, inStock: true },
    
    // СЕРДЦЕ И СОСУДЫ
    { id: 32, name: "Эналаприл 5мг №20", category: "Сердце и сосуды", price: 120, oldPrice: 150, manufacturer: "Акрихин", image: "💊", rating: 4.6, reviews: 187, inStock: true },
    { id: 33, name: "Бисопролол 5мг №30", category: "Сердце и сосуды", price: 210, oldPrice: 250, manufacturer: "Вертекс", image: "💊", rating: 4.7, reviews: 145, inStock: true },
    { id: 34, name: "Аторвастатин 20мг", category: "Сердце и сосуды", price: 380, oldPrice: 450, manufacturer: "Фармстандард", image: "💊", rating: 4.6, reviews: 98, inStock: true },
    { id: 35, name: "Кардиомагнил 75мг", category: "Сердце и сосуды", price: 190, oldPrice: 230, manufacturer: "Nycomed", image: "💊", rating: 4.8, reviews: 234, inStock: true },
    
    // АЛЛЕРГИЯ
    { id: 36, name: "Зодак капли 20мл", category: "Аллергия", price: 240, oldPrice: 290, manufacturer: "Zentiva", image: "💧", rating: 4.8, reviews: 267, inStock: true },
    { id: 37, name: "Эриус 5мг №10", category: "Аллергия", price: 420, oldPrice: 500, manufacturer: "Bayer", image: "💊", rating: 4.9, reviews: 189, inStock: true },
    { id: 38, name: "Фенистил гель 30г", category: "Аллергия", price: 350, oldPrice: 410, manufacturer: "Novartis", image: "🧴", rating: 4.7, reviews: 156, inStock: true },
    { id: 39, name: "Аллергозан мазь", category: "Аллергия", price: 290, oldPrice: 340, manufacturer: "Акрихин", image: "🧴", rating: 4.6, reviews: 87, inStock: true }
];

// ===== СОСТОЯНИЕ ПРИЛОЖЕНИЯ =====
let currentFilter = 'all';
let currentSearchTerm = '';
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', function() {
    updateCategoryCounts();
    renderHomeProducts();
    renderCatalogProducts();
    updateCartBadge();
    initEventListeners();
    initPageFromHash();
});

// ===== ПОДСЧЕТ ТОВАРОВ ПО КАТЕГОРИЯМ =====
function updateCategoryCounts() {
    const counts = {
        'Лекарства': products.filter(p => p.category === 'Лекарства').length,
        'Витамины': products.filter(p => p.category === 'Витамины').length,
        'Гигиена': products.filter(p => p.category === 'Гигиена').length,
        'Мама и малыш': products.filter(p => p.category === 'Мама и малыш').length,
        'Сердце и сосуды': products.filter(p => p.category === 'Сердце и сосуды').length,
        'Аллергия': products.filter(p => p.category === 'Аллергия').length,
        'all': products.length
    };
    
    // Обновляем счетчики на главной
    document.getElementById('count-lekarstva').textContent = counts['Лекарства'];
    document.getElementById('count-vitaminy').textContent = counts['Витамины'];
    document.getElementById('count-gigiena').textContent = counts['Гигиена'];
    document.getElementById('count-mama').textContent = counts['Мама и малыш'];
    document.getElementById('count-heart').textContent = counts['Сердце и сосуды'];
    document.getElementById('count-allergy').textContent = counts['Аллергия'];
    
    // Обновляем счетчики в каталоге
    document.getElementById('count-all').textContent = counts['all'];
    document.getElementById('count-cat-lekarstva').textContent = counts['Лекарства'];
    document.getElementById('count-cat-vitaminy').textContent = counts['Витамины'];
    document.getElementById('count-cat-gigiena').textContent = counts['Гигиена'];
    document.getElementById('count-cat-mama').textContent = counts['Мама и малыш'];
    document.getElementById('count-cat-heart').textContent = counts['Сердце и сосуды'];
    document.getElementById('count-cat-allergy').textContent = counts['Аллергия'];
}

// ===== ИНИЦИАЛИЗАЦИЯ ОБРАБОТЧИКОВ =====
function initEventListeners() {
    // Навигация
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').substring(1);
            switchPage(pageId);
        });
    });

    // Поиск в каталоге
    const catalogSearch = document.getElementById('catalog-search');
    if (catalogSearch) {
        catalogSearch.addEventListener('input', function() {
            currentSearchTerm = this.value.toLowerCase();
            renderCatalogProducts();
        });
    }

    // Поиск на главной
    const homeSearch = document.getElementById('home-search');
    if (homeSearch) {
        homeSearch.addEventListener('input', function() {
            currentSearchTerm = this.value.toLowerCase();
            renderHomeProducts();
        });
    }

    // Категории на главной - ПРИ КЛИКЕ ФИЛЬТРАЦИЯ
    document.querySelectorAll('#home-categories .category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Переходим в каталог
            switchPage('catalog');
            
            // Устанавливаем фильтр
            currentFilter = category;
            
            // Обновляем активный класс в фильтрах каталога
            document.querySelectorAll('#catalog-filters .category-card').forEach(filter => {
                filter.classList.remove('active');
                if (filter.getAttribute('data-filter') === category) {
                    filter.classList.add('active');
                }
            });
            
            // Перерисовываем товары
            renderCatalogProducts();
            showNotification(`Категория: ${category}`, 'success');
        });
    });

    // Фильтры в каталоге - ПРИ КЛИКЕ ФИЛЬТРАЦИЯ
    document.querySelectorAll('#catalog-filters .category-card').forEach(filter => {
        filter.addEventListener('click', function() {
            // Убираем активный класс у всех
            document.querySelectorAll('#catalog-filters .category-card').forEach(f => {
                f.classList.remove('active');
            });
            
            // Добавляем активный класс текущему
            this.classList.add('active');
            
            // Получаем категорию
            currentFilter = this.getAttribute('data-filter');
            
            // Перерисовываем товары
            renderCatalogProducts();
            
            // Показываем уведомление
            const filterName = this.querySelector('span').textContent;
            showNotification(`Фильтр: ${filterName}`, 'success');
        });
    });

    // Иконка профиля
    document.getElementById('profile-icon').addEventListener('click', function() {
        document.getElementById('auth-modal').style.display = 'block';
        showLoginForm();
    });

    // Иконка корзины
    document.getElementById('cart-icon').addEventListener('click', function() {
        renderCart();
        document.getElementById('cart-modal').style.display = 'block';
    });

    // Закрытие модальных окон
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Переключение между формами
    document.getElementById('show-register').addEventListener('click', function(e) {
        e.preventDefault();
        showRegisterForm();
    });

    document.getElementById('show-login').addEventListener('click', function(e) {
        e.preventDefault();
        showLoginForm();
    });

    // Отправка форм
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });

    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleRegister();
    });

    // Кнопка оформления заказа
    document.getElementById('checkout-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Корзина пуста', 'error');
            return;
        }
        
        if (!currentUser) {
            showNotification('Необходимо войти в систему', 'error');
            document.getElementById('auth-modal').style.display = 'block';
            return;
        }
        
        showNotification('Заказ оформлен! Спасибо за покупку', 'success');
        cart = [];
        saveCart();
        renderCart();
        updateCartBadge();
        document.getElementById('cart-modal').style.display = 'none';
    });
}

// ===== ОТРИСОВКА ТОВАРОВ НА ГЛАВНОЙ =====
function renderHomeProducts() {
    const homeProductsList = products.slice(0, 8);
    const homeProducts = document.getElementById('home-products');
    
    homeProducts.innerHTML = homeProductsList.map(product => createProductCard(product)).join('');
}

// ===== ОТРИСОВКА ТОВАРОВ В КАТАЛОГЕ =====
function renderCatalogProducts() {
    let filtered = products;
    
    // ФИЛЬТРАЦИЯ ПО КАТЕГОРИИ
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }
    
    // ФИЛЬТРАЦИЯ ПО ПОИСКУ
    if (currentSearchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(currentSearchTerm) ||
            p.manufacturer.toLowerCase().includes(currentSearchTerm)
        );
    }

    const catalogProducts = document.getElementById('catalog-products');
    
    if (filtered.length === 0) {
        catalogProducts.innerHTML = '<div class="no-products">Товары не найдены</div>';
        return;
    }
    
    catalogProducts.innerHTML = filtered.map(product => createProductCard(product)).join('');
}

// ===== СОЗДАНИЕ КАРТОЧКИ ТОВАРА =====
function createProductCard(product) {
    const isFavorite = favorites.includes(product.id);
    const inCart = cart.some(item => item.id === product.id);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <i class="${isFavorite ? 'fas' : 'far'} fa-heart favorite-icon" onclick="toggleFavorite(${product.id}); event.stopPropagation();"></i>
            <div class="product-image">${product.image}</div>
            <h3>${product.name}</h3>
            <div class="product-category">${product.category}</div>
            <div class="product-manufacturer">${product.manufacturer}</div>
            <div class="price">${product.price} ₽</div>
            <button class="btn ${inCart ? 'btn-primary' : 'btn-cart'}" onclick="toggleCart(${product.id}); event.stopPropagation();">
                ${inCart ? 'В корзине' : 'В корзину'}
            </button>
        </div>
    `;
}

// ===== ГЛОБАЛЬНЫЕ ФУНКЦИИ =====
window.toggleFavorite = function(productId) {
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
        showNotification('Удалено из избранного');
    } else {
        favorites.push(productId);
        showNotification('Добавлено в избранное');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Перерисовываем текущую страницу
    if (document.getElementById('home').classList.contains('active-page')) {
        renderHomeProducts();
    } else {
        renderCatalogProducts();
    }
};

window.toggleCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
        cart.splice(existingItemIndex, 1);
        showNotification('Удалено из корзины');
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            manufacturer: product.manufacturer
        });
        showNotification('Добавлено в корзину');
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    
    // Перерисовываем текущую страницу
    if (document.getElementById('home').classList.contains('active-page')) {
        renderHomeProducts();
    } else {
        renderCatalogProducts();
    }
};

// ===== КОРЗИНА =====
function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadge = document.getElementById('cart-badge');
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'block' : 'none';
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Корзина пуста</p>';
        cartTotal.textContent = 'Итого: 0 ₽';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        html += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">${item.image}</div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price} ₽</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <i class="fas fa-trash remove-item" onclick="removeFromCart(${item.id})"></i>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    cartTotal.textContent = `Итого: ${total} ₽`;
}

window.updateQuantity = function(productId, change) {
    const itemIndex = cart.findIndex(i => i.id === productId);
    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        
        saveCart();
        renderCart();
        updateCartBadge();
    }
};

window.removeFromCart = function(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    renderCart();
    updateCartBadge();
    showNotification('Товар удален из корзины');
};

// ===== АВТОРИЗАЦИЯ =====
function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        showNotification('Заполните все поля', 'error');
        return;
    }
    
    // Для демо создаем тестового пользователя
    if (email === 'test@test.com' && password === '12345678') {
        currentUser = { name: 'Тестовый', email: 'test@test.com' };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        document.getElementById('auth-modal').style.display = 'none';
        showNotification('Добро пожаловать, Тестовый пользователь!', 'success');
    } else {
        showNotification('Неверный email или пароль', 'error');
    }
}

function handleRegister() {
    const name = document.getElementById('reg-name').value;
    const phone = document.getElementById('reg-phone').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    const agreeTerms = document.getElementById('agree-terms').checked;
    
    if (!name || !phone || !email || !password || !confirmPassword) {
        showNotification('Заполните все обязательные поля', 'error');
        return;
    }
    
    if (password.length < 8) {
        showNotification('Пароль должен содержать минимум 8 символов', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Пароли не совпадают', 'error');
        return;
    }
    
    if (!agreeTerms) {
        showNotification('Необходимо согласие с условиями', 'error');
        return;
    }
    
    // Автоматический вход
    currentUser = { name, email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    document.getElementById('auth-modal').style.display = 'none';
    showNotification('Регистрация прошла успешно!', 'success');
}

// ===== ФОРМЫ =====
function showLoginForm() {
    document.getElementById('login-form-container').style.display = 'block';
    document.getElementById('register-form-container').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('login-form-container').style.display = 'none';
    document.getElementById('register-form-container').style.display = 'block';
}

// ===== УВЕДОМЛЕНИЯ =====
function showNotification(message, type = 'success') {
    const oldNotifications = document.querySelectorAll('.notification');
    oldNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// ===== НАВИГАЦИЯ =====
function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });
    
    document.getElementById(pageId).classList.add('active-page');
    
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
    
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initPageFromHash() {
    const hash = window.location.hash.substring(1);
    if (hash && ['home', 'catalog'].includes(hash)) {
        switchPage(hash);
    } else {
        switchPage('home');
    }
}

window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    if (hash && ['home', 'catalog'].includes(hash)) {
        switchPage(hash);
    }
});