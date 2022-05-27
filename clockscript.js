var date;
var time;
var a;
var day;
setInterval(() => {
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
a= new Date();
var mon= a.getMonth();
hrs=a.getHours();
if(hrs>12)
{
hrs=hrs%12;
document.getElementById('box2').innerHTML="PM";
}
else{
document.getElementById('box2').innerHTML="AM";
}
time =hrs+":"+a.getMinutes()+":"+a.getSeconds();
date = a.getUTCDate()+"-"+month[mon]+"-"+a.getUTCFullYear();
var day=d[a.getDay()];
document.getElementById('box1').innerHTML = day+"<br> "+ date+"<br> "+ time;
},1000);








