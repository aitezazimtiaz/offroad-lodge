"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import LikeIcon from "@/components/icons/HeartIcon";
import ReplyForm from "./ReplyForm/ReplyForm";

const RoundedReplyPlaceholder = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleReplyClick = () => {
    setShowReplyForm(!showReplyForm);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-full bg-white px-2 py-1 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-5 w-5 mr-3">
            <LikeIcon
              className="h-5 w-5"
              fill={isLiked ? "#ff0000" : "transparent"}
              stroke={isLiked ? "#ff0000" : "#00A59B"}
              onClick={handleLikeClick}
            />
          </div>
          <span className="text-sm">{isLiked ? '1 Likes' : 'Likes'}</span>
        </div>
        <Button className="text-white rounded-3xl font-bold" onClick={handleReplyClick}>
          Reply
        </Button>
      </div>
      <div className="p-4 max-sm:p-0 max-sm:mt-4">
      {showReplyForm && <ReplyForm />}
      </div>
    </div>
  );
};

export default RoundedReplyPlaceholder;
