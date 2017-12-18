console.log('connected to js file');

function onLoad() {
  addContent();

    return new Promise((resolve) => {
        setTimeout(function() {
          addButton();
        }, 3000);
        resolve();
  });
}

// toggle headings color
function mouseMove() {
  document.querySelector('.headings').style.backgroundColor = 'lightskyblue';
}

function mouseOut() {
  document.querySelector('.headings').style.backgroundColor = 'lightblue';
}

var interval = setInterval(function() {
  toggle()
}, 3000);

function toggle() {
  document.querySelector('.heading-text').classList.toggle('toggledFont');
}

// setInterval(function() {
//       document.querySelector('.heading-text').classList.toggle('toggledFont');
// }, 3000);

// increase paragraph font size
function increaseFont() {
  var para = document.querySelector('#para');
  para.style.fontSize += '1rem';
  var currentFontSize = parseFloat(para.style.fontSize);
  console.log(currentFontSize);
  para.style.fontSize = (currentFontSize + .1) + 'rem';
}

// create a new dom element before h1
function addContent() {
  // Get a reference to the element in which we want to insert a new node
  var parentElement = document.getElementById('headings');
  // Get a reference to the first child
  var theFirstChild = parentElement.firstChild;
  // Create a new element
  var newElement = document.createElement('p');
  newElement.textContent = 'Prepended before h1';
  // Insert the new element before the first child
  parentElement.insertBefore(newElement, theFirstChild);
}
// create a button to add to the DOM
function addButton() {
  // grab the element that the new div will go after
  var target = document.querySelector('.headings');
  // create the new div & give it an id
  var button = document.createElement('button');
  // give the button an id
  button.setAttribute('class', 'article');
  button.setAttribute('id', 'js-button');
  // add content to the div
  button.innerHTML = 'Appended after headings. Click to remove';
  // Prepend the div to the DOM after the headings
  target.parentNode.insertBefore(button, target.nextSibling);

  removeFromDom();
}

// remove button from DOM
function removeFromDom() {
  var button = document.querySelector('#js-button');
  button.addEventListener('click', function() {
    button.parentNode.removeChild(button);
  });
}

// Change text content
function changeText() {
  var text = document.getElementById('text-content');
  text.textContent = 'This content has been changed!';
}

// hide EPL table
function hideTable() {
  document.getElementById('table').style.display = 'none';
}

function showImg() {
  var img = document.getElementById('img');
  img.style.visibility = 'visible';
}

// define event listener function
function onSubmit() {
  var button = document.getElementById('submit');
  var soccer = document.getElementById('soccer');
  var basketball = document.getElementById('basketball');
  var football = document.getElementById('football');
  switch(true) {
    case soccer.checked && !basketball.checked && !football.checked:
      alert('You chose soccer!');
      break;
    case basketball.checked && !soccer.checked && !football.checked:
      alert('You chose basketball!');
      break;
    case football.checked && !soccer.checked && !basketball.checked:
      alert('You chose football!');
      break;
    case soccer.checked && basketball.checked && !football.checked:
      alert('you chose soccer and basketball!');
      break;
    case soccer.checked && football.checked && !basketball.checked:
      alert('you chose soccer and football!');
      break;
    case basketball.checked && football.checked && !soccer.checked:
      alert('you chose basketball and football!');
      break;
    case football.checked && soccer.checked && basketball.checked:
      alert('you like it all!');
      break;
    default:
      alert('please choose one or more sports');
  }
}
