const stripe = Stripe(
    "pk_test_51HqssXBJygQBRfdhbWFHhIGi1TcxsDvNEweKre7XHp9EC8R6uHbZiSUTdxO1U8pQXgX2L61ioxXAqjibyLJTl6ba00Qh8xGCj0"
  );
  const checkoutButton = document.querySelectorAll(".checkout-button");
  console.log(checkoutButton);
  checkoutButton.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      console.log("button clicked");
      const itemId = event.target.id;
      console.log(itemId);
      fetch("/api/create-checkout-session/" + itemId, {
        method: "POST",
        // body: JSON.stringify({ id: itemId }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (session) {
          return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
          if (result.error) {
            alert(result.error.message);
          }
        })
        .catch(function (error) {
          console.error("Error", error);
        });
    });
  });

  async function deleteButtonHandler(event) {
    event.preventDefault();



    const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-button').addEventListener('submit', deleteButtonHandler);
