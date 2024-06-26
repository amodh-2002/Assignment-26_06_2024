import React from "react";

const Form = () => {
  return (
    <div className="mt-10 bg-orange-600 p-10">
      <form action="#" className="flex flex-col gap-5">
        <label htmlFor="price" className="text-start text-xl ">
          Price:{" "}
        </label>
        <input
          type="number"
          className="px-10 py-3 w-44"
          placeholder="Enter price"
          name="price"
          id="price"
          min={0}
          max={2000}
        />
        <button className="bg-black text-xl px-4 py-2 w-32">Submit</button>
      </form>
    </div>
  );
};

export default Form;
