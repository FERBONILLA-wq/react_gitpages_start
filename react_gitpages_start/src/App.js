import React from 'react';

// Datos simulados
const desserts = [
  {
    name: "Pastel de Chocolate",
    description: "Bizcocho húmedo con glaseado de chocolate cremoso.",
    price: "$4.50"
  },
  {
    name: "Tarta de Queso",
    description: "Base de galleta graham con toque de vainilla.",
    price: "$5.00"
  },
  {
    name: "Tiramisú",
    description: "Postre italiano con café y queso mascarpone.",
    price: "$6.00"
  },
  {
    name: "Brownie",
    description: "Brownie denso con nuez y chocolate.",
    price: "$4.00"
  },
   {
    name: "Brownie2",
    description: "Brownie denso con nuez y chocolate.",
    price: "$4.00"
  }
];

const App = () => {
  const styles = {
    appContainer: {
      backgroundColor: '#f5e4d7', // café con leche
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '2.8rem',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#4e342e',
      fontWeight: 'bold',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      padding: '20px',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    dessertName: {
      fontSize: '1.4rem',
      marginBottom: '10px',
      color: '#6d4c41',
      fontWeight: 'bold',
    },
    dessertDesc: {
      fontSize: '0.95rem',
      color: '#5d4037',
      marginBottom: '8px',
    },
    dessertPrice: {
      fontWeight: 'bold',
      color: '#8d6e63',
    },
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.title}>Menú de Bonilla Café</h1>
      <div style={styles.grid}>
        {desserts.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={styles.dessertName}>{item.name}</div>
            <div style={styles.dessertDesc}>{item.description}</div>
            <div style={styles.dessertPrice}>Precio: {item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
