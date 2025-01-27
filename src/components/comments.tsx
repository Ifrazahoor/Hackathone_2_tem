"use client"
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CommentSection = () => {
  const [comments, setComments] = useState([
    { id: "1", text: "Great product! Highly recommend it.", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: "2", text: "Good value for money. Would buy again.", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: "3", text: "Delivery was fast, and the product quality is excellent.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" }
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([{
        id: Date.now().toString(), // Convert timestamp to string to avoid key errors
        text: newComment,
        avatar: "https://randomuser.me/api/portraits/lego/1.jpg"
      }, ...comments]);
      setNewComment("");
    }
  };

  const handleDeleteComment = (id:string) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4 border rounded-lg p-4 bg-white shadow">
      <h2 className="text-lg font-semibold">Customer Reviews</h2>
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Write your review..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 border-gray-300"
        />
        <Button onClick={handleAddComment} size="sm">
          Submit
        </Button>
      </div>
      {comments.length > 0 ? (
        <div className="space-y-2 mt-3">
          {comments.map(({ id, text, avatar }) => (
            <Card key={id} className="p-2 flex items-center space-x-3">
              <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
              <CardContent className="flex-1">
                <p className="text-sm text-gray-800">{text}</p>
              </CardContent>
              <Button variant="destructive" size="sm" onClick={() => handleDeleteComment(id)}>
                Delete
              </Button>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm mt-3">No reviews yet. Be the first to write one!</p>
      )}
    </div>
  );
};

export default CommentSection;
