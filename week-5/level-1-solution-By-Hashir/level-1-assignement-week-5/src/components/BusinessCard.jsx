import { useEffect, useState } from 'react'
import './BusinessCard.css'

function BusinessCard(props) {
  const [profile, loadProfile] = useState({})
  const [techStack, loadTechStack] = useState([]);
  const [ certs, loadCerts ] = useState([]);
  const [ projects, loadProjects ] = useState([]);
  
  useEffect(() => {
    loadProfile(props.profile);
    loadCerts(props.profile.certifications);
    loadTechStack(props.profile.techStack);
    loadProjects(props.profile.projects);
  },[]);
  
  console.log("The profile:", profile);
  console.log("The stack:", techStack);
  console.log("The certs:", certs);
  console.log("The stack:", techStack);


  return (
    <div className="businessCard" key={props.index}>
            <div className="personalInfo">
                <h2 className="name">{profile.name}</h2>
                <p className="jobTitle">{profile.jobTitle}</p>
                <p className="email">{profile.email}</p>
                <p className="phone">{profile.phone}</p>
                <p className="website">Website: <a href={profile.website}>{profile.website}</a></p>
                <p className="github">GitHub: <a href={profile.github}>{profile.github}</a></p>
            </div>
            <div className="additionalInfo">
                <h3>Additional Information</h3>
                <p><strong>Tech Stack:</strong></p>  
                <ul>
                    {
                        techStack.map(( item ) => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
                <p><strong>Experience:</strong>{profile.experience}</p>
                <p><strong>Education:</strong> {profile.education}</p>
                <p><strong>Projects:</strong></p>
                <ul>
                    {
                        projects.map(( item ) => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
                <p><strong>Certifications:</strong></p>
                <ul>
                    {
                        certs.map(( certification ) => {
                            return <li>{certification}</li>
                        })
                    }
                </ul>
            </div>
            <div className="companyInfo">
                <h3 className="companyName">{profile.companyName}</h3>
                <p className="address">{profile.companyAddress}</p>
                <p className="companyWebsite">Website: <a href={profile.companyWebsite}>{profile.companyWebsite}</a></p>
            </div>
        </div>
  )
}

export default BusinessCard
