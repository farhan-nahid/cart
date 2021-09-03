// phone

document.getElementById("phone__decrement").addEventListener("click", () => {
  const phoneCount = document.getElementById("phone__count");
  const phoneCountNumber = parseInt(phoneCount.value);
  phoneCount.value = phoneCountNumber - 1;
});

document.getElementById("phone__increment").addEventListener("click", () => {
  const phoneCount = document.getElementById("phone__count");
  const phoneCountNumber = parseInt(phoneCount.value);
  phoneCount.value = phoneCountNumber + 1;
});

// case

document.getElementById("case__decrement").addEventListener("click", () => {
  const caseCount = document.getElementById("case__count");
  const caseCountNumber = parseInt(caseCount.value);
  if (caseCountNumber == 0) {
    const error = document.getElementById("case__error");
    error.style.display = "block";
    error.innerText = "Please Increment. You can not buy less then 0";
    error.style.padding = "10px";
    error.style.textAlign = "center";
    error.style.backgroundColor = "rgba(255, 0, 0, 0.238)";
    error.style.color = "red";
    error.style.marginTop = "10px";
  } else if (caseCountNumber > 0) {
    caseCount.value = caseCountNumber - 1;
  }
});

document.getElementById("case__increment").addEventListener("click", () => {
  const error = document.getElementById("case__error");
  error.style.display = "none";
  const caseCount = document.getElementById("case__count");
  const caseCountNumber = parseInt(caseCount.value);
  caseCount.value = caseCountNumber + 1;
});
