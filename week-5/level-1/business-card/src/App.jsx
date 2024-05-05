import React, { useState } from 'react';
import { BusinessCard } from './BusinessCard';

function App() {
  const [name, setName] = useState("John Doe");
  const [description, setDescription] = useState("Full Stack Developer");
  const [interests, setInterests] = useState(["Coding", "Reading", "Traveling"]);
  const [linkedin, setLinkedin] = useState("https://linkedin.com");
  const [twitter, setTwitter] = useState("https://twitter.com");
  const [otherSocialMedia, setOtherSocialMedia] = useState("");
  const [otherSocialMediaLabel, setOtherSocialMediaLabel] = useState("");
  const [otherSocialMediaLink, setOtherSocialMediaLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or data update here
    const otherSocialMedia = { label: otherSocialMediaLabel, link: otherSocialMediaLink };
  };

  return (
    <div className="App">
      <h1>My Business Card</h1>
      <BusinessCard
        name={name}
        description={description}
        interests={interests}
        linkedin={linkedin}
        twitter={twitter}
        otherSocialMedia={{ label: otherSocialMediaLabel, link: otherSocialMediaLink }}
      />
      {/* Add a form to update the data */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" />
        <input type="text" value={interests.join(", ")} onChange={(e) => setInterests(e.target.value.split(", "))} placeholder="Enter Interests (comma separated)" />
        <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="Enter LinkedIn link" />
        <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="Enter Twitter link" />
        <input type="text" value={otherSocialMediaLabel} onChange={(e) => setOtherSocialMediaLabel(e.target.value)} placeholder="Enter Other Social Media label" />
        <input type="text" value={otherSocialMediaLink} onChange={(e) => setOtherSocialMediaLink(e.target.value)} placeholder="Enter Other Social Media link" />
        <button type="submit">Add Other Social Media</button>
      </form>
    </div>
  );
}

export default App;
