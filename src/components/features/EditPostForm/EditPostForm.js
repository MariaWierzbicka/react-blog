import { editPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';
import { getPostById } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';



const EditPostForm = props => {

  const postData = useSelector(state => getPostById(state, props.id));

  if(!postData) return <Navigate to="/" />

  return (
    <PostForm action={editPost} actionText={'Save changes'}
      id={props.id}
      title={postData.title}
      author={postData.author}
      publishedDate={postData.publishedDate}
      shortDescription={postData.shortDescription}
      content={postData.content}
      category={postData.category}
    />
  )
}

export default EditPostForm;