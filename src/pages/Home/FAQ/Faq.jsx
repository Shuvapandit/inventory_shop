import React from "react";

const Faq = () => {
  return (
    <div className="mb-12  w-3/5 mx-auto bg-base-100 ">
      <div>
        <p className="text-center font-medium text-2xl mb-3">
          Frequently Asked Question(FAQ)
        </p>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q.What about the prices?
        </div>
        <div className="collapse-content">
          <p>
            Our prices are our own but we try our best to offer them to you at
            or below market prices. Our prices are the same as the local market
            and we are working hard to get them even lower! If you feel that any
            product is priced unfairly, please let us know.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q.How much does delivery cost?
        </div>
        <div className="collapse-content">
          <ul className="steps steps-vertical">
            <li className="step step-primary">Outside Dhaka 200 Taka</li>
            <li className="step step-primary">Inside Dhaka 60 Taka</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q.What are your delivery hours?
        </div>
        <div className="collapse-content">
          <p>
            We deliver from 7.30 am to 11 pm every day. You can choose from
            available slots to find something that is convenient for you.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q.Do you serve my area?
        </div>
        <div className="collapse-content">
          <p>
            We are currently serving in four big cities of Bangladesh including
            Dhaka, Chattogram, Jashore,shylet including its Districts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
