import React from "react";
import CircularProgressBar from "../../common/circularProgressBar";

const PercentageCard = ({ achieved = 90, dataType = "Due Assignments" }) => {
  // Note we can make classes dynamic but somehow NextJs wasn't rendering correctly
  // const topBoxClass = `relative w-[130px] h-[130px] p-[15px] rounded-full`;
  // const innerBoxClass = `w-[100px] h-[100px] rounded-full flex items-center justify-center`;
  return (
    <div className="flex flex-col items-center rounded-xl border bg-white p-5">
      <div className="mb-4 flex items-center gap-4">
        <div
          className={
            "h-5 w-5 " +
            (achieved <= 40
              ? "bg-red-600"
              : achieved <= 70
                ? "bg-yellow-300"
                : "bg-green-600") +
            " rounded-md"
          }
        ></div>
        <div className="mt-0.5 text-sm font-bold">{dataType}</div>
      </div>
      {/* Handling circular progress bar */}

      <CircularProgressBar
        percentage={achieved}
        activeColor={
          achieved <= 40 ? "red" : achieved <= 70 ? "yellow" : "green"
        }
      />
    </div>
  );
};

export default PercentageCard;
