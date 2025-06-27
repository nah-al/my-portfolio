/* style.css */
body {
  margin: 0;
  font-family: 'Fira Code', monospace;
  background-color: #f8f9fa;
  color: #212529;
  line-height: 1.6;
}

header {
  background-color: #111;
  color: white;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
  font-size: 1.25rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  position: relative;
  padding: 4px 0;
}

.nav-links li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #00d1b2;
  transition: width 0.3s ease;
}

.nav-links li a:hover::after,
.nav-links li a.active::after {
  width: 100%;
}

.nav-links li a.active {
  color: #00d1b2;
}

.menu-toggle {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
}

.hero {
  text-align: center;
  padding: 5rem 1rem;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #00d1b2;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #00bfa5;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #111;
  color: white;
  font-size: 0.875rem;
}

.about, .projects, .contact {
  max-width: 960px;
  margin: 2rem auto;
  padding: 1rem;
}

.bio {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.profile-pic {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
}

.skills ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-left: 0;
  list-style: none;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
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

.contact-info p {
  margin: 0.5rem 0;
}

.contact-info a {
  color: #00d1b2;
  text-decoration: none;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    display: none;
    background-color: #111;
    padding: 1rem;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
  }

  .nav-links.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  .bio {
    flex-direction: column;
  }
}
