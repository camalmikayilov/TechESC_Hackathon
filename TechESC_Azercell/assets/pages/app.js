document.addEventListener("mousemove", function(event) {
});

document.addEventListener("mousemove", function(event) {
	var mouseX = event.clientX;
	var mouseY = event.clientY;
});

document.addEventListener("mousemove", function(event) {
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	
	var mouseEffect = document.getElementById("mouse-effect");
	mouseEffect.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)";
});


function login() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	if (email === "example@gmail.com" && password === "password123") {
		document.getElementById("login-status").innerHTML = "Successfully logged in!";
	} else {
		document.getElementById("login-status").innerHTML = "Invalid email or password. Please try again.";
	}
}


// Start Order JavaScript
const pointBar = document.querySelector('.point-bar');
const pointCounter = document.querySelector('.point-counter');
const buyButton = document.querySelector('.buy-button');
const ranks = ['Rookie', 'Bronze', 'Silver', 'Gold'];
const rankPoints = [10, 20, 30];

let currentRank = 0;
let currentPoints = 0;

updatePointBar();

buyButton.addEventListener('click', () => {
  if (currentRank >= ranks.length - 1) {
    alert('You have reached the highest rank!');
    return;
  }

  if (currentPoints >= rankPoints[currentRank]) {
    currentRank++;
    currentPoints = 0;
    updatePointBar();
    alert(`Congratulations! You have reached the rank of ${ranks[currentRank]}`);
  } else {
    currentPoints++;
    updatePointBar();
  }
});

function updatePointBar() {
  const maxPoints = currentRank >= ranks.length - 1 ? rankPoints[currentRank - 1] : rankPoints[currentRank];
  const pointPercentage = currentPoints / maxPoints * 100;

  pointCounter.textContent = `${currentPoints}/${maxPoints}`;
  pointBar.style.setProperty('--point-percentage', `${pointPercentage}%`);
  pointBar.style.setProperty('--rank-count', ranks.length);

  for (let i = 0; i < ranks.length; i++) {
    const rank = document.querySelectorAll('.rank')[i];

    if (i <= currentRank) {
      rank.classList.add('rank-reached');
    } else {
      rank.classList.remove('rank-reached');
    }
  }
}

// End Order javaScript
