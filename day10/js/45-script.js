const hesapla = (price, tax, discount) => {
  price ??=0
  tax ??=0
  discount ??=0

  if(discount<=0) tax=0;
  if(price>=1500) discount+=10;

  let totalTax= (price*tax)/100;
  let totalDiscount=(price*discount)/100;

  let sonuc= price+totalTax - totalDiscount;
  return sonuc;
}

console.log(hesapla(1000,20,50));

const sonucuGoster = () => {
  let priceEl=document.querySelector("#inpFiyat");
  let price=Number(priceEl.value);
  let taxEl= document.querySelector("#inpKdv");
  let tax=Number(taxEl.value);
  let discountEl=document.querySelector("#inpOran");
  let discount=Number(discountEl.value);

 const totalResult= hesapla(price,tax,discount);
 document.querySelector("#snc").innerHTML=` sonuc: ${totalResult.toFixed(2)} USD`; 
}

sonucuGoster();