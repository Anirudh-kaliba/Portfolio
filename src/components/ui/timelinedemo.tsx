import React from "react";

const Timelinedemo = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Experience Timeline
      </h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li key="1">Software Engineer at XYZ Company (2022 - Present)</li>
        <li key="2">Frontend Developer Intern at ABC Corp (2021 - 2022)</li>
      </ul>
    </div>
  );
};

export default Timelinedemo;
