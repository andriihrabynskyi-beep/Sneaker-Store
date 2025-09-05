export default function SneakerCard({ sneaker, onBuy }) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center">
      {/* Sneaker Image */}
      <img
        src={sneaker.image}
        alt={sneaker.name}
        className="w-48 h-48 object-cover mb-4"
      />

      {/* Sneaker Name */}
      <h2 className="text-lg font-bold mb-2">{sneaker.name}</h2>

      {/* Sneaker Price */}
      <p className="text-gray-600 mb-4">${sneaker.price}</p>

      {/* Buy Now Button */}
      <button
        onClick={onBuy}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Buy Now
      </button>
    </div>
  );
}
