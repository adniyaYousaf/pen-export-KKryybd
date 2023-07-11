var visible, address, comments, item;

// Describe this function...
function hide_show_menu() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  return true;
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


visible = false;
address = ['https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/ty4ppudcq94rtgj4rv6p.jpg', 'data:image/jpeg;base64,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', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBmea2KCfOKHLd4gRYRa0Y5Sc8KHzDqB9Stg&usqp=CAU'];
comments = [];
let element_header = document.getElementById('header');
element_header.style.backgroundColor = '#ffffcc';
let element_nav_menu = document.getElementById('nav-menu');
element_nav_menu.style.visibility = (false) ? 'visible' : 'hidden';
element_nav_menu.style.backgroundColor = '#ffcc99';
let element_h1 = document.getElementById('h1');
element_h1.style.color = '#996633';
document.querySelectorAll('#nav-link').forEach((selectedElement) => {
  selectedElement.style.color = '#000000';

});


document.getElementById('hamburger').addEventListener('click', (event) => {
  if (visible == false) {
    let element_nav_menu2 = document.getElementById('nav-menu');
    element_nav_menu2.style.visibility = (true) ? 'visible' : 'hidden';
  } else {
    let element_nav_menu3 = document.getElementById('nav-menu');
    element_nav_menu3.style.visibility = (false) ? 'visible' : 'hidden';
  }
  visible = false;

});

document.getElementById('right').addEventListener('click', (event) => {
  let element_img = document.getElementById('img');
  element_img.setAttribute("src", randomMember(address));

});

document.getElementById('left').addEventListener('click', (event) => {
  let element_img2 = document.getElementById('img');
  element_img2.setAttribute("src", randomMember(address));

});

document.getElementById('enter').addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#ffcc66';
  comments.push(document.getElementById('text').value);

});

document.getElementById('hide').addEventListener('click', (event) => {
  if (!comments.length) {
    let element_no_comment = document.getElementById('no-comment');
    element_no_comment.innerText = 'No comment yet!';
  } else {
    let element_no_comment2 = document.getElementById('no-comment');
    element_no_comment2.replaceChildren();
    comments.forEach((item) => {
      let element_comments = document.getElementById('comments');
      let new_li = document.createElement('li');
      new_li.innerText = item;

      element_comments.appendChild(new_li);
    });
  }

});