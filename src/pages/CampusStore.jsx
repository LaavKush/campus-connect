import { useState } from "react";
import "../components/CampusStore.css";
import { useNavigate } from "react-router-dom";


// Import images for personal care and hygiene items
import facewash from "../assets/facewash.webp";
import sunscreen from "../assets/sunscreen.jpeg";
import wetwipes from "../assets/wetwipes.jpeg";
import makeupremover from "../assets/makeupremover.jpeg";
import shampoo from "../assets/shampoo.jpeg";
import conditioner from "../assets/conditioner.jpeg";
import hairoil from "../assets/hairoil.jpeg";
import bodywash from "../assets/bodywash.jpeg";
import soap from "../assets/soap.jpeg";
import toothpaste from "../assets/toothpaste.jpeg";
import mouthwash from "../assets/mouthwash.jpeg";
import moisturizer from "../assets/moisturizer.jpeg";

// Import images for basic groceries
import biscuits from "../assets/biscuits.jpeg";
import chips from "../assets/chips.jpeg";
import chocolate from "../assets/choco.jpeg";
import instantnoodles from "../assets/noodles.jpeg";
import bread from "../assets/bread.jpeg";
import peanutbutter from "../assets/butter.jpeg";
import jam from "../assets/jam.jpeg";
import ketchup from "../assets/ketchup.jpeg";

// Import images for stationery and study supplies
import notebook from "../assets/notebook.jpeg";
import pen from "../assets/pen.jpeg";
import pencil from "../assets/pencil.jpeg";
import highlighter from "../assets/highlighter.jpeg";
import stapler from "../assets/stapler.jpeg";
import scissors from "../assets/scissors.jpeg";
import gluestick from "../assets/glue.jpeg";
import whiteboardmarker from "../assets/marker.jpeg";

