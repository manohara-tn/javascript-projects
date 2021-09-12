
const form = document.querySelector('form');

form.addEventListener('submit', function(e){

const feet = parseInt(document.querySelector('#feet').value);
const inches = parseInt(document.querySelector('#inches').value);
const results = document.querySelector('#results');
    e.preventDefault();

    if (isNaN(feet) || isNaN(inches)){
        results.textContent = "Please provide a valid number!";
    } else if (feet < 0 ) {
        results.textContent = "Please provide a feet value > 0";
    } else if (inches < 0 || inches >= 12) {
        results.textContent = "Please provide inch value between 0 to 12";
    } else {
        
        let totalInches = (feet*12) + inches;
		let totalCm = (totalInches * 2.54);
        results.textContent = `${totalCm} cm`;
		
		/* to hide the input values after covert remove comment tag */
        /*document.querySelector('#feet').value = '';
        document.querySelector('#inches').value = ''; */ 
    }
})