// phone decrement

document
  .getElementById("phone-decrement")
  .addEventListener("click", function () {
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount - 1;
    phoneInput.value = phoneNewCount;
    const phonePrize = phoneNewCount * 1219;
    document.getElementById("phone-prize").innerText = "$" + phonePrize;
  });

// phone increment

document
  .getElementById("phone-increment")
  .addEventListener("click", function () {
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;
    const phonePrize = phoneNewCount * 1219;
    document.getElementById("phone-prize").innerText = "$" + phonePrize;
  });

// case decrement

document
  .getElementById("case-decrement")
  .addEventListener("click", function () {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;
    const casePrize = caseNewCount * 59;
    document.getElementById("case-prize").innerText = "$" + casePrize;
  });

// case increment

document
  .getElementById("case-increment")
  .addEventListener("click", function () {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;
    casePrize = caseNewCount * 59;
    document.getElementById("case-prize").innerText = "$" + casePrize;
  });

function calculateTotal() {}
