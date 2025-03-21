import React from 'react'
import photo from "../../../assets/Gallery/11-4.png"
import { Checkbox } from '@mui/material'

export default function Watchlist() {
  return (
    <div className='h-screen overflow-y-auto w-full bg-white text-black'>
      <div className='p-5'>

        <h2 className='my-5 font-bold text-xl'>SECTION 1</h2>
        <p>HIRING A PUBLIC ROOM</p>
        <p>Example: the Main Hall – seats 200</p>
        <p>Room and cost</p>
        <p>● the 1.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          Room – seats 100</p>
        <p>● Cost of Main Hall for Saturday evening: 2 £.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          + £250 deposit (3.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          payment is required)</p>
        <p>● Cost includes use of tables and chairs and also 4.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>● Additional charge for use of the kitchen: £25</p>

        <p>Before the event</p>
        <p>● Will need a 5.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          . licence</p>
        <p>● Need to contact caretaker (Mr Evans) in advance to arrange 6.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          .</p>

        <p>During the event</p>
        <p>● The building is no smoking</p>
        <p>● The bank should use the 7.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          door at the back</p>
        <p>● Don’t touch the system that controls the volume</p>
        <p>● For microphones, contact the caretaker</p>

        <p>After the event</p>
        <p>● Need to know the 8.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          . for the cleaning cupboard</p>
        <p>● The 9.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          must be washed and rubbish placed in black bags</p>
        <p>● All 10.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          . Must be taken down</p>
        <p>● Chairs and tables must be piled up</p>

        <h2 className='my-5 font-bold text-xl'>SECTION 2</h2>
        <p>Fiddy Working Heritage Farm</p>
        <p>Advice about visiting the farm</p>
        <p>Visitors should</p>
        <p>● take care not to harm any 11.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>● not touch any 12.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          .</p>
        <p>● wear 13.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          .</p>
        <p>● not bring 14.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          . into the farm, with certain exceptions.</p>

        <h3 className='my-5 font-bold text-xl' >Questions 15-20</h3>
        <img src={photo} className='my-8' />
        <table>
          <thead>
            <tr>
              <th>Place</th>
              <th>Feature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>15. Scarecrow</td>
              <td>.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              </td>
            </tr>
            <tr>
              <td>16. Maze</td>
              <td>.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              </td>
            </tr>
            <tr>
              <td>17. Café</td>
              <td>.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              </td>
            </tr>
            <tr>
              <td>18. Black Barn</td>
              <td>.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              </td>
            </tr>
            <tr>
              <td>19. Covered picnic area</td>
              <td>.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              </td>
            </tr>
            <tr>
              <td>20. Fiddy House</td>
              <td>.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className='my-5 font-bold text-xl'>SECTION 3</h2>
        <p className='my-5 font-bold text-xl'>Study on Gender in Physics</p>
        <p className='my-5 font-bold'>21. The students in Akira Miyake’s study were all majoring in</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. physics.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. psychology or physics.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. science, technology, engineering or mathematics.</p>

        <p className='my-5 font-bold'>22. The aim of Miyake’s study was to investigate</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. what kind of women choose to study physics.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. a way of improving women’s performance in physics.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. whether fewer women than men study physics at college.</p>

        <p className='my-5 font-bold'>23. The female physics students were wrong to believe that</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. the teachers marked them in an unfair way.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. the male students expected them to do badly.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. their test results were lower than the male students’.</p>

        <p className='my-5 font-bold'>24. Miyake’s team asked the students to write about</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. what they enjoyed about studying physics.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. the successful experiences of other people.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. something that was important to them personally.</p>

        <p className='my-5 font-bold'>25. What was the aim of the writing exercise done by the subjects?</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. to reduce stress</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. to strengthen verbal ability</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. to encourage logical thinking</p>

        <p className='my-5 font-bold'>26. What surprised the researchers about the study?</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. how few students managed to get A grades</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. the positive impact it had on physics results for women</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. the difference between male and female performance</p>

        <p className='my-5 font-bold'>27. Greg and Lisa think Miyake’s results could have been affected by</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. the length of the writing task.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. the number of students who took part.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. the information the students were given.</p>

        <p className='my-5 font-bold'>28. Greg and Lisa decide that in their own project, they will compare the effects of</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. two different writing tasks.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. a writing task with an oral task.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. two different oral tasks.</p>

        <p className='my-5 font-bold'>29. The main finding of Smolinsky’s research was that class teamwork activities</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. were most effective when done by all-women groups.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. had no effect on the performance of men or women.</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. improved the results of men more than of women.</p>

        <p className='my-5 font-bold'>30. What will Lisa and Greg do next?</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. talk to a professor</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. observe a science class</p>

        <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. look at the science timetable</p>

        <h2 className='my-5 font-bold text-xl'>SECTION 4</h2>
        <p className='my-5 font-bold'>Ocean Biodiversity</p>
        <p className='my-5 font-bold'>Biodiversity hotspots</p>
        <p>● areas containing many different species</p>
        <p>● important for locating targets for 31.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>● at first only identified on land</p>

        <p className='my-5 font-bold'>Boris Worm, 2005</p>
        <p>● identified hotspots for large ocean predators, e.g. sharks</p>
        <p>● found the ocean hotspots:</p>
        <p>– were not always rich in 32.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>– had higher temperatures at the 33.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>– had sufficient 34.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          in the water</p>

        <p className='my-5 font-bold'>Lisa Ballance, 2007</p>
        <p>● looked for hotspots for marine 35.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>● found these were all located where ocean currents meet</p>

        <p className='my-5 font-bold'>Census of Marine Life</p>
        <p>● found new ocean species living:</p>
        <p>– under the 36.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>– near volcanoes on the ocean floor</p>

        <p className='my-5 font-bold'>Global Marine Species Assessment</p>
        <p>● want to list endangered ocean species, considering:</p>
        <p>– population size</p>
        <p>– geographical distribution</p>
        <p>– rate of 37.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          .</p>
        <p>● Aim: to assess 20,000 species and make a distribution 38.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          . for each one</p>

        <p className='my-5 font-bold'>Recommendations to retain ocean biodiversity</p>
        <p>● increase the number of ocean reserves</p>
        <p>● establish 39.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          corridors (e.g. for turtles)</p>
        <p>● reduce fishing quotas</p>
        <p>● catch fish only for the purpose of 40.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
          .</p>
      </div>
    </div>
  )
}