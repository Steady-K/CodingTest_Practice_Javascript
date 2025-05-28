const today = new Date();
today.setHours(today.getHours() + 9);

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

console.log(`${year}-${month}-${day}`)