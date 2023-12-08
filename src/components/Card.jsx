const Card = ({ data, handleFilterClick }) => {
  const tags = [data.role, data.level, ...data.languages, ...data.tools];

  return (
    <div className="bg-white w-5/6  md:w-[760px] lg:w-[900px] hover:-translate-y-2 hover:duration-100 first:mt-12 cursor-pointer h-max p-4 gap-3 border-l-4 border-l-primary sm:flex items-center shadow-lg mb-10 sm:mb-6 relative">
      <img
        src={data.logo}
        className="absolute -top-6 sm:top-0 sm:relative w-12 md:w-16"
      ></img>
      <div className="flex-col mt-4 sm:mt-0">
        <div className="flex gap-2 items-center text-[10px]">
          <b className="text-primary sm:text-base">{data.company}</b>
          {data.new && (
            <span className="bg-primary text-white px-1 uppercase flex justify-center items-center rounded-xl">
              NEW!
            </span>
          )}
          {data.featured && (
            <span className="bg-very-dark-grayish-cyan text-white px-1 uppercase flex justify-center items-center rounded-3xl">
              featured
            </span>
          )}
        </div>
        <p className="text-very-dark-grayish-cyan font-bold mt-2 sm:mt-0">
          {data.position}
        </p>
        <div className="flex gap-4 text-xs text-slate-500 text-dark-grayish-cyan-bg">
          <span>{data.postedAt}</span>
          <span>{data.contract}</span>
          <span>{data.location}</span>
        </div>
      </div>
      <hr className="w-full mt-2 mb-2 sm:mt-0 sm:mb-0 sm:hidden" />
      <div className="text-xs ml-auto">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className="bg-light-grayish-cyan-filter text-primary mx-1 p-1 rounded-md hover:border hover:duration-200 hover:border-dark-grayish-cyan mb-1"
              onClick={handleFilterClick}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
