import React from 'react';

interface Dessert {
    name: string;
    description: string;
    price: string;
}

const desserts: Dessert[] = [
    { name: 'Chocolate Cake', description: 'Rich and moist chocolate cake topped with creamy chocolate frosting.', price: '$5.00' },
    { name: 'Cheesecake', description: 'Classic cheesecake with a graham cracker crust and a hint of vanilla.', price: '$6.00' },
    { name: 'Tiramisu', description: 'Layered coffee-flavored dessert with mascarpone cheese and cocoa.', price: '$7.00' },
    { name: 'Fruit Tart', description: 'Fresh seasonal fruits on a creamy custard filling in a buttery tart shell.', price: '$5.50' },
    { name: 'Brownie Sundae', description: 'Warm brownie topped with vanilla ice cream and chocolate sauce.', price: '$6.50' },
];

const DessertMenu: React.FC = () => {
    return (
        <div className="dessert-menu">
            <h2>Dessert Menu</h2>
            <ul>
                {desserts.map((dessert, index) => (
                    <li key={index}>
                        <h3>{dessert.name}</h3>
                        <p>{dessert.description}</p>
                        <span>{dessert.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DessertMenu;