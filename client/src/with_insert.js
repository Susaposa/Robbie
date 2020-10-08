//  import React, { useState, useEffect } from 'react';
//  import ChatBot from 'react-simple-chatbot';
//  import { ThemeProvider } from 'styled-components';
// function BotResume(props){
//   const [clientDetails, setClientDetails] = useState({
//     name:"Default Name",
//     yOb:"Defaul year",
//     education: "Default"
//   });
//  const saveName =(name) => {
//    console.log("name", name);
//    setClientDetails({
//     ...clientDetails,
//     name: name});
//     console.log("client", clientDetails);
//     setClientDetails({
//       ...clientDetails,
//       name: name});
//       console.log("client", clientDetails);
// return "name saved";
//  }
//  const steps =[
//     {
//       id: 'hello-world',
//       message: 'Hello World!',
//       trigger: "ask_name",
//     },
//     {
//       id: 'ask_name',
//       message: 'Name?',
//       trigger: 'get_name'
//     },
//     {
//       id: 'get_name',
//       user: true,
//       trigger: 'save_name'
//     },
//     {
//       id: 'save_name',
//       message: ({ previousValue, steps })=>saveName(previousValue) ,//({ previousValue, steps }) => 'Hello',//saveName() ,//"saving {previousValue}",
//       trigger: 'display_name'
//     },
//     {
//       id: 'display_name',
//       message: clientDetails.name,
//       end: true
//     }
//   ] ;
//   const theme = {
//     background: '#008000',
//     fontFamily: 'Helvetica Neue',
//     headerBgColor: '#EF6C00',
//     headerFontColor: '#fff',
//     headerFontSize: '15px',
//     botBubbleColor: '#000',
//     botFontColor: '#fff',
//     userBubbleColor: '#fff',
//     userFontColor: '#4a4a4a',
    
//   };
// const width = "100%";

  
// const ThemedExample = () => (
//   <ThemeProvider theme={theme}>
//     <ChatBot steps={steps} width={width} />;
//   </ThemeProvider>
// );
// ///useEffect(setClientDetails({...clientDetails}));

// // return <ThemeProvider theme={theme}>
// // <ChatBot steps={steps} />
// // </ThemeProvider> 
// return ThemedExample()
// }
// export default BotResume;






// all available props
import React, { useState,useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

// class Review extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: '',
//       gender: '',
//       age: '',
//     };
//   }

//   componentWillMount() {
//     const { steps } = this.props;
//     const { name, gender, age } = steps;

//     this.setState({ name, gender, age });
//   }

//   render() {
//     const { name, gender, age } = this.state;
//     return (
//       <div style={{ width: '100%' }}>
//         <h3>Summary</h3>
//         <table>
//           <tbody>
//             <tr>
//               <td>Name</td>
//               <td>{name.value}</td>
//             </tr>
//             <tr>
//               <td>Gender</td>
//               <td>{gender.value}</td>
//             </tr>
//             <tr>
//               <td>Age</td>
//               <td>{age.value}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// Review.propTypes = {
//   steps: PropTypes.object,
// };

// Review.defaultProps = {
//   steps: undefined,
// };
function Review(props) {
    
  const [myDetails, setMyDetails] = useState({
      name:"defaulname",
      age:"defauage",
      gender: "default gender"
  });
const {steps} = props;
const {name, gender , age}= steps;
console.log("steps name gender age",name.value)

// console.log("shsh", myDetails)

 // render() {
    //const { name, gender, age } = this.state;
  //   const fetchAnother = (title) =>{
  //     let my_content=""
  //     fetch('/api/mongodb/blogposts/?title=' + title)
  //         .then(response => response.json())
  //         .then(data => {
  //           console.log('Got my sec function back', data);
  //           my_content = data[0].text
   
  //   localStorage.setItem('rememberMeAgain', my_content);        
    
  
  //  // console.log("mycontete", {my_sec_content})
    
  //         });
  //   return localStorage.getItem('rememberMeAgain');
  //   }


  function submit(name, gender, age) {
    console.log('TODO: Use POST to user data');
    const formData = {
      name: name,
      gender: gender,
      age: age
    };

    const fetchOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    };

    fetch('/api/mongodb/usersData/', fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);
      });
      //props.history.push('/')

  }
  submit(name.value, gender.value,age.value);
    useEffect(() => {
      setMyDetails(
        {
            ...myDetails,
            name: name.value,
            gender: gender.value,
            age: age.value
        }
      );
    },[steps]);
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{myDetails.name}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{myDetails.gender}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{myDetails.age}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
function BotResume() {
  //render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What is your gender?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'male', label: 'Male', trigger: '5' },
              { value: 'female', label: 'Female', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'How old are you?',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: '7',
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value < 0) {
                return 'value must be positive';
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
           // asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
        ]}
      />
    );
  //}
}

export default BotResume;




