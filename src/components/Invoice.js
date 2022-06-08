import "../styles/Invoice.scss";
import { useState } from "react";
const Invoice = () => {
  const [item, setItem] = useState({
    quantity: 0,
    description: "",
    rate: 0,
  });
  const [items, setItems] = useState([]);
  const [invoice, setInvoice] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    items: [],
    paid: false,
  });

  const addItemHandler = (e) => {
    e.preventDefault();
    setItems(prevState => [...prevState, item]);
  };


  const invoiceHandler = (e) => {
    e.preventDefault();
    console.log(invoice);
    e.target.reset();
  };

  return (
    <section className="invoice">
      <form onSubmit={invoiceHandler}>
        <h4>Generate Invoice</h4>

        <label>Name</label>
        <input
          type="text"
          placeholder="Full name"
          onChange={(e) => {
            setInvoice({ ...invoice, name: e.target.value });
          }}
        />
        <label>Address</label>
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => {
            setInvoice({ ...invoice, address: e.target.value });
          }}
        />

        <label>Phone number</label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone number"
          onChange={(e) => {
            setInvoice({ ...invoice, phoneNumber: e.target.value });
          }}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={(e) => {
            setInvoice({ ...invoice, email: e.target.value });
          }}
        />

        <fieldset>
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            onChange={(e) => {
              setItem({ ...item, quantity: e.target.value });
            }}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => {
              setItem({ ...item, description: e.target.value });
            }}
          />

          <label>Rate per unit(&#8358;)</label>
          <input
            type="number"
            name="rate"
            onChange={(e) => {
              setItem({ ...item, rate: e.target.value });
            }}
          />

          <button onClick={addItemHandler}>Add Item</button>
        </fieldset>

        <table>
          <tbody>
            <tr>
              <td>Qty</td>
              <td>Description</td>
              <td>Rate</td>
              <td>Total</td>
            </tr>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td> {item.quantity} </td>
                <td> {item.description} </td>
                <td>{item.rate}</td>
                <td colSpan="2">
                  &#8358; {Number(item.quantity) * Number(item.rate)}
                </td>
              </tr>
            ))}
            <tr colSpan="4">
            
    
                  Total: &#8358;{" "}
                  {items.reduce((total, item) => {
                    return (total += Number(item.quantity) * Number(item.rate));
                  }, 0)}
           
             
            </tr>
          </tbody>
        </table>

        <label>Paid</label>
        <input
          type="checkbox"
          name="paid"
          onChange={(e) => {
            setInvoice({ ...invoice, paid: e.target.value });
          }}
        />

        <button type="submit">Generate Receipt</button>
        <button>Reset</button>
      </form>
    </section>
  );
};

export default Invoice;
