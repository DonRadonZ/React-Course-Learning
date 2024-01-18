import React from "react";
import ReactDOM from "react-dom/client";

const ThaiFoodData = [
    {
        "name":  "หมูทอดกระเทียม",
        "eng_name": "Pork Garlic Stir Fried",
        "rice": "possible",
        "meat": ["pork"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain_nut": "possible",
        "contain_milk": "none",
        "avg_calories": 200,
        "cuisine": "thai"
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
       "avg_calories": 554,
       "cuisine": "thai"
     },
      {
       "name":  "ผัดผักบุ้ง",
       "eng_name": "Stir Fried Swamp Cabbage",
       "rice": "possible",
       "meat": [],
       "spicy": true,
       "seafood": false,
       "green_level": "none",
       "contain_nut": "contain",
       "contain_milk": "none",
       "avg_calories": 210,
       "cuisine": "chinese"
      },
      {
        "name":  "แกงจืดเต้าหู้หมูสับ",
        "eng_name": "Clear Soup with Bean Curd and Minced Pork",
        "rice": "not-contain",
        "meat": ["pork"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain_nut": "not-contain",
        "contain_milk": "not-contain",
        "avg_calories": null,
        "cuisine": "chinese"
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
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "เต้าหู้ทรงเครื่อง",
        "eng_name": "Deep Fried Tofu with Gravy Sauce",
        "rice": "not-contain",
        "meat": ["pork"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain_nut": "possible",
        "contain_milk": "possible",
        "avg_calories": null,
        "cuisine": "chinese"
      },
      {
        "name":  "ต้มยำกุ้ง",
        "eng_name": "Hot and Sour Prawn Soup",
        "rice": "not-contain",
        "meat": ["prawn"],
        "spicy": true,
        "seafood": true,
        "green_level": "none",
        "contain_nut": "not-contain",
        "contain_milk": "contain",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "ไข่พะโล้",
        "eng_name": "Thai Style Fragrant Eggs and Pork Chinese Five-Spice Stew",
        "rice": "not-contain",
        "meat": ["pork"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain_nut": "not-contain",
        "contain_milk": "not-contain",
        "avg_calories": null,
        "cuisine": "chinese"
      },
      {
        "name":  "ต้มยำปลากรอบ",
        "eng_name": "Crispy Fish Soup",
        "rice": "not-contain",
        "meat": ["fish"],
        "spicy": true,
        "seafood": true,
        "green_level": "none",
        "contain_nut": "not-contain",
        "contain_milk": "contain",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "แกงจืดรวมมิตรทะเล",
        "eng_name": "Seafood Clear Soup",
        "rice": "not-contain",
        "meat": ["octopus","shrimp"],
        "spicy": false,
        "seafood": true,
        "green_level": "none",
        "contain_nut": "not-contain",
        "contain_milk": "not-contain",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "ข้าวต้มปลา",
        "eng_name": "Porridge with fish",
        "rice": "contain",
        "meat": ["fish"],
        "spicy": false,
        "seafood": true,
        "green_level": "none",
        "contain_nut": "not-contain",
        "contain_milk": "not-contain",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "ยำปลาดุกฟู",
        "eng_name": "Spicy deep-fried catfish salad",
        "rice": "not-contain",
        "meat": ["catfish"],
        "spicy": true,
        "seafood": true,
        "green_level": "none",
        "contain_nut": "contain",
        "contain_milk": "not-contain",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "ทอดมันปลา",
        "eng_name": "Curried fish cake",
        "rice": "not-contain",
        "meat": ["fish"],
        "spicy": false,
        "seafood": true,
        "green_level": "none",
        "contain_nut": "not-contain",
        "contain_milk": "possible",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "น้ำพริกอ่อง",
        "eng_name": "Spicy meat and tomato dip",
        "rice": "not-contain",
        "meat": ["pork"],
        "spicy": true,
        "seafood": false,
        "green_level": "none",
        "contain_nut": "not-contain",
        "contain_milk": "possible",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "ผัดผักบุ้งไฟแดง",
        "eng_name": "Quick-fried water spinach seasoned with chili and soy sauce",
        "rice": "not-contain",
        "meat": [""],
        "spicy": true,
        "seafood": false,
        "green_level": "none",
        "contain_nut": "possible",
        "contain_milk": "not-contain",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "หูฉลาม",
        "eng_name": "Shark's fin",
        "rice": "not-contain",
        "meat": ["shark"],
        "spicy": false,
        "seafood": true,
        "green_level": "none",
        "contain_nut": "not-contain",
        "contain_milk": "not-contain",
        "avg_calories": null,
        "cuisine": "chinese"
      },
      {
        "name":  "ขนมจีนน้ำยา",
        "eng_name": "Rice noodles in fish curry sauce with vegetables",
        "rice": "not-contain",
        "meat": ["fish"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain_nut": "not-contain",
        "contain_milk": "contain",
        "avg_calories": null,
        "cuisine": "chinese"
      },
      {
        "name":  "ห่อหมกปู",
        "eng_name": "Streamed Crab Curry in a Banana Leaf Cup",
        "rice": "not-contain",
        "meat": ["crab"],
        "spicy": false,
        "seafood": true,
        "green_level": "none",
        "contain_nut": "not-contain",
        "contain_milk": "contain",
        "avg_calories": null,
        "cuisine": "chiness"
      },
      {
        "name":  "ข้าวผัดกระเพราหมู",
        "eng_name": "Fired rice with basil and pork",
        "rice": "possible",
        "meat": ["pork"],
        "spicy": true,
        "seafood": false,
        "green_level": "none",
        "contain-nut": "none",
        "contain-milk": "none",
        "cuisine": "chinese"
      },
      {
        "name":  "ผัดกะเพรา",
        "eng_name": "Basil Fried Rice",
        "rice": "contain",
        "meat": ["pork", "chicken", "beef", "seafood"],
        "spicy": true,
        "seafood": true,
        "green_level": "none",
        "contain-nut": "not-contain",
        "contain-milk": "not-contain",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "ข้าวผัดกระเพราไก่",
        "eng_name": "Fired rice with basil and chicken",
        "rice": "possible",
        "meat": ["chicken"],
        "spicy": true,
        "seafood": false,
        "green_level": "none",
        "contain-nut": "none",
        "contain-milk": "none",
      },{
        "name":  "แกงเขียวหวาน",
        "eng_name": "Green Curry With Meat",
        "rice": "not-contain",
        "meat": ["pork", "chicken", "beef"],
        "spicy": true,
        "seafood": false,
        "green_level": "none",
        "contain-nut": "not-contain",
        "contain-milk": "not-contain",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
    
        "name":  "ข้าวผัดกระเพราหมึก",
        "eng_name": "Fired rice with basil and octopus",
        "rice": "possible",
        "meat": ["octopus"],
        "spicy": true,
        "seafood": false,
        "green_level": "none",
        "contain-nut": "none",
        "contain-milk": "none",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "ข้าวผัดกระเพราเนื้อ",
        "eng_name": "Fired rice with basil and meat",
        "rice": "possible",
        "meat": ["meat"],
        "spicy": true,
        "seafood": false,
        "green_level": "none",
        "contain-nut": "none",
        "contain-milk": "none",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "ข้าวผัดกระเพราทะเล",
        "eng_name": "Fired rice with basil and seafood",
        "rice": "possible",
        "meat": ["seafood"],
        "spicy": true,
        "seafood": false,
        "green_level": "none",
        "contain-nut": "none",
        "contain-milk": "none",
        "avg_calories": null,
        "cuisine": "thai"
      },
      {
        "name":  "ข้าวขาหมู",
        "eng_name": "BBQ pork Rice",
        "rice": "possible",
        "meat": ["pork"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain-nut": "none",
        "contain-milk": "none",
        "avg_calories": null,
        "cuisine": "chiness"
      },{
        "name":  "ข้าวผัดหมู",
        "eng_name": "Fired rice with pork",
        "rice": "possible",
        "meat": ["pork"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain-nut": "none",
        "contain-milk": "none",
        "avg_calories": null,
        "cuisine": "chiness"
      },{
        "name":  "ข้าวผัดไก่",
        "eng_name": "Fired rice with chicken",
        "rice": "possible",
        "meat": ["chicken"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain-nut": "none",
        "contain-milk": "none",
        "avg_calories": null,
        "cuisine": "chiness"
      },{
        "name":  "ข้าวผัดหมึก",
        "eng_name": "Fired rice with octopus",
        "rice": "possible",
        "meat": ["octopus"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain-nut": "none",
        "contain-milk": "none",
        "avg_calories": null,
        "cuisine": "chiness"
      },{
        "name":  "ข้าวผัดทะเล",
        "eng_name": "Fired rice with seafood",
        "rice": "possible",
        "meat": ["seafood"],
        "spicy": false,
        "seafood": false,
        "green_level": "none",
        "contain-nut": "none",
        "contain-milk": "none",
        "avg_calories": null,
        "cuisine": "chiness"
      },{
        "name":  "ยำปลากระป๋อง",
        "eng_name": "Thai Spicy Canned Sardines Salad",
        "rice": "not-contain",
        "meat": ["fish"],
        "spicy": true,
        "seafood": true,
        "green_level": "none",
        "contain-nut": "not-contain",
        "contain-milk": "not-contain",
        "avg_calories": null,
        "cuisine": "thai"
      }
]

function App() {
    return (
    <div>
       <h1>Hello React!</h1>
       <ThaiFood/>
       <ThaiFood/>
       <ThaiFood/>
    </div>
  );
}

function ThaiFood() {
 return (
    <div>
        <img src="thaifood/Garlic-and-Pepper-Pork-with-Rice.jpg" alt="Garlic and Pepper Pork with Rice"/>
        <h2>Pork Garlic Stir Fried</h2>
        <p>rice, pork, garlic, and oil</p>
    </div>
)}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
       <App />
    </React.StrictMode>
);

// React before 18
// React.render(<App />, document.getElementById("root"));