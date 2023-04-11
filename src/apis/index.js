import axios from "axios";

export const uploadData = async (info) => {
  const response = await fetch(
    "https://api.apispreadsheets.com/data/fTZtRgaQyFuNJ4YK/",
    {
      method: "POST",
      body: JSON.stringify(info),
    }
  );
  return response;
};
