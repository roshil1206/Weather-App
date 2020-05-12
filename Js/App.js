
function searchweather(){
   
        var text = document.form.cityname.value;

}



function getsettime(){
const time = document.getElementById('_time');
const date = new Date();
let hrs = date.getHours();
if (hrs<10)
{
    hrs = '0'+hrs;
}
let mins = date.getMinutes();
if (mins<10)
{
    mins = '0'+mins;
}
const day = date.getDay();
const month = date.getMonth();
const dateday = date.getDate()+1;
const dayname = (day) => {
    switch(day){
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
           return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return null;
    }
}
const monthname = (month)=>{
    switch(month){
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
           return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
       
        default:
            return null;
    }
}


time.innerHTML=hrs+' : '+mins + ' <br> ' + dayname(day) + '   ' + monthname(month)+ '  '+ dateday

}
getsettime();
setInterval(function(){
    getsettime();
}, 60*1000);


