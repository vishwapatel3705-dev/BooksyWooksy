// FEATURED BOOKS
const featuredBooks = [
  {
    title: "The Enchanted Grove",
    author: "Elena Moonwhisper",
    price: "$14.99",
    genre: "Fantasy",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
  },
  {
    title: "Paris in Bloom",
    author: "Sophie Laurent",
    price: "$12.99",
    genre: "Romance",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Shadows of the City",
    author: "Marcus Stone",
    price: "$13.99",
    genre: "Mystery",
    img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
  },
  {
    title: "Autumn Afternoons",
    author: "Clara Bennett",
    price: "$11.99",
    genre: "Contemporary",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  // ---- duplicate pattern to reach 24 ----
];

// Fill to 24
while (featuredBooks.length < 24) {
  featuredBooks.push({
    ...featuredBooks[featuredBooks.length % 4],
    title:
      featuredBooks[featuredBooks.length % 4].title +
      " Vol " +
      (featuredBooks.length + 1),
  });
}

const featuredGrid = document.getElementById("booksGrid");
const viewAllBtn = document.getElementById("viewAllBtn");

let showAllFeatured = false;

function renderFeaturedBooks() {
  featuredGrid.innerHTML = "";
  const displayBooks = showAllFeatured
    ? featuredBooks
    : featuredBooks.slice(0, 8);

  displayBooks.forEach((book) => {
    featuredGrid.innerHTML += `
      <div class="book-card">
        <div class="book-image">
          <img src="${book.img}">
          <span class="genre">${book.genre}</span>
          <div class="hover-cart">
            <button><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
          </div>
        </div>
        <div class="book-info">
          <h4>${book.title}</h4>
          <small>${book.author}</small>
          <div class="price">${book.price}</div>
        </div>
      </div>
    `;
  });
}

// ===== VIEW TOGGLE ELEMENTS =====
const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");
const container = document.getElementById("booksContainer");

gridBtn.addEventListener("click", () => {
  container.className = "books-grid";

  gridBtn.classList.add("active");
  listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
  container.className = "books-list";

  listBtn.classList.add("active");
  gridBtn.classList.remove("active");
});

viewAllBtn.onclick = () => {
  showAllFeatured = !showAllFeatured;
  viewAllBtn.textContent = showAllFeatured ? "Show Less" : "View All Books";
  renderFeaturedBooks();
};

renderFeaturedBooks();

// LIBRARY COLLECTION
const libraryBooks = [
  {
    title: "Finding Home",
    author: "Sarah Mitchell",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    status: "reading",
    progress: 45,
  },
  {
    title: "Whispers of Dawn",
    author: "Emily Rose",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    status: "completed",
  },
  {
    title: "Starship Odyssey",
    author: "Marcus Chen",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    status: "reading",
    progress: 30,
  },
  {
    title: "The Silent Witness",
    author: "James Thornton",
    cover: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    status: "wishlist",
  },
  {
    title: "Hearts in Paris",
    author: "Claire Beaumont",
    cover: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    status: "completed",
  },
  {
    title: "The Enchanted Forest",
    author: "Luna Silverwood",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    status: "reading",
    progress: 75,
  },
  {
    title: "Beyond the Horizon",
    author: "Jack Morrison",
    cover: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    status: "completed",
  },
  {
    title: "The Crown’s Shadow",
    author: "Elizabeth Hartwell",
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    status: "wishlist",
  },
  {
    title: "The Enchanted Forest",
    author: "Luna Silverwood",
    status: "reading",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  },
  {
    title: "Hearts in Paris",
    author: "Claire Beaumont",
    status: "completed",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
  },
  {
    title: "The Silent Witness",
    author: "James Thornton",
    status: "wishlist",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500",
  },
  {
    title: "Finding Home",
    author: "Sarah Mitchell",
    status: "reading",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
  },
  {
    title: "Whispers of Dawn",
    author: "Emily Rose",
    status: "completed",
    cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500",
  },
  {
    title: "Starship Odyssey",
    author: "Marcus Chen",
    status: "reading",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500",
  },
  {
    title: "Beyond the Horizon",
    author: "Jack Morrison",
    status: "completed",
    cover: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
  },
  {
    title: "Ink & Silence",
    author: "Ava Bennett",
    status: "wishlist",
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500",
  },
  // (keep rest exactly as you had)
];

let visibleCount = 8;
let currentFilter = "all";
let isGridView = true;

const libraryContainer = document.getElementById("booksContainer");
const loadMoreBtn = document.getElementById("loadMoreBtn");

function renderLibraryBooks() {
  libraryContainer.innerHTML = "";

  const filtered = libraryBooks.filter((b) =>
    currentFilter === "all" ? true : b.status === currentFilter
  );

  filtered.slice(0, visibleCount).forEach((book) => {
    let buttonText =
      book.status === "reading"
        ? "Continue Reading"
        : book.status === "completed"
        ? "Read Again"
        : "Start Reading";

    libraryContainer.innerHTML += `
      <div class="book-card">
        <div class="book-cover">
          <img src="${book.cover}">
          <span class="badge ${book.status}">${book.status}</span>
          <div class="card-overlay">
            <button>${buttonText}</button>
          </div>
        </div>
        <div class="book-info">
          <h4>${book.title}</h4>
          <small>by ${book.author}</small>
          ${
            book.progress
              ? `<div class="progress"><span style="width:${book.progress}%"></span></div>`
              : ""
          }
        </div>
      </div>
    `;
  });

  loadMoreBtn.style.display =
    visibleCount >= filtered.length ? "none" : "inline-block";
}

// Tabs
document.querySelectorAll(".tab").forEach((tab) => {
  tab.onclick = () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
    currentFilter = tab.dataset.filter;
    visibleCount = 8;
    renderLibraryBooks();
  };
});

// View toggle
document.getElementById("gridView").onclick = () => {
  isGridView = true;
  libraryContainer.className = "books-grid";
};

document.getElementById("listView").onclick = () => {
  isGridView = false;
  libraryContainer.className = "books-list";
};

// Load more
loadMoreBtn.onclick = () => {
  visibleCount += 8;
  renderLibraryBooks();
};

renderLibraryBooks();

// BOOK CLUB
const bookClubs = [
  {
    title: "Romance Circle",
    description: "Stories filled with heart, warmth, and emotion",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    members: 1240,
    reading: "Love & Letters",
    meeting: "Dec 15",
  },
  {
    title: "Mystery Vault",
    description: "Uncover secrets one chapter at a time",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    members: 890,
    reading: "The Silent Clue",
    meeting: "Dec 18",
  },
  {
    title: "Fantasy Realm",
    description: "Escape reality and explore magical worlds",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    members: 2100,
    reading: "Stardust",
    meeting: "Dec 20",
  },
];

const clubGrid = document.getElementById("clubGrid");

bookClubs.forEach((club) => {
  clubGrid.innerHTML += `
    <div class="club-card">
      <div class="club-image">
        <img src="${club.image}" alt="${club.title}">
        <span class="member-badge">
          <i class="fa-solid fa-user-group"></i> ${club.members.toLocaleString()} members
        </span>
      </div>

      <div class="club-content">
        <h3>${club.title}</h3>
        <p class="club-desc">${club.description}</p>

        <div class="currently-reading">
          <i class="fa-solid fa-book-open"></i>
          Currently Reading: <br><span>${club.reading}</span>
        </div>

        <div class="club-footer">
          <span class="meeting">
            <i class="fa-regular fa-calendar"></i> Next meeting: ${club.meeting}
          </span>
          <button class="join-btn">
            Join Club <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;
});
