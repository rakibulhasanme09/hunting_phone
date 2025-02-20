const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};
const displayPhones = (phones) => {
  //console.log(phones)
  const phoneContainer = document.getElementById("phone-container");

  phones.forEach((phone) => {
    console.log(phone);

    const phoneCard = document.createElement("div");
    phoneCard.classList = "card card-compact bg-white w-96 shadow-xl";
    
    phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
    phoneContainer.appendChild(phoneCard);
  });
};

loadPhone();
