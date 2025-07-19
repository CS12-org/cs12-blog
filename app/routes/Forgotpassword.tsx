import { useNavigate } from "react-router";
import { Link } from "react-router";
import { twJoin } from "tailwind-merge";
import Mohammadhoseincharacter from "~/assets/images/MH.svg?url";
import Button from "~/components/Button";
import React,{useState} from 'react';

function Login() {
  const navigate = useNavigate();

  return (
    <main className="min-h-dvh flex flex-col items-center">
      <form className="relative flex flex-col items-stretch my-auto bg-crust rounded-2xl p-5 w-full max-w-sm">
        <img
          src={Mohammadhoseincharacter}
          alt="animated character"
          className={twJoin(
            "animate-fade-up animate-duration-1000 animate-delay-500",
            "absolute bottom-[calc(100%_-_8px)] left-1/2 -translate-x-1/2 w-25 -z-1"


          )}
        />
        <h1
          className={twJoin(
            "font-bold text-3x1 mb-7 text-center",
            "flex gap-2 justify-center flex items-center "
          )}
        >
          
         <span className="text-base leading-6 text-white tracking-normal text-center align-middle font-body-md">
  کد تغییر رمز رو دریافت کن
</span>

        </h1>

        <input
          placeholder="ایمیل خود را وارد کنید"
          className="bg-surface-0 mb-4 rounded-md px-2.5 py-2"
        />
       
        <div className="mt-4 flex gap-2">
          <Button type="submit" className="py-2 grow">
            تایید
          </Button>
          
        </div>
      </form>
    </main>
  );
  const [isValid, setIsValid] = useState(false);

  const handleValidate = () => {
    // فرض کن اینجا شرط درستی بررسی می‌شه
    setIsValid(true);
  };

  return (
    <div className="p-4 mt=30rem">
        
        <div className="bg-gray-900 text-white p-4 rounded-lg w-full max-w-md mx-auto flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">کد به ایمیل شما ارسال شد.</p>
          </div>
          <button className="bg-indigo-300 text-black px-4 py-2 rounded-lg hover:bg-indigo-400 transition">
            رفتن به ایمیل
          </button>
        </div>
      
    </div>
  );
}




export default Login;
