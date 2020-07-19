// ARRAY FOR NAMES
girlAkan=['Akosua', 'Adwoa', 'Abena', 'Akua', 'Yaa', 'Afua', 'Ama'];
boyAkan=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw','Kofi', 'Kwame'];
//DAY OF THE WEEK FUNCTION
const weekDay = document.getElementById('dob').oninput.getDay();
    //let cc = ('yyyy.parseInt(charAt(0,1))');
    //const weekDay=('(((cc/4))-2*cc-1)+((5*yy/4))+((26*(mm+1)(10))+dd)%7');
    
const gender = document.getElementById('gender').onselect;


//CONTROL FLOW
if (weekDay === 0 && gender ==='female'){
    console.log(girlAkan[0]);
}
else if (weekDay === 1 && gender ==='female') {
    console.log(girlAkan[1]);
}
else if (weekDay === 2 && gender ==='female') {
    console.log(girlAkan[2]);
} 
else if (weekDay === 3 && gender ==='female') {
    console.log(girlAkan[3]);
} 
else if (weekDay === 4 && gender ==='female') {
    console.log(girlAkan[4]);
} 
else if (_weekDay === 5 && gender ==='female') {
    console.log(girlAkan[5]);
} 
else if (weekDay === 6 && gender ==='female') {
    console.log(girlAkan[6]);
} 
else if (weekDay === 0 && gender ==='male') {
    console.log(boyAkan[0]);
} 
else if (weekDay === 1 && gender ==='male') {
   console.log(boyAkan[1]);
} 
else if (weekDay === 2 && gender ==='male') {
    console.log(boyAkan[2]);
}  
else if (weekDay === 3 && gender ==='male') {
    console.log(boyAkan[3]);
}  
else if (weekDay === 4 && gender ==='male') {
    console.log(boyAkan[4]);
}  
else if (weekDay === 5 && gender ==='male') {
    console.log(boyAkan[5]);
}  
else if (weekDay === 6 && gender ==='male') {
    console.log(boyAkan[6]);
}  
else { 
    console.log('Input neccessary field');
    
}

//manipulation

//button
document.getElementsByClassName('btn').onclick = function(){
    document.getElementById('form').innerHTML = 'Your Akan name is';
    document.getElementById('btn').style.display = 'none';
}