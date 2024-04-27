import { useContext, useId, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(PostList)

  const userIdElement= useRef();
  const postTitleElement= useRef();
  const postBodyElement= useRef();
  const reactionsElement= useRef();
  const tagsElement= useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postBodyElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags=tagsElement.current.value.split(' ');

    userIdElement.current.value="";
    postBodyElement.current.value="";
    postBodyElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

    addPost(userId,postTitle,postBody,reactions,tags);

  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User Id here
        </label>
        <input
          placeholder="Your user Id"
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
        />

      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          placeholder="how are you feeling today?"
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
        />

      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows={4}
          placeholder="Tell us more about it"
          type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          placeholder="how Many people reacted to this post"
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
        />

      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags
        </label>
        <input
          placeholder="Please enter tags using space"
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
        />

      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )

}
export default CreatePost;