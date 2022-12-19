import { getUnsplashImage } from "pages/api/unsplashAPI";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getBackgroundData } from "redux/slice/unsplashSlice";
import { BackgroundImg } from "styles/BackgroundImg";

const GetBackgroundImg = () => {
  const backgroundImgData = useAppSelector((state) => state.backgroundImg.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUnsplashImage().then((res) => {
      console.log(res.data);
      dispatch(
        getBackgroundData({
          altDescription: res.data.alt_description,
          photographer: res.data.user.name,
          imgName: res.data.location.name,
          html: res.data.links.html,
          url: res.data.urls.full,
        })
      );
    });
  }, [dispatch]);

  console.log(backgroundImgData);

  return <BackgroundImg url={backgroundImgData.url} />;
};

export default GetBackgroundImg;
