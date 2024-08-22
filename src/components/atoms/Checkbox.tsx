export function DaisyCheckbox() {
  return (
    <>
      <div className="form-control">
        <label className="cursor-pointer label w-max flex gap-2 items-center">
          <span className="label-text">Remember me</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-error"
          />
        </label>
      </div>
    </>
  );
}
