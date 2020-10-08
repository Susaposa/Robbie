
import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useHistory } from 'react-router-dom'


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
  // {
  //   id: '1',
  //   message: 'You can add custom components',
  //   trigger: '2',
  // },
  // {
  //   id: '2',
  //   component: (
  //     <div> <Link to="/blog/">Blog</Link> </div>
  //   ),
  //   end: true,
  // },

{
  id: "Greet",
  message: "Hi there, welcome to my resume chatbot!",
  trigger: "Resume"
},
{
  id: "Resume",
  message: "Would you like to know about my most recent work history?",
  trigger: "yes or no 1"
},
{
  id: "yes or no 1",
  options: [
    {
      value: "yes",
      label: "Yes",
      trigger: ({ value, steps }) => {
        history.push("/blog/")
        return 'Tell recent work history'}
    },
    { value: "no", label: "No, Thanks.", trigger: "Done" }
  ]  
},
{
  id: "Tell recent work history",
  message: "Great! Currently, I’m a freelance video journalist for Ruptly, a video news agency based in Europe. I also freelance for other international television channels, like France 24. Maybe I can go more in depth about my responsibilities there… ",
  trigger: "yes or no 2"
},
{
  id: "yes or no 2",
  options: [
    {
      value: "yes",
      label: "Yes, please.",
      trigger: "More in depth"
    },
    { value: "no", label: "No, Thanks.", trigger: "Done" }
  ]  
},
{
  id: "More in depth",
  message:
    "Of course! I have been working with Ruplty for over four years now and with France 24 for over a year. I produce, film, edit and script video stories in the West Coast. Topics range from politics, to tech and science to culture and immigration. Here are some videos of mine: Hyperlinks or embedded in the site.",
  trigger: "yes or no 3"
},
{
  id: "yes or no 3",
  options: [
    {
      value: "yes",
      label: "Yes, please.",
      trigger: "Done"
    },
    { value: "no", label: "No, Thanks.", trigger: "Done" }
  ]  
},
{
  id: "See more",
  message: "Here are other video stories I’m happy to show you: Okay, so now you know a little more about my recent work in media. Would you also like to know about other work I’ve done? I lived in the Middle East for 8 years… ",
  trigger: "Done"
},
{
  id: "Done",
  message: "Have a great day !!",
  end: true
}
];

return (
<ThemeProvider theme={theme}>
  <ChatBot steps={steps} {...config} />
</ThemeProvider>
);
}

export default CustomChatbot;

