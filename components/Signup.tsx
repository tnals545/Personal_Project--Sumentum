import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";

interface Mode {
  mode: string;
  type?: string;
  headMessage: string;
  guideMessage: string;
}
interface Valid {
  isValid: boolean;
  errMessage: string;
}

const Signup = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [modeState, setModeState] = useState<Mode>({
    mode: "email",
    type: "email",
    headMessage: "Welcome!",
    guideMessage: "Please enter your email to sign up.",
  });
  const [valid, setValid] = useState<Valid>({
    isValid: true,
    errMessage: "",
  });

  const { isValid, errMessage } = valid;
  const { mode, type, headMessage, guideMessage } = modeState;

  const router = useRouter();

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
        setValid({
          isValid: true,
          errMessage: "",
        });
        setModeState({
          mode: "password",
          type: "password",
          headMessage: "",
          guideMessage: "Please set your password.",
        });
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      } else {
        setValid({
          isValid: false,
          errMessage: "이메일 형식에 맞지 않습니다.",
        });
      }
    }
    // 비밀번호에 대한 input 입력시
    if (mode === "password") {
      const isPasswordValid =
        inputRef.current && passwordRegex.test(inputRef.current?.value);
      if (isPasswordValid) {
        setValid({
          isValid: true,
          errMessage: "",
        });
        setModeState({
          mode: "name",
          type: "text",
          headMessage: "",
          guideMessage: "Please set your name.",
        });
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      } else {
        setValid({
          isValid: false,
          errMessage: "숫자, 영문자, 특수문자 조합으로 8자 이상 입력해주세요.",
        });
      }
    }
    // 이름에 대한 input 입력시
    if (mode === "name") {
      // 텍스트를 입력하지 않았을 때
      if (!inputRef.current?.value) return;

      setModeState({
        mode: "completed",
        headMessage: "Congratulations!",
        guideMessage: "Your account has been created.",
      });
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div className="signup-header">
        {headMessage && <span>{headMessage}</span>}
        <span>{guideMessage}</span>
      </div>
      <div className="signup-form">
        <form onSubmit={onSubmit}>
          {mode !== "completed" && <input ref={inputRef} type={type} />}
        </form>
        {!isValid && <span>{errMessage}</span>}
      </div>
      <div className="signup-footer">
        {mode === "completed" && (
          <span onClick={() => router.push("/")}>Go to Login</span>
        )}
      </div>
    </>
  );
};

export default Signup;
