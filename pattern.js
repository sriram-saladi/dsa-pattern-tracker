const params = new URLSearchParams(window.location.search);
const key = params.get("name");

// Check if patternData exists
if (typeof patternData === 'undefined') {
  document.body.innerHTML = `
    <div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;padding:20px;text-align:center;">
      <h2 style="color:#e5e7eb;margin-bottom:20px">Error: data.js not loaded</h2>
      <p style="color:#94a3b8;margin-bottom:20px;">Make sure data.js is in the same folder and loaded before pattern.js</p>
      <button onclick="location.href='patterns.html'" style="padding:12px 24px;background:#6366f1;color:white;border:none;border-radius:8px;cursor:pointer;">
        Back to Patterns
      </button>
    </div>
  `;
} else {
  const p = patternData[key];

  if (!p) {
    document.body.innerHTML = `
      <div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;">
        <h2 style="color:#e5e7eb;margin-bottom:20px">Pattern not found</h2>
        <button onclick="location.href='patterns.html'" style="padding:12px 24px;background:#6366f1;color:white;border:none;border-radius:8px;cursor:pointer;">
          Back to Patterns
        </button>
      </div>
    `;
  } else {
    // Populate pattern details
    document.getElementById("patternTitle").textContent = p.title;
    document.getElementById("shortDesc").textContent = p.shortDesc;
    document.getElementById("what").textContent = p.what;
    document.getElementById("example").textContent = p.example;
    document.getElementById("complexity").textContent = p.complexity;

    // Fill lists
    fillList("when", p.when);
    fillList("observations", p.observations);
    fillList("variations", p.variations);
    fillList("mistakes", p.mistakes);

    // Load progress from localStorage
    const progress = JSON.parse(localStorage.getItem("dsa-progress") || "{}");
    const patternProgress = progress[key] || {};

    // Render LeetCode problems with checkboxes
    const lc = document.getElementById("leetcode");
    p.leetcode.forEach((item, idx) => {
      // Handle both old format (string) and new format (object)
      const url = typeof item === 'string' ? item : item.url;
      const difficulty = typeof item === 'string' ? 'Medium' : item.difficulty;
      
      const problemName = extractProblemName(url);
      const isChecked = patternProgress[idx] || false;

      const li = document.createElement("li");
      li.className = "leetcode-item";
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `problem-${idx}`;
      checkbox.checked = isChecked;
      checkbox.className = "problem-checkbox";
      
      checkbox.addEventListener("change", () => {
        if (!progress[key]) progress[key] = {};
        progress[key][idx] = checkbox.checked;
        localStorage.setItem("dsa-progress", JSON.stringify(progress));
        updateProgressBar();
      });

      const label = document.createElement("label");
      label.htmlFor = `problem-${idx}`;
      label.className = "problem-label";
      
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.className = "problem-link";
      link.textContent = problemName;
      
      const badge = document.createElement("span");
      badge.className = `difficulty-badge difficulty-${difficulty.toLowerCase()}`;
      badge.textContent = difficulty;
      
      label.appendChild(link);
      label.appendChild(badge);

      li.appendChild(checkbox);
      li.appendChild(label);
      lc.appendChild(li);
    });

    updateProgressBar();
  }
}

function fillList(id, items) {
  const ul = document.getElementById(id);
  if (!ul) {
    console.error(`Element with id "${id}" not found`);
    return;
  }
  
  ul.innerHTML = ""; // Clear existing content
  
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

function extractProblemName(url) {
  const match = url.match(/problems\/([^/]+)/);
  if (match) {
    return match[1]
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return url;
}

function updateProgressBar() {
  if (typeof patternData === 'undefined' || !patternData[key]) {
    return;
  }
  
  const progress = JSON.parse(localStorage.getItem("dsa-progress") || "{}");
  const patternProgress = progress[key] || {};
  const solved = Object.values(patternProgress).filter(Boolean).length;
  const total = patternData[key].leetcode.length;
  const percentage = (solved / total) * 100;

  const progressBar = document.getElementById("progressBar");
  const progressLabel = document.getElementById("progressLabel");
  
  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }
  
  if (progressLabel) {
    progressLabel.textContent = `${solved} of ${total} problems solved`;
  }
}

// Theme toggle
const themeToggle = document.getElementById("themeToggle");

function loadTheme() {
  const theme = localStorage.getItem("dsa-theme") || "dark";
  document.body.classList.toggle("light-theme", theme === "light");
  if (themeToggle) {
    themeToggle.textContent = theme === "light" ? "🌙" : "☀️";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");
    localStorage.setItem("dsa-theme", isLight ? "light" : "dark");
    themeToggle.textContent = isLight ? "🌙" : "☀️";
  });
}

loadTheme();