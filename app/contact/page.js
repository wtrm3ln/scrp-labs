import Image from "next/image";

export default function Contact () {
    return(
    <div className="flex flex-col items-center justify-center space-y-12 bg-[#484846] mt-24 text-white py-16 px-4 rounded-lg">
      <Image
        src="/connect.png"
        alt="WhatsApp Icon"
        width={200}
        height={20}
        className="inline-block w-[500px] object-contain"
    />
      
      <div className="flex space-x-12 mb-8">
        {/* Email Icon and Address */}
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <Image
              src="/email.png"
              alt="Email Icon"
              width={200}
              height={200}
              className="inline-block h-36 object-contain"
            />
          </div>
          <p className="text-lg font-medium">scrp.labs@connect.com</p>
        </div>

        {/* WhatsApp Icon and Number */}
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp Icon"
              width={200}
              height={200}
              className="inline-block h-36 object-contain"
            />
          </div>
          <p className="text-lg font-medium">+91 7977159372</p>
        </div>
      </div>

      {/* Note */}
      <p className="text-center text-sm mt-4">
        Give us some time and we will respond to you <span className="font-bold">ASAP!</span>
      </p>
    </div>
  );
}