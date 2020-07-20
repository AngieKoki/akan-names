function getweekDay(){

    var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var girlAkan=['Akosua', 'Adwoa', 'Abena', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var boyAkan=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw','Kofi', 'Kwame'];
    var myGender=document.getElementsByName('gender');
    var myName=document.getElementById('name');


    var weekDay=document.getElementById('dob').value;
    var dateOfBirth = new Date(weekDay);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(dayOfTheWeek === '' && myGender === ''&& myName === ''){
        document.getElementById('alert').innerHTML=('Fill in required field!');
    }
    else {
        for(var i=0; i<myGender.length; i++){
            if(myGender[i].checked){
                if(myGender[i].value === 'Male'){
                    document.getElementById('message').innerHTML=('Born on a ' + days[dayOfTheWeek] + ' your Akan Name is ' + boyAkan[dayOfTheWeek]);
                }
                else{
                    document.getElementById('message').innerHTML=('Born on a ' + days[dayOfTheWeek] + ' your Akan Name is ' + girlAkan[dayOfTheWeek]);
                break;
                }
            }
        }
    }
}
