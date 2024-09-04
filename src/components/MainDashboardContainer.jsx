import ActiveBox from "./Activebox";
import UserDataBox from "./Userdatabox";

export default function MainDashboardContainer() {
  return (
    <div className="px-10 py-5">
      <h1 className="text-2xl font-medium ">Dashboard</h1>

      <div className="content_part grid grid-cols-6 inset-y-0 gap-10">
        <div className="div_one  col-span-4 grid grid-col-6 gap-5">

          <div className="active-box flex gap-5 ">
            {/* <ActiveBox />
            <ActiveBox />
            <ActiveBox /> */}
            <div>
                name1
            </div>

            <div>
                name2
            </div>
            <div>
                name3
            </div>
            <div>
                name4
            </div>
          </div>

          <div className="flex col-span-6 gap-5">
            <UserDataBox />
            <UserDataBox />
          </div>

          <div>
            <h1> asdlkjasldkalk</h1>
          </div>
        </div>

        <div className="div-two grid col-span-2 bg-red-500 h-auto">
          <h1>aksdalksdj</h1>
        </div>
      </div>
    </div>
  );
}
