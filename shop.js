if (!localStorage.getItem('favs')) {
    localStorage.setItem("favs", JSON.stringify([]));
}

const products = [
    { class: 'chanta1', src: 'çanta1.jpg', alt: 'chanta1'},
    { class: 'plastilin', src: 'plastilin1.jpg', alt: 'plastilin1' },
    { class: 'resm', src: 'resm-albomu2.webp', alt: 'resm-albomu2' },
    { class: 'chanta2', src: 'çanta2.jpg', alt: 'chanta2' },
    { class: 'pozanli-qelem1', src: 'pozanli-qelem1.jpg', alt: 'pozanli-qelem1' },
    { class: 'chanta3', src: 'çanta3.jpg', alt: 'chanta3' },
    { class: 'plastilin', src: 'plastilin2.webp', alt: 'plastilin2' },
    { class: 'qelem', src: 'qelem1.jpg', alt: 'qelem1' },
    { class: 'resm', src: 'resm-albomu3.webp', alt: 'resm-albomu3' },
    { class: 'rengli-qelem', src: 'rengli-qelem3.jpg', alt: 'rengli-qelem3' },
    { class: 'chanta4', src: 'çanta4.jpeg', alt: 'chanta4' },
    { class: 'plastilin', src: 'plastilin3.jpg', alt: 'plastilin3' },
    { class: 'flamaster', src: 'flamaster1.jpg', alt: 'flamaster1' },
    { class: 'oyredici-kartlar1', src: 'oyredici-kartlar2.jpg', alt: 'oyredici-kartlar2' },
    { class: 'albom1', src: 'albom1.jpg', alt: 'albom1' },
    { class: 'rengli-qelem', src: 'rengli-qelem2.jpg', alt: 'rengli-qelem2' },
    { class: 'resm', src: 'resm-albomu1.webp', alt: 'resm-albomu1' },
    { class: 'oyuncaq', src: 'oyuncaq6.jpg', alt: 'oyuncaq1' },
    { class: 'qelem', src: 'qelem2.jpg', alt: 'qelem2' },
    { class: 'oyuncaq', src: 'oyuncaq5.jpg', alt: 'oyuncaq1' },
    { class: 'oyredici-kartlar1', src: 'oyredici-kartlar1.jpg', alt: 'oyredici-kartlar1' },
    { class: 'termus', src: 'termus3.jpg', alt: 'termus3' },
    { class: 'oyredici-kitablar1', src: 'oyredici-kitablar1.jpg', alt: 'oyredici-kitablar1' },
    { class: 'flamaster', src: 'flamaster2.jpg', alt: 'flamaster2' },
    { class: 'oyuncaq', src: 'oyuncaq7.jpg', alt: 'oyuncaq1' },
    { class: 'oyredici-kitablar1', src: 'oyredici-kitablar2.jpg', alt: 'oyredici-kitablar2' },
    { class: 'rengli-qelem', src: 'rengli-qelem1.jpg', alt: 'rengli-qelem1' },
    { class: 'oyuncaq', src: 'oyuncaq2.jpg', alt: 'oyuncaq1' },
    { class: 'termus', src: 'termus2.jpg', alt: 'termus2' },
    { class: 'oyuncaq', src: 'oyuncaq3.jpg', alt: 'oyuncaq1' },
    { class: 'resm', src: 'resm-albomu4.webp', alt: 'resm-albomu4' },
    { class: 'oyredici-kitablar1', src: 'oyredici-kitablar4.jpg', alt: 'oyredici-kitablar4' },
    { class: 'oyuncaq', src: 'oyuncaq4.jpg', alt: 'oyuncaq1' },
    { class: 'oyuncaq', src: 'oyuncaq8.jpg', alt: 'oyuncaq1' },
    { class: 'rengli-qelem', src: 'rengli-qelem4.jpg', alt: 'rengli-qelem4' },
    { class: 'termus', src: 'termus1.jpg', alt: 'termus1' },
];

function addProductsToPage() {
    const container = document.getElementById('bagContainer');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.classList.add(product.class);
        img.src = product.src;
        img.alt = product.alt;

        const heartBow = document.createElement('div');
        heartBow.classList.add('heart-bow');

        const priceTag = document.createElement('div');
        priceTag.classList.add('price');
        priceTag.textContent = product.price;

        const sepet = document.createElement('div');
        sepet.classList.add('sepet');

        sepet.addEventListener("click", (e) => {
            alert("Səbətə yükləndi")
            const alt = e.target.parentElement.children[0].alt

            if (!JSON.parse(localStorage.getItem("favs")).find(item => item.alt === alt)) {
                localStorage.setItem("favs", JSON.stringify([...JSON.parse(localStorage.getItem("favs")), product]))
            }
        })

        productDiv.appendChild(img);
        productDiv.appendChild(heartBow);
        productDiv.appendChild(priceTag);
        productDiv.appendChild(sepet);
        container.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', addProductsToPage);

function showShoppingCart() {
    window.location.href = 'shoppingcart.html';
}

function filterProducts() {
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Number.MAX_SAFE_INTEGER;

    const filteredProducts = productsWithPrices.filter(product => {
        const productPrice = parseFloat(product.price.split(' ')[0]);
        return productPrice >= minPrice && productPrice <= maxPrice;
    });

    updateProductsOnPage(filteredProducts);
}
function updateProductsOnPage(filteredProducts) {
    const container = document.getElementById('bagContainer');
    container.innerHTML = '';

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.classList.add(product.class);
        img.src = product.src;
        img.alt = product.alt;

        const heartBow = document.createElement('div');
        heartBow.classList.add('heart-bow');

        const priceTag = document.createElement('div');
        priceTag.classList.add('price');
        priceTag.textContent = product.price;

        const sepet = document.createElement('div');
        sepet.classList.add('sepet');

        sepet.addEventListener("click", (e) => {
            alert("Səbətə yükləndi")
            const alt = e.target.parentElement.children[0].alt

            if (!JSON.parse(localStorage.getItem("favs")).find(item => item.alt === alt)) {
                localStorage.setItem("favs", JSON.stringify([...JSON.parse(localStorage.getItem("favs")), product]))
            }
        })

        productDiv.appendChild(img);
        productDiv.appendChild(heartBow);
        productDiv.appendChild(priceTag);
        productDiv.appendChild(sepet);
        container.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', addProductsToPage);

document.addEventListener('DOMContentLoaded', function () {
    function toggleHeartColor(event) {
        let clickedElement = event.target.closest('.product');
        let heartIcon = clickedElement.querySelector('.heart-bow');

        let previousState = heartIcon.dataset.state || 'heartblack';

        if (previousState === 'heartblack') {
            heartIcon.classList.remove('heartblack');
            heartIcon.classList.add('heartred');
            heartIcon.dataset.state = 'heartred';
        } else {
            heartIcon.classList.remove('heartred');
            heartIcon.classList.add('heartblack');
            heartIcon.dataset.state = 'heartblack';
        }
    }

    let products = document.querySelectorAll('.product');

    products.forEach(function (product) {
        let heartIcon = product.querySelector('.heart-bow');
        if (heartIcon) {
            heartIcon.addEventListener('click', toggleHeartColor);
        }
    });
});




