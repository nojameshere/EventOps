//maths Add these together
//Number of attendees * ([2.5 0-500],[1.5 501 - 1000],[1.15 1001 - 2500],[.9 2501 - 5000],[.6 5000+] )

let form = document.querySelector('.calculator');
let attendees = 0;  //number of attendees imput in calc
let attendeeCalc = 0; //calculated based on number of attendees
let apNumber = 0; //number of APs in calc
let apCalc = 0; //calculated based on number of APs
let support = form.getElementsByClassName('.onsiteSupport').value;


//This needs to go inside of an event listener for clicks OR field changes (IE, when a user types)
attendees = form.getElementsByClassName('.attendee').value;

if(attendees < 501){
    attendeeCalc = attendees * 2.5;
    //2.5*
}else if(attendees < 1001){
    attendeeCalc = attendees * 1.5;
    //1.5*
}else if(attendees < 2501){
    attendeeCalc = attendees * 1.15;
    //1.15*
}else if(attendees < 5001){
    attendeeCalc = attendees * 0.9;
    //.9*
}else{
    attendeeCalc = attendees * 0.6;x
    //.6*
}
