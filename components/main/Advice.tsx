import { getAdvice } from "pages/api/adviceAPI";
import { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState<string>();
  useEffect(() => {
    getAdvice().then((res) => setAdvice(res.data.slip.advice));
  }, []);
  return (
    <div className="footer-advice">
      <span>{advice}</span>
    </div>
  );
};

export default Advice;
