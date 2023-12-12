const BASE_URL = "https://carrental-v3-backend.herokuapp.com";
const listCars = document.getElementById("listCars");
const carDetails = document.getElementById("carDetails");

const loadCars = () => {
	const url = `${BASE_URL}/car/visitors/all`;

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			fillCarList(data);
		});
};

const loadCar = (id) => {
	const url = `${BASE_URL}/car/visitors/${id}`;

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			fillCarDetails(data);
		});
};

const fillCarList = (cars) => {
	let strCars = "";

	cars.forEach((item) => {
		strCars += createCarItem(item);
	});

	listCars.innerHTML = strCars;
};

const createCarItem = (car) => {
	return `
    <div class="col">
        <div class="card car-card" style="cursor: pointer" data-carid="${car.id}">
            <img src="https://carrental-v3-backend.herokuapp.com/files/display/${car.image[0]}" alt="${car.model}" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">${car.model}</h5>
            </div>
        </div>
    </div>`;
};

const fillCarDetails = (car) => {
	const {
		id,
		model,
		age,
		airConditioning,
		doors,
		fuelType,
		image,
		luggage,
		pricePerHour,
		seats,
		transmission,
	} = car;

	const strDetails = `
    <div class="col-md-5">
        <img src="https://carrental-v3-backend.herokuapp.com/files/display/${
			image[0]
		}" class="img-fluid">
    </div>
    <div class="col-md-7">
        <h1>${model}</h1>
        <table class="table">
            <tr>
                <th>Doors</th><td>${doors}</td>
            </tr>
            <tr>
                <th>Seats</th><td>${seats}</td>
            </tr>
            <tr>
                <th>Luggage</th><td>${luggage}lt</td>
            </tr>
            <tr>
                <th>Transmission</th><td>${transmission}</td>
            </tr>
            <tr>
                <th>Air Conditioning</th><td>${
					airConditioning ? "✅" : "❎"
				}</td>
            </tr>
            <tr>
                <th>Age</th><td>${age}</td>
            </tr>
            <tr>
                <th>Price Per Hour</th><td>€${pricePerHour}</td>
            </tr>
            <tr>
                <th>Fuel Type</th><td>${fuelType}</td>
            </tr>
        </table>
    </div>
    <div class="col-12"><button id="btnReturn" class="btn btn-info">⬅️ Return Back</button></div>
    `;

	carDetails.innerHTML = strDetails;
};

loadCars();

/* EVENT FUNCTIONS */

listCars.addEventListener("click", (e) => {
	const card = e.target.closest(".car-card");
	if (!card) return;

	loadCar(card.dataset.carid);
	listCars.classList.add("d-none");
	carDetails.classList.remove("d-none");
});

carDetails.addEventListener("click", (e) => {
	if (e.target.id === "btnReturn") {
		listCars.classList.remove("d-none");
		carDetails.classList.add("d-none");
        window.scrollTo(0,0)
	}
});
