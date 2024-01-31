import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePost = () => {
    // Add logic to send data to the server or save it in a database
    // For simplicity, we'll just log the data to the console
    const newPost = { title, imageUrl, description };
    console.log("New Post:", newPost);
  };

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="imageUrl">Image URL</Label>
          <Input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <Button onClick={handleCreatePost}>Create Post</Button>
      </Form>
    </Container>
  );
}

export default CreatePost;
