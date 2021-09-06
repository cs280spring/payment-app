const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  if (new Date() > new Date(year, month)) {
    window.alert("Your card is expired!");
    return;
  }
  
  window.alert("Thanks for the payment!");
}
