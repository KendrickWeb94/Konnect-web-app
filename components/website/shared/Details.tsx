import React from "react";

export const Details = () => {
  return (
    <div className=" w-full mx-auto h-auto flex items-center justify-center py-10 max-w-[95%]">
      <div className="w-full h-auto items-center lg:text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-3  justify-center gap-6">
        <div className="hidden flex-col gap-3">
          <p>Amazing Stats Since Our inception we have been to conjour up users and daily traffic while putting their satisfiction as our priority</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className=" bg-clip-text text-transparent bg-gradient-to-r  from-slate-600 to-slate-400 text-2xl font-semibold">
            5000+
          </h1>
          <p>Downloads for desktop</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className=" bg-clip-text text-transparent bg-gradient-to-r  from-slate-600 to-slate-400 text-2xl font-semibold">
            500+
          </h1>
          <p>Partnerships</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className=" bg-clip-text text-transparent bg-gradient-to-r  from-slate-600 to-slate-400 text-2xl font-semibold">
            3000+
          </h1>
          <p>Loyal Users</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className=" bg-clip-text text-transparent bg-gradient-to-r  from-slate-600 to-slate-400 text-2xl font-semibold">
            1000+
          </h1>
          <p>Files Shipped</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className=" bg-clip-text text-transparent bg-gradient-to-r  from-slate-600 to-slate-400 text-2xl font-semibold">
            1500GB
          </h1>
          <p>Availabe Database</p>
        </div>
      </div>
    </div>
  );
};
