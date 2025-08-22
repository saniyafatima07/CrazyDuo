export default function LearnCard({
  title,
  description,
  emoji,
  image,
  reverse,
}: {
  title: string;
  description: string;
  emoji: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`w-4/5 max-w-2xl mx-auto flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 p-8 
      bg-white/70 dark:bg-gray-800/70 
      backdrop-blur-md border border-white/20 dark:border-gray-700/40 
      rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-xl shadow-md"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2 justify-center md:justify-start">
          <span className="text-3xl">{emoji}</span> {title}
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
