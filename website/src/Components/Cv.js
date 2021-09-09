import React from 'react';
import '../Cv.css';
import { IoCodeSlashSharp, IoGameController, IoMusicalNotesSharp } from 'react-icons/io5';
import { AiFillYoutube } from 'react-icons/ai';

class Cv extends React.Component {

    render(){
        return(
            <div className='page-wrapper'>
                <div class="resume">
    <div class="resume_left">
      <div class="resume_content">
        <div class="resume_item resume_info">
          <div class="title">
            <p class="bold">Garin McCullick</p>
            <p class="regular">Web Developer</p>
          </div>
        </div>
        <div class="resume_item resume_skills">
          <div class="title">
            <p class="bold">skills</p>
          </div>
          <ul>
            <li>
              <div class="skill_name">
                HTML (3yrs)
              </div>
              <div class="skill_progress">
                <span style={{width:'99%'}}></span>
              </div>
              <div class="skill_per">99%</div>
            </li>
            <li>
              <div class="skill_name">
                CSS (3yrs)
              </div>
              <div class="skill_progress">
                <span style={{width:'99%'}}></span>
              </div>
              <div class="skill_per">99%</div>
            </li>
            <li>
              <div class="skill_name">
                React (1yrs)
              </div>
              <div class="skill_progress">
                <span style={{width:'80%'}}></span>
              </div>
              <div class="skill_per">80%</div>
            </li>
            <li>
              <div class="skill_name">
                JS <br /> (1yrs)
              </div>
              <div class="skill_progress">
                <span style={{width:'80%'}}></span>
              </div>
              <div class="skill_per">80%</div>
            </li>
            <li>
              <div class="skill_name">
                GIT <br /> (1yrs)
              </div>
              <div class="skill_progress">
                <span style={{width:'88%'}}></span>
              </div>
              <div class="skill_per">88%</div>
            </li>
            <li>
                <div class="skill_name">
                  Redux (1yrs)
                </div>
                <div class="skill_progress">
                  <span style={{width:'70%'}}></span>
                </div>
                <div class="skill_per">70%</div>
              </li>
          </ul>
        </div>
        <div class="resume_item resume_work">
         <div class="title">
            <p class="bold">Education</p>
          </div>
          <div className='education-container'>
                 <div className="date-left">Jan 2020 - May 2020</div> 
                 <div className="info-left">
                  <p>State Technical College of Missouri, Linn, MO</p> 
                  <p>Computer Application Development</p>
                 </div>
                  
               <div className="date-left">Feb 2021 - June 2021</div>
               <div className="info-left">
                  <p>Lambda School</p>
                  <p>Full Stack Web Development</p>
                </div>
          </div>
     </div>
      </div>
   </div>
   <div class="resume_right">
     
     <div class="resume_item resume_education">
       <div class="title">
            <p class="bold">Experience</p>
          </div>
       <ul>
             <li>
                <div class="date">2020 - present</div> 
                 <div class="info">
                      <p class="semi-bold">Web Development</p> 
                   <ul>
                       <li>
                           Over 5,000 hours of coding experience between multiple languages and libraries including but not limited to HTML5, CSS3, Javascript, React, Git.
                       </li>
                   </ul>
                 </div>
             </li>
             <li>
                 <div class="date">2017 - 2021</div> 
                 <div class="info">
                      <p class="semi-bold">Mccullick & Sons Construction</p> 
                   <ul>
                       <li>
                        Signal equipment operators to facilitate alignment, movement, or adjustment of machinery, equipment, or materials.
                       </li>
                       <li>
                        Load, unload, and identify building materials, machinery, or tools, distributing them to the appropriate locations, according to project plans or specifications.
                       </li>
                   </ul>
                 </div>
             </li>
             <li>
                <div class="date">2017 - 2021</div> 
                <div class="info">
                     <p class="semi-bold">Mcdonalds</p> 
                  <ul>
                      <li>
                        Maintained high standards of customer service during high-volume, fast-paced operations.
                      </li>
                  </ul>
                </div>
            </li>
         </ul>
     </div>
     <div class="resume_item resume_hobby">
       <div class="title">
            <p class="bold">Hobbies</p>
          </div>
        <ul>
          <li><i><IoGameController /></i></li>
          <li><i><AiFillYoutube /></i></li>
          <li><i><IoMusicalNotesSharp /></i></li>
          <li><i><IoCodeSlashSharp /></i></li>
       </ul>
     </div>
   </div>
 </div>
            </div>
        )
    }
}

export default Cv;