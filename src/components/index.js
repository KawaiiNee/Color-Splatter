import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

const Index = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorCount, setColorCount] = useState(20);
  const [list, setList] = useState(
    new Values("#f10525").all(parseInt(colorCount) ? colorCount / 2 : 10)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(
        100 / Math.floor(parseInt(colorCount) / 2)
      );
      setError(false);
      setList(colors);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <>
      <section className="container-fluid p-4 d-flex flex-column flex-md-row align-items-center gap-4">
        <h3 className="display-6">Color Splatter</h3>
        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <div className="d-flex flex-column">
            <input
              className={`form-control ${error && "border-danger"}`}
              type="text"
              placeholder="#f10525"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            {error ? (
              <small className="text-danger">Invalid value</small>
            ) : (
              <small className="form-text px-2">Hex color value</small>
            )}
          </div>
          <div>
            <input
              className={`form-control`}
              type="number"
              value={colorCount}
              max={100}
              onChange={(e) => setColorCount(e.target.value)}
            />
            <small id="colorCountHelp" className="form-text px-2">
              Color divisions
            </small>
          </div>
          <div>
            <button type="submit" className="btn btn-primary fw-semibold px-4">
              Splat!
            </button>
          </div>
        </form>
      </section>
      <section className="container-fluid p-0">
        <div className="row g-0">
          {list.map((color, index, arr) => {
            return (
              <SingleColor
                key={index}
                {...color}
                index={index}
                arr={arr.length}
                hex={color.hex}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Index;
