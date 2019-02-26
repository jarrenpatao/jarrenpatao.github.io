// Uncomment after you bring back the second column
import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import NavTabs from "../../components/NavTabs"

class Blogs extends Component {
  state = {
    blogs: [],
    title: "",
    author: "",
    content: ""
  };

  componentDidMount() {
    this.loadBlogs();
  }

  loadBlogs = () => {
    API.getBlogs()
      .then(res =>
        this.setState({ blogs: res.data, title: "", author: "", content: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBlog = id => {
    API.deleteBlog(id)
      .then(res => this.loadBlogs())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBlog({
        title: this.state.title,
        author: this.state.author,
        content: this.state.content
      })
        .then(res => this.loadBlogs())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
      <NavTabs />
      <Container fluid>
        <Row>
          <Col size="md-2" />
          <Col size="md-8">
            <Jumbotron>
              <h1>Blog Entries</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.content}
                onChange={this.handleInputChange}
                name="content"
                placeholder="Content (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Blog
              </FormBtn>
            </form>
          </Col>
          <Col size="md-2" />
          {/* Add Blog Page */}
          {/*
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Blogs On My List</h1>
            </Jumbotron>
            {this.state.blogs.length ? (
              <List>
                {this.state.blogs.map(blog => (
                  <ListItem key={blog._id}>
                    <Link to={"/blogs/" + blog._id}>
                      <strong>
                        {blog.title} by {blog.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBlog(blog._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          */}
        </Row>
      </Container>
      </div>
    );
  }
}

export default Blogs;
