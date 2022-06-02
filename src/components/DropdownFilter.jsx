import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import { default as ReactSelect } from "react-select";
import { components } from "react-select";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

function DropdownFilter({ align, taxFilter, setTaxFilter }) {
  const [optionSelected, setOptionSelected] = useState("");

  const taxes2 = [
    { value: "es_general_21", label: "es_general_21" },
    { value: "es_reduced_10", label: "es_reduced_10" },
    { value: "es_super-reduced_4", label: "es_super-reduced_4" },
    { value: "fr_general_20", label: "fr_general_20" },
    { value: "fr_reduced_5.5", label: "fr_reduced_5.5" },
  ];

  const handleChange = (selected) => {
    setOptionSelected(selected);
    setTaxFilter(selected.map((val) => val.value));
    console.log("selected from menu", selected);
  };

  return (
    <div className="relative inline-flex pr-72">
      <div className="absolute">
        <ReactSelect
          className="w-72 z-30"
          options={taxes2}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option,
          }}
          styles={{
            multiValueLabel: (base) => ({
              ...base,
              backgroundColor: "#DBEBFE",
              color: "#2663EB",
              borderRadius: 5,
            }),
          }}
          onChange={handleChange}
          allowSelectAll={true}
          value={optionSelected}
          placeholder="FIltra por impuesto"
        />
      </div>
    </div>
  );
}

export default DropdownFilter;

/*
import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import { default as ReactSelect } from "react-select";
import { components } from "react-select";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

function DropdownFilter({ align, taxFilter, setTaxFilter }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  const [optionSelected, setOptionSelected] = useState("");
  const taxes = [
    "es_general_21",
    "es_reduced_10",
    "es_super-reduced_4",
    "fr_general_20",
    "fr_reduced_5.5",
  ];
  const taxes2 = [
    { value: "es_general_21", label: "es_general_21" },
    { value: "es_reduced_10", label: "es_reduced_10" },
    { value: "es_super-reduced_4", label: "es_super-reduced_4" },
    { value: "fr_general_20", label: "fr_general_20" },
    { value: "fr_reduced_5.5", label: "fr_reduced_5.5" },
  ];

  const handleChange = (selected) => {
    setOptionSelected(selected);
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Filter</span>
        <wbr />
        <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
          <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
        </svg>
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className={`origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          align === "right" ? "right-0" : "left-0"
        }`}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown}>
          <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">
            Filters
          </div>
          <ReactSelect
            options={taxes2}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{
              Option,
            }}
            onChange={handleChange}
            allowSelectAll={true}
            value={optionSelected}
          />
          {taxes2.map((tax, n) => {
            return (
              <div key={n} className="py-1 px-3">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm font-medium ml-2">{tax.value}</span>
                </label>
              </div>
            );
          })}
          <div className="py-2 px-3 border-t border-slate-200 bg-slate-50">
            <ul className="flex items-center justify-between">
              <li>
                <button className="btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600">
                  Clear
                </button>
              </li>
              <li>
                <button
                  className="btn-xs bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => setDropdownOpen(false)}
                  onBlur={() => setDropdownOpen(false)}
                >
                  Apply
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownFilter;

*/
