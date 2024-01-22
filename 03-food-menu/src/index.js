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
        photoName: "thaifoods/Garlic-and-Pepper-Pork-with-Rice.jpg",
        soldOut: false,
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
        "cuisine": "chinese",
        soldOut: false,
        photoName: "thaifoods/Hainanese_Chicken_Rice.jpg"
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
        "cuisine": "chinese",
        soldOut: false,
        photoName: "thaifoods/Kao-moo-dang.jpg"
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
       "cuisine": "thai",
       soldOut: false,
       photoName: "thaifoods/Spicy-Chicken-Basil-Fried-Rice.jpg"
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
        photoName: "thaifoods/Garlic-and-Pepper-Pork-with-Rice.jpg",
        soldOut: true
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
        "cuisine": "thai",
        soldOut: false,
        photoName: "thaifoods/Phat_Thai_kung_Chang_Khien_street_stall.jpg"
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
    const thaifoods = ThaiFoodData;
    //const thaifoods = [];
    const numThaifoods = thaifoods.length;

    return (
    <main className="menu">
        <h2>Our menu</h2>

        
        {numThaifoods > 0 ? (
            <>
              <p>
                Authetic Thai Food. 6 dishes to choose from. All from 
                Thai master chef, all organic, all delicious.
              </p>

              <ul className="thaifoods">
                 {ThaiFoodData.map((thaifood) => (
                    <ThaiFood thaifoodObj={thaifood} key={thaifood.name}/>
                 ))}
              </ul>
            </>
        ) : ( 
            <p>We're still working on our menu. Please come back later :)</p> 
        )}
  
            {/* <ThaiFood
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
            />  */}
    </main>
    )
}


function ThaiFood({ thaifoodObj }) {
 console.log(thaifoodObj);

//  if(thaifoodObj.soldOut) return null;

 return (
    <li className={`thaifood ${thaifoodObj.soldOut ? "sold-out": ""}`}>
         <img src={thaifoodObj.photoName} alt={thaifoodObj.eng_name} />
         <div>
             <h3>{thaifoodObj.eng_name}</h3>
             <p>{thaifoodObj.avg_calories} Cal</p>

            {/* {thaifoodObj.soldOut ? (
                <span>SOLD OUT</span>
                ) : (
                    <span>{thaifoodObj.price}</span>
                )} */}

             <span>{thaifoodObj.soldOut ? 'SOLD OUT' : thaifoodObj.price}</span>
         </div>
    </li>
)}

function Footer() {
    const hour = new Date().getHours()
    const openHour = 11;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen)

    // if(hour >= openHour && hour <= closeHour) alert("We're currently open!")
    // else alert("Sorry we're closed")
    
    // if(!isOpen) return( <p>CLOSED</p> );

    return (
    <footer className="footer">
      {isOpen ? (<Order closeHour={closeHour} openHour={openHour} />         
      ) : ( 
        <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    
    </footer>
    );
    //return React.createElement('footer', null, "Coming and taste it now.")
}

function Order({closeHour, openHour}){
    return(
        <div className="order">
        <p>
            Coming and taste it now between {openHour}:00 to {closeHour}:00. Come to visit us or order 
            online.
        </p>
        <button className="btn">Order now</button>
      </div>
    )
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