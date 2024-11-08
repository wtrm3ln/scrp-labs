import { getProducts, getProductBySlug } from '../../contentful/contentful';
import Image from 'next/image';
import Link from 'next/link'

const Tick = () => {
  return(
    <svg width="30" height="47" viewBox="0 0 76 47" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.96631 27.4397C5.16911 30.6591 6.57572 34.2944 8.48508 37.6888C8.94829 38.5123 11.5654 44.3641 12.7854 44.7127C13.4039 44.8894 14.0209 44.319 14.5772 43.996C20.5871 40.5064 26.2913 36.3489 32.0294 32.4567C46.0806 22.9259 59.7334 13.1374 73.2769 2.92773" stroke="white" stroke-width="4" stroke-linecap="round"/>
  </svg>
  )
}

const OrderDisplay = ({ imageSrc, text, subtext }) => {
  return (
    <div
      className="text-center flex font-delicious  flex-col justify-center items-center my-12">
      <div className="flex items-center justify-center mb-2">
        <Image src={imageSrc} width="150" height="50" />
      </div>

      <div className="relative inline-block w-full mb-3">
        <strong className="md:w-48 text-3xl">{text}</strong>
      </div>
      
      <p className="md:w-64">{subtext}</p>
    </div>
  );
};

export async function generateStaticParams() {
  const products = await getProducts();

  if (!products.length) {
    console.error('No products found.');
    return [];
  }

  return products.map(product => ({
    slug: product.fields.slug
  }));
}

export default async function Page({ params }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    console.error(`Product with slug "${slug}" not found.`);
    return <p>Product not found</p>;
  }

  const order = [
    { text: "Click on Shop Now" , subtext: "You will be re-directed to your Whatsapp", imageSrc: '/order/1.png'},
    { text: "Finalise your Order", subtext: "Chat with us to customize and confirm your order", imageSrc: '/order/2.png' },
    { text: "Recieve your Order", subtext: "We ship as soon as possible! Happy Shopping!", imageSrc: '/order/3.png' }
];

  const {
    name,
    description,
    tagline,
    price,
    featuredProductImage,
    productImages,
    relatedProducts,
    category
  } = product.fields;


  return (
    <div className='text-xl bg-dark pt-24'>
  
  {/* Featured Image */}
  <div className='rounded-xl mx-12'>
    <div className='md:grid grid-cols-3'>
      <div className='col-span-2'>
        <Image
        src={`https:${featuredProductImage.fields.file.url}`}
        alt={name}
        width={featuredProductImage.fields.file.details.image.width}
        height={featuredProductImage.fields.file.details.image.height}
        className="rounded-3xl object-cover h-[70vh] "
      />

      <div className='grid grid-cols-4 my-3 gap-3'>
        {productImages?.map((image, index) => (
              <Image
                key={index}
                src={`https:${image.fields.file.url}`}
                alt={`${name} image ${index + 1}`}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                className="rounded-lg w-full h-36 object-cover"
              />
            ))}
      </div>

      </div>

      <div className='flex flex-col md:px-6 text-white'>
        <div className='col-span-2 mb-6'>
          {/* Name and Tagline */}
          <h1 className='text-5xl font-delicious mb-2'>{name}</h1>
          <h2 className='text-md text-gray-600 mb-4'>{tagline}</h2>

          {/* Description and Price */}
          <p className='mb-4 text-sm'>{description}</p>
          <p className='text-xl font-semibold mb-6'> ₹{price}</p>
        </div>
      </div>
    </div>
  </div>

  <div className="relative px-12 my-24 text-white space-y-20">
    
    <ol>
      <li className='flex items-center gap-3'> <Tick />Multiple Colour Options </li>
      <li className='flex items-center gap-3'> <Tick />Customisable</li>
      <li className='flex items-center gap-3'> <Tick />This item is non-refundable. However, we do replace defects only with start-to-end unboxing videos given under 24 hours after the delivery</li>
    </ol>

    <p>Our shopping process is slightly different!</p> 

    <div className="grid md:grid-cols-3 justify-center justify-items-center mb-8">
          {order.map((order, index) => (
            <div key={index} className='flex flex-col md:flex-row items-center gap-6'>
              <OrderDisplay
                imageSrc={order.imageSrc}
                text={order.text}
                subtext={order.subtext}
              />
              {(index === 0 || index === 1) && (
                <Image
                  src="/arrow.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className="rotate-90 md:rotate-0 w-20 h-6 self-center"
                />
              )}
            </div>
          ))}
        </div>

    <div className='flex items-center gap-3 '>
      <p>Pan India Delivery from the City of Dreams -</p>
      <Image src='/mumbai2.png' width='100' height='10'/>
    </div>

  </div>

  <div className="relative px-12 mb-24 bg-primary rounded-t-3xl text-white">

    <div className="col-span-2 flex flex-col items-center justify-center my-12">

      <div className="my-20 flex text-center max-w-3xl justify-center">
            <p className="text-xl text-white font-delicious">Your mind is unique & so are your ideas! Looking for something different exclusively made for you? <br></br><br></br>Ah- We love it!  Lets get started</p>
        </div>
        <a className="bg-white text-primary text-xl font-semibold px-5 py-2 rounded-full shadow-lg">
          Contact us
        </a>
    </div>

  </div>

</div>

  );
}