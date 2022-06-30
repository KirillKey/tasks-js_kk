const path = 'C:/Users/79127/Desktop/inn.html';

const isHtml = required => {
  let requiredEnd = ".html";
  let pathEnd = path.slice(-5);

  return requiredEnd == pathEnd;
};

console.log(isHtml(path));





// const path = 'C:/Users/79127/Desktop/inn.html';

// function isHtml (required) {
//     if (required.includes('.html')) {
  //         console.log(true);
  //     } 
  //     else {console.log(false)}
  
  // };
  
  // isHtml (path);


  // const path = 'C:/Users/79127/Desktop/inn.html';
  
  // function isHtml (required) {
  //   let requiredEnd = ".html";
  //   let pathEnd = path.slice(-5);
  
  //   return requiredEnd == pathEnd;
  // };
  
  // console.log(isHtml(path));