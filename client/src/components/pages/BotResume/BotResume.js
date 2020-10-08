
import React, { useState,useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import PdfDocRender from '../PdfDoc/PdfDocRender.js';
import tinyBot from './tiny_bot_pic.png';
import {Link} from 'react-router-dom';

// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function OpenLink (props) {
  // const link = props.step.metadata.link || '';
  // const text = props.step.metadata.text || '';

  const {steps} = props;
  let tempEd3 = "temp_ed3";
  const {name, gender , age, ed1, ed2, Programming, Math, Networking}= steps;
    if (typeof(Programming) !== 'undefined') {
      tempEd3 = Programming.value
      console.log("Programming", Programming)
    }
    if (typeof(Math) !== 'undefined') {
      tempEd3 = Math.value
      console.log("Math", Math)
    }

    if (typeof(Networking) !== 'undefined') {
      tempEd3 = Networking.value
      console.log("Networking", Networking)
    }

  var myDet = {
    name: name,
    gender: gender,
  }


    return (
      <Link to ={{
        pathname: '/pdf',
        state: {
          myDet: {myDet}
        }
      }}>Pdf</Link>
    )
}

function UserData(props) {
    // the hook to store data from steps for this is in line 21
  const [myDetails, setMyDetails] = useState({
      name:"defaulname",
      age:"defauage",
      gender: "default gender",
      
      ed1: "default ed1",
      ed2: "default ed2",
      ed3: "default ed3"
  });


  

  const {steps} = props;
  let tempEd3 = "temp_ed3";
  const {name, gender , age, ed1, ed2, Programming, Math, Networking}= steps;
    if (typeof(Programming) !== 'undefined') {
      tempEd3 = Programming.value
      console.log("Programming", Programming)
    }
    if (typeof(Math) !== 'undefined') {
      tempEd3 = Math.value
      console.log("Math", Math)
    }

    if (typeof(Networking) !== 'undefined') {
      tempEd3 = Networking.value
      console.log("Networking", Networking)
    }

  

  function submit(name, gender, age, ed1, ed2, ed3) {
    console.log('TODO: Use POST to user data');
    const formData = {
      name: name,
      gender: gender,
      age: age, 
      
      ed1: ed1,
      ed2: ed2,
      ed3: ed3,
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

    };

  submit(name.value, gender.value,age.value, ed1.value, ed2.value, tempEd3);

    useEffect(() => {
      setMyDetails(
        {
            ...myDetails,
            name: name.value,
            gender: gender.value,
            age: age.value,
            
            ed1: ed1.value,
            ed2: ed2.value,
            ed3: tempEd3,
        }
      );
    },

    [steps]);

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
            <tr>
            <td>Education</td>
              <td>{myDetails.ed1}</td>
            </tr>
            <tr>
            <td>Career</td>
              <td>{myDetails.ed2}</td>
            </tr>
            <tr>
            <td>Subcategory</td>
              <td>{myDetails.ed3}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

// function DatePicker() {
//   let startDate = new Date();

//   const handleChange = date => {
//     startDate = date;

//   }

  

//   return (
//     <DatePicker
//     selected={startDate}
//     onChange={handleChange}
//   />

    
//   );
// }

function BotResume(){

  const steps = [


    {
      id: '1',
      message: 'Hi there! Welcome to chatbot template resume!',
      trigger: '2',
    },
    {
      id: '2',
      message: "Lets begin with your Bio",
      trigger: '3',
    },
    {
      id: '3',
      message: 'What is your name?',
      trigger: 'name',
    },
  
    {
      id: 'name',
      user: true,
      trigger: '4',
    },
  
    {
      id: '4',
      message: 'Great! Thanks for that, {previousValue}! How old are you?',
      trigger: 'age',
    },
    
    
    
    {
      id: 'age',
      user: true,
      trigger: '5',
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
      id: '5',
      message: 'Ok, and your gender?',
      trigger: 'gender',
    },
   
  
  
    {
      id: 'gender',
      options: [
        { value: 'male', label: 'Male', trigger: '8' },
        { value: 'female', label: 'Female', trigger: '8' },
      ],
    },
  
  //   {
  //     id: '7',
  //     message: 'Great! And now, for your birthday',
  //     trigger: '8',
  //   },
  
  //   {
  //     id: '8',
  //     message: 'Great! And now, for your birthday',
  //     trigger: 'bday',
    
  //   () => {
  //     const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  //     const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  //     return (
  //       <>
  //         <DatePicker
  //           selected={startDate}
  //           onChange={date => setStartDate(date)}
  //           selectsStart
  //           startDate={startDate}
  //           endDate={endDate}
  //         />
  //         <DatePicker
  //           selected={endDate}
  //           onChange={date => setEndDate(date)}
  //           selectsEnd
  //           startDate={startDate}
  //           endDate={endDate}
  //           minDate={startDate}
  //         />
  //       </>
  //     );
  //   };
  
  // },
  
  
    {
      id: '8',
      message: 'Sweet! Lets fill out your education first. Please pick one or more of the options',
      trigger: 'ed1',
    }, 
  
      {
        id: 'ed1',
        options: [
          { value: 'BA', label: 'BA', trigger: '9' },
          { value: 'Master', label: 'Master', trigger: '9' },
          { value: 'PhD', label: 'PhD', trigger: '9' }, ],
  
      },
  
    {
      id: '9',
      message: 'You are a star! Now, tell me what field',
      trigger: 'ed2',
    },
    
    {
      id: 'ed2',
      options: [
        { value: 'Programming', label: 'Programming', trigger: 'Programming' },
        { value: 'Math', label: 'Math', trigger: 'Math' },
        { value: 'Networking', label: 'Networking', trigger: 'Networking' }, ],
  
    },
  
    {
      id: 'Programming',
      options: [
        { value: 'frontEnd', label: 'Front_End', trigger: '11' },
        { value: 'backEnd', label: 'Back_End', trigger: '11' },
        { value: 'dataBase', label: 'dataBase', trigger: '11' }, ],
    },
    {
      id: 'Math',
      options: [
        { value: 'Calculus', label: 'Calculus', trigger: '11' },
        { value: 'ordinaryDiffs', label: 'ordinaryDiffs', trigger: '11' },
        { value: 'complexNumbers', label: 'complexNumbers', trigger: '11' }, ],
    },
    
  
    {
      id: 'Networking',
      options: [
        { value: 'hardWiring', label: 'hardWiring', trigger: '11' },
        { value: 'softWiring', label: 'softWiring', trigger: '11' },
        { value: 'branching', label: 'branching', trigger: '11' }, ],
    },
    
    {
      id: '11',
      message: "If you would like to add more education features to your resume, you can subscribe to Premium" ,    
      trigger: "Sub",    
    },
  
    {
      id: 'Sub',
       
      options: [
        { value: 'Yes', label: 'Yes', trigger: 'subscription' },
        { value: 'No', label: 'No, I\'m good', trigger: '12' },],
      
            

    },
    
    {
      id: 'subscription',
      message: "Wonderful! IT's only 1 million dollars" ,    
      trigger: "12",    
    },
  
    {
      id: '12',
         
      options: [
        { value: 'Yes', label: 'Yes', trigger: 'review1' },
        { value: 'No', label: 'See my resume in PDF', trigger: 'linkPdf' },], 
          
    },


    {
      id: "chooseReview",
      
      options: [
        { value: 'Yes', label: 'Yes', trigger: 'review1' },
        { value: 'No', label: 'No, I\'m good', trigger: '13' },],
    },         
  

    {
      id: "linkPdf",
      asMessage: true,
      component: <OpenLink/>,
      metadata: {link:"http://localhost:3000/pdf/", text: "Here is your resume PDF"},
      trigger: "13",
    },

  
    {
      id: 'review1',
      component: <UserData />,
     // asMessage: true,
      trigger: 'pdf',
    },
  
    {
      id: 'pdf',
      component: <PdfDetails />,
     // asMessage: true,
      trigger: '13',
    },
  
    {
      id: '13',
      message: 'Thanks for using our services!',
      end: true,
    },
  
    
  ]

  function PdfDetails (props) {
      console.log ('logging pdf data')
      const {steps} = props;
    let tempEd3 = "temp_ed3";
    const {name, gender , age, ed1, ed2, Programming, Math, Networking}= steps;
      if (typeof(Programming) !== 'undefined') {
        tempEd3 = Programming.value
        console.log("Programming", Programming)
    }
      if (typeof(Math) !== 'undefined') {
        tempEd3 = Math.value
        console.log("Math", Math)
    }

      if (typeof(Networking) !== 'undefined') {
      tempEd3 = Networking.value
      console.log("Networking", Networking)
    }

      return (<PdfDocRender name={name.value} gender={gender.value}  age={age.value} ed1={ed1.value} ed2={ed2.value} ed3={tempEd3.value}    />);
  }

  const theme = {
    background: '#fff',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#ff00d2',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#ff00d2',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
    
   };
   const headerTitle = "Talk to Robbie!"
   const width = "100%"
   const botAvatar=    tinyBot      //"tiny_bot_pic.png"
   const ThemedExample = () => (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} headerTitle={headerTitle} width={width} botAvatar={botAvatar}/>
      
          </ThemeProvider>
   
   );
  
  return ThemedExample();
  
  
}



 

 

  
 

 





  






  export default BotResume;






// all available props



