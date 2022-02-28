document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input');
    const inputValue = searchInput.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => getPhones(data.data))
    searchInput.value = ''
})

const getPhones = (phones) => {
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.innerHTML = ''
    phones.forEach(phone => {
        const phoneContainer = document.getElementById('phones-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="phone">
       <div class="img"> <img src="${phone.image}" alt=""></div>
        <h1>${phone.phone_name}</h1>
        <h2>Brand - ${phone.brand}</h2>
      <div class="button">  <button class="details-button">More Details</button></div>
       
    </div>
        `
        phoneContainer.appendChild(div)
        

   })
}

