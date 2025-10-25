// src/utils/dateUtils.js
import moment from "moment";

const possibleFormats = [
  "DD/MM/YYYY",
  "DD/MM/YY",
  "DD/MMM/YY",
  "DD/MMM/YYYY",
  "D/M/YYYY",
  "D/M/YY",
  "DD.MM.YYYY",
  "DD.MM.YY",
  "DD.MMM.YY",
  "DD.MMM.YYYY",
  "DMMMYY",
  "DDMMMYY",
  "DDMMMYYYY",
  "DDMMMMYYYY",
  "D.M.YYYY",
  "D.M.YY",
  "D-M-YY",
  "D-MM-YY",
  "D-MM-YYYY",
  "DD-MM-YYYY",
  "DD-MM-YY",
  "D-MMM-YY",
  "DD-MMM-YY",
  "DD-MMM-YYYY",
  "DD-MMMM-YYYY",
  "DD-MMMM-YY",
  "D-MMMM-YY",
  "D MMMM YY",
  "DD",
  "D",
  "MMMYY",
  "D MMM YY",
  "DD MMM YY",
  "DD MMM YY",
  "DD MM YYYY",
  "DD MM YY",
  "DD M YY",
  "D M YY",
  "DD-MM",
  "DD MM",
  "DD-MMM",
  "DD MMM",
  "DDMMM",
  "DDMM",
  "DD/MM",
  "DD.MM",
  "DD.MMM",
  "DD/MMM",
];

const monthMap = {
  j: 1,
  f: 2,
  m: 3,
  a: 4,
  s: 9,
  o: 10,
  n: 11,
  d: 12,
};

const month3Map = {
  jan: 1,
  feb: 2,
  mar: 3,
  apr: 4,
  may: 5,
  jun: 6,
  jul: 7,
  aug: 8,
  sep: 9,
  oct: 10,
  nov: 11,
  dec: 12,
};

// Function to validate and convert date format
export const validateAndConvertDateFormat = (localDate) => {
  for (const format of possibleFormats) {
    if (format === "MMMYY") {
      const parsedDate = moment(localDate, format, true);
      if (parsedDate.isValid()) {
        return parsedDate.startOf("month").format("DD-MM-YYYY");
      }
    } else {
      const isValid = moment(localDate, format, true).isValid();
      if (isValid) {
        return moment(localDate, format).format("DD-MM-YYYY");
      }
    }
  }

  const formattedDate = createDateForMYY(localDate);
  return formattedDate || false;
};

// Helper function for "MYY" format
export const createDateForMYY = (localDate) => {
  const currentYear = moment().year();
  const yearDigit = localDate.substr(1);

  if (localDate.length === 1) {
    const month = monthMap[localDate[0].toLowerCase()];
    return month
      ? moment([currentYear, month - 1])
          .startOf("month")
          .format("DD-MM-YYYY")
      : false;
  } else if (localDate.length === 3) {
    const month = month3Map[localDate.toLowerCase()];
    return month
      ? moment([currentYear, month - 1])
          .startOf("month")
          .format("DD-MM-YYYY")
      : false;
  }

  if (localDate.length === 3 || localDate.length === 5) {
    const year = moment(yearDigit, "yy").format("YYYY");
    if (year === "Invalid date") return false;
    const fullYear = yearDigit.length === 4 ? yearDigit : `20${yearDigit}`;
    const month = monthMap[localDate[0].toLowerCase()];
    return moment([fullYear, month - 1])
      .startOf("month")
      .format("DD-MM-YYYY");
  }

  return false;
};
