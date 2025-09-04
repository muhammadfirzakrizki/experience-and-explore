import moment from "moment";

/**
 * Format date untuk API / backend: YYYY-MM-DD
 */
export const formatDate = (date: Date | null) => {
  return date ? moment(date).format("YYYY-MM-DD") : "";
};

/**
 * Format date untuk ditampilkan di UI: DD MMM YYYY
 */
export const formatDateDisplay = (date: Date | null) => {
  return date ? moment(date).format("DD MMM YYYY") : "-";
};
