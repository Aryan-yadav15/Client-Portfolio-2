import Image from "next/image";
import TaskCard from "./TaskCard";

const WorkExperience = ({ company, role, duration, logo, tasks }) => {
  return (
    <div className="lg:p-6 rounded-md bg-gray-50 shadow-lg">
      <div className="bg-black flex flex-col sm:flex-row justify-between items-center rounded-2xl py-4 px-5 text-white">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-xl font-bold">{company}</h2>
          <p className="text-sm">{role}</p>
          <p className="text-sm pt-2">{duration}</p>
        </div>
        <div className="flex justify-center items-center mb-4 sm:mb-0 mt-4 sm:mt-0">
          <div className="border-2 border-gray-200 rounded-md overflow-hidden w-[100px] h-[50px] md:w-[120px] md:h-[60px]">
            <Image
              src={logo}
              alt={`${company} logo`}
              width={120} // Adjusted width for better fit
              height={60} // Adjusted height for better fit
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Bento Box Design for Tasks */}
      <div className="py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tasks && tasks.length > 0 ? (
            tasks.map((item, index) => (
              <TaskCard
                key={index}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No tasks available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
