function getweekDay(){

    var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var girlAkan=['Akosua', 'Adwoa', 'Abena', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var boyAkan=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw','Kofi', 'Kwame'];
    var myGender=document.getElementsByName('gender');

    var weekDay=document.getElementById('dob').value;
    var dateOfBirth = new Date(weekDay);
    var dayOfTheWeek = dateOfBirth.getDay()
    if(dayOfTheWeek === ''){
        console.log('invalid birthday!')
    }
    else {
        for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
                if(myGender[i].value === 'Male'){
                    console.log('Born on a ' + days[dayOfTheWeek] + ' your Akan Name is ' + boyAkan[dayOfTheWeek]);
                }
                else{
                console.log('Born on a ' + days[dayOfTheWeek] + ' your Akan Name is ' + girlAkan[dayOfTheWeek]);
                break;
                }
            }
        }
    }
}
