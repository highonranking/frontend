import React from "react";

const BudgetSection = () => {
  return (
    <div id="budget" className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Budgeting</h2>
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold text-gray-800">US$0.00</span>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">Add expense</button>
      </div>
      <div className="text-gray-600">No expenses added yet.</div>
    </div>
  );
};

export default BudgetSection;
