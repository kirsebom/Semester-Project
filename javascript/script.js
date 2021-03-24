// Text Animation
const logo = document.querySelector(".logo");
const stringLogo = logo.textContent;
const splitLetters = stringLogo.split("");
logo.textContent = "";

for (let i = 0; i < splitLetters.length; i++) {
	logo.innerHTML += "<span>" + splitLetters[i] + "</span>";
}

let char = 0;
let timer = setInterval(addClass, 50);

function addClass() {
	const span = logo.querySelectorAll("span")[char];
	span.classList.add("fade");
	char++;
	if (char === splitLetters.length) {
		complete();
		return;
	}
}

function complete() {
	clearInterval(timer);
	timer = null;
}

//Read-More Button homepage

const btn = document.querySelector(".read-more");
const textDiv = document.querySelector(".clear-html");

btn.addEventListener("click", function () {
	textDiv.innerHTML = `<div class="flex-container">
	<div class="flex-item">
		<h3>Visiting Professor of Aeronautics</h3>
		<P>It is our pleasure to announce that Prof Sheila Widnall from the Massachusetts
		   Institute of Technology will be delivering 3 lectures on the development of aeronautics
		   and where the future lies in this exciting ‘space’.</P>
	</div>
	<div class="flex-item">
		<h3>Night in the Museum</h3>
		<p>Get your family together for an exciting night in the museum as you
			sleep over beside dinosaurs and science displays. Bring your own
			sleeping bag and get ready to rough it as we go exploring the wonders
			of science.</p>

	</div>
	<div class="flex-item">
		<h3>Energetica Exhibition on Loan</h3>
		<p>
			On loan from the NEMO Science Museum in Amsterdam, the Energetica exhibition is coming to the Community Science Museum.
			It’s a series of installations that allow visitors to experience the power of the elements as we harness them. 
			From solar energy powering lighting, to ‘Wind Island’ that shows how turbines are able to use and control wind to create power.
			</p>

	</div>
</div>`;
});

// Welcome message animation

const welcomeContainer = document.querySelector(".intro-text");

setTimeout(function () {
	welcomeContainer.classList.add("show");
}, 500);
