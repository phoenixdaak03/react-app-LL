import { useParams, useLoaderData } from 'react-router-dom';
import articles from '../article-content';
import axios from 'axios';
import CommentsList from '../CommentsList';
import AddCommentForm from '../AddCommentForm';
import { useState } from 'react';
import useUser from '../useUser';

export default function ArticlePage() {
    const { name } = useParams();
    const { upvotes: intialUpvotes, comments: initialComments } = useLoaderData();
    const [upvotes, setUpvotes] = useState(intialUpvotes);
    const [comments, setComments] = useState(initialComments);

    const { isLoading, user } = useUser();

    const article = articles.find(a => a.name === name);

    async function handleUpvote() {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.post('/api/articles/' + name + '/upvote', null, { headers});
        const updatedArticle = response.data;

        setUpvotes(updatedArticle.upvotes);
    };

    async function handleAddComment({ nameText, commentText}) {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.post('/api/articles/' + name + '/comments', {
            postedBy: nameText,
            text: commentText,
        }, { headers });
        const updatedArticleData = response.data;
        setComments(updatedArticleData.comments);
    };
    return(
        <>
            <h1>{article.title}</h1>
            {user && <button onClick={ handleUpvote }>Upvote</button>}
            <p>This articles has {upvotes} upvotes!</p>
            {article.content.map(p => <p key={p}>{p}</p>)}
            {user 
            ? <AddCommentForm onAddComment={handleAddComment}/>
            : <p>Log in to add a comment!</p>}
            <CommentsList comments={comments} />
        </>
    );
}

export async function loader({ params }){
      const response = await axios.get('/api/articles/' + params.name);
      const { upvotes, comments } = response.data;
      return { upvotes, comments };
    }