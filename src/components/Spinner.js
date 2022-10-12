import React from "react";

const spinnerIconUrl =
  "./img/icons/loading-spinner.png";

export default function Spinner() {
  return (
    <img src={spinnerIconUrl} alt="در حال بارگذاری دستورالعمل‌های آشپزی" className="spinner" />
  );
}
