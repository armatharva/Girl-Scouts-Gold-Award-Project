/* style.css */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #fafafa;
  color: #333;
}

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #009A44; /* Girl Scouts green */
  color: white;
}

.site-header .logo {
  height: 50px;
}

.site-header nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.site-header nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: #f1fdf6;
}

.card {
  margin: 2rem auto;
  padding: 2rem;
  max-width: 800px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

footer {
  text-align: center;
  padding: 1rem;
  background: #009A44;
  color: white;
}
