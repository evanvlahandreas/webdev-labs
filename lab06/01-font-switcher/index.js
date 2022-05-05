const makeBigger = () => {
   let contentElement = document.querySelector('.content');
   // let contentStyle = contentElement.style;
   let computeFontSize = parseFloat(
      getComputedStyle(contentElement).getPropertyValue('font-size')
   );
   contentElement.style.fontSize = computeFontSize + 2 + "px";
   // console.log(parseFloat(fontSize) + 2);
   // alert('make bigger!');
};

const makeSmaller = () => {
   let contentElement = document.querySelector('.content');
   let computeFontSize = parseFloat(
      getComputedStyle(contentElement).getPropertyValue('font-size')
   );
   contentElement.style.fontSize = computeFontSize - 2 + "px";
};


// document.querySelector('#a1').addEventListener('click', makeBigger);
// document.querySelector('#a2').addEventListener('click', makeSmaller);

