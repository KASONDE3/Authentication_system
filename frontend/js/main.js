document.getElementById('loginForm').addEventListener('submit', async (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').values;

    const response = await fetch('http://localhost:5000/auth/login',{
        method: 'POST', 
        headers: { 'content-Type': 'application/json'},
        body: JSON.stringify({email,password}),
    });

    const data = await response.json();
    if (response.ok) {
        alert('login successfull');
        console.log(data);
    } else {
        alert(data.error);
    }
});