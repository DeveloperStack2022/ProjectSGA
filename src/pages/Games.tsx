import React, { useRef, TouchEvent, MouseEvent, DragEvent } from "react";

const useTouch = (e: TouchEvent | MouseEvent) => {
  e.persist();
  console.log("event ", event);
  if (e.nativeEvent instanceof TouchEvent) {
    console.log(e.nativeEvent.touches);
    return true;
  }

  if (e.nativeEvent instanceof MouseEvent) {
    console.log(e.nativeEvent.screenX);
    return false;
  }
};

const Games = () => {
  let startButton = useRef<HTMLButtonElement>(null);
  let initialX;
  let initialY;
  function dragStart(e: DragEvent<HTMLDivElement>) {
    let touch = useTouch(e);
    e.dataTransfer.setData("text", e.currentTarget.id);
  }

  const drop = (e: DragEvent<HTMLDivElement>) => {
    const draggedElementData = e.dataTransfer.getData("text");
    //Get custom attribute value
    const droppableElementData = e.currentTarget.getAttribute("data-id");
    if (draggedElementData === droppableElementData) {
      const draggedElement = document.getElementById(draggedElementData);
      //dropped class
      e.currentTarget.classList.add("dropped");
      //hide current img
      draggedElement.classList.add("hide");
      //draggable set to false
      draggedElement.setAttribute("draggable", "false");
      e.target.innerHTML = ``;
      //insert new img
      e.target.insertAdjacentHTML(
        "afterbegin",
        `<img src="${draggedElementData}.png">`,
      );
      count += 1;
    }
  };

  return (
    <>
      <h2>Games</h2>
      <button ref={startButton}>Start Game</button>
    </>
  );
};
export default Games;
