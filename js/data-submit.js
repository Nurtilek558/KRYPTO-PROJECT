
  function showConfirmation(event) {
    event.preventDefault();
    const modal = document.getElementById("confirmation-modal");
    modal.style.display = "flex";
    modal.classList.add("show");
  }

  function closeModal() {
    const modal = document.getElementById("confirmation-modal");
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 500); // Время скрытия совпадает с длительностью анимации
  }

