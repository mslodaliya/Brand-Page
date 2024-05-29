import React from "react";

function Page() {
  return (
    <div>
      <main className="page container">
        <div className="page-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>

          <p>
            WHERE INNOVATION MEETS STYLE, AND PERFORMANCE IS A PROMISE. WITH A
            COMMITMENT TO PUSHING THE BOUNDARIES OF ATHLETIC PERFORMANCE AND A
            LEGACY OF GROUNDBREAKING DESIGNS, NIKE SHOES ARE MORE THAN JUST
            FOOTWEAR - THEY ARE A STATEMENT.
          </p>

          <div className="page-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="page-image">
          <img src="/images/shoes.png" alt="shoes" />
        </div>
      </main>
    </div>
  );
}

export default Page;
