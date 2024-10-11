//load the cat photo of the api and create the img element
const loadPhoto = async () => {
  try {
    const URL = "https://api.thecatapi.com/v1/images/search?limit=3";
    const res = await fetch(URL);
    const data = await res.json();

    const imgElements = document.querySelectorAll(".cat-image");
    imgElements.forEach((imgElement, index) => {
      if (data[index]) {
        imgElement.src = data[index].url;
      }
    });
  } catch (err) {
    console.log("error loading cat images", err);
    document.getElementById("error").innerText =
      "failed to load cat images, please try again";
  }
};
//funtion for the button
const generateCat = () => {
  loadPhoto();
};

//call the funtion
generateCat();
const button = document.getElementById("generateButton");
button.addEventListener("click", generateCat);
