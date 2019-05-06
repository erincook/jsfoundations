function log(message) {
  console.log(message);
  let p = document.createElement('p');
  p.innerHTML = message;
  document.getElementById('main').appendChild(p);
}

var haveYouAnyWool = function(woolOwners) {
  return woolOwners.reduce( (sum, owner) => {
    return sum + Object.values(owner)[0];
  }, 0);
};

function baabaaBlackSheep(bags) {
  log("BaaBaa BlackSheep have you any wool?");
  if (bags > 0) {
    log("yes sir, yes sir " + bags + " bags full");
  }
}

function oneForMy(woolOwners) {
  for (var i = 0; i < woolOwners.length; i++) {
    var person = Object.keys(woolOwners[i])[0];
    var location = woolOwners[i].location;
    var message = "one for my " + person;
    if (location) {
      message += " that lives " + location;
    }
    log("one for my " + message);
  }
}

const woolOwners = [
  { "master": 1 },
  { "dame": 1 },
  {
    "little boy": 1,
    "location": "down the lane"
  }
];

baabaaBlackSheep(haveYouAnyWool(woolOwners));
oneForMy(woolOwners);
