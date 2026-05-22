function Product(props) {

  const { name, price, brand, description, image } = props.product;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">
      
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <h2 className="text-xl font-semibold mb-1">{name}</h2>

      <p className="text-sm text-gray-500 mb-2">{brand}</p>

      <p className="text-sm text-gray-600 mb-3">
        {description}
      </p>

      <p className="text-lg font-bold text-blue-600">
        ${price}
      </p>

    </div>
  );
}

export default Product;