import { createUser, deleteUser, getUser, getUsers, updateUser } from "./users-api.js";
const listUser = document.getElementById("listUser");
const frmUser = document.getElementById("frmUser");
const txtFirstName = document.getElementById("txtFirstName");
const txtLastName = document.getElementById("txtLastName");
const txtEmail = document.getElementById("txtEmail");
const fillUserList = async () => {
    try {
        const users = await getUsers();
        let strUsers = "";
        users.reverse();
        users.forEach((item) => {
            strUsers += createUserItem(item);
        });
        listUser.innerHTML = strUsers;
    } catch (error) {
        console.log(error);
    }
};
const createUserItem = (user) => {
    const { id, avatar, firstName, lastName } = user;
    const displayName = `${firstName} ${lastName}`;
    return `
    <div class="col">
        <div class="card user-card h-100" style="cursor: pointer" data-userid="${id}">
            <span class="position-absolute end-0 p-2 btn-delete">❌</span>
            <img src="${avatar}" alt="${displayName}" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">${displayName}</h5>
            </div>
        </div>
    </div>`;
};
const removeUser = async (id) => {
    if (!confirm("Are you sure to delete?")) return;
    try {
        await deleteUser(id);
        fillUserList();
    } catch (err) {
        console.log(err);
    }
};
const addUser = async () => {
    const firstName = txtFirstName.value;
    const lastName = txtLastName.value;
    const email = txtEmail.value;
    const payload = {
        firstName,
        lastName,
        email,
    };
    await createUser(payload);
    fillUserList();
};
const saveUser = async (id) => {
    const firstName = txtFirstName.value;
    const lastName = txtLastName.value;
    const email = txtEmail.value;
    const payload = {
        firstName,
        lastName,
        email,
    };
    await updateUser(id, payload);
    fillUserList();
    frmUser.dataset.type = "";
    frmUser.dataset.userid = "";
};
const fillUser = async (id) => { 
    const user = await getUser(id);
    const {firstName, lastName, email } = user;
    txtFirstName.value = firstName;
    txtLastName.value = lastName;
    txtEmail.value = email;
}
fillUserList();
// EVENT FUNCTIONS
listUser.addEventListener("click", (e) => {
    const userId = e.target.closest(".user-card")?.dataset?.userid;
    if(!userId) return;
    if (e.target.classList.contains("btn-delete")) {
        removeUser(userId);
    }
    else{
        frmUser.dataset.type = "update";
        frmUser.dataset.userid = userId;
        fillUser(userId);
    }
});
frmUser.addEventListener("submit", (e) => {
    e.preventDefault();
    const formType = e.target.dataset.type;
    if(formType === "update"){
        const userId = e.target.dataset.userid;
        saveUser(userId)
    }
    else{
        addUser();
    }
    
    e.target.reset();
});