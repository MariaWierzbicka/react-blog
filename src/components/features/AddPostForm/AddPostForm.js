import { addPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {

  return (
    <PostForm action={addPost} actionText={'Add post'}/>
  )
}

export default AddPostForm;