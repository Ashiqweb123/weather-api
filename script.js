function loadData() {
    const inputField = document.getElementById('input-field');
    const text = inputField.value;
    inputField.value = ''
    const apiKey = '3e063dce3fe5853282fd7de523441f02'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => displayData(data))

}


const displayData = weather => {
    console.log(weather);

    const ContainerDiv = document.getElementById('container');
    ContainerDiv.textContent = '';

    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div class="card mx-auto " style="width: 18rem;">
  <div class="card-header text-center text-info">${weather.name}</div>
  <div class="card-body ">

    <p class="card-text text-center text-info">temp: ${weather.main.temp-273.15}</p>
    <p class="card-text text-center text-info">${weather.weather[0].description}</p>
  </div>
</div>
    
    
    `;
    ContainerDiv.appendChild(div);

}