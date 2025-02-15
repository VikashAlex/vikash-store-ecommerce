import { getCartProductFromLS } from "./getCartProducts";

let productSubTotal = document.querySelector(".productSubTotal");
let productFinalTotal = document.querySelector(".productFinalTotal");
export const updateCartProductTotal =()=>{
    let localCartProducts = getCartProductFromLS();
    let initialValue =0;
    let totalProductPrice = localCartProducts.reduce((accum,
        curantElem
    )=>{
    let ProductPrice =parseInt(curantElem.price)||0;
    return accum+ProductPrice
    },initialValue);
    productSubTotal.innerHTML=`₹${totalProductPrice}`;
    productFinalTotal.innerHTML=`₹${(totalProductPrice+50)}`;
  
}
