import { useEffect, useState } from "react";
const Basmati = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("inventoryiteams.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const basmatirice = products.filter((product) =>
    product.name.toLowerCase().includes("basmati")
  );
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="mb-12">
      <h2 className="text-lg mt-3 mb-5 font-semibold "> Basmati Rice </h2>
      <div className="grid grid-cols-3 gap-4">
        {basmatirice.map((product) => (
          <div
            key={product._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={product.image} className="h-52" alt={product.name} />
            </figure>
            <div className="card-body">
              <h2 className="text-base font-semibold">{product.name}</h2>
              <p className="font-bold">Price: ৳ {product.price}</p>
              <p className="font-bold">{product.unit}</p>
              <div className="card-actions justify-center">
                <div className="flex flex-row gap-12">
                  <div>
                    <button className="">
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
                    <button className="" onClick={() => openModal(product)}>
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
                    <button className="">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedProduct && (
        <dialog id="my_modal_3" className="modal ml-36" open>
          <form method="dialog" className="modal-box w-96 h-11/12">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
            <figure>
              <img
                src={selectedProduct.image}
                className="h-52"
                alt={selectedProduct.name}
              />
            </figure>
            <h2 className="text-base font-semibold">{selectedProduct.name}</h2>
            <p className="font-bold">Price: ৳ {selectedProduct.price}</p>
            <p className="font-bold">{selectedProduct.unit}</p>
            <p className="">Description: {selectedProduct.description}</p>
            {/* Add more content here */}
          </form>
        </dialog>
      )}
    </div>
  );
};
export default Basmati;
