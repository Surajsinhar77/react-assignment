import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Search } from "./Search";
import { BellDot, Blocks, CalendarClock, ChevronDownIcon, Headset, MessageSquareMore, Settings, UserPlus, Users } from "lucide-react";
import Logo from "./Logo";

export function Sidebar({ children }) {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="hidden inset-y-0 left-0 z-10 md:flex w-16 xl:w-56 flex-col border-r bg-background transition-all duration-300 data-[collapsed=true]:w-14 data-[collapsed=true]:overflow-hidden">
        <div className="flex h-16 shrink-0 items-center justify-between px-4">
          <Link
            to="#"
            className="flex items-center gap-2 text-lg font-semibold"
            prefetch={false}
          >
            {/* <MountainIcon className="h-6 w-6" /> */}
            <Logo className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto px-2 py-4 flex flex-col gap-7">
          <ul className="grid gap-1">
            <h1 className="hidden xl:block text-gray-400 uppercase text-sm px-3">
              Main Menu
            </h1>
            <li>
              <Link
                to="#"
                className="flex h-10 w-full items-center justify-start gap-2 rounded-md px-3 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <HomeIcon className="h-5 w-5" />
                <span className="hidden xl:block truncate">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex h-10 w-full items-center justify-start gap-2 rounded-md px-3 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <UserPlus className="h-5 w-5" />
                <span className="hidden xl:block truncate">Recruitment</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex h-10 w-full items-center justify-start gap-2 rounded-md px-3 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <CalendarClock className="h-5 w-5" />
                <span className="hidden xl:block truncate">Schedule</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex h-10 w-full items-center justify-start gap-2 rounded-md px-3 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <Users className="h-5 w-5" />
                <span className="hidden xl:block truncate">Employee</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex h-10 w-full items-center justify-start gap-2 rounded-md px-3 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <Blocks className="h-5 w-5" />
                <span className="hidden xl:block truncate">Department</span>
              </Link>
            </li>
          </ul>

          <ul className="grid gap-1">
            <h1 className="hidden xl:block text-gray-400 uppercase text-sm px-3">
              Other
            </h1>
            <li>
              <Link
                to="#"
                className="flex h-10 w-full items-center justify-start gap-2 rounded-md px-3 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <Headset className="h-5 w-5" />
                <span className="hidden xl:block truncate">Support</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex h-10 w-full items-center justify-start gap-2 rounded-md px-3 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                <Settings  className="h-5 w-5" />
                <span className="hidden xl:block truncate">Setting</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between bg-background lg:ml-10 pr-10">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              onClick={() => {
                document.body.dataset.collapsed =
                  document.body.dataset.collapsed === "true" ? "false" : "true";
              }}
            >
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
            <Link
              to="#"
              className="flex items-center gap-2 text-lg font-semibold"
              prefetch={false}
            >
              <Search />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6 px-5">
              <span>
                <BellDot />
              </span>
              <span>
                <MessageSquareMore />
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                  >
                    <img
                      src="https://github.com/shadcn.png"
                      width={36}
                      height={36}
                      alt="Avatar"
                      className="overflow-hidden rounded-full"
                      style={{ aspectRatio: "36/36", objectFit: "cover" }}
                    />
                  </Button>

                  <span className="text-sm flex items-center">
                    <span className="hidden lg:block"> User Name </span>
                    <span>
                      <ChevronDownIcon className="h-4 w-4" />
                    </span>
                  </span>
                </>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <h1 className="bg-gray-200 h-[0.5px] lg:ml-10"></h1>
        <main className="px-7 py-4">{children}</main>
      </div>
    </div>
  );
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
