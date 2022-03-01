document.getElementById('search-button').addEventListener('click', function () {
   
    document.getElementById('spinner').style.display = 'block'
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
        document.getElementById('spinner').style.display = 'none'
        

   })
}
const showPhoneInfo = (phoneInfo) => {
    document.getElementById('spinner').style.display = 'block'
    const url = `https://openapi.programming-hero.com/api/phone/${phoneInfo}`
    fetch(url)
        .then(res => res.json())
        .then(phoneData => singlePhoneInfo(phoneData.data))
    const container = document.getElementById('details-container');
    container.style.display = 'block'
    container.innerHTML = ''
   
}


const singlePhoneInfo = (phoneInfo) => {
   


    const detailsContainer = document.getElementById('details-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <img onclick="closeContainer()" id="close-button" src="./images/close.png" alt="">
   <div class="phone-image"> <img src="${phoneInfo.image}" alt=""></div>
    <h5 id="release">${phoneInfo.releaseDate}</h5>

    
    <h1>Model : ${phoneInfo.name}</h1>
    <h1>Brand : ${phoneInfo.brand}</h1>
    <h3 class="features"> Main Feature : </h3>

    <div class="feature">
     <p><span>Storage</span> : ${phoneInfo.mainFeatures.storage}</p>
     <p><span>Displaysize</span> : ${phoneInfo.mainFeatures.displaySize}</p>
     <p><span>Chipset</span> : ${phoneInfo.mainFeatures.chipSet}</p>
     <p><span>Memory</span> :  ${phoneInfo.mainFeatures.memory}</p> 
 
    </div>
    
    <h3 class="features"> Others :</h3>
    <div class="feature">
        <p> <span>WLAN :</span>${phoneInfo.others.WLAN}</p>
        <p><span>Bluetooth :</span>${phoneInfo.others.Bluetooth}{</p>
        <p><span>GPS :</span>${phoneInfo.others.GPS}</p>
        <p><span>NFC :</span>${phoneInfo.others.NFC}</p>
        <p><span>Radio :</span>${phoneInfo.others.Radio}</p>
        <p><span>USB :</span>${phoneInfo.others.USB}</p>
    </div>

    <h3 class="features"> Sensors :</h3>
    

 
    `
    detailsContainer.appendChild(div);
    document.getElementById('spinner').style.display = 'none'
        
phoneInfo.mainFeatures.sensors.forEach(sensor => {
    const detailsContainer = document.getElementById('details-container');
    const span = document.createElement('span'); 
    span.innerHTML = `
    
    <span class="sensors">${sensor} ,</span>
    `
    detailsContainer.appendChild(span)
})
    
    const buttonDiv = document.createElement('div');
    buttonDiv.innerHTML = `
    <button onclick="closeContainer()" class = "buy-button">Buy Now</button>
    <button onclick="closeContainer()" class = "cancel-button">Cancel</button>
    `
    detailsContainer.appendChild(buttonDiv)
}

const closeContainer = ()=> {
    document.getElementById('details-container').style.display = 'none'
}
