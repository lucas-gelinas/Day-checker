// Connecting button to the function
document.getElementById('button').addEventListener('click', check)
let age = 0
let day = 0

function check () {
  // Taking user input to display appropriate message
  age = document.getElementById('userage').value
  age = parseInt(age)
  day = document.getElementById('userday').value

  if ((day === 'Saturday' || day === 'Sunday') && (age < 18)) {
    document.getElementById('response').innerHTML = 'Enjoy your weekend!'
  } else if ((day === 'Saturday' || day === 'Sunday') && (age > 19)) {
    document.getElementById('response').innerHTML = 'Enjoy your weekend!'
  } else if (age < 18) {
    document.getElementById('response').innerHTML = 'Time for school!'
  } else {
    document.getElementById('response').innerHTML = 'Time for work!'
  }
}
