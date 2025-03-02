import React from 'react'
import photo from "../../../assets/Gallery/11-2.png"


export default function Settings() {
  return (
    <div className='h-screen overflow-y-auto w-full bg-white text-black'>
    <div className='p-5'>
      <h2 className='my-5 font-bold text-xl'>SECTION 1</h2>
      <p>Enquiry about joining Youth Council</p>
      <p>Example: Name: Roger Brown</p>
      <p>Age: 18</p>
      <p>Currently staying in a 1.<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /> during the week</p>
      <p>Postal address: 2. 17, <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /> Street, Stamford, Lincs</p>
      <p>Postcode: 3<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />.</p>
      <p>Occupation: student and part-time job as a 4.<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />.</p>
      <p>Studying 5.<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /> (major subject) and history (minor subject)</p>
      <p>Hobbies: does a lot of 6<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />, and is interested in the 7<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />.</p>
      <p>On Youth Council, wants to work with young people who are 8<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />.</p>
      <p>Will come to talk to the Elections Officer next Monday at 9<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />. pm</p>
      <p>Mobile number: 10.<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></p>

      <h2 className='my-5 font-bold text-xl'>SECTION 2</h2>
      <p>New staff at theatre</p>
      <p>Questions 11 and 12</p>
      <p>Which TWO changes have been made so far during the refurbishment of the theatre?</p>
      <p>A. Some rooms now have a different use.</p>
      <p>B. A different type of seating has been installed.</p>
      <p>C. An elevator has been installed.</p>
      <p>D. The outside of the building has been repaired.</p>
      <p>E. Extra seats have been added.</p>

      <p className='my-5 font-bold text-xl'>Questions 13 and 14</p>
      <p>Which TWO facilities does the theatre currently offer to the public?</p>
      <p>A. rooms for hire</p>
      <p>B. backstage tours</p>
      <p>C. hire of costumes</p>
      <p>D. a bookshop</p>
      <p>E. a café</p>

      <p className='my-5 font-bold text-xl'>Questions 15 and 16</p>
      <p>Which TWO workshops does the theatre currently offer?</p>
      <p>A. sound</p>
      <p>B. acting</p>
      <p>C. making puppets</p>
      <p>D. make-up</p>
      <p>E. lighting</p>

      <p className='my-5 font-bold text-xl'>Questions 17-20</p>
      <img src={photo} className='my-8' />
      <p>Label the plan below.</p>
      <p>17. box office: <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></p>
      <p>18. theatre manager’s office: <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></p>
      <p>19. lighting box: <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></p>
      <p>20. artistic director’s offices: <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></p>

      <h2 className='my-5 font-bold text-xl'>SECTION 3</h2>
      <p className='my-5 font-bold text-xl'>Rocky Bay field trip</p>
      <p>21. What do the students agree should be included in their aims?</p>
      <p>A. factors affecting where organisms live</p>
      <p>B. the need to preserve endangered species</p>
      <p>C. techniques for classifying different organisms</p>

      <p className='my-5 font-bold text-xl'>22. What equipment did they forget to take on the Field Trip?</p>
      <p>A. string</p>
      <p>B. a compass</p>
      <p>C. a ruler</p>

      <p className='my-5 font-bold text-xl'>23. In Helen’s procedure section, Colin suggests a change in</p>
      <p>A. the order in which information is given.</p>
      <p>B. the way the information is divided up.</p>
      <p>C. the amount of information provided.</p>

      <p className='my-5 font-bold text-xl'>24. What do they say about the method they used to measure wave speed?</p>
      <p>A. It provided accurate results.</p>
      <p>B. It was simple to carry out.</p>
      <p>C. It required special equipment.</p>

      <p className='my-5 font-bold text-xl'>25. What mistake did Helen make when first drawing the map?</p>
      <p>A. She chose the wrong scale.</p>
      <p>B. She stood in the wrong place.</p>
      <p>C. She did it at the wrong time.</p>

      <p className='my-5 font-bold text-xl'>26. What do they decide to do next with their map?</p>
      <p>A. scan it onto a computer</p>
      <p>B. check it using photographs</p>
      <p>C. add information from the internet</p>

      <p className='my-5 font-bold text-xl'>Questions 27 and 28</p>
      <p>Which TWO problems affecting organisms in the splash zone are mentioned?</p>
      <p>A. lack of water</p>
      <p>B. strong winds</p>
      <p>C. lack of food</p>
      <p>D. high temperatures</p>
      <p>E. large waves</p>

      <p className='my-5 font-bold text-xl'>Questions 29 and 30</p>
      <p>Which TWO reasons for possible error will they include in their report?</p>
      <p>A. inaccurate records of the habitat of organisms</p>
      <p>B. influence on behaviour of organisms by observer</p>
      <p>C. incorrect identification of some organisms</p>
      <p>D. making generalisations from a small sample</p>
      <p>E. missing some organisms when counting</p>

      <h2 className='my-5 font-bold text-xl'>SECTION 4</h2>
      <p>DESIGNING A PUBLIC BUILDING: THE TAYLOR CONCERT HALL</p>
      <p>Introduction</p>
      <p>The designer of a public building may need to consider the building’s</p>
      <p>● function</p>
      <p>● physical and 31. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />. context</p>
      <p>● symbolic meaning</p>

      <p className='my-5 font-bold text-xl'>Location and concept of the Concert Hall</p>
      <p>On the site of a disused 32<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></p>
      <p>Beside a 33. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></p>
      <p>The design is based on the concept of a mystery</p>

      <p className='my-5 font-bold text-xl'>Building design</p>
      <p>It’s approached by a 34. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /> for pedestrians</p>
      <p>The building is the shape of a 35. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></p>
      <p>One exterior wall acts as a large 36. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></p>

      <p className='my-5 font-bold text-xl'>In the auditorium:</p>
      <p>● the floor is built on huge pads made of 37. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></p>
      <p>● the walls are made of local wood and are 38. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /> in shape</p>
      <p>● ceiling panels and 39. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /> on walls allow adjustment of acoustics</p>

      <p className='my-5 font-bold text-xl'>Evaluation</p>
      <p>Some critics say the 40. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />. style of the building is inappropriate</p>
    </div>
    </div>
  )
}