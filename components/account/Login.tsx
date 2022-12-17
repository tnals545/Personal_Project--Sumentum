import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setErrMessage, setIsValid } from "redux/slice/accountSlice";

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [mode, setMode] = useState<string>("email");

  const { isValid, errMessage } = useAppSelector((state) => state.account);

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
        // 서버에서 계정 데이터 받아서 가입된 이메일과 일치하는 데이터가 있는지 검사
        dispatch(setIsValid(true));
        dispatch(setErrMessage(""));

        setMode("password");

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
        // 서버에서 계정 데이터 받아서 가입된 이메일의 비밀번호와 일치하는지 검사
        dispatch(setIsValid(true));
        dispatch(setErrMessage(""));

        router.push("/main");
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

  return (
    <>
      <div className="login-header">
        {mode === "email" ? (
          <span>Hello, what&apos;s your email?</span>
        ) : (
          <span>What&apos;s your password?</span>
        )}
      </div>
      <div className="login-form">
        <form onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type={mode === "password" ? "password" : "text"}
          />
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
