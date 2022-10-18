import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class SearchBar extends React.Component {
    state = { term: ''};

    //event callback handler
    onInputChange = event => {
        this.setState({ term: event.target.value})
    };

    onFormSubmit = event => {
        event.preventDefault();
        // Todo: make sure we call callback from parent component
    };

    render() {
        return (
            <Container >  
            <Form onSubmit={this.onFormSubmit} className="d-md-flex">
            <Form.Control
              type="search"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Container>
        );
    }
}

export default SearchBar;