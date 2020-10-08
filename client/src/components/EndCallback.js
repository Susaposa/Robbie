import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class EndCallback extends Component {
    componentDidMount() {
      this.handleEnd = this.handleEnd.bind(this);
    }
  
    handleEnd({ steps, values }) {
      console.log("these are the steps", steps);
      console.log("these are the values", values);
      fetch('/api/mongodb/test/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to blog
        // props.history.push('/blog/');
      });
    }
  
    render() {
      return (
        <div className="docs-example-1">
          <ChatBot
            handleEnd={this.handleEnd}
            steps={[
              {
                id: '1',
                message: 'Pick a number',
                trigger: '2',
              },
              {
                id: '2',
                options: [
                  { value: '1', label: '1', trigger: '3' },
                  { value: '2', label: '2', trigger: '3' },
                  { value: '3', label: '3', trigger: '3' },
                  { value: '4', label: '4', trigger: '3' },
                  { value: '5', label: '5', trigger: '3' },
                ],
              },
              {
                id: '3',
                message: 'Pick a number',
                trigger: '4',
              },
              {
                id: '4',
                options: [
                  { value: '1', label: '1', trigger: '5' },
                  { value: '2', label: '2', trigger: '5' },
                  { value: '3', label: '3', trigger: '5' },
                  { value: '4', label: '4', trigger: '5' },
                  { value: '5', label: '5', trigger: '5' },
                ],
              },
              {
                id: '5',
                message: 'A callback message was called!',
                end: true,
              },
            ]}
          />
        </div>
      );
    }
  }
  
  export default EndCallback;