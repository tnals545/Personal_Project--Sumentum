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
      const { data } = res;
      dispatch(
        getBackgroundData({
          altDescription: data.alt_description,
          photographer: data.user.name,
          imgName: data.location.name,
          html: data.links.html,
          url: data.urls.full,
        })
      );
    });
  }, [dispatch]);

  console.log(backgroundImgData);

  return <BackgroundImg url={backgroundImgData.url} />;
};

export default GetBackgroundImg;
