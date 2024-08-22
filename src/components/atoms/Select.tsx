export function DaisySelect() {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label flex justify-between">
        <span className="text-xs label-text font-semibold text-gray-700">
          Pick the best fantasy franchise
        </span>
        <span className="text-xs label-text-alt text-gray-500">Optional</span>
      </div>
      <select className="select select-bordered w-full px-4 py-2 rounded-md border border-gray-300 text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
        <option disabled selected>
          Pick one
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
      <div className="label flex justify-between mt-2">
        <span className="text-xs label-text-alt text-gray-500">Need help?</span>
        <span className="text-xs label-text-alt text-gray-500">
          Contact support
        </span>
      </div>
    </label>
  );
}
