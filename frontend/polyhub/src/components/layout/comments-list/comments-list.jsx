import { useEffect, useState } from "react";
import CommentBlock from "../../ui/comment-block/comment-block";
import CommentService from "../../../services/commentService";
import './comments-list.css'
const CommentsList = ({post_id}) => {
    const commentService = new CommentService();
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        const fetchComments = async () => {
            try{
                console.log("АЙДІ ПОСТА: " + post_id)
                const response = await commentService.getCommentsByPostID(post_id);
                setComments(response.data);
            }catch(error){
                console.error('Error fetching comments:', error);
            }
        }
        fetchComments();
    }, []);

    return (
        <div className="comments-list">
            <h3>Коментарі</h3>
            {comments.length === 0 ? (
                <p>Коментарів ще немає.</p>
            ) : (
                comments.map(comment => (
                    <CommentBlock user_id={comment.user_id} content={comment.content} date={comment.created_at} comment_id={comment.id}/>
                ))
            )}
        </div>
    );
}

export default CommentsList;