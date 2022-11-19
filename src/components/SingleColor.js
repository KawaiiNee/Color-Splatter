import React, { useState, useEffect } from "react";
import { BiCopy } from "react-icons/bi";

const SingleColor = ({ rgb, weight, index, arr, hex }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");
  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div
      className="col-12 col-sm-6 col-md-3 col-lg-2"
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <div
        style={{ height: "7rem", backgroundColor: `rgb(${bgc})` }}
        className={`p-2 px-3 ${
          index > Math.floor(arr / 2) - 1 && "text-white"
        }`}
      >
        <small className="fw-semibold">
          {weight % 1 === 0 ? weight : weight.toFixed(2)}%
        </small>
        <p className="lead">{hexValue}</p>
        {alert && (
          <>
            <BiCopy />
            <small className="text-secondary px-2">
              Copied to the clipboard
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleColor;
