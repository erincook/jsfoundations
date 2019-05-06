var woolOwners = [
  { "master": 1 },
  { "dame": 1 },
  {
    "little boy": 1,
    "location": "down the lane"
  }
];

var totalBags = 0;

function log(message) {
  console.log(message);
  let p = document.createElement('p');
  p.innerHTML = message;
  document.getElementById('main').appendChild(p);
}

var haveYouAnyWool = function() {
  for (var i = 0; i < woolOwners.length; i++) {
    totalBags = totalBags + i;
  }
  return (i);
};

function baabaaBlackSheep() {
  log("BaaBaa BlackSheep have you any wool?");
  if (bags > 0) {
    log("yes sir, yes sir " + totalBags + " bags full");
  }
}

function oneForMy() {
  for (var i = 0; i < 2; i++) {
    people = Object.keys(woolOwners[i]);
    var person = people.toString();
    log("one for my " + person);
  }
}

var bags = haveYouAnyWool();

baabaaBlackSheep();
oneForMy();

var boy = Object.keys(woolOwners[2]);
var littleBoy = boy[0];

var whereHeLives = woolOwners[2].location;
log("one for the " + littleBoy + " that lives " + whereHeLives);
