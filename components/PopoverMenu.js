import {useEffect, useRef} from "react";

export default function PopoverMenu({className, handleClose, children}) {
  const selfRef = useRef(undefined);

  function handleKeyDown(event) {
    const {target, code} = event;
    // Focus next available element
    if ((code === "Enter" || code === "NumpadEnter") && target.tagName !== "TEXTAREA" && target.tagName !== "BUTTON") {
      event.preventDefault();
      event.stopPropagation();
      let nextElement;
      const inputsArray = Array.from(selfRef.current.querySelectorAll("input,textarea"));
      const reverseOrder = event.shiftKey || event.metaKey;
      try {
        inputsArray.forEach((elm, i) => {
          if (elm === target) {
            nextElement = inputsArray[i + (reverseOrder ? -1 : 1)];
            nextElement.focus();
            nextElement.select();
          }
        });
      } catch (error) {
        nextElement = selfRef.current.querySelector("button");
        nextElement.focus();
      }
    }
  }

  useEffect(() => {
    const isPopoverOpenned = selfRef.current?.style.display !== "none";
    const focusedElement = document?.activeElement;
    const scrollPosition = {x: window.scrollX, y: window.scrollY};
    if (isPopoverOpenned) {
      preventDocBodyScrolling();
    } else {
      restoreDocBodyScrolling();
    }

    function preventDocBodyScrolling() {
      const width = document.body.clientWidth;
      const hasVerticalScrollBar = (window.innerWidth > document.documentElement.clientWidth);
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = hasVerticalScrollBar ? "scroll" : "";
      document.body.style.width = `${width}px`;
      document.body.style.position = "fixed";
    }

    function restoreDocBodyScrolling() {
      document.body.style.overflowX = "";
      document.body.style.overflowY = "";
      document.body.style.width = "";
      document.body.style.position = "";
      focusedElement?.focus();
      window.scrollTo(scrollPosition.x, scrollPosition.y);
    }


    return () => {
      restoreDocBodyScrolling(); // cleanup on unmount
    };
  }, []);

  return (
    <>
      <div
        className="backdrop"
        onClick={() => handleClose && handleClose()}
      />
      <div
        className={`pop-over-menu${className ? (` ${className}`) : ""}`}
        onKeyDown={handleKeyDown}
        ref={selfRef}
      >
        <button
          className="pop-over-menu--close-button" type="button"
          onClick={() => handleClose && handleClose()}
        >
          X
        </button>
        {children}
      </div>
    </>
  );
}
