import React, { useState, useEffect } from 'react';

const MenuPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [tableNumber, setTableNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [additionalOption, setAdditionalOption] = useState('');
  const [orderError, setOrderError] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationTimeout, setNotificationTimeout] = useState(null);
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);

  const menuItems = [
    { id: 1, name: 'Espresso', price: 3.50, description: 'Strong and flavorful espresso shot.', image: 'https://www.milesteaandcoffee.com/userfiles/files/Espresso.jpg' },
    { id: 2, name: 'Latte', price: 4.50, description: 'Creamy espresso with steamed milk.', image: 'https://www.milesteaandcoffee.com/userfiles/files/latte(1).jpg' },
    { id: 3, name: 'Cappuccino', price: 4.00, description: 'Equal parts espresso, steamed milk, and milk foam.', image: 'https://www.milesteaandcoffee.com/userfiles/files/cappuciono.jpg' },
    { id: 4, name: 'Mocha', price: 4.75, description: 'Rich espresso with chocolate and steamed milk.', image: 'https://www.milesteaandcoffee.com/userfiles/files/mocha.jpg' },
    { id: 5, name: 'Americano', price: 3.75, description: 'Espresso shots with hot water for a strong, bold flavor.', image: 'https://www.milesteaandcoffee.com/userfiles/files/Americano(1).jpg' },
    { id: 6, name: 'Macchiato', price: 4.25, description: 'Espresso with a dollop of foamed milk on top.', image: 'https://topicimages.mrowl.com/large/prithvi_c/coffee/typesofcoffee/caff_macchiato_1.jpg' },
    { id: 7, name: 'Flat White', price: 4.50, description: 'Espresso with velvety microfoam milk, less frothy than a latte.', image: 'https://www.milesteaandcoffee.com/userfiles/files/Flat%20White.jpg' },
    { id: 8, name: 'Affogato', price: 5.00, description: 'Vanilla ice cream "drowned" in a shot of hot espresso.', image: 'https://www.recipetineats.com/tachyon/2023/06/Affogato_0.jpg?resize=900%2C1125&zoom=1' },
    { id: 9, name: 'Irish Coffee', price: 5.50, description: 'Coffee with a dash of Irish whiskey and topped with cream.', image: 'https://assets.epicurious.com/photos/656a0f07b429d21e3b5b4905/1:1/w_2560%2Cc_limit/irish-coffee-RECIPE_111623_5659_VOG_final.jpg' },
    { id: 10, name: 'Decaf', price: 4.00, description: 'Decaffeinated coffee for a lighter option.', image: 'https://vaya.in/recipes/wp-content/uploads/2018/05/Decaf-Coffee.jpg' },
    { id: 11, name: 'Iced Coffee', price: 4.25, description: 'Chilled coffee served over ice cubes.', image: 'https://img.huffingtonpost.com/asset/5b9e00bb1f0000500021d4a8.jpeg?ops=scalefit_960_noupscale&format=webp' },
  ];

  useEffect(() => {
    const text = "Place Your Order";
    let index = 0;

    const interval = setInterval(() => {
      if (index <= text.length) {
        setTypewriterText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const openOrderPopup = (item) => {
    setSelectedItem(item);
    setOrderError(false);
  };

  const closeOrderPopup = () => {
    setSelectedItem(null);
    setOrderError(false);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleTableNumberChange = (e) => {
    setTableNumber(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleAdditionalOptionChange = (e) => {
    setAdditionalOption(e.target.value);
  };

  const handlePlaceOrder = () => {
    if (tableNumber.trim() === '' || quantity <= 0) {
      setOrderError(true);
      return;
    }

    setSelectedItem(null);

    // Clear any existing timeouts before setting a new one
    if (notificationTimeout) {
      clearTimeout(notificationTimeout);
    }

    setShowNotification(true);
    const timeout = setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    setNotificationTimeout(timeout);
  };

  const fadeInStyles = {
    animation: 'fadeIn 1s ease-in-out',
  };

  const fadeInUpStyles = {
    animation: 'fadeInUp 0.8s ease-in-out',
  };

  const buttonStyles = {
    transition: 'all 0.3s ease-in-out',
    border: '2px solid white',
  };

  const buttonHoverEffectStyles = {
    transform: 'translateY(-5px)',
  };

  const containerStyles = {
    backgroundColor: '#1B1B1B',
  };

  return (
    <div className="container mx-auto p-4" style={{ ...fadeInStyles, ...containerStyles }}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes fadeInUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
      <h1 className="text-4xl lg:text-8xl font-bold mb-4 text-center text-white lg:mt-16" style={fadeInUpStyles}>{typewriterText}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:p-16">
        {menuItems.map(item => (
          <div key={item.id} className="relative" style={fadeInUpStyles}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-96 object-cover rounded-md cursor-pointer"
              onClick={() => openOrderPopup(item)}
              style={fadeInUpStyles}
            />
            <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-50 rounded-md">
              <div>
                <span className="text-white font-bold text-lg p-2">{item.name}</span>
                <span className="text-white p-2">${item.price.toFixed(2)}</span>
              </div>
              <button
                onClick={() => openOrderPopup(item)}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                style={buttonStyles}
                onMouseOver={(e) => e.currentTarget.style = { ...buttonStyles, ...buttonHoverEffectStyles }}
                onMouseOut={(e) => e.currentTarget.style = buttonStyles}
              >
                Order
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[#1B1B1B] p-6 rounded-md max-w-lg" style={fadeInStyles}>
            <h2 className="text-2xl text-white font-bold mb-4">Order {selectedItem.name}</h2>
            <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-48 object-cover mb-4 rounded-md" />
            <p className="mb-4 text-white">{selectedItem.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <label htmlFor="tableNumber" className="block mb-2 text-lg text-white">Table Number:</label>
              <input
                type="text"
                id="tableNumber"
                value={tableNumber}
                onChange={handleTableNumberChange}
                className="border border-gray-300 p-2 rounded-md"
              />

              <label className="block mb-2 text-lg text-white">Quantity:</label>
              <input
                type="number"
                min="1"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="border border-gray-300 p-2 rounded-md"
              />
            </div>

            <label htmlFor="paymentMethod" className="block mb-2 text-lg text-white">Payment Method:</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              className="border border-gray-300 p-2 rounded-md w-full mb-4"
            >
              <option value="online">Online</option>
              <option value="cash">Cash</option>
              <option value="credit">Credit Card</option>
            </select>

           
        
            {orderError && <p className="text-red-500 mb-2">Please fill out all fields correctly.</p>}

            <div className="flex justify-between">
              <button
                onClick={closeOrderPopup}
                className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handlePlaceOrder}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}

      {showNotification && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-2">
          <p>Your order has been placed successfully!</p>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
