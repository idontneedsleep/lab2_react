import './App.css';
import {MyCounter} from "./components/counter";
import React from "react";
import {Cart} from "./components/cart";

function App() {
    const counters = [
        {id: 1, initial: 6, min: -5, max: 10},
        {id: 2, initial: 5},
        {id: 3},
    ];
    const listCounter = counters.map((counter) =>
        <li key={counter}>
            <MyCounter min={counter.min} max={counter.max} value={counter.initial}/>
        </li>
    );

    const carts = [
        {name: 'Constructor LEGO', price: 300, value : 1},
        {name: 'Train Station', price: 200},
        {name: 'Hot Wheels Track', price: 150, value : 2},
    ];
    const listCart = carts.map((item) =>
        <Cart key={item} name={item.name} price={item.price} value={item.value}/>
    );
  return (
    <div className="App">
        <MyCounter />
        <ul key={counters}>
            {listCounter}
        </ul>
        <div class="cart">
            <h2>Cart</h2>
            <table key={carts} class="bp4-html-table bp4-html-table-striped bp4-html-table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {listCart}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan='3' >Total</td>
                        <td>--</td>
                    </tr>
                </tfoot>
            </table>
        </div>

    </div>
  );
}

export default App;
