const API_BASE_URL="https://65775f1c197926adf62e1ccb.mockapi.io/api/v1";

const getUsers =async () => {
const res=await fetch(`${API_BASE_URL}/users`);
if(!res.ok) throw new Error(res.statusText);
const data=await res.json();
return data;
// json() asenkron fonksiyondur. await demezsek data yuklenmeden getirmeye calisir undefined dondurur.
}


export {getUsers};
