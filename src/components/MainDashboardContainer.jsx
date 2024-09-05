import ActiveBox from "./Activebox";
import UserDataBox from "./Userdatabox";
import Announcement from "./Announcement";
import { Button } from "./ui/button";

const active_box_data = [
  {
    title: "Available Position",
    count: 24,
    urgent: "4 Urgent Need",
    css: "bg-orange-100",
    text_css: "text-orange-500",
  },
  {
    title: "Job Open",
    count: 10,
    urgent: "4 Active hiring",
    css: "bg-blue-100",
    text_css: "text-blue-500",
  },
  {
    title: "New Employee",
    count: 24,
    urgent: "4 Department",
    css: "bg-pink-100",
    text_css: "text-pink-500",
  },
];


const userData = [
  {
    title : "Total Employees",
    count : 216,
    manCount : 120,
    womanCount : 96,
    graph : 2,
  }, 
  {
    title : "Total Request",
    count : 16,
    manCount : 6,
    womanCount : 10,
    graph : 5,
  }
]

const announcement = [
  {
    title : "Review candidate applications",
    time : "Today - 11.30 AM",
    type : 'priority',
  },
  {
    title : "Interview with candidates",
    time : "Today - 2.30 PM",
    type : 'other',
  },
  {
    title : "Short meeting with product designer from IT Departement",
    time : "Today - 11.30 AM",
    type : 'other',
  },
]

const Upcoming = [
  {
    title : "Review candidate applications",
    time : "Today - 11.30 AM",
    type : 'priority',
  },
  {
    title : "Interview with candidates",
    time : "Today - 2.30 PM",
    type : 'other',
  },
  {
    title : "Short meeting with product designer from IT Departement",
    time : "Today - 11.30 AM",
    type : 'other',
  },
]

export default function MainDashboardContainer() {
  return (
    <div className="">
      <h1 className="text-2xl font-medium ">Dashboard</h1>

      <div className="content_part grid grid-cols-6 lg:grid-cols-6 inset-y-0 gap-10 mt-5">
        <div className="div_one grid col-span-6  md:col-span-6 lg:col-span-4  grid-col-6 gap-5 w-full">
          <div className="active-box flex flex-col md:flex-row  gap-5 col-span-6">
            {active_box_data?.map((data, index) => (          
              <ActiveBox key={index} data={data} />
            ))}
          </div>

          <div className="flex flex-col md:flex-row col-span-6 gap-5">
            {
              userData?.map((data, index) => (
                <UserDataBox key={index} data={data} />
              ))
            }
          </div>

          <div className="col-span-6">
            <Announcement title={"Announcement"} announcement={Upcoming} />
          </div>
        </div>

        <div className=" div-two grid col-span-6 md:col-span-6 lg:grid lg:col-span-2 gap-5 md:flex">

          <div className="part-one border col-span-6 md:col-span-2 lg:col-span-6  rounded-xl flex flex-col justify-between gap-4">
            <div className="header py-4 text-lg font-medium px-7 border-b ">
              <h1>Recently Activity</h1>
            </div>

            <div className="px-7 flex flex-col gap-2">
              <span className="text-xs">
                <h1>10 14 AM, Fri 10 Sept 2021</h1>
              </span>

              <span className="text-lg font-medium">
                <h1> You Posted a New Message</h1>
              </span>

              <span>
                <h1>
                  Kindly check the requirements and terms of work and make sure
                  everything is right.
                </h1>
              </span>
            </div>

            <div className="flex px-7 py-5 items-center justify-between flex-col md:flex-row lg:flex-col gap-2 xl:flex-col 2xl:flex-row">
              <span>
                <h1>Today you makes 12 Activity</h1>
              </span>

              <span>
                <Button>See All Activity</Button>
              </span>
            </div>
          </div>

          <div className="part_two-side grid col-span-6 md:col-span-4 lg:col-span-6">
            <Announcement title={"Upcoming Schedule"} announcement={announcement} />
          </div>
        </div>
      </div>
    </div>
  );
}
