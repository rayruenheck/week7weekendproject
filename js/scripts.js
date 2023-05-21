const key = 'd22ce8ab569744395abf3773bf47bc40'
async function fetchApi(city){
    res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
    if(res.ok){
        data = await res.json()
        return data
    }
}

function getCityName(){
    const city = document.querySelector('#getcity').value 
    return city
}

const container = document.querySelector('#container')
container.addEventListener('submit',async (event)=>{
    event.preventDefault()
    
    const data = await fetchApi(getCityName())
    const sunrise = new Date(data.sys.sunrise *1000).toLocaleTimeString('en-US')
    const sunset = new Date(data.sys.sunset *1000).toLocaleTimeString('en-US')
    const time = new Date(data.dt *1000).toLocaleTimeString('en-US')
    const temperature = Math.round(data.main.temp)
    document.querySelector('#temperature').innerText = temperature + '\u00B0F'
    document.querySelector('#item').innerText = 'Forecast:' + ' ' + data.weather[0].main
    document.querySelector('#item1').innerText = 'Low:' + ' ' +  Math.round(data.main.temp_min) + '\u00B0F'
    document.querySelector('#item2').innerText = 'High:' + ' ' + Math.round(data.main.temp_max) + '\u00B0F'
    document.querySelector('#item3').innerText = 'Feel Like:' + ' ' + Math.round(data.main.feels_like) + '\u00B0F'
    document.querySelector('#item4').innerText = 'Humidity:' + ' ' +data.main.humidity + '%'
    document.querySelector('#item5').innerText = 'Updated:' + ' ' +time
    document.querySelector('#item6').innerText = 'Wind:' + ' ' + Math.round(data.wind.speed) + ' ' + 'mph'
    document.querySelector('#item7').innerText = 'City:' + ' ' +data.name
    document.querySelector('#item8').innerText = 'Country:' + ' ' +data.sys.country
    document.querySelector('#item9').innerText = 'Sunrise:' + ' ' +sunrise
    document.querySelector('#item10').innerText = 'Sunset:' + ' ' +sunset
    
    
    
    
    const condition = data.weather[0].main
    if(condition === 'Rain'){
        document.querySelector('.upper').style.color = 'white'
        return document.querySelector('.upper').style.backgroundImage = 'url(./static/images/raining.gif)'
    }else if(condition === 'Thunderstorm'){
        document.querySelector('.upper').style.color = 'white'
        return document.querySelector('.upper').style.backgroundImage = 'url(./static/images/thunderstorm.gif)'
    }else if(condition === 'Drizzle'){
        document.querySelector('.upper').style.color = 'white'
        return document.querySelector('.upper').style.backgroundImage = 'url(./static/images/drizzle.gif)'
    }else if(condition === 'Snow'){
        document.querySelector('.upper').style.color = 'white'
        return document.querySelector('.upper').style.backgroundImage = 'url(./static/images/snow.gif)'
    }else if(condition === 'Atmosphere'){
        document.querySelector('.upper').style.color = 'white'
        return document.querySelector('.upper').style.backgroundImage = 'url(./static/images/fog.gif)'
    }else if(condition === 'Clouds'){
        document.querySelector('.upper').style.color = 'white'
        return document.querySelector('.upper').style.backgroundImage = 'url(./static/images/clouds.gif)'
    }else if(condition === 'Mist'){
        document.querySelector('.upper').style.color = 'white'
        return document.querySelector('.upper').style.backgroundImage = 'url(./static/images/fog.gif)'
    }else if(condition === 'Clear'){
        document.querySelector('.upper').style.color = 'white'
        return document.querySelector('.upper').style.backgroundImage = 'url(./static/images/sunny.gif)'
    }

    
    
    
})


