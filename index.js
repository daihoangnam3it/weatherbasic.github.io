const search=document.getElementById('search');
const input=document.querySelector('.input--value');
const containerBox=document.querySelector('.container__box')
const tempValue=document.querySelector('.temp--value');
const timeNow=document.querySelector('.time--now');
const locationWeather=document.querySelector('.weather--location');
const iconWeather=document.querySelector('.iconWeather');
const weatherDay=document.querySelector('.weather--day')
const today=document.querySelector('.today');
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ho Chi Minh&units=metric&appid=d6d7bb015478eb88daf057b463a3da3c`).then(res=>res.json()).then(data=>{
    if(data==undefined){
        alert('Hiện tại không tìm thấy')
    }else{
        const value=Math.round(data.main.temp).toFixed(0);
        tempValue.innerHTML=value+'&#8451';
        locationWeather.innerHTML=`${data.name},${data.sys.country}`
        console.log(data)
        data.weather.forEach(el=>{
            iconWeather.src=` http://openweathermap.org/img/wn/${el.icon}@2x.png`
    
        })
    }
    });
function timeNows(){
    timeNow.innerHTML=new Date().toLocaleTimeString();
}
setInterval(timeNows,0);
search.addEventListener('click',getWeather);
input.addEventListener('keyup',(e)=>{
    if(e.keyCode==13){
        getWeather();
    }
})
function getWeather(){
    let value=input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=d6d7bb015478eb88daf057b463a3da3c`).then(res=>res.json()).then(data=>{
        if(data.cod != 404){
            const check=new Date().getHours();
            // -(data.timezone*1000)
            if(check>18 || check<6){
                containerBox.style.backgroundImage='url(/night.png)';
                weatherDay.style.color='#cdb30c';
                locationWeather.style.color='#cdb30c';
                tempValue.style.color='#fff'
            }else{
                containerBox.style.backgroundImage='url(/day.png)';
                weatherDay.style.color='#f6f5f5';
                locationWeather.style.color='#f6f5f5';
                tempValue.style.color='#4f8a8b'            
            }
            const value=Math.round(data.main.temp).toFixed(0);
            tempValue.innerHTML=value+'&#8451';
            locationWeather.innerHTML=`${data.name},${data.sys.country}`
            data.weather.forEach(el=>{
                iconWeather.src=` http://openweathermap.org/img/wn/${el.icon}@2x.png`
            })
        }else{
            alert('Hiện tại không tìm thấy')
        }
    });
}
let check=new Date().getHours();
if(check>18 || check<6){
    containerBox.style.backgroundImage='url(night.png)';
    weatherDay.style.color='#cdb30c';
    locationWeather.style.color='#cdb30c';
    tempValue.style.color='#fff'
}else{
    containerBox.style.backgroundImage='url(day.png)';
    weatherDay.style.color='#f6f5f5';
    locationWeather.style.color='#f6f5f5';
    tempValue.style.color='#4f8a8b'

}
const dayNow=new Date();

const daysOfWeek = ['Chủ nhật', 'Thứ 2','Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
var monthNames = [ "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
"Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12" ];
const date=dayNow.getDate();
const day=daysOfWeek[dayNow.getDay()];
const month=monthNames[dayNow.getMonth()];
const year=dayNow.getFullYear();
today.innerHTML=`${day}, ${date} ${month},${year}`;

console.log(check)