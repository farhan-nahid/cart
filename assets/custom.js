// phone decrement

document
  .getElementById("phone-decrement")
  .addEventListener("click", function () {
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    if (phoneCount > 0) {
      const phoneNewCount = phoneCount - 1;
      phoneInput.value = phoneNewCount;
      const phonePrize = phoneNewCount * 1219;
      document.getElementById("phone-prize").innerText = "$" + phonePrize;
      const subTotal = (document.getElementById("total__subtotal").innerText =
        phonePrize);
      const subTotalNumber = parseInt(subTotal);
      const tax = document.getElementById("tax").innerText;
      const taxNumber = parseInt(tax) * 0.1;
      console.log(subTotalNumber, taxNumber);
      document.getElementById("total__cost").innerText = phonePrize + taxNumber;
    } else {
      alert("You can't decrement lase then 0 !!");
    }
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
    const subTotal = (document.getElementById("total__subtotal").innerText =
      phonePrize);
    const subTotalNumber = parseInt(subTotal);
    const tax = document.getElementById("tax").innerText;
    const taxNumber = parseInt(tax) * 0.1;
    console.log(subTotalNumber, taxNumber);
    document.getElementById("total__cost").innerText = phonePrize + taxNumber;
  });

// case decrement

document
  .getElementById("case-decrement")
  .addEventListener("click", function () {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    if (caseCount > 0) {
      const caseNewCount = caseCount - 1;
      caseInput.value = caseNewCount;
      const casePrize = caseNewCount * 59;
      document.getElementById("case-prize").innerText = "$" + casePrize;
      document.getElementById("total__subtotal").innerText = casePrize;
      const tax = document.getElementById("tax").innerText;
      const taxNumber = parseInt(tax) * 0.1;
      document.getElementById("total__cost").innerText = casePrize + taxNumber;
    } else {
      alert("You can't decrement lase then 0 !!");
    }
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
    document.getElementById("total__subtotal").innerText = casePrize;
    const tax = document.getElementById("tax").innerText;
    const taxNumber = parseInt(tax) * 0.1;
    document.getElementById("total__cost").innerText = casePrize + taxNumber;
  });
