import Container from "../components/Container/Container"
import PostForm from "../components/Postform/PostForm"


function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost