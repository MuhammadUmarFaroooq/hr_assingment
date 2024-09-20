"use client";
import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import CardUI from "@/components/CardUI";
import CheckInModal from "@/components/CheckInModal";
import BookingDetail from "@/components/BookingDetail"; // Import the BookingDetail component
import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkIns, setCheckIns] = useState([]);
  const [isBookingDetailOpen, setIsBookingDetailOpen] = useState(false); // State for BookingDetail modal
  const [selectedCheckIn, setSelectedCheckIn] = useState(null); // State for selected check-in
  const [loading, setLoading] = useState(true); // Loading state

  const fetchCheckIns = async () => {
    setLoading(true); // Set loading to true before fetching
    const checkInsCollection = collection(db, "checkIns");
    const checkInsSnapshot = await getDocs(checkInsCollection);
    const checkInsList = checkInsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCheckIns(checkInsList);
    setLoading(false); // Set loading to false after fetching
  };

  useEffect(() => {
    fetchCheckIns();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (checkIn) => {
    setSelectedCheckIn(checkIn); // Set the clicked check-in as selected
    setIsBookingDetailOpen(true); // Open the BookingDetail modal
  };

  const handleCloseBookingDetail = () => {
    setIsBookingDetailOpen(false); // Close the BookingDetail modal
  };

  return (
    <div className="mx-3">
      <div
        className="h-[279px] max-w-full px-10 py-2 rounded-[20px] flex flex-col items-start justify-center"
        style={{
          backgroundImage: "url('./images/Container.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          className="text-4xl font-semibold text-white mb-1"
          style={{ textTransform: "none" }}
        >
          Hi! 👋 James Doe
        </h1>
        <p className="text-base font-light font-sans text-white mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Button
          variant="contained"
          style={{ textTransform: "none" }}
          sx={{
            backgroundColor: "#7B5AFF",
            borderRadius: "999px",
            padding: "10px 20px",
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#6A49FF",
            },
          }}
          onClick={handleOpenModal}
        >
          Add Check-in
        </Button>
      </div>

      <div className="mt-5">
        <h4 className="font-medium text-[30px]">Add CheckIns</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-3 my-4">
          {loading ? ( // Check if loading
            <div className="flex justify-center items-center col-span-full">
              <CircularProgress />
            </div>
          ) : (
            checkIns.map((checkIn) => (
              <div key={checkIn.id} onClick={() => handleCardClick(checkIn)}>
                <CardUI title={checkIn.title} imgSrc={checkIn.imageUrl} />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Check-In Modal */}
      <CheckInModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAdd={fetchCheckIns}
      />

      {/* Booking Detail Modal */}
      {isBookingDetailOpen &&
        selectedCheckIn && ( // Show BookingDetail modal if state is true and a check-in is selected
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <BookingDetail
              title={selectedCheckIn.title}
              imageUrl={selectedCheckIn.imageUrl}
              onClose={handleCloseBookingDetail}
            />
          </div>
        )}
    </div>
  );
}

export default HomePage;
