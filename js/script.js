/* style.css */
body {
  margin: 0;
  font-family: 'Fira Code', monospace;
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

:root {
  --bg-color: #f8f9fa;
  --text-color: #212529;
  --nav-bg: #111;
  --nav-hover: #1a1a1a;
  --card-bg: #fff;
  --card-glow: rgba(0, 209, 178, 0.25);
  --tag-bg: #e0f7f4;
  --tag-color: #00796b;
}

body.dark {
  --bg-color: #121212;
  --text-color: #f1f1f1;
  --nav-bg: #1a1a1a;
  --nav-hover: #333;
  --card-bg: #1e1e1e;
  --card-glow: rgba(0, 209, 178, 0.35);
  --tag-bg: #263238;
  --tag-color: #80cbc4;
}

/* Project Cards */
.project-card {
  background: var(--card-bg);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px var(--card-glow);
}

.project-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
}

.project-links a {
  margin-right: 1rem;
  text-decoration: none;
  color: #00d1b2;
}

.tech-tags {
  margin: 0.5rem 0 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tags span {
  background-color: var(--tag-bg);
  color: var(--tag-color);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Responsive Grid */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
