// Read more buttons

const btnKids = document.querySelector(".btn-kids-explore");
const containerKids = document.querySelector(".btn-kids-clicked-container");
const btnTeacher = document.querySelector(".btn-teatchers-explore");
const containerTeacher = document.querySelector(
	".btn-teachers-clicked-container"
);
const btnReshearchers = document.querySelector(".btn-researchers-explore");
const containerReshearchers = document.querySelector(
	".btn-researchers-clicked-container"
);

btnKids.addEventListener("click", function () {
	containerKids.innerHTML = `<div class="explore-info">
    <h2>For Kids</h2>
    <p>Are you a young person looking to learn more about science? Come on down to our museum, there’s plenty to see and do.
        You can learn about Newtonian physics from our bumper swing, or why not travel back in time and meet our resident Woolly Mammoth? Our exhibits are designed to be accessible for interested minds, so make sure you come ready to learn and explore.
        We also have the Young Stars club which meets once a week on a Saturday between 10:00 and 13:00 where you’ll get to explore and experiment with our team of experts.
        During the school holidays we run special holiday clubs where you can join other children your age to go on a journey of discovery. Each holiday we pick a new theme to explore. To find out more about the holiday club and how you can join, send us a message.
        </p>`;
});

btnTeacher.addEventListener("click", function () {
	containerTeacher.innerHTML = `<div class="explore-info">
    <h2>for teatchers</h2>
    <p>As a community-driven museum, we want to work with schools to create places of learning and exploring. Our team are on hand to give your students guided tours of the museum, teach them in our learning laboratory, and provide great video presentations that will excite and inspire them.
        Please get in touch with us here to find out more about our facilities and to arrange a time to bring your students through for a visit.
        </p>
</div>`;
});

btnReshearchers.addEventListener("click", function () {
	containerReshearchers.innerHTML = `<div class="explore-info">
    <h2>researchers</h2>
    <p>Are you looking to get involved with our team of researchers and academics? Our museum offers various ways for you to use our resources and contribute towards them. We have online records, laboratory space, and a working relationship with a number of universities around the country.
    </p>
</div>`;
});
