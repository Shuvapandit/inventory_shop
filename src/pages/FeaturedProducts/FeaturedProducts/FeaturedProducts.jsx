import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useShoppingBag } from "../../Shared/ShoppingBagContext/ShoppingBagContext";
const FeaturedProducts = ({ feturedproduct }) => {
  const { name, image, unit, description, price, _id } = feturedproduct;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const { addToBag } = useShoppingBag();
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const showToastMessage = () => {
    toast.info("This service is under development.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div className="mb-12 ">
      <div className="card card-compact w-60 bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="h-52" alt={name} />
        </figure>
        <div className="card-body">
          <h2 className=" text-base font-semibold">{name}</h2>
          {/* <p>{description}</p> */}
          <p className="font-bold">Price:৳ {price}</p>
          <p className="font-bold">{unit}</p>
          <div className="card-actions justify-center">
            <div className="flex flex-row gap-12 ">
              <div>
                <button onClick={() => addToBag(_id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <button className="" onClick={openModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <button className="" onClick={showToastMessage}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <dialog
          id="my_modal_3"
          className="modal lg:ml-36 sm:ml-1 md:ml-2 "
          open
        >
          <form
            method="dialog"
            className="modal-box lg:w-96 sm:w-min   h-11/12"
          >
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
            <figure>
              <img src={image} className="h-52" alt={name} />
            </figure>
            <h2 className="text-base font-semibold">{name}</h2>
            <p className="font-bold">Price: ৳ {price}</p>
            <p className="font-bold">{unit}</p>
            <p className="">
              <strong>Description:</strong>
              {description}
            </p>
          </form>
        </dialog>
      )}
    </div>
  );
};
export default FeaturedProducts;
