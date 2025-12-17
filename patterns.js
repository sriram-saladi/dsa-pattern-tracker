const patterns = [
  ["arrays-hashing", "Arrays & Hashing", "🔢"],
  ["two-pointers", "Two Pointers", "👉"],
  ["sliding-window", "Sliding Window", "🪟"],
  ["stack", "Stack", "📚"],
  ["binary-search", "Binary Search", "🔍"],
  ["linked-list", "Linked List", "🔗"],
  ["trees", "Trees", "🌳"],
  ["tries", "Tries", "🔤"],
  ["heap", "Heap / Priority Queue", "⛰️"],
  ["backtracking", "Backtracking", "🔙"],
  ["graphs", "Graphs (BFS / DFS)", "🕸️"],
  ["dp", "Dynamic Programming", "💎"]
];

const grid = document.getElementById("patternGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const progressSummary = document.getElementById("progressSummary");
const themeToggle = document.getElementById("themeToggle");

// Load progress from localStorage
function getProgress() {
  const saved = localStorage.getItem("dsa-progress");
  return saved ? JSON.parse(saved) : {};
}

// Get pattern completion status
function getPatternStatus(patternId) {
  const progress = getProgress();
  const patternProgress = progress[patternId] || {};
  const solved = Object.values(patternProgress).filter(Boolean).length;
  
  // Check if patternData exists
  if (typeof patternData === 'undefined' || !patternData[patternId]) {
    return "not-started";
  }
  
  const total = patternData[patternId].leetcode?.length || 0;
  
  if (solved === 0) return "not-started";
  if (solved === total) return "completed";
  return "in-progress";
}

// Calculate overall progress
function updateProgressSummary() {
  const progress = getProgress();
  let totalSolved = 0;
  let totalProblems = 0;
  
  // Check if patternData exists
  if (typeof patternData === 'undefined') {
    progressSummary.querySelector(".progress-text").textContent = "0/0 completed";
    return;
  }
  
  patterns.forEach(([id]) => {
    const patternProgress = progress[id] || {};
    totalSolved += Object.values(patternProgress).filter(Boolean).length;
    totalProblems += patternData[id]?.leetcode?.length || 0;
  });
  
  progressSummary.querySelector(".progress-text").textContent = 
    `${totalSolved}/${totalProblems} completed`;
}

// Render pattern cards
function renderPatterns(filteredPatterns = patterns) {
  grid.innerHTML = "";
  
  filteredPatterns.forEach(([id, name, emoji]) => {
    const status = getPatternStatus(id);
    const progress = getProgress();
    const patternProgress = progress[id] || {};
    const solved = Object.values(patternProgress).filter(Boolean).length;
    
    // Get total, handling case where patternData might not be loaded
    let total = 0;
    if (typeof patternData !== 'undefined' && patternData[id]) {
      total = patternData[id].leetcode?.length || 0;
    }
    
    const card = document.createElement("div");
    card.className = `pattern-card status-${status}`;
    card.onclick = () => location.href = `pattern.html?name=${id}`;
    
    card.innerHTML = `
      <div class="card-emoji">${emoji}</div>
      <div class="card-name">${name}</div>
      <div class="card-progress">
        <div class="card-progress-bar">
          <div class="card-progress-fill" style="width: ${total > 0 ? (solved/total)*100 : 0}%"></div>
        </div>
        <div class="card-progress-text">${solved}/${total}</div>
      </div>
      <div class="card-status">${status.replace("-", " ")}</div>
    `;
    
    grid.appendChild(card);
  });
}

// Search functionality
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = patterns.filter(([id, name]) => 
    name.toLowerCase().includes(query)
  );
  renderPatterns(filtered);
});

// Filter functionality
let currentFilter = "all";
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    
    if (currentFilter === "all") {
      renderPatterns(patterns);
    } else {
      const filtered = patterns.filter(([id]) => 
        getPatternStatus(id) === currentFilter
      );
      renderPatterns(filtered);
    }
  });
});

// Theme toggle
function loadTheme() {
  const theme = localStorage.getItem("dsa-theme") || "dark";
  document.body.classList.toggle("light-theme", theme === "light");
  themeToggle.textContent = theme === "light" ? "🌙" : "☀️";
}

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-theme");
  localStorage.setItem("dsa-theme", isLight ? "light" : "dark");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
});

// Initialize
loadTheme();
renderPatterns();
updateProgressSummary();