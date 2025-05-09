
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.createElement("button");

    toggleBtn.classList.add("sidebar-toggle");
    toggleBtn.innerHTML = "&#8942;"; // HTML code for vertical three-dot icon (⋮)
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const cartBadge = document.getElementById("cart-count");
    let cartCount = 0;

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-bs-theme', newTheme);
    
            themeToggleButton.src = newTheme === 'dark' ? 'img/moon.svg' : 'img/sun.svg';
            themeToggleButton.alt = newTheme === 'dark' ? 'Moon icon for dark theme' : 'Sun icon for light theme';
        });
    }

    function updateCartCount() {
        cartCount++;
        cartBadge.textContent = cartCount;
        cartBadge.classList.add("show");
    }

    function generateCards(data, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = ""; // Clear previous content

        data.forEach(card => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");

            const img = document.createElement("img");
            img.src = card.img;
            img.classList.add("card-img");
            img.alt = card.title;

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = card.title;

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent = card.text;

            const viewBtn = document.createElement("button");
            viewBtn.classList.add("btn", "view-btn");
            viewBtn.textContent = "Add to Cart";

            viewBtn.addEventListener("click", function () {
                updateCartCount();
                viewBtn.textContent = "Added";
                viewBtn.classList.add("added");

                setTimeout(() => {
                    viewBtn.textContent = "Add to Cart";
                    viewBtn.classList.remove("added");
                }, 1500);
            });

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(viewBtn);

            cardDiv.appendChild(img);
            cardDiv.appendChild(cardBody);
            container.appendChild(cardDiv);
        });

        container.style.display = data.length ? "flex" : "none"; // Hide empty sections
    }

    const menCardsData = [
        { img: "img/jacket.webp", title: "Jackets", text: "Stylish and warm jackets for every season." },
        { img: "img/shirt.webp", title: "Formal Shirts", text: "Perfect for office wear with a crisp look." },
        { img: "img/pant2.webp", title: "Pants", text: "Durable and trendy pants for all occasions." },
        { img: "img/pant4.webp", title: "Jeans", text: "Classic jeans for casual and semi-formal looks." }
    ];

    const womenCardsData = [
        { img: "img/suitf1.webp", title: "Suits", text: "Elegant and stylish suits for women." },
        { img: "img/kurtis2.webp", title: "Kurtis", text: "A mix of modern and traditional styles." },
        { img: "img/kurtis3.webp", title: "Kurtis", text: "Lightweight Kurtis for everyday wear." },
        { img: "img/kurtis4.webp", title: "Kurtis", text: "Stylish and comfortable Kurtis." }
    ];

    const kidsCardsData = [
        { img: "img/kid1.webp", title: "Kids Wear", text: "Comfortable clothing for kids." },
        { img: "img/kid2.webp", title: "T-Shirts", text: "Soft cotton T-Shirts for your little ones." },
        { img: "img/kid3.webp", title: "Winter Wear", text: "Warm and cozy clothing for kids." },
        { img: "img/kid4.webp", title: "Frocks", text: "Beautiful frocks for girls." }
    ];

    const arrivalsCardsData = [
        { img: "img/kid1.webp", title: "Kids Wear", text: "Comfortable clothing for kids." },
        { img: "img/kid2.webp", title: "T-Shirts", text: "Soft cotton T-Shirts for your little ones." },
        { img: "img/kid3.webp", title: "Winter Wear", text: "Warm and cozy clothing for kids." },
        { img: "img/kid4.webp", title: "Frocks", text: "Beautiful frocks for girls." }
    ];

    generateCards(menCardsData, "men-cards-container");
    generateCards(womenCardsData, "women-cards-container");
    generateCards(kidsCardsData, "kids-cards-container");
    generateCards(arrivalsCardsData, "arrivals-cards-container");
});
