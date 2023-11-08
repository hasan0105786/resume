// Function to toggle experience details
function toggleExperienceDetails(experience) {
    var details = document.getElementById(experience);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// Function to toggle education details
function toggleEducationDetails(education) {
    var details = document.getElementById(education);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// Function to toggle certification details
function toggleCertificationDetails(certification) {
    var details = document.getElementById(certification);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// Function to toggle skills details
function toggleSkillsDetails(skills) {
    var details = document.getElementById(skills);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

function getRandomPosition(maxX, maxY) {
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createBug() {
    var bug = document.createElement("div");
    bug.classList.add("bug");
    bug.style.backgroundColor = getRandomColor();

    var maxX = window.innerWidth - 100;
    var maxY = window.innerHeight - 100;

    var position = getRandomPosition(maxX, maxY);
    bug.style.left = position.x + "px";
    bug.style.top = position.y + "px";

    bug.onclick = function() {
        this.remove();
    };

    document.body.appendChild(bug);
}

var bugCount = 10;

for (var i = 0; i < bugCount; i++) {
    setTimeout(createBug, i * 1000);
}

