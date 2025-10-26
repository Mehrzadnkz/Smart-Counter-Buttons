// import React from 'react';

export const button = (text: string, onClick: () => void, bg?:string) => {
  const colors = {
    red: "bg-red-500 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-800 border-red-600 dark:border-red-700",
    green: "bg-green-500 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-800 border-green-600 dark:border-green-700", 
    blue: "bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 border-blue-600 dark:border-blue-700",
    yellow: "bg-yellow-500 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-800 border-yellow-600 dark:border-yellow-700",
    purple: "bg-purple-500 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-800 border-purple-600 dark:border-purple-700",
    gray: "bg-gray-500 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-800 border-gray-600 dark:border-gray-700"
  };

  const colorClass = colors[bg as keyof typeof colors] || colors.gray;

  return (
    <button
      onClick={onClick}
      className={`${colorClass} border-2 rounded-xl font-semibold py-2 px-4 m-2 transition-all duration-200 text-white shadow-md hover:shadow-lg dark:shadow-lg dark:hover:shadow-xl`}
    >
      {text}
    </button>
  );
};