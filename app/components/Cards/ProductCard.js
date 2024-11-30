import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ emoji, productName, price, imageSrc, slug }) => {
  return (
    <Link href={`/products/${slug}`} className="relative group text-white">
      {/* Image Section */}
      <div className="relative w-full min-h-64 md:aspect-[5/3] overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={productName}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="mt-2 text-2xl font-medium md:flex justify-between items-end gap-6">
        <span className='flex md:text-3xl'><span>{emoji}</span><h3 className="opacity-90">{productName}</h3></span>
        <p className="text-2xl md:mt-1 font-mono whitespace-nowrap">Rs. {price}.00</p>
      </div>
    </Link>
  );
};

export default ProductCard;
