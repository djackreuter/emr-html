function addDiv() {
  // grab the element that the new div will go after
  var target = document.querySelector('.headings');
  // create the new div & give it an id
  var div = document.createElement('div');
  div.setAttribute('id', 'js-div');
  // add content to the div
  div.innerHTML = 'This was added via JS.  Click to remove';
  // add the div to the DOM
  target.parentNode.insertBefore(div, target.nextSibling);

  removeFromDom();
}

function addToDom() {
    return new Promise((resolve) => {
        setTimeout(function() {
          addDiv();
        }, 3000);
        resolve();
  });
}

function removeFromDom() {
  var div = document.querySelector('#js-div');
  div.addEventListener('click', function() {
    div.parentNode.removeChild(div);
  });
}
