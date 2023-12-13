import { getUsers } from "./users-api.js";
const listUser = document.getElementById("listUser");
const fillUserList = async () => {
    try {
        const users = await getUsers();
        let strUsers = "";
        
        users.forEach((item) => {
            strUsers += createUserItem(item);
        });
        listUser.innerHTML = strUsers;
    } catch (error) {
        console.log(error);
    }
};
const createUserItem = (user) => {
    const {id, avatar, firstName, lastName} = user;
    const displayName = `${firstName} ${lastName}`;
    return `
    <div class="col">
        <div class="card user-card h-100" style="cursor: pointer" data-userid="${id}">
            <img src="${avatar}" alt="${displayName}" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">${displayName}</h5>
            </div>
        </div>
    </div>`;
};
fillUserList();
