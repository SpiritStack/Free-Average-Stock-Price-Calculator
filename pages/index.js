import { useState } from 'react';

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const addTransaction = () => {
    if (!quantity || !price) return;

    const newTransaction = {
      quantity: parseFloat(quantity),
      price: parseFloat(price),
    };

    setTransactions([...transactions, newTransaction]);
    setQuantity('');
    setPrice('');
  };

  const calculateAveragePrice = () => {
    if (transactions.length === 0) return 0;

    const totalQuantity = transactions.reduce((sum, t) => sum + t.quantity, 0);
    const totalCost = transactions.reduce((sum, t) => sum + t.quantity * t.price, 0);

    return (totalCost / totalQuantity).toFixed(2);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Average Stock Price Calculator</h1>
      </header>
      <main className="main">
        <div className="input-section">
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price per share"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={addTransaction}>Add Transaction</button>
        </div>
        <div className="transactions-section">
          <h2>Transactions</h2>
          <ul>
            {transactions.map((t, index) => (
              <li key={index}>
                {t.quantity} shares at ${t.price.toFixed(2)} each
              </li>
            ))}
          </ul>
        </div>
        <div className="result-section">
          <h2>Average Stock Price</h2>
          <p>${calculateAveragePrice()}</p>
        </div>
      </main>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .header {
          background-color: #6200ea;
          color: white;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .main {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .input-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }
        .input-section input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }
        .input-section button {
          padding: 10px;
          background-color: #6200ea;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .input-section button:hover {
          background-color: #3700b3;
        }
        .transactions-section ul {
          list-style-type: none;
          padding: 0;
        }
        .transactions-section li {
          background-color: #f4f4f9;
          padding: 10px;
          margin: 5px 0;
          border-radius: 5px;
        }
        .result-section {
          background-color: #f4f4f9;
          padding: 20px;
          border-radius: 10px;
        }
        .result-section p {
          font-size: 24px;
          font-weight: bold;
          color: #6200ea;
        }
      `}</style>
    </div>
  );
}
