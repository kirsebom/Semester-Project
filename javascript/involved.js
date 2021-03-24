// Read more buttons for the get involded page

const suportBtn = document.querySelector(".btn-suport");
const suportContainer = document.querySelector(".suport-btn-clicked-container");

const volunteerBtn = document.querySelector(".btn-volunteer");
const volunteerContainer = document.querySelector(
	".volunteer-btn-clicked-container"
);

const internBtn = document.querySelector(".btn-internship");
const internContainer = document.querySelector(
	".internship-btn-clicked-container"
);

suportBtn.addEventListener("click", function () {
	suportContainer.innerHTML = `<div class="involved-container">
    <h2>suport</h2>
    <p>There are various ways you can support the museum. Donations are very welcome and are an important way we keep this museum open and accessible to the whole community. 
        You can also support us by donating items of interest to the museum’s collections. If you have some item or collection that you think others would enjoy, please let us know by contacting our Collections Department and they will be able to assist you.
        </p>
</div>`;
});

volunteerBtn.addEventListener("click", function () {
	volunteerContainer.innerHTML = `<div class="involved-container">
    <h2>volunteer</h2>
    <p>A number of people volunteer their time and effort to keep the displays in good order and ready for visitors to come and enjoy. Volunteering has its perks including getting to see behind the scenes of a working museum, access to staff-only lectures, and a monthly lunch where all staff and volunteers come together to discuss ideas for future exhibits and strategies for the museum.
        You can help volunteer in a number of different spheres. Please contact us if you’d like to find out more about how you can get involved.
        </p>
</div>`;
});

internBtn.addEventListener("click", function () {
	internContainer.innerHTML = `<div class="involved-container">
    <h2>volunteer</h2>
    <p>A number of people volunteer their time and effort to keep the displays in good order and ready for visitors to come and enjoy. Volunteering has its perks including getting to see behind the scenes of a working museum, access to staff-only lectures, and a monthly lunch where all staff and volunteers come together to discuss ideas for future exhibits and strategies for the museum.
        You can help volunteer in a number of different spheres. Please contact us if you’d like to find out more about how you can get involved.
        </p>
</div>`;
});
