const { useState } = React;

function App() {
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
    <div className="App">
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
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
