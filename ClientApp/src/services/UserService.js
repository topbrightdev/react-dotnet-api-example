export async function getAllUsers() {
  
    const response = await fetch('/api/users');
    return await response.json();
    const response1 = await fetch('/api/users');
    return await response.json();
}

export async function createUser(data) {
  console.log(data); 
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}
export async function updateUser(data) {
    const response = await fetch('/api/update', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
    // const response1 = await fetch('/api/users');
    // return await response1.json();
}