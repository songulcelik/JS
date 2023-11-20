function changeMode(){

    const body=document.querySelector("body");
   
    const butonToggle=document.querySelector(".toggle-btn");

    const isDark=body.classList.contains("dark");

    if(isDark){

       // body.classList.remove("dark")
       body.classList.toggle("dark");
       butonToggle.innerHTML=` <i class="fa-solid fa-moon"></i>`
    }else{
        body.classList.add("dark");
        butonToggle.innerHTML=` <i class="fa-solid fa-sun"></i>`
    }

}