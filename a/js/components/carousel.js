"use strict";

((doc) => {
	const $carousel = doc.querySelector(".carousel");
	const amountItems = $carousel.querySelectorAll(".item").length;

	const getIdNextLeft = ($left) => {
		const idNextLeft = $left.getAttribute("data-id") - 1;
		if (idNextLeft < 0) {
			return amountItems - 1;
		}
		return idNextLeft;
	};

	const getIdNextRight = ($right) => {
		const idNextRight = $right.getAttribute("data-id") + 1;
		if (idNextRight > amountItems) {
			return 0;
		}
		return idNextRight;
	};

	const moveLeft = ($left) => {
		if ($left) {
			const $active = $carousel.querySelector(".-active");
			const $right = $carousel.querySelector(".-right");
			const idNextLeft = getIdNextLeft($left);
			const $nextLeft = $carousel.querySelector(
				`[data-id="${idNextLeft}"]`
			);

			$active.classList.remove("-active");
			$active.classList.add("-right");
			$right.classList.remove("-right");
			$left.classList.remove("-left");
			$left.classList.add("-active");
			$nextLeft.classList.add("-left");
		}
	};

	const moveRight = ($right) => {
		if ($right) {
			const $active = $carousel.querySelector(".-active");
			const $left = $carousel.querySelector(".-left");
			const idNextRight = getIdNextRight($right);
			const $nextRight = $carousel.querySelector(
				`[data-id="${idNextRight}"]`
			);

			$active.classList.remove("-active");
			$active.classList.add("-left");
			$left.classList.remove("-left");
			$right.classList.remove("-right");
			$right.classList.add("-active");
			$nextRight.classList.add("-right");
		}
	};

	$carousel.addEventListener("click", (event) => {
		event.preventDefault();
		const $target = event.target;
		const $left = $target.closest(".-left");
		const $right = $target.closest(".-right");

		moveLeft($left);
		moveRight($right);
	});
})(document);
