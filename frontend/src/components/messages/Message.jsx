import React from "react";

const Message = () => {
  return (
    <div className={`chat chat-end`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              "https://lh3.googleusercontent.com/a/ACg8ocLGpU8UuJ2LoUYHCCYljZ4RVTSnhsRnGO0AcB9Rs98T31B5=s432-c-no"
            }
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 pb-2`}>Hi</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12.42
      </div>
    </div>
  );
};

export default Message;
