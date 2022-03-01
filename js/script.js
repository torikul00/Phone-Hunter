document.getElementById('search-button').addEventListener('click', function () {
   
    const detailsContainer = document.getElementById('details-container');
   
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
      <div class="button"><button class="details-button" onclick="showPhoneInfo('${phone.slug}')">More Details</button> </div>
       
    </div>
        `
        phoneContainer.appendChild(div)
        

   })
}
const showPhoneInfo = (phoneInfo) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneInfo}`
    fetch(url)
        .then(res => res.json())
        .then(phoneData => singlePhoneInfo(phoneData.data))
    
        const detailsContainer = document.getElementById('details-container');
         detailsContainer.style.display='block'

}


const singlePhoneInfo = (phoneInfo) => {
    const detailsContainer = document.getElementById('details-container');
    const div = document.createElement('div');
    div.innerHTML = `
   <div class="phone-image"> <img src="${phoneInfo.image}" alt=""></div>
    <h5 id="release">${phoneInfo.releaseDate}</h5>

    
    <h1>Model : ${phoneInfo.name}</h1>
    <h1>Brand : ${phoneInfo.brand}</h1>
    <h3 class="features"> Main Feature : </h3>

    <div class="feature">
     <h5><span>Storage</span> : ${phoneInfo.mainFeatures.storage}</h5>
     <h5><span>Displaysize</span> : ${phoneInfo.mainFeatures.displaySize}</h5>
     <h5><span>Chipset</span> : ${phoneInfo.mainFeatures.chipSet}</h5>
     <h5><span>Memory</span> :  ${phoneInfo.mainFeatures.memory}</h5> 
    </div>
    
    <h3 class="features"> Others :</h3>
    <div class="feature">
        <h5> <span>WLAN :</span>${phoneInfo.others.WLAN}</h5>
        <h5><span>Bluetooth :</span>${phoneInfo.others.Bluetooth}{</h5>
        <h5><span>GPS :</span>${phoneInfo.others.GPS}</h5>
        <h5><span>NFC :</span>${phoneInfo.others.NFC}</h5>
        <h5><span>Radio :</span>${phoneInfo.others.Radio}</h5>
        <h5><span>USB :</span>${phoneInfo.others.USB}</h5>
    </div>
    `
    detailsContainer.appendChild(div);
   
 
 
}