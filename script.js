const config = {
  red: {
    duration: 4000,
    next: "green",
  },
  yellow: {
    duration: 500,
    next: "red",
  },
  green: {
    duration: 3000,
    next: "yellow",
  },
};

// Update the lights object to include both traffic lights
const lights = {
  red: document.querySelectorAll(".red"),
  yellow: document.querySelectorAll(".yellow"),
  green: document.querySelectorAll(".green"),
};

let currentLight = "red";

function changeLight() {
  // Remove active class from all lights
  Object.values(lights).forEach((lightGroup) => {
    lightGroup.forEach((light) => light.classList.remove("active"));
  });

  // Add active class to current lights in both traffic signals
  lights[currentLight].forEach((light) => light.classList.add("active"));

  setTimeout(() => {
    currentLight = config[currentLight].next;
    changeLight();
  }, config[currentLight].duration);
}

changeLight();
