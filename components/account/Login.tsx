import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setValid } from "redux/slice/accountSlice";

const Login = () => {
  const [modeState, setModeState] = useState<string>("email");

  const accountState = useAppSelector((state) => state.account);
  const { emailRegex, passwordRegex, isValid, errMessage } = accountState;

  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget.elements[0] as HTMLInputElement;

    // 이메일에 대한 input 입력시
    if (modeState === "email") {
      const isEmailValid = emailRegex.test(inputElement.value);
      if (isEmailValid) {
        // 서버에서 계정 데이터 받아서 가입된 이메일과 일치하는 데이터가 있는지 검사
        dispatch(
          setValid({ ...accountState, isValid: true, errMessage: null })
        );
        setModeState("password");

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
    if (modeState === "password") {
      const isPasswordValid = passwordRegex.test(inputElement.value);
      if (isPasswordValid) {
        // 서버에서 계정 데이터 받아서 가입된 이메일의 비밀번호와 일치하는지 검사
        dispatch(
          setValid({ ...accountState, isValid: true, errMessage: null })
        );

        router.push("/main");
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
      <div className="login-header">
        {modeState === "email" ? (
          <span>Hello, what&apos;s your email?</span>
        ) : (
          <span>What&apos;s your password?</span>
        )}
      </div>
      <div className="login-form">
        <form onSubmit={onSubmit}>
          <input type={modeState === "password" ? "password" : "text"} />
          {!isValid && <span>{errMessage}</span>}
        </form>
      </div>
      <div className="login-footer">
        <span onClick={() => router.push("/find-password")}>
          Forgot password?
        </span>
        <span>
          No account yet?{" "}
          <span onClick={() => router.push("/sign-up")}>Sign Up</span>
        </span>
      </div>
    </>
  );
};

export default Login;
