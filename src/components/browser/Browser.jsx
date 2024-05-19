import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../../route";

import { useEffect } from "react";
import { nowPlayingMoviesListThunks } from "../../redux/nowPlayingMoviesSlice";
import Header from "./Header";

import SecondaryContainer from "./SecondaryContainer";
import PrimaryContainer from "./PrimaryContainer";
import { popularMoviesListThunks } from "../../redux/popularMoviesSlice";
import { topRatedMoviesListThunk } from "../../redux/topRatedMoviesSlice";
const Browser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userobj = useSelector((store) => store.user);

  useEffect(() => { if (!userobj?.uid) navigate(ROOT.LOGIN) }, [userobj]);
  useEffect(() => {
    dispatch(nowPlayingMoviesListThunks());
    dispatch(popularMoviesListThunks());
    dispatch(topRatedMoviesListThunk());
  }, [])




  return (
    <div className="">
      <Header userobj={userobj} />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browser;
