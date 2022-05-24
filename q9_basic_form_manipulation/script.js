
document.querySelector('#submit').click(function(){
    // code to read from the form elements here
});

function getFormValues() {

    let email = document.querySelector('#email-address').value;

    let model = null;
    let phoneModelList = document.querySelectorAll('.phone-type');
    for (let s of phoneModelList) {
        // check if this radio button is checked
        if (s.checked) {
            model = s.value;
            // can stop searching since only one is selected
            break;
        }
    }

    let services = [];
    let serviceList = document.querySelectorAll('.services');
    for (let s of serviceList) {
        if (s.checked) {
            services.push(s.value)
        }
    }

    let pickup = document.querySelector('#pick-up').value;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
