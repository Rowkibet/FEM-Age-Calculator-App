// grab the form & inputs fields
const form = document.querySelector('.month-form');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

function validateData() {
    // Store the values inputted
    const dayValue = day.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();

    // form validation
    if(dayValue === '') {
        setErrorFor(day, "The field is required");
    } else if(dayValue > 31 && dayValue < 1) {
        setErrorFor(day, "The day is invalid");
    }

    if(monthValue === '') {
        setErrorFor(month, "The field is required");
    } else if(monthValue > 12 && monthValue < 1) {
        setErrorFor(month, "The month is invalid");
    }

    if(yearValue === '') {
        setErrorFor(year, "This field is required");
    //checking if year inputted is in the future
    } else if(yearValue > new Date()){
        setErrorFor(year, "This year is invalid");
    }
}