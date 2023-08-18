
const loadPhoto = async () => {
  try {
    const URL = "https://api.thecatapi.com/v1/images/search";
    const res = await fetch(URL);
    const data = await res.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
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
