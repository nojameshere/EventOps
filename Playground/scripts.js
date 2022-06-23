
let form = document.querySelector('.calculator');
let total = document.querySelector('.cost');
let attendeeCalc = 0; //calculated based on number of attendees
let apNumber = 0; //number of APs in calc
let apCalc = 0; //calculated based on number of APs
let support = form.getElementsByClassName('.onsiteSupport').value;

//function to estimate cost based on form fields.
let calculate = () => {
    let attendees = document.querySelector('.attendee').value;
    let accessPoint = document.querySelector('.accessPoint').value;
    let checkbox = document.querySelector('.onsiteSupport');
    let supportCost = 0
    //conditional flow to determine cost of attendees. (Might change to be compounding. Right now if 501 users is entered the cost will be significantly less than 500 users)
    if(attendees < 501){
        attendeeCalc = attendees * 2.5;
        if(checkbox.checked === true){
            supportCost = 500;
        }
    }else if(attendees < 1001){
        attendeeCalc = attendees * 1.5;
        if(checkbox.checked === true){
            supportCost = 500;
        }
    }else if(attendees < 2501){
        attendeeCalc = attendees * 1.15;
        if(checkbox.checked === true){
            supportCost = 750;
        }
    }else if(attendees < 5001){
        attendeeCalc = attendees * 0.9;
        if(checkbox.checked === true){
            supportCost = 1000;
        }
    }else{
        attendeeCalc = attendees * 0.6;
        if(checkbox.checked === true){
            supportCost = 2500;
        }
    }
    let apPreCalc = accessPoint * attendees;
    apCalc = apPreCalc * 0.25;
    let totalCost = apCalc + attendeeCalc + supportCost;
    total.innerHTML = `$${totalCost}`;
}
//Event listeners for data input into the form elements
form.addEventListener('keyup', () => {
    calculate();
});
form.addEventListener('click', () => {
    calculate();
});