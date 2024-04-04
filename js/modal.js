document.getElementById("openModalBtn").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
});

document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.getElementById("myModal").style.animation = "fadeOut 0.5s ease";
    setTimeout(function () {
      document.getElementById("myModal").style.display = "none";
      document.getElementById("myModal").style.animation = "";
    }, 500);
  });

window.addEventListener("click", function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.animation = "fadeOut 0.5s ease";
    setTimeout(function () {
      modal.style.display = "none";
      modal.style.animation = "";
    }, 500);
  }
});
