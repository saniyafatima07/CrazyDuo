export default function LearnCard({
  title,
  description,
  
  image,
  reverse,
}: {
  title: string;
  description: string;
  
  image: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`w-4/5 max-w-4xl mx-auto flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 p-8 
      bg-gray-800/70 
      backdrop-blur-md borderborder-gray-700/40 
      rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-70 object-cover rounded-xl shadow-md"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-bold0 text-blue-300 flex items-center gap-2 justify-center md:justify-start">
          <span className="text-4xl"></span> {title}
        </h3>
        <p className="mt-4 text-xl pb-8 text-white-100 leading-relaxed">
          {description}
        </p>
        <button className="flex ml-auto px-6 py-3 bg-black-600 text-red-400 border border-red-400 rounded-lg font-bold shadow-[0_0_10px_#a020f0] hover:bg-blue-900 hover:text-white hover:shadow-[0_0_20px_#a020f0] transition duration-300">
    🛡  Wanna Try??
  </button>

      </div>
    </div>
  );
}
