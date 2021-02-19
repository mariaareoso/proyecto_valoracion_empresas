"use strict";

function formatDate(date) {
  const padNumber = (number) => `${number}`.padStart(2, "0");
  const s = padNumber(date.getSeconds());
  const m = padNumber(date.getMinutes());
  const h = padNumber(date.getHours());
  const YYYY = date.getFullYear();
  const MM = date.getMonth() + 1;
  const DD = padNumber(date.getDate());

  return `${YYYY}-${MM}-${DD} ${h}:${m}:${s}`;
}

module.exports = formatDate;
