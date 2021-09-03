// phone decrement

document.getElementById("phone__decrement").addEventListener("click", () => {
  const phoneCount = document.getElementById("phone__count");
  const phoneCountNumber = parseInt(phoneCount.value);
  if (phoneCountNumber == 0) {
    const error = document.getElementById("phone__error");
    error.style.display = "block";
    error.innerText = "Please Increment. You can not buy less then 0 !!";
    error.style.padding = "10px";
    error.style.textAlign = "center";
    error.style.backgroundColor = "rgba(255, 0, 0, 0.238)";
    error.style.color = "red";
    error.style.marginTop = "10px";
  } else if (phoneCountNumber > 0) {
    const count = (phoneCount.value = phoneCountNumber - 1);
    const total = count * 1219;
    document.getElementById("phone__prize").innerText = "$" + total;
    grandTotal();
  }
});

// phone increment

document.getElementById("phone__increment").addEventListener("click", () => {
  const error = document.getElementById("phone__error");
  error.style.display = "none";
  const phoneCount = document.getElementById("phone__count");
  const phoneCountNumber = parseInt(phoneCount.value);
  const count = (phoneCount.value = phoneCountNumber + 1);
  const total = count * 1219;
  document.getElementById("phone__prize").innerText = "$" + total;
  grandTotal();
});

// case decrement

document.getElementById("case__decrement").addEventListener("click", () => {
  const caseCount = document.getElementById("case__count");
  const caseCountNumber = parseInt(caseCount.value);
  if (caseCountNumber == 0) {
    const error = document.getElementById("case__error");
    error.style.display = "block";
    error.innerText = "Please Increment. You can not buy less then 0 !!";
    error.style.padding = "10px";
    error.style.textAlign = "center";
    error.style.backgroundColor = "rgba(255, 0, 0, 0.238)";
    error.style.color = "red";
    error.style.marginTop = "10px";
  } else if (caseCountNumber > 0) {
    const count = (caseCount.value = caseCountNumber - 1);
    const total = count * 59;
    document.getElementById("case__prize").innerText = "$" + total;
    grandTotal();
  }
});

// case increment

document.getElementById("case__increment").addEventListener("click", () => {
  const error = document.getElementById("case__error");
  error.style.display = "none";
  const caseCount = document.getElementById("case__count");
  const caseCountNumber = parseInt(caseCount.value);
  const count = (caseCount.value = caseCountNumber + 1);
  const total = count * 59;
  document.getElementById("case__prize").innerText = "$" + total;
  grandTotal();
});

// geand total area

const grandTotal = () => {
  const phoneNumber = parseInt(document.getElementById("phone__count").value);
  const caseNumber = parseInt(document.getElementById("case__count").value);
  const phonePrice = phoneNumber * 1219;
  const casePrice = caseNumber * 59;
  document.getElementById("total__subtotal").innerText =
    "$" + (phonePrice + casePrice);
  document.getElementById("total__tax").innerText =
    "$" + Math.round((phonePrice + casePrice) * 0.1);
  document.getElementById("total__cost").innerText =
    "$" + Math.round(phonePrice + casePrice + (phonePrice + casePrice) * 0.1);
};

const hideProduct = (event) => {
  event.target.parentNode.parentNode.parentNode.style.display = "none";
};

// checkout button

document.getElementById("check__out__button").addEventListener("click", () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, checkout it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Checkout!",
          "Your order has been recorded.",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your order is canceled:)",
          "error"
        );
      }
    });
});
