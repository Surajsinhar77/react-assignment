import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function Announcement({ title, announcement }) {
  return (
    <div className="w-full mx-auto border px-7 py-5 rounded-xl">
      <div className="flex  lg:flex-col 2xl:flex-row justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center space-x-2">
          <div className="ml-auto flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant="outline"
                  className="w-[170px] justify-start text-left font-normal"
                >
                  {/* <CalendarClockIcon className="mr-2 h-4 w-4" /> */}
                  Today, 13 Sep 2021
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar initialFocus mode="range" numberOfMonths={2} />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {title !== "Announcement" && (
          <h1 className="text-gray-400"> Priority </h1>
        )}

        {title !== "Announcement" ? (
          announcement.map((data, index) => (
            
            <Card className="p-4" key={index}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-medium">{data.title}</h3>
                  <p className="text-sm text-muted-foreground"> {data.time}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <PinIcon className="h-4 w-4 text-muted-foreground" />
                  <MoveHorizontalIcon className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </Card>
          ))
        ) : (
          <>
            <Card className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-medium">
                    Meeting HR Department
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yesterday, 12:30 PM
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <PinIcon className="h-4 w-4 text-muted-foreground" />
                  <MoveHorizontalIcon className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-medium">
                    Meeting HR Department
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yesterday, 12:30 PM
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <PinIcon className="h-4 w-4 text-muted-foreground" />
                  <MoveHorizontalIcon className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-medium">
                    IT Department need two more talents for UX/UI Designer
                    position
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yesterday, 09:15 AM
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <PinIcon className="h-4 w-4 text-muted-foreground" />
                  <MoveHorizontalIcon className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </Card>
          </>
        )}
      </div>
      <div className="mt-4 text-center">
        <a href="#" className="text-primary font-medium">
          See All Announcement
        </a>
      </div>
    </div>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function PinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  );
}

function CalendarClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.3V14" />
      <circle cx="16" cy="16" r="6" />
    </svg>
  );
}
