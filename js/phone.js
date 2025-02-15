const loadPhone = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data
    displayPhones(phones);
}
const displayPhones = phones =>{
    //console.log(phones)
    const phoneContainer = document.getElementById('phone-container');
     
    phones.forEach(phone => {
        console.log(phone)
        

        const phoneCard = document.createElement('div');
        phoneCard.classList ='card card-compact bg-base-100 w-96 shadow-xl';
        phoneCard.innerHTML = '<figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure><div class="card-body"><h2 class="card-title">Shoes!</h2><p>If a dog chews shoes whose shoes does he choose?</p><div class="card-actions justify-end"><button class="btn btn-primary">Buy Now</button></div></div>'
        phoneContainer.appendChild(phoneCard);
    })
}

loadPhone()