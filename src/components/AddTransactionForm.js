import React, { useState } from "react";

function AddTransactionForm(props) {
  const {transactions, setTransactions, getTransactions} = props;
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  
  function submitK() {
    //console.log(date);



    if (date==="" || category==="" || amount===""){
      return;
    } 

    const data = {
      id:Date.now(),
      date,
      description,
      category,
      amount,
    };
    let newArr = [...transactions];
    newArr.push(data);
    console.log(newArr);
    //newArr.push(data);
    //console.log(data);
    setTransactions(newArr);
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  }

  function submit2(){
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  date,
  description,
  category,
  amount,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8001/transactions", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setTransactions(newArr);
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
    getTransactions();
  })
  .catch((error) => console.error(error));
  }

  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="inline fields">
          <input
           type="date" 
           name="date" 
           value={date}
           onChange = {(e) => setDate(e.target.value)}
           />
          <input
           type="text" 
           name="description"
           placeholder="Description" 
          onChange = {(e) => setDescription(e.target.value)}
          value={description}
          />
          <input 
          type="text"
           name="category" 
           placeholder="Category" 
          onChange = {(e) => setCategory(e.target.value)}
          value={category}
          />
          <input
           type="number"
            name="amount" 
            placeholder="Amount" step="0.01" 
          onChange = {(e) => setAmount(e.target.value)} 
          value={amount}
          />
        </div>
        <button className="ui button" type="submit" onClick={submit2}>
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default AddTransactionForm;
