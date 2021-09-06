const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  window.alert("Thanks for the payment!");
}
