import Link from "next/link";
import { useAppSelector } from "redux/hooks";

const BackgroundImgInfo = () => {
  const imgInfo = useAppSelector((state) => state.backgroundImg.data);

  const { altDescription, photographer, imgName, html } = imgInfo;

  return (
    <div className="footer-imgInfo">
      {imgName === null ? (
        <span>{altDescription}</span>
      ) : (
        <span>{imgName}</span>
      )}
      <Link href={html}>
        <span>{photographer} / Unsplash</span>
      </Link>
    </div>
  );
};

export default BackgroundImgInfo;
