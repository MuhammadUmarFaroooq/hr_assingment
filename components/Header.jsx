import Link from "next/link";
import React from "react";
import {
  IoMdNotificationsOutline,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { Avatar, Button } from "@mui/material";
import { CiMenuFries } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";

function Header() {
  return (
    <header className="my-[26px] px-3 py-2 mx-2 bg-white text-white shadow-md rounded-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="bg-[#7B5AFF] p-2 rounded-md ml-5">
            <h3 className="text-sm font-normal">Logo</h3>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-4">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7B5AFF",
              borderRadius: "999px", // Fully rounded button
              "&:hover": {
                backgroundColor: "#6A49FF", // Optional hover effect
              },
            }}
          >
            Feedback
          </Button>

          <IoMdNotificationsOutline color="black" size={25} />
          <IoIosInformationCircleOutline color="black" size={25} />
          <div className="flex items-center gap-1">
            <Avatar alt="Avatar" src="./images/Avatar.png" />
            <IoChevronDown color="black" size={15} />
          </div>
        </div>

        <div className="xl:hidden">
          <CiMenuFries color="black" size={25} />
        </div>
      </div>
    </header>
  );
}

export default Header;
