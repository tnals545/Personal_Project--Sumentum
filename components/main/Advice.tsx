import { getAdviceAPI } from "pages/api/adviceAPI";
import { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState<string>();
  useEffect(() => {
    getAdviceAPI().then((res) => setAdvice(res.data.slip.advice));
  }, []);
  return (
    <div className="footer-advice">
      <span>{advice}</span>
    </div>
  );
};

export default Advice;
