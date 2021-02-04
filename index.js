/*================================================================ 
MENU
===================================================================*/
const menuIcon = document.querySelector(".menu-icon");
const aside = document.querySelector("aside");



menuIcon.addEventListener("click", () => aside.classList.toggle("show"));




/*================================================================ 
SLIDER
===================================================================*/
var index = 0;

const getSlides = sliderId => {
  let sliderArr;
  try {
    const sliderItems = document.getElementById(sliderId).children;
    sliderArr = Array.from(sliderItems);
  } catch (err) {
    throw new Error("Gib ne gültige Id an du Dulli");
  }
  return [sliderArr, sliderArr.length - 1];
};

const getIcons = iconsId => {
  let iconsArr;

  try {
    const icons = document.getElementById(iconsId).children;
    iconsArr = Array.from(icons);
  } catch (err) {
    throw new Error("Gib ne gültige Id an du Dulli");
  }

  return iconsArr;
};

const clearSwipe = () => {
  sliderArr.forEach(slide => {
    slide.classList.remove("active");
  });
};

const swipeTo = current => {
  clearSwipe(sliderArr);
  const img = sliderArr[current];
  img.classList.add("active");
};

const swipeRight = length => {
  index++;
  if (index > length) {
    index = 0;
  }
  swipeTo(index);
};

const swipeLeft = length => {
  index--;
  if (index < 0) {
    index = length;
  }
  swipeTo(index);
};

const [sliderArr, maxLength] = getSlides("slider-wrapper");

const iconsArr = getIcons("toggles");
const [leftIcon, rightIcon] = iconsArr;
leftIcon.addEventListener("click", swipeLeft.bind(null, maxLength));
rightIcon.addEventListener("click", swipeRight.bind(null, maxLength));
