export function DaisySwitch() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <input type="checkbox" className="toggle toggle-success" defaultChecked />
      <input type="checkbox" className="toggle toggle-warning" defaultChecked />
      <input type="checkbox" className="toggle toggle-info" defaultChecked />
      <input type="checkbox" className="toggle toggle-error" defaultChecked />
      <input
        type="checkbox"
        className="toggle border-blue-500 bg-blue-500 [--tglbg:yellow] hover:bg-blue-700"
        defaultChecked
      />
    </div>
  );
}
