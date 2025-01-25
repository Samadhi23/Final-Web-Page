

const cardContainer = document.querySelector(".card-container");

categories.forEach(category => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${category.image}" alt="${category.name} Cuisine">
        <h3>${category.name}</h3>
        <button>View</button>
    `;
    cardContainer.appendChild(card);
});
