document.addEventListener("DOMContentLoaded", () => {
	const phoneNumber = "201229904614";
	const detailsCard = document.querySelector(".product-details-trigger");
	const detailsModal = document.querySelector("#gas-detector-details");
	const closeButton = detailsModal?.querySelector(".modal-close");

	const closeDetails = () => {
		if (detailsModal) {
			detailsModal.hidden = true;
		}
	};

	const openDetails = () => {
		if (detailsModal) {
			detailsModal.hidden = false;
		}
	};

	if (detailsCard) {
		detailsCard.addEventListener("click", (event) => {
			if (!event.target.closest(".booking-button")) {
				openDetails();
			}
		});

		detailsCard.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				openDetails();
			}
		});
	}

	closeButton?.addEventListener("click", closeDetails);
	detailsModal?.addEventListener("click", (event) => {
		if (event.target === detailsModal) {
			closeDetails();
		}
	});
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeDetails();
		}
	});

	document.querySelectorAll(".booking-button").forEach((button) => {
		button.addEventListener("click", () => {
			const productName = button.dataset.product;
			const message = `مرحبًا، أريد حجز هذا المنتج: ${productName}`;
			const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

			window.open(whatsappUrl, "_blank", "noopener,noreferrer");
		});
	});
});
