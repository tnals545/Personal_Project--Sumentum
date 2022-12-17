import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setErrMessage, setIsValid } from "redux/slice/accountSlice";

interface Mode {
  mode: string;
  guideMessage: string;
}

const Findpassword = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [modeState, setModeState] = useState<Mode>({
    mode: "email",
    guideMessage: "Please enter your email.",
  });

  const { isValid, errMessage } = useAppSelector((state) => state.account);
  const { mode, guideMessage } = modeState;

  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 이메일 유효성 검사 정규표현식
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    // 비밀번호 유효성 검사 정규표현식 - 숫자, 영문자, 특수문자 조합으로 8자 이상
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    // 이메일에 대한 input 입력시
    if (mode === "email") {
      const isEmailValid =
        inputRef.current && emailRegex.test(inputRef.current?.value);
      if (isEmailValid) {
        // 중복되는 이메일이 있는지 확인하는 코드
        dispatch(setIsValid(true));
        dispatch(setErrMessage(""));

        setModeState({
          mode: "password",
          guideMessage: "Please reset your password.",
        });
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      } else {
        dispatch(setIsValid(false));
        dispatch(setErrMessage("이메일 형식에 맞지 않습니다."));
      }
    }
    // 비밀번호에 대한 input 입력시
    if (mode === "password") {
      const isPasswordValid =
        inputRef.current && passwordRegex.test(inputRef.current?.value);
      if (isPasswordValid) {
        dispatch(setIsValid(true));
        dispatch(setErrMessage(""));

        setModeState({
          mode: "completed",
          guideMessage: "Your password has been reset.",
        });
      } else {
        dispatch(setIsValid(false));
        dispatch(
          setErrMessage(
            "숫자, 영문자, 특수문자 조합으로 8자 이상 입력해주세요."
          )
        );
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div className="findpassword-header">
        <span>{guideMessage}</span>
      </div>
      <div className="findpassword-form">
        <form onSubmit={onSubmit}>
          {mode !== "completed" && (
            <input
              ref={inputRef}
              type={mode === "password" ? "password" : "text"}
            />
          )}
        </form>
        {!isValid && <span>{errMessage}</span>}
      </div>
      <div className="findpassword-footer">
        {mode === "completed" && (
          <span onClick={() => router.push("/")}>Go to Login</span>
        )}
      </div>
    </>
  );
};

export default Findpassword;
