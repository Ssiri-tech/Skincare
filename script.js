const products = [
    {
        id: 1,
        name: "Oat Cleansing Balm",
        category: "clean",
        description: "Protects and moisturizes skin",
        price: 499,
        image: "skincareimages/oat-cleansing-balm.png"
    },
    {
        id: 2,
        name: "Salicylic Acid Cleanser",
        category: "clean",
        description: "Helps reduce blackheads",
        price: 399,
        image: "skincareimages/calycilic-acid-cleanser.png"
    },
    {
        id: 3,
        name: "Oil and Water Cleanser",
        category: "clean",
        description: "Removes dirt and excess oil",
        price: 299,
        image: "skincareimages/oil and water cleanser.png"
    },
    {
        id: 4,
        name: "Collagen Booster",
        category: "treat",
        description: "Helps plump and firm skin",
        price: 599,
        image: "skincareimages/collagen booster.png"
    },
    {
        id: 5,
        name: "Glycolic Acid Toner",
        category: "treat",
        description: "Helps improve skin texture",
        price: 499,
        image: "skincareimages/glycolic acid toner.png"
    },
    {
        id: 6,
        name: "Kaolin Clay Mask",
        category: "treat",
        description: "Helps absorb excess oil",
        price: 450,
        image: "skincareimages/kaolin clay mask.png"
    },
    {
        id: 7,
        name: "Rosehip Oil",
        category: "moisturize",
        description: "Nourishes and softens skin",
        price: 599,
        image: "skincareimages/rosehip oil.png"
    },
    {
        id: 8,
        name: "Turmeric Moisturizer",
        category: "moisturize",
        description: "Keeps skin hydrated",
        price: 699,
        image: "skincareimages/turmeric moisturizer.png"
    },
    {
        id: 9,
        name: "Peptide Moisturizer",
        category: "moisturize",
        description: "Supports soft and smooth skin",
        price: 399,
        image: "skincareimages/peptide moisturizer.png"
    }
];

products.forEach((product) => {
    const container = document.querySelector(
        `.js-products-grid[data-category="${product.category}"]`
    );
    if (container) {
        container.innerHTML += `
            <div class="product-card">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="gridimage"
                >
                <p>${product.description}</p>
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
            </div>
        `;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".filter-link");
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            links.forEach((l) => {
                l.classList.remove("active");
            });
            this.classList.add("active");
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});



