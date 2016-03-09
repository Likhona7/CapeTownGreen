//find the body tag and store it in a variable called 'body'
var taxiLocationCounter = 1;
var body = document.querySelector("body");
//listen for the keydown event
// displayMessage(taxiLocationCounter);
body.onkeydown = function(e) {
  //e.keyCode - will capture the key codes
  var keyName = keyCodeName(e.keyCode);
  var trafficLight = new TrafficLight(taxiLocationCounter);

  if (e.keyCode === 38) {
    trafficLight.makeRed();

  }
  if (e.keyCode === 40) {
    trafficLight.makeGreen();
  }

  if (e.keyCode === 16) {
    trafficLight.makeOrange();
  }

  if (keyName === "right") {
    if (trafficLight.color() === "green" && taxiLocationCounter < 9) {
taxiLocationCounter > 1;

        moveForward();

    }
  }
  if (keyName === "left") {

    if (taxiLocationCounter > 1) {



      moveBackward();

    }
  }

  taxiLocationCounter++;
  //displayMessage(taxiLocationCounter);
  //displayMessage(createLocationClass(taxiLocationCounter));
  //displayMessage();
  //displayMessage(e.keyCode);
  //  displayMessage(keyCodeName(e.keyCode));

  taxiLocationCounter--;
  displayMessage(createLocationClass(taxiLocationCounter));
  //displayMessage();


};

var CreateLocationClass = function(x) {
  var className = createTrafficLightClass(x);
  var trafficLightElement = document.querySelector(className);
};



var moveForward = function() {
  var currentLocation = createLocationClass(taxiLocationCounter);
  taxiLocationCounter++;
  var newLocation = createLocationClass(taxiLocationCounter);
  moveTaxi(currentLocation, newLocation);
};

var moveBackward = function() {
  var currentLocation = createLocationClass(taxiLocationCounter);
  taxiLocationCounter--;
  var newLocation = createLocationClass(taxiLocationCounter);
  moveTaxi(currentLocation, newLocation);
};


var createLocationClass = function(taxiLocationCounter) {
  if (taxiLocationCounter === 1) {
    return "slot-one-of-nine";
  }
  if (taxiLocationCounter === 2) {
    return "slot-two-of-nine";
  }

  if (taxiLocationCounter === 3) {
    return "slot-three-of-nine";
  }

  if (taxiLocationCounter === 4) {
    return "slot-four-of-nine";
  }

  if (taxiLocationCounter === 5) {
    return "slot-five-of-nine";
  }

  if (taxiLocationCounter === 6) {
    return "slot-six-of-nine";
  }

  if (taxiLocationCounter === 7) {
    return "slot-seven-of-nine";
  }

  if (taxiLocationCounter === 8) {
    return "slot-eight-of-nine";
  }

  if (taxiLocationCounter === 9) {
    return "slot-nine-of-nine";
  }

};
var createTrafficLightClass = function(taxiLocationCounter) {
  if (taxiLocationCounter === 1) {
    return ".one-of-nine";
  }
  if (taxiLocationCounter === 2) {
    return ".two-of-nine";
  }
  if (taxiLocationCounter === 3) {
    return ".three-of-nine";
  }
  if (taxiLocationCounter === 4) {
    return ".four-of-nine";
  }
  if (taxiLocationCounter === 5) {
    return ".five-of-nine";
  }
  if (taxiLocationCounter === 6) {
    return ".six-of-nine";
  }
  if (taxiLocationCounter === 7) {
    return ".seven-of-nine";
  }
  if (taxiLocationCounter === 8) {
    return ".eight-of-nine";
  }
  if (taxiLocationCounter === 9) {
    return ".nine-of-nine";
  }
};



var keyCodeName = function(keyCode) {
  if (keyCode === 37) {
    return "left";
  } else if (keyCode === 38) {
    return "up";
  } else if (keyCode === 39) {
    return "right";

  } else if (keyCode === 40) {
    return "down";

  } else {
    return "";
  }

};

var TrafficLight = function(trafficLightNumber) {
  var className = createTrafficLightClass(trafficLightNumber);
  var trafficLightElement = document.querySelector(className);
  // where does trafficLightElement comes from?
  this.makeGreen = function() {
    trafficLightElement.classList.add("lights-go");
    trafficLightElement.classList.remove("lights-slowdown");
    trafficLightElement.classList.remove("lights-stop");
  };
  this.makeOrange = function() {
    trafficLightElement.classList.add("lights-slowdown");
    trafficLightElement.classList.remove("lights-stop");
    trafficLightElement.classList.remove("light-go");

  }
  this.makeRed = function() {
    trafficLightElement.classList.add("lights-stop");
    trafficLightElement.classList.remove("lights-slowdown");
    trafficLightElement.classList.remove("lights-go");
  }
  this.color = function() {
    if (trafficLightElement.classList.contains("lights-slowdown")) {
      return "orange";
    }
    if (trafficLightElement.classList.contains("lights-go")) {
      return "green";
    }
    if (trafficLightElement.classList.contains("lights-stop")) {
      return "red";
    }

  }
};
