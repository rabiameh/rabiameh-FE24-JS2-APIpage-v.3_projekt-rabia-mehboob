const navbar = `
  <div class="logo">API Page v.3</div>
  <div class="nav-container">
    <nav>
      <ul class="nav-links">
        <li><a href="../index.html">Home</a></li>
        <li><a href="../pages/weather.html">Weather</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
  <div class="nav-controls">
    <button id="darkModeToggle">🌙</button>
    <button id="hamburger" aria-label="Menu">☰</button>
  </div>
`;

document.getElementById("navbar").innerHTML = navbar;
