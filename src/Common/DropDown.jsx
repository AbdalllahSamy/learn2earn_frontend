import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { RiArrowDropUpLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

// Define the helper function
function getClassName(isActive) {
  return `no-underline ${isActive ? "text-[#2A7BE4]" : "text-[#5d6e82]"}`;
}

export default function DropDown({ title, items, IconItem, showIconState }) {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(items.length * 24 + 10);
    }
  }, [open]);

  return (
    <div ref={contentRef} className="cursor-pointer">
      <div
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className={`flex ${
          open && "mb-[10px]"
        }  justify-between items-center gap-[10px]`}
      >
        <li className="flex gap-[10px]">
          <IconItem size={!showIconState ? 25 : 20} />
          {!showIconState && title}
        </li>

        <div className="flex justify-end">
          <AnimatePresence>
            {!showIconState && (
              <motion.div animate={{ rotate: !open ? 180 : 0 }}>
                <RiArrowDropUpLine size={25} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {!showIconState && (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: open ? contentHeight : 0 }}
            exit={{ height: 0 }}
            key={"dropdown"}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {open && (
                <ul className="flex flex-col gap-[10px]">
                  {items.map((item, index) => (
                    <NavLink
                      className={({ isActive }) => getClassName(isActive) }
                      to={item.link}
                      key={item.link}
                      end
                    >
                      <motion.li
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, type: "tween" }}
                        key={index}
                        className="flex items-center gap-[10px]"
                      >
                        {item.Icon && <item.Icon size={18} />}
                        {!showIconState && item.title}
                      </motion.li>
                    </NavLink>
                  ))}
                </ul>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
