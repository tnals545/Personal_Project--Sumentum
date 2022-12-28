import Link from "next/link";
import { useAppSelector } from "redux/hooks";

const BackgroundImgInfo = () => {
  const backImgInfo = useAppSelector((state) => state.backImg.backImgData);

  const { altDescription, photographer, imgName, html } = backImgInfo;

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
