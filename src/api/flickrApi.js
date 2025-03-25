document.getElementById('imageForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const width = document.getElementById('width').value;
  const height = document.getElementById('height').value;
  const imageUrl = `https://picsum.photos/${width}/${height}`;

  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = `Random ${width}x${height} Image`;

  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = ''; 
  imageContainer.appendChild(img);
});
