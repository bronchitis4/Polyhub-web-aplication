import './post-info.css'
import PostListItem from '../../ui/post-list-item/post-list-item.jsx'
import PostService from '../../../services/postService.js'
import CommentForm from '../../ui/comment-form/comment-form.jsx'
import CommentsList from '../comments-list/comments-list.jsx'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostInfo = () => {
    const postService = new PostService();
    const {id} = useParams();
    const [postData, setPostData] = useState({});

    
    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const response = await postService.getPostById(id)
                setPostData(response.data);
            }catch(error) {
                console.error('Error fetching posts:', error);
            }
        };
    
        fetchPosts(); 
    }, []);
    
    return(
        <div className="post-wrapper">
            <div className="post-info">
                <PostListItem key={postData.id} id={postData.id} header={postData.title} urlImage={postData.imageurl} content={postData.content} date={postData.created_at} />
                <CommentForm user_id={78} post_id={id}/>
                <CommentsList post_id={id}/>
            </div>
        </div>
    )

}

export default PostInfo;