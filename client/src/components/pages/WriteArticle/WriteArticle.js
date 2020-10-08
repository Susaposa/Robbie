import React, { useState } from 'react';
import './WriteArticle.css';

function WriteArticle(props) {
  const [firstLast, setfirstLast] = useState('');
  const [topSkills, settopSkills] = useState('');
  const [contactInfo, setcontactInfo] = useState('');
  const [yearsExperience, setyearsExperience] = useState('');




  function onChangefirstLast(ev) {
    setfirstLast(ev.target.value);
  }

  function onChangetopSkills(ev) {
    settopSkills(ev.target.value);
  }

  function onChangeyearsExperience(ev) {
    setyearsExperience(ev.target.value);
  }

  function onChangecontactInfo(ev) {
    setcontactInfo(ev.target.value);
  }

  function submit() {
    const formData = {
      firstLast: firstLast,
      topSkills: topSkills,
      contactInfo: contactInfo,
      yearsExperience: yearsExperience,

    };
    // Can also be written:
    // const formData = {title, text: content};

    fetch('/api/mongodb/blogposts/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to blog
        // props.history.push('/blog/');
      });
  }

  return (
    <div className="WriteArticle">
      <h1>Resume Info</h1>
      <input
          name="firstLast"
          placeholder="First name, Last name"
          value={firstLast}
          onChange={onChangefirstLast}
        />
      <br />
      <input
          name="yearsExperience"
          placeholder="How many years of Experience do you Have?"
          value={yearsExperience}
          onChange={onChangeyearsExperience}
        />
      <br />

      <input
          name="topSkills"
          placeholder="What are you top skills / Languages?"
          value={topSkills}
          onChange={onChangetopSkills}
        />
              <br />

      <input
          name="contactInfo"
          placeholder="What Phone number may we reach you at?"
          value={contactInfo}
          onChange={onChangecontactInfo}
        />

      <br />

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default WriteArticle;
