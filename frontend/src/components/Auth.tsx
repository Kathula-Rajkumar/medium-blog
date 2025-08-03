import type { ChangeEvent } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupInput } from "@rajkumar_dev_15/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [postInputs, setPostInputs] = useState<signupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type}`,
        postInputs
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      console.error("Error sending request:", e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center mb-4">
        <div className="w-full max-w-md p-4">
          <div className="px-4">
            <div className="text-3xl font-extrabold mb-1">
              {type === "signup" ? "Create an account" : "Welcome back"}
            </div>
            <div className="text-slate-500 text-sm">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                className="underline pl-2 text-blue-600 hover:text-blue-800"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>

          <div className="pt-8">
            {type === "signup" && (
              <LabelledInput
                label="Name"
                placeholder="Enter your name..."
                onChange={(e) =>
                  setPostInputs((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            )}

            <LabelledInput
              label="Email"
              placeholder="Enter your email..."
              onChange={(e) =>
                setPostInputs((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />

            <LabelledInput
              label="Password"
              type="password"
              placeholder="********"
              onChange={(e) =>
                setPostInputs((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />

            <button
              onClick={sendRequest}
              type="button"
              disabled={loading}
              className="mt-6 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center justify-center"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Loading...
                </div>
              ) : type === "signup" ? (
                "Signup"
              ) : (
                "Signin"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
