export default function Title() {
  return (
    <div className="p-4 flex flex-auto flex-col pt-8 lg:justify-between lg:flex-row lg:items-center lg:px-8">
      <div className="w-1/2 lg:px-10 text-3xl font-semibold text-[#606060]">
        Applied Philosopy
      </div>
      <div className=" w-1/2 lg:px-10 lg:flex lg:flex-col lg:items-end lg:justify-end ">
        <div className="text-green-600 font-light">HSS F311</div>
        <div className="text-[#8A8A8A] font-light">Taken by: Manoj Kanan</div>
        <div className="text-[#8A8A8A] font-light">Credits on Completion: 3</div>
      </div>
    </div>
  );
}
