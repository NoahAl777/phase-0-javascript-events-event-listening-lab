// (MDN) Callback function: function passed into another function as an action and later on invoked by the outer function in order to perform an action
function addingEventListener() {
  const input = document.getElementById('input');
  // variable.addEventListener('event','callback function');
  input.addEventListener('click', function () {
    alert("This is an alert message!");
  })
}