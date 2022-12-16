import { useRef, useEffect } from "react";

const GoogleSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, []);

  return (
    <div className="search-bar">
      <form method="get" action="http://www.google.co.kr/search">
        <input ref={inputRef} type="text" name="q" />
        <input type="submit" value="검색" />
      </form>
    </div>
  );
};

export default GoogleSearch;
