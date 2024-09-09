import React from 'react';

const BudgetSection = () => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Budgeting</h2>
      <div className="bg-white p-3 shadow-md rounded-lg">
        <p>US$0.00</p>
        <button className="mt-2 p-2 bg-red-500 text-white rounded-md">Add Expense</button>
      </div>
    </section>
  );
};

export default BudgetSection;
