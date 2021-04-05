export async function registerUser(newUser)  {
    const userData = JSON.stringify(newUser)
    return fetch(`${process.env.REACT_APP_API_BASE_URL}`+'api/auth/register',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: userData
    })
    .then (response => response.json())    
    .then(console.log("registered"))
}