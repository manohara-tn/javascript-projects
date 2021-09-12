const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const amount = document.querySelector('#amount').value;
    const quantity = document.querySelector('#quantity').value;
    const gst = document.querySelector('#gst').value;
	const result = document.querySelector('#result');
    
    if( amount < 0 || amount === '' || isNaN(amount))
	{
        result.innerHTML = "Please enter a valid amount";    
    } 
	else if ( quantity === '' || quantity < 0 || isNaN(quantity))
	{
        result.innerHTML = "Please enter a valid quantity";
    } 
	else if ( gst === '' || gst < 0 || isNaN(gst))
	{
        result.innerHTML = "Please enter a valid gst";
    } 
	else 
	{
	
	const total = ( amount*quantity+((gst*amount*quantity)/100)).toFixed(2);
    
    result.innerHTML = `<span>Rupees ${total} /- only</span>`
    }  
});

