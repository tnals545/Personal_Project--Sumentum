import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setValid } from "redux/slice/accountSlice";

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

  const accountState = useAppSelector((state) => state.account);
  const { emailRegex, passwordRegex, isValid, errMessage } = accountState;
  const { mode, guideMessage } = modeState;

  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget.elements[0] as HTMLInputElement;

    // 이메일에 대한 input 입력시
    if (mode === "email") {
      const isEmailValid = emailRegex.test(inputElement.value);
      if (isEmailValid) {
        // 중복되는 이메일이 있는지 확인하는 코드
        dispatch(
          setValid({ ...accountState, isValid: true, errMessage: null })
        );

        setModeState({
          mode: "password",
          guideMessage: "Please reset your password.",
        });

        inputElement.value = "";
      } else {
        dispatch(
          setValid({
            ...accountState,
            isValid: false,
            errMessage: "이메일 형식에 맞지 않습니다.",
          })
        );
      }
    }
    // 비밀번호에 대한 input 입력시
    if (mode === "password") {
      const isPasswordValid = passwordRegex.test(inputElement.value);
      if (isPasswordValid) {
        dispatch(
          setValid({ ...accountState, isValid: true, errMessage: null })
        );

        setModeState({
          mode: "completed",
          guideMessage: "Your password has been reset.",
        });
      } else {
        dispatch(
          setValid({
            ...accountState,
            isValid: false,
            errMessage:
              "숫자, 영문자, 특수문자 조합으로 8자 이상 입력해주세요.",
          })
        );
      }
    }
  };

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
