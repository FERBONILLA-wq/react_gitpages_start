import React from 'react';

const DesignElements: React.FC = () => {
    return (
        <div>
            <header className="cafe-header">
                <h1>Welcome to Bonilla Café</h1>
            </header>
            <button className="cafe-button">Order Now</button>
            <div className="cafe-card">
                <h2>Featured Dessert</h2>
                <p>Indulge in our delicious chocolate cake!</p>
            </div>
        </div>
    );
};

export default DesignElements;