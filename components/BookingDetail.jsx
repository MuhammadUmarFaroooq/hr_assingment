import React from "react";
import { Button, IconButton } from "@mui/material";
import { RiCloseFill } from "react-icons/ri";

export default function BookingDetail({ title, imageUrl, onClose }) {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-3xl flex flex-col">
        {/* Booking Details: Left side content */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{`Booking Details - ${title}`}</h2>
          <IconButton onClick={onClose}>
            <RiCloseFill size={24} />
          </IconButton>
        </div>

        {/* Booking Information */}
        <div className="flex">
          {/* Left Section: Booking Information */}
          <div className="w-1/2 pr-4">
            <div className="mb-4">
              <label className="font-medium text-gray-600">Booking ID</label>
              <div className="border border-gray-300 rounded-lg p-2 mt-1">
                5
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-medium text-gray-600">Rooms</label>
                <div className="border border-gray-300 rounded-lg p-2 mt-1">
                  5
                </div>
              </div>

              <div>
                <label className="font-medium text-gray-600">
                  Number of Guests
                </label>
                <div className="border border-gray-300 rounded-lg p-2 mt-1">
                  5
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="font-medium text-gray-600">Booked Date</label>
              <div className="border border-gray-300 rounded-lg p-2 mt-1">
                20 Sep, 2024
              </div>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="w-1/2 flex items-center justify-center">
            <img
              src={imageUrl}
              alt="Booking"
              className="rounded-lg h-60 w-full object-cover"
            />
          </div>
        </div>

        {/* Buttons: Positioned at the bottom right */}
        <div className="flex justify-end mt-6">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#e0e0e0",
              color: "#000",
              borderRadius: "30px",
              padding: "8px 20px",
              marginRight: "10px",
              textTransform: "none",
            }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#2196f3",
              color: "#fff",
              borderRadius: "30px",
              padding: "8px 20px",
              textTransform: "none",
            }}
            onClick={onClose}
          >
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
}
