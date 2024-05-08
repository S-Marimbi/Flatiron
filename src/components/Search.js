import React, { useEffect, useState } from "react";

function Search(props) {
  const { transactions, setTransactions, getTransactions } = props;
  const [search, setSearch] = useState("");

  const doSearch = (e) => {
    let s = e.target.value.toLowerCase();
    console.log(s);
    setSearch(s);

    if (s.length < 4) {
      getTransactions(transactions);
      return;
    }
    let fitleredTransaction = [];
    for (let i = 0; i < transactions.length; i++) {
      let trans = transactions[i];
      let description = trans.description.toLowerCase();
      let category = trans.category.toLowerCase();

      if(description.includes(s) || category.includes(s)){
        fitleredTransaction.push(trans);
      }
    }

    console.log(fitleredTransaction);
    setTransactions(fitleredTransaction);

    //setSearch(fitleredTransaction);
  };
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={doSearch}
        value = {search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
