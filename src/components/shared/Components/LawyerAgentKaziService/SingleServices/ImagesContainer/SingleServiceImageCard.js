import React from "react";

const SingleServiceImageCard = ({
  photo,
  i,
  setSelectedPhoto,
  selectedPhoto,
}) => {
  return (
    <div>
      <img
        onClick={() => setSelectedPhoto(photo)}
        src={photo}
        className={`w-[60px] h-[45px] md:w-[93px] md:h-[70px] rounded border-2 border-white duration-300 ${
          photo === selectedPhoto && "border-1 border-green-400"
        }`}
        alt="serviceImage"
      />
    </div>
  );
};

export default SingleServiceImageCard;
