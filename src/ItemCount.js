import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial);
    const increment = () => {
        if (cantidad < stock) {
        setCantidad(cantidad + 1);
        }else{
            alert("No hay suficientes elementos en stock");
        }
    }
    const decrement = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }
    return (
        <div>
            <div className="row g-2">
                <div className="col-md-1">
                    <button onClick={decrement}>-</button>
                </div>
                <div className="col-md-1">
                    <strong>{cantidad}</strong>
                </div>
                <div className="col-md-1">
                    <button onClick={increment}>+</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;