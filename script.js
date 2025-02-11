
const themeToggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggleButton.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-bs-theme', newTheme);

    if (newTheme === 'dark') {
        themeToggleButton.src = 'img/moon.svg';
        themeToggleButton.alt = 'Moon icon for dark theme';
    } else {
        themeToggleButton.src = 'img/sun.svg';
        themeToggleButton.alt = 'Sun icon for light theme';
    }
});

/* Carousel*/

// const images = [
//     "img/homologo.jpg",
//     "img/logo.jpg",
//     "img/homologo.jpg"
//   ];
//   let currentIndex = 0;
  
//   function updateImage() {
//     const carouselImage = document.getElementById("carousel-image");
//     carouselImage.src = images[currentIndex];
//   }
  
//   function nextImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateImage();
//   }
  
//   function prevImage() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     updateImage();
//   }
  
//   // Initial Image Load
//   updateImage();
  


  const menCardsData = [
    { img: "img/pant1.webp", title: "Formal Pants", text: "Premium quality fabric for a comfortable fit." },
    { img: "img/jacket.webp", title: "Jackets", text: "Stylish and warm jackets for every season." },
    { img: "img/shirt.webp", title: "Formal Shirts", text: "Perfect for office wear with a crisp look." },
    { img: "img/pant2.webp", title: "Pants", text: "Durable and trendy pants for all occasions." },
    { img: "img/shirt2.webp", title: "Party Shirts", text: "Eye-catching shirts for your night out." },
    { img: "img/pant4.webp", title: "Jeans", text: "Classic jeans for casual and semi-formal looks." },
    { img: "img/suit1.webp", title: "Suits", text: "Elegant suits for formal occasions." },
    { img: "img/shirt3.webp", title: "Shirts", text: "Versatile shirts to match your style." }
];

const womenCardsData = [
    { img: "img/suitf1.webp", title: "Suits", text: "Elegant and stylish suits for women." },
    { img: "img/kurtis.webp", title: "Kurtis", text: "Comfortable and trendy Kurtis." },
    { img: "img/kurtis2.webp", title: "Kurtis", text: "A mix of modern and traditional styles." },
    { img: "img/saree1.webp", title: "Sarees", text: "Traditional sarees for festive occasions." },
    { img: "img/saree2.webp", title: "Formal Sarees", text: "Perfect sarees for office wear." },
    { img: "img/kurtis3.webp", title: "Kurtis", text: "Lightweight Kurtis for everyday wear." },
    { img: "img/top.webp", title: "Tops", text: "Trendy tops for casual outings." },
    { img: "img/kurtis4.webp", title: "Kurtis", text: "Stylish and comfortable Kurtis." }
];

const kidsCardsData = [
    { img: "img/kid1.webp", title: "Kids Wear", text: "Comfortable clothing for kids." },
    { img: "img/kid2.webp", title: "T-Shirts", text: "Soft cotton T-Shirts for your little ones." },
    { img: "img/kid3.webp", title: "Winter Wear", text: "Warm and cozy clothing for kids." },
    { img: "img/kid4.webp", title: "Frocks", text: "Beautiful frocks for girls." },
    { img: "img/kid5.webp", title: "Jeans", text: "Durable jeans for kids." },
    { img: "img/kid6.webp", title: "Hoodies", text: "Trendy hoodies for children." },
    { img: "img/kid7.webp", title: "Party Wear", text: "Dress your kids in party-ready outfits." },
    { img: "img/kid8.webp", title: "Ethnic Wear", text: "Traditional ethnic outfits for kids." }
];

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

        const viewBtn = document.createElement("a");
        viewBtn.href = "#";
        viewBtn.classList.add("btn", "view-btn");
        viewBtn.textContent = "View";

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(viewBtn);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        container.appendChild(cardDiv);
    });
}

// Ensure the DOM is fully loaded before rendering cards
document.addEventListener("DOMContentLoaded", function () {
    generateCards(menCardsData, "men-cards-container");
    generateCards(womenCardsData, "women-cards-container");
    generateCards(kidsCardsData, "kids-cards-container");
});