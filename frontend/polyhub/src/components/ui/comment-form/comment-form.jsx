import './comment-form.css'
import CommentService from '../../../services/commentService'
import { useState } from 'react';

const CommentForm = ({post_id, user_id}) => {
    const commentService = new CommentService();
    const [content, setContent] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault;
        try {
            const response = await commentService.createComment({
                post_id,
                user_id,
                content
            })
            console.log(response);
        }catch(error){
            return error
        }
    }
    return(
        <div className="comment-form-wrapper">
            <form action={handleSubmit}>
                <textarea className='comment-content-input' onChange={(e) => setContent(e.target.value)}/>
                <button>Залиши коментар</button>
            </form>
        </div>
    )
}

export default CommentForm;