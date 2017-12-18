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

// create a new dom element before h1
function addContent() {
  // Get a reference to the element in which we want to insert a new node
  var parentElement = document.getElementById('headings');
  // Get a reference to the first child
  var theFirstChild = parentElement.firstChild;
  // Create a new element
  var newElement = document.createElement('p');
  newElement.textContent = 'Created with JS';
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
  button.setAttribute('id', 'js-button');
  // add content to the div
  button.innerHTML = 'This was added via JS.  Click to remove';
  // Prepend the div to the DOM after the headings
  target.parentNode.insertBefore(button, target.nextSibling);

  removeFromDom();
}
// create the promise

// remove button from DOM
function removeFromDom() {
  var button = document.querySelector('#js-button');
  button.addEventListener('click', function() {
    button.parentNode.removeChild(button);
  });
}

function hideTable() {
  document.getElementById('table').style.display = 'none';
}

// store element in variable
var button = document.getElementById('submit');

// define event listener function
function onSubmit() {
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
