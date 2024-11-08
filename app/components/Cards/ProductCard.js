import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ productName, price, imageSrc, slug }) => {
  return (
    <div className="relative p-1 group">
      {/* Image Section */}
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={productName}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4 font-medium text-white">
        <h3 className="text-lg">{productName}</h3>
        <p className="text-xl mt-1">₹{price}</p>
        <Link href={`/products/${slug}`}>Shop now</Link>
      </div>
    </div>
  );
};

export default ProductCard;
