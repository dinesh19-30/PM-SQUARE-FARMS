// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
let stopwatchInterval;
let elapsedSeconds = 0;

// Stopwatch functionality
function startStopwatch() {
  const stopwatchDisplay = document.getElementById("stopwatch");
  elapsedSeconds = 0;
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(() => {
    elapsedSeconds++;
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    stopwatchDisplay.textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function calculateAmount() {
  const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
  const timeInMinutes = elapsedSeconds / 60;

  if (isNaN(hourlyRate) || hourlyRate <= 0) {
    alert("Please enter a valid hourly rate.");
    return;
  }

  const amount = (hourlyRate / 60) * timeInMinutes;
  document.getElementById(
    "result"
  ).textContent = `The actual amount for ${timeInMinutes.toFixed(
    2
  )} minutes is: ${amount.toFixed(2)}`;
}

// Product and owner information functionality
function showProductButtons(category) {
  document
    .querySelectorAll(".product-buttons")
    .forEach((el) => (el.style.display = "none"));
  document.getElementById(category + "-buttons").style.display = "flex";
}

function showOwnerInfo(owners) {
  const infoDiv = document.getElementById("owner-info");
  infoDiv.innerHTML = owners
    .map((owner) => `<p>Owner: ${owner.name}, Phone: ${owner.phone}</p>`)
    .join("");
  infoDiv.style.display = "block";
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Show product buttons for categories
  document
    .getElementById("tractor-button")
    .addEventListener("click", () => showProductButtons("tractor"));
  document
    .getElementById("harvester-button")
    .addEventListener("click", () => showProductButtons("harvester"));
  document
    .getElementById("load-vehicles-button")
    .addEventListener("click", () => showProductButtons("load-vehicles"));
  document
    .getElementById("plowing-machines-button")
    .addEventListener("click", () => showProductButtons("plowing-machines"));

  // Tractor buttons
  document
    .querySelector("#tractor-buttons button:nth-child(1)")
    .addEventListener("click", () => {
      const pudurTractorOwners = [
        { name: "John Doe", phone: "+1 123 456 789" },
        { name: "Dinesh", phone: "605525" }
      ];
      showOwnerInfo(pudurTractorOwners);
    });

  document
    .querySelector("#tractor-buttons button:nth-child(2)")
    .addEventListener("click", () => {
      const malaimeduTractorOwners = [
        { name: "Jane Doe", phone: "+1 234 567 890" }
      ];
      showOwnerInfo(malaimeduTractorOwners);
    });

  document
    .querySelector("#tractor-buttons button:nth-child(3)")
    .addEventListener("click", () => {
      const malaiyanurTractorOwners = [
        { name: "Sam Smith", phone: "+1 345 678 901" }
      ];
      showOwnerInfo(malaiyanurTractorOwners);
    });

  // Harvester buttons
  document
    .querySelector("#harvester-buttons button:nth-child(1)")
    .addEventListener("click", () => {
      const pudurHarvesterOwners = [
        { name: "Ella Brown", phone: "+1 456 789 012" }
      ];
      showOwnerInfo(pudurHarvesterOwners);
    });

  document
    .querySelector("#harvester-buttons button:nth-child(2)")
    .addEventListener("click", () => {
      const malaimeduHarvesterOwners = [
        { name: "Liam Green", phone: "+1 567 890 123" }
      ];
      showOwnerInfo(malaimeduHarvesterOwners);
    });

  document
    .querySelector("#harvester-buttons button:nth-child(3)")
    .addEventListener("click", () => {
      const malaiyanurHarvesterOwners = [
        { name: "Olivia White", phone: "+1 678 901 234" }
      ];
      showOwnerInfo(malaiyanurHarvesterOwners);
    });

  // Load Vehicle buttons
  document
    .querySelector("#load-vehicles-buttons button:nth-child(1)")
    .addEventListener("click", () => {
      const pudurLoadVehicleOwners = [
        { name: "V.Boopathi", phone: "+91 6383297690" }
      ];
      showOwnerInfo(pudurLoadVehicleOwners);
    });

  document
    .querySelector("#load-vehicles-buttons button:nth-child(2)")
    .addEventListener("click", () => {
      const malaimeduLoadVehicleOwners = [
        { name: "S.Raja", phone: "+91 8072514712" }
      ];
      showOwnerInfo(malaimeduLoadVehicleOwners);
    });

  document
    .querySelector("#load-vehicles-buttons button:nth-child(3)")
    .addEventListener("click", () => {
      const malaiyanurLoadVehicleOwners = [
        { name: "Sophia Red", phone: "+1 901 234 567" }
      ];
      showOwnerInfo(malaiyanurLoadVehicleOwners);
    });

  // Plowing Machines buttons
  document
    .querySelector("#plowing-machines-buttons button:nth-child(1)")
    .addEventListener("click", () => {
      const pudurPlowingMachineOwners = [
        { name: "James Grey", phone: "+1 012 345 678" }
      ];
      showOwnerInfo(pudurPlowingMachineOwners);
    });

  document
    .querySelector("#plowing-machines-buttons button:nth-child(2)")
    .addEventListener("click", () => {
      const malaimeduPlowingMachineOwners = [
        { name: "Emma Orange", phone: "+1 123 456 789" }
      ];
      showOwnerInfo(malaimeduPlowingMachineOwners);
    });

  document
    .querySelector("#plowing-machines-buttons button:nth-child(3)")
    .addEventListener("click", () => {
      const malaiyanurPlowingMachineOwners = [
        { name: "Lucas Purple", phone: "+1 234 567 890" }
      ];
      showOwnerInfo(malaiyanurPlowingMachineOwners);
    });
});

  
