
import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useHistory } from 'react-router-dom'
import WriteArticle from '../pages/WriteArticle/WriteArticle.js';



function CustomChatbot(props) {
const config = {
width: "300px",
height: "600px",
floating: false
};

const theme = {
background: "white",
fontFamily: "Arial, Helvetica, sans-serif",
headerBgColor: "#00B2B2",
headerFontColor: "#fff",
headerFontSize: "25px",
botBubbleColor: "#00B2B2",
botFontColor: "#fff",
userBubbleColor: "#fff",
userFontColor: "#4c4c4c"
};

const history = useHistory();

const steps = [
  {
    id: '1',
    message: 'You can add custom components',
    trigger: '2',
  },
  {
    id: '2',
    component: (
      <div> <WriteArticle /></div>
    ),
    trigger: '3'
  },
  {
    id: 3,
    message: 'you data was sent',
    trigger: ({ value, steps }) => {
      history.push("/blog/")
      return 'Tell recent work history'}
    // end: true,
  },
];

return (
<ThemeProvider theme={theme}>
  <ChatBot steps={steps} {...config} />
</ThemeProvider>
);
}

export default CustomChatbot;

