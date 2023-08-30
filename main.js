
const loadPhoto = async () => {
  try {
    const URL = "https://api.thecatapi.com/v1/images/search?limit=3";
    const res = await fetch(URL);
    const data = await res.json();
    const img = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    img.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
    return photo;
  } catch (err) {
    console.error(err);
  }
};

const generateCat = () => {
    loadPhoto();
  };
  

generateCat();
const button = document.getElementById('generateButton');
generateButton.addEventListener('click', generateCat);
