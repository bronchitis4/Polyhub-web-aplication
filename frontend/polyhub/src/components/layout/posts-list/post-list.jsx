import './post-list.css'
import PostListItem from '../../ui/post-list-item/post-list-item.jsx'
import PostService from '../../../services/postService.js'
import { useEffect, useState } from 'react'

const PostList = () => {
    const postService = new PostService()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true)
                const response = await postService.getAllPosts(10, 0, 2)
                
                if (response && response.data && Array.isArray(response.data)) {
                    setPosts(response.data)
                } else {
                    setError('No posts available')
                    setPosts([])
                }
            } catch (error) {
                setError('Failed to fetch posts. Please try again later.')
                setPosts([])
                console.error('Error fetching posts:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div className="posts-list-wrapper">
            {loading && <div className="loading">Завантаження...</div>}
            {error && <div className="error">Постів не знайдено</div>}
            {!loading && !error && posts.length === 0 && (
                <div className="no-posts">Постів не знайдено</div>
            )}
            {!loading && !error && posts.length > 0 && (
                <div className="posts-list">
                    {posts.map((post) => (
                        <PostListItem 
                            key={post.id} 
                            id={post.id} 
                            header={post.title} 
                            urlImage={post.imageurl} 
                            content={post.content} 
                            date={post.created_at} 
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default PostList