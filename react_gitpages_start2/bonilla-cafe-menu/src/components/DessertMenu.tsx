import React from 'react';
import desserts from '../data/desserts';

const DessertMenu: React.FC = () => {
    return (
        <div>
            <h1>Dessert Menu</h1>
            <ul>
                {desserts.map(dessert => (
                    <li key={dessert.id}>
                        <h2>{dessert.name}</h2>
                        <p>{dessert.description}</p>
                        <p>Price: ${dessert.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DessertMenu;