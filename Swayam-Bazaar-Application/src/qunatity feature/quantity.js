import CartAmountToggle from "./quantity-btn";

const[amount,setAmount]=useState(1);

const setDecrease=() => {
    amount>1 ? setAmount(amount-1):setAmount(1);
};

const setIncrease=()=>{
    amount<stock_qnt ? setAmount(amount+1):setAmount(stock_qnt);
};

{/* add to the quantity cart*/}

<CartAmountToggle 
amount={amount} 
setDecrease={setDecrease}
setIncrease={setIncrease}
/>

