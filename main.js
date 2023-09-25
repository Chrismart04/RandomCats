//load the cat photo of the api and create the img element
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

//funtion for the button
const generateCat = () => {
    loadPhoto();
  };
  
//call the funtion 
generateCat();
const button = document.getElementById('generateButton');
generateButton.addEventListener('click', generateCat);
