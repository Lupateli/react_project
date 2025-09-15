import React from "react";
import BooksLine from "./BooksLine";
import ButtonPromotion from "./ButtonPromotion";
import ButtonTop from "./ButtomTop";

const Main = () => {
  return (
    <main>
        <div id="Promotions" className=" bg-gray-100 m-4 shadow-sm h-50">
            <h1 className="flex justify-center p-4 ">Books Store</h1>
            <div id="Buttons" className="flex justify-center gap-4 pb-4"> 
                <ButtonPromotion />
                <ButtonTop />
            </div>       
        </div>
        
        <BooksLine/>
        <BooksLine/>
    </main>
  );
};

export default Main;