const CampusStore = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [openDescription, setOpenDescription] = useState({});
  // const contextValue = useContext(MyContext); 
  const navigate = useNavigate();

  const items = [
    {
      category: "Personal Care and Hygiene",
      items: [
        {
          name: "Face Wash",
          image: facewash,
          cost: "₹150",
          rate: "per piece",
          description: "A refreshing face wash for daily use, cleanses and hydrates your skin.",
        },
        {
          name: "Moisturizer",
          image: moisturizer,
          cost: "₹200",
          rate: "per piece",
          description: "A moisturizing lotion that nourishes and softens the skin.",
        },
        {
          name: "Sunscreen",
          image: sunscreen,
          cost: "₹250",
          rate: "per piece",
          description: "Protects your skin from harmful UV rays.",
        },
        {
          name: "Wet Wipes",
          image: wetwipes,
          cost: "₹80",
          rate: "per pack",
          description: "Gentle wet wipes for a quick refresh.",
        },
        {
          name: "Makeup Remover",
          image: makeupremover,
          cost: "₹180",
          rate: "per piece",
          description: "Efficiently removes makeup without irritation.",
        },
        {
          name: "Shampoo",
          image: shampoo,
          cost: "₹120",
          rate: "per piece",
          description: "Cleanses and nourishes your hair, leaving it soft and shiny.",
        },
        {
          name: "Conditioner",
          image: conditioner,
          cost: "₹180",
          rate: "per piece",
          description: "Moisturizing conditioner for smooth and manageable hair.",
        },
        {
          name: "Hair Oil",
          image: hairoil,
          cost: "₹150",
          rate: "per piece",
          description: "Promotes healthy hair growth and nourishment.",
        },
        {
          name: "Body Wash",
          image: bodywash,
          cost: "₹220",
          rate: "per piece",
          description: "Refreshing body wash for a clean, soft feel.",
        },
        {
          name: "Soap",
          image: soap,
          cost: "₹50",
          rate: "per piece",
          description: "A gentle soap that cleanses your skin.",
        },
        {
          name: "Toothpaste",
          image: toothpaste,
          cost: "₹90",
          rate: "per piece",
          description: "Fluoride toothpaste for a fresh breath and clean teeth.",
        },
        {
          name: "Mouthwash",
          image: mouthwash,
          cost: "₹120",
          rate: "per piece",
          description: "Mouthwash for fresher breath and better oral hygiene.",
        },
      ],
    },
    {
      category: "Basic Groceries",
      items: [
        {
          name: "Biscuits",
          image: biscuits,
          cost: "₹20",
          rate: "per pack",
          description: "Crispy and tasty biscuits, perfect for tea time.",
        },
        {
          name: "Chips",
          image: chips,
          cost: "₹10",
          rate: "per pack",
          description: "Crunchy potato chips, a perfect snack for anytime.",
        },
        {
          name: "Chocolate",
          image: chocolate,
          cost: "₹50",
          rate: "per bar",
          description: "A rich and smooth chocolate bar.",
        },
        {
          name: "Instant Noodles",
          image: instantnoodles,
          cost: "₹30",
          rate: "per pack",
          description: "Quick and easy meal, just add water!",
        },
        {
          name: "Bread",
          image: bread,
          cost: "₹40",
          rate: "per loaf",
          description: "Freshly baked bread, soft and delicious.",
        },
        {
          name: "Peanut Butter",
          image: peanutbutter,
          cost: "₹180",
          rate: "per jar",
          description: "Creamy peanut butter, great for sandwiches.",
        },
        {
          name: "Jam",
          image: jam,
          cost: "₹100",
          rate: "per jar",
          description: "Sweet fruit jam, perfect for bread or toast.",
        },
        {
          name: "Ketchup",
          image: ketchup,
          cost: "₹60",
          rate: "per bottle",
          description: "Delicious tomato ketchup, a perfect companion for snacks.",
        },
      ],
    },
    {
      category: "Stationery and Study Supplies",
      items: [
        {
          name: "Notebook",
          image: notebook,
          cost: "₹50",
          rate: "per piece",
          description: "A notebook with high-quality pages, ideal for taking notes in class.",
        },
        {
          name: "Pen",
          image: pen,
          cost: "₹10",
          rate: "per piece",
          description: "A smooth-writing pen, ideal for everyday use.",
        },
        {
          name: "Pencil",
          image: pencil,
          cost: "₹5",
          rate: "per piece",
          description: "A sharp pencil, perfect for drawing and writing.",
        },
        {
          name: "Highlighter",
          image: highlighter,
          cost: "₹20",
          rate: "per piece",
          description: "A bright highlighter for important notes.",
        },
        {
          name: "Stapler",
          image: stapler,
          cost: "₹100",
          rate: "per piece",
          description: "Heavy-duty stapler for your office or study needs.",
        },
        {
          name: "Scissors",
          image: scissors,
          cost: "₹80",
          rate: "per piece",
          description: "Sharp scissors for cutting papers, fabric, and more.",
        },
        {
          name: "Glue Stick",
          image: gluestick,
          cost: "₹40",
          rate: "per piece",
          description: "A convenient glue stick for sticking papers together.",
        },
        {
          name: "Whiteboard Marker",
          image: whiteboardmarker,
          cost: "₹30",
          rate: "per piece",
          description: "Non-toxic whiteboard marker for classroom and office use.",
        },
      ],
    },
  ];

  const incrementQuantity = (itemName) => {
    setQuantities((prev) => ({
      ...prev,
      [itemName]: (prev[itemName] || 0) + 1,
    }));
  };

  const decrementQuantity = (itemName) => {
    setQuantities((prev) => ({
      ...prev,
      [itemName]: Math.max(0, (prev[itemName] || 0) - 1),
    }));
  };

  const handleBuy = (item) => {
    const quantity = quantities[item.name] || 0;
    if (quantity > 0) {
      setCart((prevCart) => {
        const existingIndex = prevCart.findIndex((cartItem) => cartItem.name === item.name);
        if (existingIndex !== -1) {
          const updatedCart = [...prevCart];
          updatedCart[existingIndex].quantity += quantity;
          return updatedCart;
        } else {
          return [...prevCart, { ...item, quantity }];
        }
      });
      setQuantities({ ...quantities, [item.name]: 0 }); // Reset quantity
    }
  };

  const toggleDescription = (itemName) => {
    setOpenDescription((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const Item = ({ item }) => (
    <div className="item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>Price: {item.cost} ({item.rate})</p>
        <button onClick={() => toggleDescription(item.name)}>
          {openDescription[item.name] ? "Hide" : "Show"} Description
        </button>
        {openDescription[item.name] && <p>{item.description}</p>}
        <div className="quantity-controls">
          <button onClick={() => decrementQuantity(item.name)}>-</button>
          <span>{quantities[item.name] || 0}</span>
          <button onClick={() => incrementQuantity(item.name)}>+</button>
        </div>
        <button className="buy-button" onClick={() => handleBuy(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );

  const Category = ({ category }) => (
    <div className="category">
      <h2>{category.category}</h2>
      <div className="item-list">
        {category.items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </div>
    </div>
  );

  const Cart = () => {
    const handleRemoveItem = (index) => {
      // Assuming you have a function to update the cart (like setCart in a state)
      setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };
  
    return (
      <div className="cart">
        <h3>Your Cart</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((cartItem, index) => (
              <li
                key={index}
                onClick={() => handleRemoveItem(index)} // Click to remove item
                className="cart-item"
              >
                <span>{cartItem.name} x{cartItem.quantity} - {cartItem.cost}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent clicking the button from triggering item removal
                    handleRemoveItem(index);
                  }}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    );
  };

  return (
    <div className="store">
      {items.map((category) => (
        <Category key={category.category} category={category} />
      ))}
      <Cart />
      {/* <div className="button-container1">
        <button className="view-cart-button1" >onClick={() => navigate("/store-cart")}
          View Cart
        </button>
      </div> */}

      {/* Cart Buttons */}
      <div className="cart-buttons">
        <button
          className="checkout-button"
          onClick={() => navigate('/payment')}
        >
          Buy
        </button>
        <button
          className="continue-shopping-button"
          onClick={() => navigate('/')}
        >
          Continue Shopping
        </button>
      </div>
    </div>

  );
};

export default CampusStore;