import React from 'react'
import photo from "../../../assets/Gallery/11-2.png"
import { Checkbox } from '@mui/material'


export default function Settings() {
  return (
    <div className='h-screen overflow-y-auto w-full bg-white text-black'>
      <div className='p-5'>
        <h2 className='my-5 font-bold text-xl'>SECTION 1</h2>
        <p>Enquiry about joining Youth Council</p>
        <p>Example: Name: Roger Brown</p>
        <p>Age: 18</p>
        <p>Currently staying in a 1.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          during the week</p>
        <p>Postal address: 2. 17, <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          Street, Stamford, Lincs</p>
        <p>Postcode: 3<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          .</p>
        <p>Occupation: student and part-time job as a 4.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          .</p>
        <p>Studying 5.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          (major subject) and history (minor subject)</p>
        <p>Hobbies: does a lot of 6<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          , and is interested in the 7<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          .</p>
        <p>On Youth Council, wants to work with young people who are 8<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          .</p>
        <p>Will come to talk to the Elections Officer next Monday at 9<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          . pm</p>
        <p>Mobile number: 10.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>

        <h2 className='my-5 font-bold text-xl'>SECTION 2</h2>
        <p>New staff at theatre</p>
        <p>Questions 11 and 12</p>
        <p>Which TWO changes have been made so far during the refurbishment of the theatre?</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. Some rooms now have a different use.</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. A different type of seating has been installed.</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. An elevator has been installed.</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>D. The outside of the building has been repaired.</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>E. Extra seats have been added.</p>

        <p className='my-5 font-bold text-xl'>Questions 13 and 14</p>
        <p>Which TWO facilities does the theatre currently offer to the public?</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. rooms for hire</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. backstage tours</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. hire of costumes</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>D. a bookshop</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>E. a café</p>

        <p className='my-5 font-bold text-xl'>Questions 15 and 16</p>
        <p>Which TWO workshops does the theatre currently offer?</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. sound</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. acting</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. making puppets</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>D. make-up</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>E. lighting</p>

        <p className='my-5 font-bold text-xl'>Questions 17-20</p>
        <img src={photo} className='my-8' />
        <p>Label the plan below.</p>
        <p>17. box office: <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>18. theatre manager’s office: <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>19. lighting box: <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>20. artistic director’s offices: <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>

        <h2 className='my-5 font-bold text-xl'>SECTION 3</h2>
        <p className='my-5 font-bold text-xl'>Rocky Bay field trip</p>
        <p>21. What do the students agree should be included in their aims?</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. factors affecting where organisms live</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. the need to preserve endangered species</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. techniques for classifying different organisms</p>

        <p className='my-5 font-bold text-xl'>22. What equipment did they forget to take on the Field Trip?</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. string</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. a compass</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. a ruler</p>

        <p className='my-5 font-bold text-xl'>23. In Helen’s procedure section, Colin suggests a change in</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. the order in which information is given.</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. the way the information is divided up.</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. the amount of information provided.</p>

        <p className='my-5 font-bold text-xl'>24. What do they say about the method they used to measure wave speed?</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. It provided accurate results.</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. It was simple to carry out.</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. It required special equipment.</p>

        <p className='my-5 font-bold text-xl'>25. What mistake did Helen make when first drawing the map?</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. She chose the wrong scale.</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. She stood in the wrong place.</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. She did it at the wrong time.</p>

        <p className='my-5 font-bold text-xl'>26. What do they decide to do next with their map?</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. scan it onto a computer</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. check it using photographs</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. add information from the internet</p>

        <p className='my-5 font-bold text-xl'>Questions 27 and 28</p>
        <p>Which TWO problems affecting organisms in the splash zone are mentioned?</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. lack of water</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. strong winds</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. lack of food</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>D. high temperatures</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>E. large waves</p>

        <p className='my-5 font-bold text-xl'>Questions 29 and 30</p>
        <p>Which TWO reasons for possible error will they include in their report?</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. inaccurate records of the habitat of organisms</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. influence on behaviour of organisms by observer</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. incorrect identification of some organisms</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>D. making generalisations from a small sample</p>
        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>E. missing some organisms when counting</p>

        <h2 className='my-5 font-bold text-xl'>SECTION 4</h2>
        <p>DESIGNING A PUBLIC BUILDING: THE TAYLOR CONCERT HALL</p>
        <p>Introduction</p>
        <p>The designer of a public building may need to consider the building’s</p>
        <p>● function</p>
        <p>● physical and 31. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          . context</p>
        <p>● symbolic meaning</p>

        <p className='my-5 font-bold text-xl'>Location and concept of the Concert Hall</p>
        <p>On the site of a disused 32<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>Beside a 33. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>The design is based on the concept of a mystery</p>

        <p className='my-5 font-bold text-xl'>Building design</p>
        <p>It’s approached by a 34. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          for pedestrians</p>
        <p>The building is the shape of a 35. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>One exterior wall acts as a large 36. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>

        <p className='my-5 font-bold text-xl'>In the auditorium:</p>
        <p>● the floor is built on huge pads made of 37. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>● the walls are made of local wood and are 38. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          in shape</p>
        <p>● ceiling panels and 39. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          on walls allow adjustment of acoustics</p>

        <p className='my-5 font-bold text-xl'>Evaluation</p>
        <p>Some critics say the 40. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          . style of the building is inappropriate</p>
      </div>
    </div>
  )
}