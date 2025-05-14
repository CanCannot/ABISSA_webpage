"use client";
import { useState } from "react";

const mockData = [
  {
    stock: 1,
    id: "00001",
    name: "JACK & JILL",
    brand: "Brand Name",
    price: 15,
    category: "Food",
    aisle: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvZdWgMWYy5FglKsW8FintYLfmK0RkdYbbA&s",
  },
];

export default function Home() {
  const [addModal, setIsAddModalOpen] = useState(false);
  const [modifyModal, setIsModifyModalOpen] = useState(false);

  return (
    <div className="bg-neutral-300 min-h-screen">
      {/* search bar */}
      <div className="flex items-center space-x-2 pt-10 pl-11">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607Z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search"
          className="w-80 h-10 rounded-md bg-neutral-400 text-black px-3 border-2 border-slate-800"
        />

        <div className="flex justify-end w-full px-14">
          <div className="space-x-4">
            <button
              className="px-6 py-3 border-2 border-black bg-neutral-400 text-white rounded-lg hover:bg-neutral-600 transition"
              onClick={() => setIsAddModalOpen(true)}
            >
              Add
            </button>
            <button className="px-6 py-3 border-2 border-black bg-neutral-400 text-white rounded-lg hover:bg-neutral-600 transition">
              Remove
            </button>
            <button className="px-6 py-3 border-2 border-black bg-neutral-400 text-white rounded-lg hover:bg-neutral-600 transition"
            onClick={()=> setIsModifyModalOpen(true)}>
              Modify
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto p-10">
        <table className="min-w-full border-2 border-black text-center">
          <thead className="bg-neutral-400 text-black">
            <tr>
              <th className="border p-2"></th>
              <th className="border p-2">Stock</th>
              <th className="border p-2"></th>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Brand</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Aisle</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {mockData.map((item, index) => (
              <tr key={index} className="border-t">
                <td>
                  <input type="checkbox" className="mx-auto" />
                </td>
                <td className="border p-2">{item.stock}</td>
                <td className="w-25 h-auto items-center justify-center">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover mx-auto"
                    alt="product"
                  />
                </td>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.brand}</td>
                <td className="border p-2">{item.price}</td>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2">{item.aisle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal/pop up for add button */}
      {addModal && (
        <div className="fixed inset-0 bg-neutral-300 opacity-98 flex items-center justify-center z-50">
          <div className="bg-neutral-300 border-2 border-black p-7 w-4xl h-auto relative flex flex-col">
            {/* Close button */}
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-2 right-3 text-black font-bold"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="flex flex-2 ">
              {/* Form Section */}
              <form className="flex flex-col space-y-2 w-1/2 text-black pr-20 justify-center">
                {[
                  "Product ID",
                  "Product Name",
                  "Product Brand",
                  "Price",
                  "Category",
                  "Aisle",
                  "Stock",
                ].map((placeholder, index) => (
                  <input
                    key={index}
                    placeholder={placeholder}
                    className="border border-black px-2 py-1 text-sm"
                  />
                ))}
              </form>

              {/* Map Section */}
              <div className="border border-black bg-white w-2xl flex items-center justify-center  text-gray-600 text-sm">
                Aisle Map
              </div>
            </div>

            {/* Buttons at the bottom */}
            <div className="flex space-x-4 pt-4 pl-2 text-black">
              <button className="w-30 h-7 bg-sky-400 px-4 py-1 flex items-center justify-center rounded-2xl border border-black hover:bg-sky-900">
                Add
              </button>
              <button className="w-30 h-7 bg-sky-400 px-4 py-1 rounded-2xl border flex items-center justify-center border-black hover:bg-sky-900">
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

    {/* pop up/ modal for modify button */}
      {modifyModal && (
        <div className="fixed inset-0 bg-neutral-300 opacity-98 flex items-center justify-center z-50">
          <div className="bg-neutral-300 border-2 border-black p-7 w-4xl h-auto relative flex flex-col">
            {/* Close button */}
            <button
              onClick={() => setIsModifyModalOpen(false)}
              className="absolute top-2 right-3 text-black font-bold"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="flex flex-2 ">
              {/* Form Section */}
              <form className="flex flex-col space-y-2 w-1/2 text-black pr-20 justify-center">
                {[
                  "Product ID",
                  "Product Name",
                  "Product Brand",
                  "Price",
                  "Category",
                  "Aisle",
                  "Stock",
                ].map((placeholder, index) => (
                  <input
                    key={index}
                    placeholder={placeholder}
                    className="border border-black px-2 py-1 text-sm"
                  />
                ))}
              </form>

              {/* Map Section */}
              <div className="border border-black bg-white w-2xl flex items-center justify-center  text-gray-600 text-sm">
                Aisle Map
              </div>
            </div>

            {/* Buttons at the bottom */}
            <div className="flex space-x-4 pt-4 pl-2 text-black">
              <button className="w-30 h-7 bg-sky-400 px-4 py-1 flex items-center justify-center rounded-2xl border border-black hover:bg-sky-900">
                Modify
              </button>
              <button className="w-30 h-7 bg-sky-400 px-4 py-1 rounded-2xl border flex items-center justify-center border-black hover:bg-sky-900">
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
