import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useReducer";
import { useSearchParams } from "react-router-dom";
const StudentsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  let paralelo = searchParams.get("paralelo");
  useEffect(() => {
    console.log(paralelo);
    return () => {};
  }, []);

  return (
    <>
      <h2>Students</h2>
    </>
  );
};

export default StudentsPage;
