const menu = [
  {
    id: 1,
    title: "LETTING GO",
    category: "Romantic",
    price: 15.99,
    img: "./images/1.jpeg",
    desc: `  By Philip Roth  `,
  }, 
  {
    id: 2,
    title: "FEAR OF FLYING",
    category: "Story",
    price: 13.99,
    img: "./images/2.jpeg",
    desc: `BY ERICA JONG`,
  },
  {
    id: 3,
    title: "ACTRESS",
    category: "Ficsions",
    price: 6.99,
    img: "./images/3.jpg",
    desc: `BY ANNE ENRIGHT`,
  },
  {
    id: 4,
    title: "THE ADDRESS BOOK ",
    category: "Romantic",
    price: 20.99,
    img: "./images/4.jpg",
    desc: `BY DEIRDRE MASK`,
  },
  {
    id: 5,
    title: "AFRICAN AMERICAN POETRY",
    category: "Story",
    price: 22.99,
    img: "./images/5.jpg",
    desc: `BY KEVIN YOUNG `,
  },
  {
    id: 6,
    title: "AFTERLIFE",
    category: "Ficsions",
    price: 18.99,
    img: "./images/6.jpg",
    desc: `BY JULIA ALVAREZ`,
  },
  {
    id: 7,
    title: "AGENCY",
    category: "Romantic",
    price: 8.99,
    img: "./images/7.jpg",
    desc: `BY WILLIAM GIBSON`,
  },
  {
    id: 8,
    title: "BEGIN AGAIN",
    category: "Story",
    price: 12.99,
    img: "./images/8.jpg",
    desc: `BY EDDIE S. GLAUDE JR.`,
  },
  {
    id: 9,
    title: "BIG FRIENDSHIP",
    category: "Ficsions",
    price: 16.99,
    img: "./images/9.jpg",
    desc: `BY AMINATOU SOW AND ANNFRIEDMAN`,
  },
  {
    id: 10,
    title: "THE BOOK OF EELS",
    category: "Romantic ",
    price: 22.99,
    img: "./images/10.jpg",
    desc: `BY PATRIK SVENSSON`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
   
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
       
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
