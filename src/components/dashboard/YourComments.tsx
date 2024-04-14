import axios from "axios";
import { useEffect, useState } from "react";
import { CommentResponse, Comment } from "../../models/commentResponse";
import { useEarthquake } from "../../hook/useEarthquake";
import { TrashIcon } from "@heroicons/react/24/outline";

export const YourComments = () => {
  const { earthquakeState } = useEarthquake();
  const [comments, setComments] = useState<Comment[]>([]);

  const host = import.meta.env.VITE_HOST;

  useEffect(() => {
    const userResponse = localStorage.getItem("user");
    if (!userResponse) {
      return;
    }

    const user = JSON.parse(userResponse);

    if (earthquakeState.selectedFeature == undefined) return;

    axios
      .get(`${host}/features/${earthquakeState.selectedFeature}/comments`, {
        params: { user_id: user.user.id },
      })
      .then((res) => {
        const commentResponse = res.data as CommentResponse;
        setComments(commentResponse.comments);
      });
  });

  const deleteComment = (id: number) => {
    const userResponse = localStorage.getItem("user");
    if (!userResponse) {
      return;
    }
    const user = JSON.parse(userResponse);
    if (!user.token) {
      return;
    }
    axios
      .delete(`${host}/comments/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then(() => {
        setComments(comments.filter((comment) => comment.id !== id));
      });
  };

  return (
    <>
      <div className="h-96 bg-gray-100 rounded-md overflow-y-auto shadow-inner p-3 ring-1 ring-gray-200">
        {comments.map((comment) => (
          <div key={comment.id}>
            <div className="flex items-center justify-center gap-2">
              <div className="w-full">
                <p className="text-sm font-medium ml-1 text-emerald-600">
                  {comment.user_name} {comment.user_lastname}{" "}
                  <span className="font-normal text-gray-700">comento:</span>
                </p>
                <div className="w-full bg-white shadow rounded-lg p-3 mt-1 mb-3">
                  <p className="font-light">{comment.body}</p>
                </div>
              </div>
              <button
                onClick={() => deleteComment(comment.id)}
                className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 text-white"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
