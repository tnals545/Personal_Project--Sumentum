import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getImgData } from "redux/slice/unsplashSlice";
import { BackgroundImg } from "styles/BackgroundImg";

const GetBackgroundImg = () => {
  const backImgData = useAppSelector((state) => state.backImg.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getImgData());
  }, [dispatch]);

  return <BackgroundImg url={backImgData.url} />;
};

export default GetBackgroundImg;
