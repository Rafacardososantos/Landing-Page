document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("myModal");
    let modalBody = modal.querySelector(".modal-content");

    let buttons = document.querySelectorAll(".open-modal-btn");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            let modalUrl = this.getAttribute("data-modal");

            fetch(modalUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao carregar o conteúdo da modal.');
                    }
                    return response.text();
                })
                .then(data => {
                    modalBody.innerHTML = data;
                    modal.style.display = "block";
                })
                .catch(error => console.error('Erro ao carregar o conteúdo da modal:', error));
        });
    });

    let closeModal = modal.querySelector(".close");

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});