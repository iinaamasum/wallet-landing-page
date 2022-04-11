import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <>
      <section>
        <div className="w-1/2 mx-auto">
          <div className="py-3">
            <h3 className="tracking-wide text-center text-xl text-gray-300 pt-3 pb-2">
              Sign In with
            </h3>
            <div className="flex justify-center gap-3">
              <button className="tracking-wide uppercase text-center bg-slate-200 hover:bg-slate-400 text-black font-semibold text-xl px-3 py-2 rounded flex items-center justify-between">
                <BsGithub />
                <span className="pl-2">Github</span>
              </button>
              <button className="tracking-wide uppercase text-center bg-slate-100 hover:bg-slate-300 text-black font-semibold text-xl px-3 py-2 rounded flex items-center justify-between">
                <FcGoogle />
                <span className="pl-2">Google</span>
              </button>
            </div>
          </div>
          <hr />
          <div className="py-3">
            <h3>Or sign in with credentials</h3>
            <form>
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" name="" id="" placeholder="Your Email" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
