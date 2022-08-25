import React, {
  useRef,
  TouchEvent,
  MouseEvent,
  DragEvent,
  useState,
} from "react";
import { Container } from "react-bootstrap";

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
  const [count, setCount] = useState<number>(0);
  let startButton = useRef<HTMLButtonElement>(null);
  let dragObject = useRef<HTMLDivElement>(null);
  let dropPoints = useRef<HTMLDivElement>(null);

  let initialX;
  let initialY;
  function dragStart(e: DragEvent<HTMLDivElement>) {
    let touch = useTouch(e);
    e.dataTransfer.setData("text", e.currentTarget.id);
  }

  // const create = () => {
  //   dragObject.current?.innerHTML = "";
  //   dropPoints.current?.innerHTML = "";
  //   let arrayData=[{
  //     url:"http://adsasd.com",
  //     name:"text"
  //   }]
  //   for(let i of arrayData){
  //     const createDiv = document.createElement("div");
  //     createDiv.classList.add("draggable-image")
  //     createDiv.setAttribute("draggable",true)
  //     createDiv.innerHTML = `<img src="${i.url}.png" id="${i.text}">`;
  //     dragObject.current?.appendChild(createDiv);

  //   }
  // };

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
        `<img src="${draggedElementData}.png">`
      );
      setCount((prev) => prev + 1);
    }
    if (count == 3) {
      result.innerText = `You Won!`;
      stopGame();
    }
  };

  return (
    <>
      <Container>
        <h2>Games</h2>
        <button className="btn btn-primary" ref={startButton}>
          Start Game
        </button>
        <div className={"draggable-objects"} ref={dragObject}></div>
        <div className="drop-points" ref={dropPoints}></div>
      </Container>
    </>
  );
};
export default Games;
