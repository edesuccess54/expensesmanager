import { useEffect, useState } from 'react';
import './Billmanager.css';

export default function BillManager() {
  const [netSalary, setNetSalary] = useState(95000);

  const [defaultBills, setDefaultBills] = useState([
    {name: 'Rent', amount: 10000, id: Math.random()},
    {name: 'Shopping', amount: 25000, id: Math.random()},
    {name: 'Food', amount: 5300, id: Math.random()}
  ]);


  const [billName, setBillName] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);
  const [defaulTotal, setDefaultTotal] = useState(0);

  const keyValueHandler = (e) => {
    e.preventDefault();

    if(billName.length === '0' || billAmount.length ==='0') {
      alert('expense and amount is required');
    } else {
      const expenseDetails = {
        name: billName,
        amount: billAmount,
        id: Math.random()
      }
      setExpenses([...expenses, expenseDetails]);
  
      setBillName('');
      setBillAmount('');
    }        
  }

  function defaultBillTotal() {
    let totalBill = 0;
 
    defaultBills.forEach((defaultBill) => {
      totalBill += Number(defaultBill.amount);
   });

    if(expenses.length !==0) {
      expenses.forEach((expense) => {
        console.log('expenses are '+expense);
        totalBill += Number(expense.amount);
        console.log('total bill is '+totalBill);
      })
    }

    setDefaultTotal(totalBill);
  }

  useEffect(() => {
    defaultBillTotal();
  }, [defaultBills, expenses]);

  useEffect(() => {
    const balanceAfterExpensense = netSalary - defaulTotal;
    setBalance(balanceAfterExpensense);
  }, [netSalary, expenses, defaulTotal])

  return (
    <div className="taxcalculator">
       <div className="form-wrapper">
            <form>
                <label htmlFor="Salary">Net Salary</label>
                <input 
                    type="number"
                    onChange={(e) => setNetSalary(e.target.value)}
                    value={netSalary}
                 />
            </form>

            <div className="content-wrapper">

                <ul>
                  {defaultBills && defaultBills.map((defaultBill) => (
                    <li key = {defaultBill.id}>
                    <span>{defaultBill.name}</span>
                    <span>Ksh {defaultBill.amount}</span>
                  </li>
                  ))}
                </ul>

                <ul>
                  {expenses && (
                    expenses.map((expense) => (
                      <li key = {expense.id}>
                        <span>{expense.name}</span>
                        <span>Ksh {expense.amount}</span>
                      </li>
                    ))
                  )}
                </ul>
              <form 
                className='keyValue-form' 
                style={{marginLeft: "120px"}}
                onSubmit = {keyValueHandler}
                >
                <div className='keyValue-container' style={{display: "#flex", justifyContent: "space-between", gap: "20px"}}>
                  <input type="text" 
                  style={{background: "#fff", width: "150px"}}
                  onChange = {(e) => setBillName(e.target.value)}
                  value = {billName}
                  />
                  <input type="number" 
                    style = {{background: "#fff", width: "150px"}}
                    onChange = {(e) => setBillAmount(e.target.value)}
                    value = {billAmount}
                  />
                </div>
                
                <div style={{display: "flex", justifyContent: "flex-end", marginTop: "10px"}}>
                  <button 
                    type='submit'
                    style={
                      {marginleft: "auto", 
                      padding: "10px 50px", 
                      background: "#000", 
                      color: '#fff', 
                      borderRadius: '5px', 
                      cursor: 'pointer'}
                    } 
                    >Add</button>
                </div>
              </form>

                <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', borderTop: "1px solid #D9D9D9", marginTop: '60px', padding: "5px 0", fontWeight: "600"}}>
                <p>Balance</p>
                <p 
                style={balance < netSalary*0.2 ? {color: "red"} : {color: "green"} }
                >Ksh {balance}</p>
              </div>
            </div>
       </div>
    </div>
  )
}
