"use client";
import React, { useState } from "react";
import Avatar from "./Avatar";
import Button from "./Button";

interface FormProps {
    placeholder: string;
    isComment?: boolean;
    postId?: string;
  }
  

const Form:React.FC<FormProps> = ({
    placeholder,
    isComment,
    postId
}) => {
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {

  }
  return (
    <div className=" border-b-[1px] border-neutral-100 px-5 py-2">
      <div className=" flex flex-row gap-4">
        <div>
          <Avatar />
        </div>
        <div className=" w-full">
          <textarea 
          disabled={isLoading}
          onChange={(e:any) => setBody(e.target.value)}
          value={body}
          placeholder={placeholder}
          className={`
          disabled:opacity-80
          peer
          resize-none
          mt-3
          w-full
          ring-0
          outline-none
          text-[20px]
          placeholder-neutral-500


          `}

          ></textarea>
          <hr className=" opacity-0 peer-focus:opacity-100 h-[1px] w-full border-neutral-100 transition " />
          <div className=" mt-4 flex flex-row justify-end">
            <Button disabled={isLoading || !body} label="Post" onClick={onSubmit}  />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
