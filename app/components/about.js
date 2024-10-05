import Image from 'next/image'

const About = () => {
  return (
    <div className="text-white py-10">
      <div className="flex max-w-6xl mx-auto justify-between items-start mb-4">
        <div>
          <h1 className="text-5xl font-bold mb-2">scrp</h1>
          <p className="text-lg">Pronounced as [ Scrap ]</p>
        </div>
        <div className="flex items-center">
        <Image src='/mumbai.png' width='100' height='10'/>
        </div>
      </div>

      <ul className="mb-6 space-y-2 max-w-6xl mx-auto">
        <li className="flex items-center">
          <div className="w-4 h-0.5 bg-white mr-2" />
          <span>We Are a Group of <strong>Smart Creative Resourceful People</strong></span>
        </li>
        <li className="flex items-center">
          <div className="w-4 h-0.5 bg-white mr-2" />
          <span>SCRP is where <strong>Supreme Creativity Reaches Peak</strong></span>
        </li>
        <li className="flex items-center">
          <div className="w-4 h-0.5 bg-white mr-2" />
          <span>We&apos;ve got <strong>Surge of Creative Radical Potential</strong></span>
        </li>
      </ul>

      
      <div className='relative overflow-hidden'>

      <p className="max-w-6xl mx-auto text-5xl mt-6 font-delicious text-black rotate-3">We can go</p>

        <div className='scrollContainer rotate-3 mb-16'>
        <div className='scrollContent'>
          <p className="text-4xl font-delicious mb-4 whitespace-nowrap">
          {Array(40).fill('& on ').join('')}
        </p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto flex flex-row-reverse my-2'>
      <p className="text-5xl font-delicious text-black -rotate-2">but here is what we are!</p>
      </div>
      </div>

      <div className='max-w-6xl mx-auto'>

      <p className="text-xl mb-6">but here is what we are!</p>

      <p className="text-xl mb-6">A new-age Creative Space run by young adults.</p>

      <p className="text-2xl mb-4">What do we do?</p>

      <div className="relative flex items-center justify-center my-36">
        <Image src='/star1.png' width='100' height='20'/>

        <h2 className="text-5xl font-delicious mx-3"> <span className='text-7xl'>Create</span> & Create more stuff!</h2>

        <Image src='/star2.png' width='160' height='20'/>
      </div>

      <div className="flex justify-between space-x-12 mb-8">
        {[
          { number: 1, text: "Curated Custom 3D articles" },
          { number: 2, text: "3D print your very own models" },
          { number: 3, text: "Learn the basics of 3D Printing" }
        ].map((item) => (
          <div key={item.number} className="text-center">
            <div className="w-16 h-16 rounded-full bg-white text-primary font-delicious flex items-center justify-center text-5xl font-bold mx-auto mb-2">
              {item.number}
            </div>
            <p className="w-48 font-delicious text-3xl">{item.text}</p>
          </div>
        ))}
      </div>
      </div>

      <div className="flex justify-center">
      <a href='/' className="bg-white hover:bg-gray-100 text-primary text-xl font-medium px-5 py-2 rounded-full shadow-lg">
            Explore our Services
        </a>

      </div>

    </div>
  );
};

export default About;