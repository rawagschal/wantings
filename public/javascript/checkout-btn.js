const stripe = Stripe('pk_test_51HqssXBJygQBRfdhbWFHhIGi1TcxsDvNEweKre7XHp9EC8R6uHbZiSUTdxO1U8pQXgX2L61ioxXAqjibyLJTl6ba00Qh8xGCj0');
const checkoutButton = document.getElementById('checkout-button');

checkoutButton.addEventListener('click', function() {
    console.log('button clicked');
    fetch('/api/create-checkout-session', {
        method: 'POST',
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(session) {
        return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(function(result) {
        if (result.error) {
            alert(result.error.message);
        }
    })
    .catch(function(error) {
        console.error('Error', error);
    });
});