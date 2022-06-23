//maths Add these together
//Number of attendees * ([2.5 0-500],[1.5 501 - 1000],[1.15 1001 - 2500],[.9 2501 - 5000],[.6 5000+] )

let form = document.querySelector('.calculator');
let total = document.querySelector('.cost');
let attendeeCalc = 0; //calculated based on number of attendees
let apNumber = 0; //number of APs in calc
let apCalc = 0; //calculated based on number of APs
let support = form.getElementsByClassName('.onsiteSupport').value;


//This needs to go inside of an event listener for clicks OR field changes (IE, when a user types)
attendees = form.getElementsByClassName('.attendee').value;
let calculate = () => {
    let attendees = document.querySelector('.attendee').value;
    let accessPoint = document.querySelector('.accessPoint').value;
    let checkbox = document.querySelector('.onsiteSupport');
    let supportCost = 0
    console.log(accessPoint);
    if(attendees < 501){
        attendeeCalc = attendees * 2.5;
        if(checkbox.checked === true){
            supportCost = 500;
        }
        //2.5*
    }else if(attendees < 1001){
        attendeeCalc = attendees * 1.5;
        if(checkbox.checked === true){
            supportCost = 500;
        }
        //1.5*
    }else if(attendees < 2501){
        attendeeCalc = attendees * 1.15;
        if(checkbox.checked === true){
            supportCost = 750;
        }
        //1.15*
    }else if(attendees < 5001){
        attendeeCalc = attendees * 0.9;
        if(checkbox.checked === true){
            supportCost = 1000;
        }
        //.9*
    }else{
        attendeeCalc = attendees * 0.6;
        if(checkbox.checked === true){
            supportCost = 2500;
        }
        //.6*
    }
    let apPreCalc = accessPoint * attendees;
    apCalc = apPreCalc * 0.25;
    let totalCost = apCalc + attendeeCalc + supportCost;
    total.innerHTML = `$${totalCost}`;
}

form.addEventListener('keyup', e => {
    calculate();
});
form.addEventListener('click', () => {
    calculate();
});