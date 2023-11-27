let car={
    brand: "BMV",
    model:"X6",
    color: "purple",
    year: 2023,
    doors:2
}

const listeyiDoldur = () => {
  let carKeys= Object.keys(car);
  let formSelect=document.getElementById("slcForm");
  let strHtml="";
    for(let i=0; i<carKeys.length; i++){
        strHtml+=` <option> ${carKeys[i]}</option>`;
        formSelect.innerHTML=strHtml;
    }


}
    document.getElementById("slcForm").addEventListener("click",(event)=>{
        let value= event.target.value;
        document.getElementById("snc").innerHTML=car[value];
    })


listeyiDoldur();
