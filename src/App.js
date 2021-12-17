import { useState } from "react";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeChange = (e) => {
    console.log(e.target.checked);

    setDarkMode(e.target.checked);
  };

  return (
    <div className={darkMode && "dark"}>
      <div className="  text-slate-400 dark:text-slate-300  dark:bg-darkbg-dark pb-12">
        <div className=" bg-bg dark:bg-slate-700 pb-40">
          <div className="container py-9 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
                Social Media Dashboard
              </h1>
              <span className="text-sm">Yotal Followers : 12.3456</span>
            </div>
            <div className="flex  items-center">
              <label
                htmlFor="checkbox"
                className=" font-semibold mr-2 cursor-pointer"
              >
                Dark Mode
              </label>
              <span>
                <input
                  id="checkbox"
                  type="checkbox"
                  onChange={handleModeChange}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="container -mt-40  ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 ">
            {/* card  */}
            <div className="card before:bg-facebook ">
              <div className="flex items-center justify-center gap-1 pb-6">
                <span className="text-facebook">
                  <AiFillFacebook size={22} />
                </span>
                <span className="text-sm">@abcd</span>
              </div>
              <h2 className=" text-6xl font-bold text-slate-800 dark:text-white ">
                1987
              </h2>
              <p className="font-medium uppercase tracking-[0.3em]">
                Followers
              </p>
              <div className=" font-semibold flex items-center justify-center gap-1 pt-6 text-maingreen">
                <span>
                  <RiArrowUpSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
            {/* card  */}
            <div className="card before:bg-twitter">
              <div className="flex items-center justify-center gap-1 pb-6">
                <span className="text-facebook">
                  <AiFillTwitterSquare size={22} />
                </span>
                <span className="text-sm">@abcd</span>
              </div>
              <h2 className=" text-6xl font-bold text-slate-800 dark:text-white ">
                1987
              </h2>
              <p className=" font-medium uppercase tracking-[0.3em]">
                Followers
              </p>
              <div className=" font-semibold flex items-center justify-center gap-1 pt-6 text-maingreen">
                <span>
                  <RiArrowUpSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
            {/* card  */}
            <div className="card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-600 ">
              <div className="flex items-center justify-center gap-1 pb-6">
                <span className="text-facebook">
                  <AiFillInstagram size={22} />
                </span>
                <span className="text-sm">@abcd</span>
              </div>
              <h2 className=" text-6xl font-bold text-slate-800 dark:text-white ">
                1987
              </h2>
              <p className=" font-medium uppercase tracking-[0.3em]">
                Followers
              </p>
              <div className=" font-semibold flex items-center justify-center gap-1 pt-6 text-maingreen">
                <span>
                  <RiArrowUpSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
            {/* card  */}
            <div className="card before:bg-rose-700">
              <div className="flex items-center justify-center gap-1 pb-6">
                <span className="text-facebook">
                  <AiFillYoutube size={22} />
                </span>
                <span className="text-sm">@abcd</span>
              </div>
              <h2 className=" text-6xl font-bold text-slate-800 dark:text-white ">
                1987
              </h2>
              <p className=" font-medium uppercase tracking-[0.3em]">
                Followers
              </p>
              <div className=" font-semibold flex items-center justify-center gap-1 pt-6 text-rose-700">
                <span>
                  <RiArrowDownSFill />
                </span>
                <span>Today</span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold"> Overview - Today </h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 mt-6 ">
              {Array(8)
                .fill(" ")
                .map((el) => (
                  <div className="card-sm">
                    <div className="flex items-center justify-between">
                      <h4 className=" font-bold">Pages Views</h4>
                      <AiFillFacebook className=" text-facebook" size={22} />
                    </div>

                    <div className="flex items-center justify-between mt-8">
                      <h3 className=" font-black text-2xl text-slate-800 dark:text-white">
                        {" "}
                        101
                      </h3>
                      <div className="flex items-center gap-1 text-maingreen text-sm">
                        <span>
                          <RiArrowUpSFill />
                        </span>
                        <span>300%</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
