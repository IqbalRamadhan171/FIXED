const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const gameGrid = document.getElementById('game-grid');

// Add game categories
const gameCategories = {
  'Mobile Legends': []
};

// Populate game categories with game data
gameGrid.children.forEach((game) => {
  const gameName = game.querySelector('p').textContent;
  gameCategories['Mobile Legends'].push(gameName);
});

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim().toLowerCase();
  const games = gameGrid.children;

  // Filter by game category
  const category = 'Mobile Legends';
  const filteredGames = gameCategories[category].filter((gameName) => {
    return gameName.toLowerCase().includes(searchTerm);
  });

  // Hide all games initially
  games.forEach((game) => {
    game.style.display = 'none';
  });

  // Show filtered games
  filteredGames.forEach((gameName) => {
    const gameElement = gameGrid.querySelector(`[data-game-name="${gameName}"]`);
    gameElement.style.display = 'block';
  });
});

// Add data attributes to game grid elements for filtering
gameGrid.children.forEach((game) => {
  const gameName = game.querySelector('p').textContent;
  game.dataset.gameName = gameName;
});