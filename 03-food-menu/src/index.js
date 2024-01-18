import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const ThaiFoodData = [
    {
        "name":  "หมูทอดกระเทียม",
        eng_name: "Pork Garlic Stir Fried",
        "rice": "possible",
        "meat": ["pork"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain_nut": "possible",
        "contain_milk": "none",
        avg_calories: 200,
        price: "45",
        "cuisine": "thai",
        photoName: "thaifood/Garlic-and-Pepper-Pork-with-Rice.jpg"
      },
      {
        "name":  "ข้าวมันไก่",
        "eng_name": "Chicken Rice",
        "rice": "contain",
        "meat": ["chicken"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain_nut": "none",
        "contain_milk": "none",
        "avg_calories": 515,
        "price": "40",
        "cuisine": "chinese"
      },
       {
        "name":  "ข้าวหมูแดง",
        "eng_name": "BBQ pork Rice",
        "rice": "contain",
        "meat": ["pork"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain_nut": "none",
        "contain_milk": "none",
        "avg_calories": 438,
        "price": "35",
        "cuisine": "chinese"
      },
      {
       "name":  "ข้าวผัดกระเพราไก่",
       "eng_name": "Holy basil chicken fried Rice",
       "rice": "contain",
       "meat": ["chicken"],
       "spicy": false,
       "seafood": false,
       "green_level": "none",
       "contain_nut": "none",
       "contain_milk": "none",
       "price": "40",
       "avg_calories": 554,
       "cuisine": "thai"
     },
      {
        "name":  "แกงจืดเต้าหู้หมูสับ",
        eng_name: "Clear Soup with Bean Curd and Minced Pork",
        "rice": "not-contain",
        "meat": ["pork"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain_nut": "not-contain",
        "contain_milk": "not-contain",
        "avg_calories": 320,
        price: "60",
        "cuisine": "chinese",
        photoName: "thaifood/Garlic-and-Pepper-Pork-with-Rice.jpg"
      },
      {
        "name":  "ผัดไท",
        "eng_name": "Pad Thai",
        "rice": "possible",
        "meat": ["shrimp"],
        "spicy": true,
        "seafood": true,
        "green_level": "none",
        "contain_nut": "possible",
        "contain_milk": "possible",
        "avg_calories": 303,
        "price": "40",
        "cuisine": "thai"
      },
]

function App() {
    return (
    <div className='container'>
       <Header />
       <Menu />
       <Footer />
    </div>
  );
}

function Header() {
//const style = {color: 'green', fontSize: '48px',textTransform:"uppercase"}
    const style = {}
    
    return (
        <header className="header">
            <h1 style={style}>My Thai React Restaurant Co.</h1>
        </header>
    );
}

function Menu() {
    return (
    <main className="menu">
        <h2>Our menu</h2>
            <ThaiFood
                name='Pork Garlic Stir Fried'
                avg_calories= '200'
                photoName='thaifoods/Garlic-and-Pepper-Pork-with-Rice.jpg'
                price = {45}
            /> 
            <ThaiFood
                name='Chicken Rice'
                avg_calories= '515'
                photoName='thaifoods/Hainanese_Chicken_Rice.jpg'
                price = {40}
            /> 
    </main>
    )
}


function ThaiFood(props) {
 console.log(props)

 return (
    <div className="thaifood">
         <img src={props.photoName} alt={props.eng_name} />
         <div>
             <h3>{props.name}</h3>
             <p>{props.avg_calories}</p>
             <span>{props.price}</span>
         </div>
    </div>
)}

function Footer() {
    const hour = new Date().getHours()
    const openHour = 11;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen)

    // if(hour >= openHour && hour <= closeHour) alert("We're currently open!")
    // else alert("Sorry we're closed") 

    return <footer className="footer">{new Date().toLocaleTimeString()}. Coming and taste it now.</footer>
    //return React.createElement('footer', null, "Coming and taste it now.")
}


// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
       <App />
    </React.StrictMode>
);

// React before 18
// React.render(<App />, document.getElementById("root"));