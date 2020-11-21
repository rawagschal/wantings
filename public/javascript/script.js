// document.write('<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"><\/script>');

/*
$('form').on('submit', (e) => {
    e.preventDefault();

    const email = $('#email').val().trim();
    const username = $('#username').val().trim();
    const password = $('#password').val().trim();
    const subject = 'Welcome to Wantings';
    const text = 'Thanks '  + username +  ' creating a profile at Wantings!'; */

    /* const data = {
        email,
        subject,
        text
    }; */
     
    async function signupFormHandler(event) {
        event.preventDefault();
      
        const username = document.querySelector('#username').value.trim();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
      
        if (username && email && password) {
          await fetch('/api/email', {
            method: 'post',
            body: JSON.stringify({
              email,
              subject: "Welcome to Wantings",
              text: "Hi " + username + " thank you for creating a profile"
            }),
            headers: { 'Content-Type': 'application/json' }
          }).then((response) => {console.log(response)})
        }
      }
    
      // document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

 
   /* ('/email', data, function() {
        console.log('Server received our data');
    }); */
//});; 

/* $('#btnSave').click(function() {
   $('modal-content').modal('hide');
}); */

// Get the modal
var modal = document.getElementById('id01');


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
