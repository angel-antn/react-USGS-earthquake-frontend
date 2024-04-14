import axios from "axios";
import { useEffect, useState } from "react";
import { CommentResponse, Comment } from "../../models/commentResponse";
import { useEarthquake } from "../../hook/useEarthquake";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export const AllComments = () => {
  const { earthquakeState } = useEarthquake();
  const [comments, setComments] = useState<Comment[]>([]);
  const [body, setBody] = useState("");

  const host = import.meta.env.VITE_HOST;

  useEffect(() => {
    if (earthquakeState.selectedFeature == undefined) return;
    axios
      .get(`${host}/features/${earthquakeState.selectedFeature}/comments`)
      .then((res) => {
        const commentResponse = res.data as CommentResponse;
        setComments(commentResponse.comments);
      });
  });

  const createComment = () => {
    const userResponse = localStorage.getItem("user");
    if (!userResponse) {
      return;
    }
    const user = JSON.parse(userResponse);
    if (!user.token) {
      return;
    }
    if (body == "") return;
    axios
      .post(
        `${host}/features/${earthquakeState.selectedFeature}/comments`,
        {
          body,
        },
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      .then((res) => {
        const comment = res.data as Comment;
        setComments([...comments, comment]);
        setBody("");
      });
  };

  return (
    <>
      <div className="h-80 bg-gray-100 rounded-md overflow-y-auto shadow-inner p-3 ring-1 ring-gray-200">
        {comments.map((comment) => (
          <div key={comment.id}>
            <p className="text-sm font-medium ml-1 text-emerald-600">
              {comment.user_name} {comment.user_lastname}{" "}
              <span className="font-normal text-gray-700">comento:</span>
            </p>
            <div className="w-full bg-white shadow rounded-lg p-3 mt-1 mb-3">
              <p className="font-light">{comment.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-3">
        <input
          className="p-1 w-full border border-gray-300 rounded-xl "
          placeholder="Escribe tu comentario"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          onClick={createComment}
          className="p-3 flex justify-center items-center bg-emerald-400 rounded-lg hover:bg-emerald-500"
        >
          <PaperAirplaneIcon className="h-5 w-5 text-white" />
        </button>
      </div>
    </>
  );
};
