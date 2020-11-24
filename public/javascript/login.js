async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  async function signupFormHandler(event) {
    event.preventDefault();
    console.log('hello line 27')
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const first_name = document.querySelector('#first_name-signup').value.trim();
    const last_name = document.querySelector('#last_name-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const zip = document.querySelector('#zip-signup').value.trim();


 let test = {
    
    username,
    email,
    password,
    first_name,
    last_name,
    address,
    zip
  
  }
  console.log(test);

  
    if (username && email && password) {
        console.log('hello line 34')
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(
            test
        //   username,
        //   email,
        //   password,
        //   first_name,
        //   last_name,
        //   address,
        //   zip
        // //   subject: "Welcome to Wantings",
        // // text: "Hi " + username + " thank you for creating a profile"
        ),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
      console.log('Success');
    } else {
        alert(response.statusText);
    }
    }
};
        
        async function emailFormHandler(event) {
            event.preventDefault();
          
            const username = document.querySelector('#username-signup').value.trim();
            const email = document.querySelector('#email-signup').value.trim();
            const password = document.querySelector('#password-signup').value.trim();
          
            if (username && email && password) {
              const response = await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify({
                  username,
                  email,
                  //password,
                  subject: "Welcome to Wantings",
                text: "Hi " + username + " thank you for creating a profile"
                }),
                headers: { 'Content-Type': 'application/json' }
              });
              if (response.ok) {
              console.log('Success');
            } else {
                alert(response.statusText);
            }
            }
            document.querySelector('.email-form').reset();
          };

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  document.querySelector('.email-form').addEventListener('submit', emailFormHandler);

