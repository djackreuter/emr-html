function addButton() {
  // grab the element that the new div will go after
  var target = document.querySelector('.headings');
  // create the new div & give it an id
  var button = document.createElement('button');
  button.setAttribute('id', 'js-button');
  // add content to the div
  button.innerHTML = 'This was added via JS.  Click to remove';
  // add the div to the DOM
  target.parentNode.insertBefore(button, target.nextSibling);

  removeFromDom();
}

function addToDom() {
    return new Promise((resolve) => {
        setTimeout(function() {
          addButton();
        }, 3000);
        resolve();
  });
}

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
