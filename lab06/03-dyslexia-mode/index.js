/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const makeDyslexiaMode = () => {
  let contentElement = document.querySelector("body");
  if (contentElement.className == "") {
    document.querySelector('body').className = "dyslexia-mode";
  } else {
    document.querySelector('body').className = "";
  }
}

