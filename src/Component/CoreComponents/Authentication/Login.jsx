import React from 'react'
import photo from "../../../assets/Gallery/11-4.png"

export default function Login() {
  return (
    <div className="h-screen overflow-y-auto w-full bg-slate-900">
    <div className="p-5">
      <h2 className="font-bold my-3 text-xl">SECTION 1</h2>
      <p className="font-bold my-3">Complete the table below.</p>
      <p className="font-bold my-3">Write ONE WORD AND/OR A NUMBER for each answer.</p>
      <table className='border-2 p-5'>
        <thead className='border-2'>
          <tr className='border-2'>
            <th className='border-2 p-2'>Event</th>
            <th className='border-2 p-2'>Cost</th>
            <th className='border-2 p-2'>Venue</th>
            <th className='border-2 p-2'>Notes</th>
          </tr>
        </thead>
        <tbody className='border-2'>
          <tr className='border-2'>
            <td className='border-2 p-2'>Jazz band</td>
            <td className='border-2 p-2'>Example: Tickets available for £15</td>
            <td className='border-2 p-2'>The 1…………. school</td>
            <td className='border-2 p-2'>Also appearing: Carolyn Hart (plays the 2…………)</td>
          </tr>
          <tr className='border-2'>
            <td className='border-2 p-2'>Duck races</td>
            <td className='border-2 p-2'>£1 per duck</td>
            <td className='border-2 p-2'>Start behind the 3………….</td>
            <td className='border-2 p-2'>Prize: tickets for 4………… held at the end of the festival. Ducks can be bought in the 5………….</td>
          </tr>
          <tr className='border-2'>
            <td className='border-2 p-2'>Flower show</td>
            <td className='border-2 p-2'>Free</td>
            <td className='border-2 p-2'>6…………. Hall</td>
            <td className='border-2 p-2'>Prizes presented at 5 pm by a well-known 7………….</td>
          </tr>
        </tbody>
      </table>

      <h3 className="font-bold my-3 text-xl">Questions 8-10</h3>
      <p className="font-bold my-3">Who is each play suitable for?</p>
      <p>Write the correct letter, A, B, or C, next to Questions 8-10.</p>
      <p>A. mainly for children</p>
      <p>B. mainly for adults</p>
      <p>C. suitable for people of all ages</p>
      <p>Plays:</p>
      <p>8. The Mystery of Muldoon: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>9. Fire and Flood: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>10. Silly Sailor: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>

      <h2 className="font-bold my-3 text-xl">SECTION 2</h2>
      <p className="font-bold my-3">What does the speaker say about each of the following collections?</p>
      <p className="font-bold my-3">Choose SIX answers from the box and write the correct letter, A-G, next to Questions 11-16.</p>
      <p>Comments:</p>
      <p>A. was given by one person</p>
      <p>B. was recently publicised in the media</p>
      <p>C. includes some items given by members of the public</p>
      <p>D. includes some items given by the artists</p>
      <p>E. includes the most popular exhibits in the museum</p>
      <p>F. is the largest of its kind in the country</p>
      <p>G. has had some of its contents relocated</p>

      <p className="font-bold my-3">Collections:</p>
      <p>11. 20th- and 21st-century paintings: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>12. 19th-century paintings: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>13. Sculptures: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>14. ‘Around the world’ exhibition: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>15. Coins: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>16. Porcelain and glass: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>

      <h3 className="font-bold my-3 text-xl">Questions 17-20</h3>
      <p className="font-bold my-3">Label the plan below.</p>
      <p>Write the correct letter, A-H, next to Questions 17-20.</p>
      <img src={photo} className='my-8' />
      <p>17. restaurant: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>18. café: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>19. baby-changing facilities: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>20. cloakroom: <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>

      <h2 className="font-bold my-3 text-xl">SECTION 3</h2>
      <p className="font-bold my-3">Questions 21 and 22</p>
      <p>Which TWO characteristics were shared by the subjects of Joanna’s psychology study?</p>
      <p>A. They had all won prizes for their music.</p>
      <p>B. They had all made music recordings.</p>
      <p>C. They were all under 27 years old.</p>
      <p>D. They had all toured internationally.</p>
      <p>E. They all played a string instrument.</p>

      <p className="font-bold my-3 text-xl">Questions 23 and 24</p>
      <p className="font-bold my-3">Which TWO points does Joanna make about her use of telephone interviews?</p>
      <p>A. It meant rich data could be collected.</p>
      <p>B. It allowed the involvement of top performers.</p>
      <p>C. It led to a stressful atmosphere at times.</p>
      <p>D. It meant interview times had to be limited.</p>
      <p>E. It caused some technical problems.</p>

      <p className="font-bold my-3 text-xl">Questions 25 and 26</p>
      <p className="font-bold my-3">Which TWO topics did Joanna originally intend to investigate in her research?</p>
      <p>A. regulations concerning concert dress</p>
      <p>B. audience reactions to the dress of performers</p>
      <p>C. changes in performer attitudes to concert dress</p>
      <p>D. how choice of dress relates to performer roles</p>
      <p>E. links between musical instrument and dress choice</p>

      <p className="font-bold my-3 text-xl">Questions 27-30</p>
      <p className="font-bold my-3">Choose the correct letter, A, B, or C.</p>
      <p>27. Joanna concentrated on women performers because</p>
      <p>A. women are more influenced by fashion.</p>
      <p>B. women’s dress has led to more controversy.</p>
      <p>C. women’s code of dress is less strict than men’s.</p>

      <p className="font-bold my-3">28. Mike Frost’s article suggests that in popular music, women’s dress is affected by</p>
      <p>A. their wish to be taken seriously.</p>
      <p>B. their tendency to copy each other.</p>
      <p>C. their reaction to the masculine nature of the music.</p>

      <p className="font-bold my-3">29. What did Joanna’s subjects say about the audience at a performance?</p>
      <p>A. The musicians’ choice of clothing is linked to respect for the audience.</p>
      <p>B. The clothing should not distract the audience from the music.</p>
      <p>C. The audience should make the effort to dress appropriately.</p>

      <p>30. According to the speakers, musicians could learn from sports scientists about</p>
      <p>A. the importance of clothing for physical freedom.</p>
      <p>B. the part played by clothing in improving performance.</p>
      <p>C. the way clothing may protect against physical injury.</p>

      <h2 className="font-bold my-3 text-xl">SECTION 4</h2>
      <p className="font-bold my-3">The use of soil to reduce carbon dioxide (CO2) in the atmosphere</p>
      <p className="font-bold my-3">Rattan Lal:</p>
      <p>● Claims that 13% of CO2 in the atmosphere could be absorbed by agricultural soils</p>
      <p>● Erosion is more likely in soil that is 31<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>● Lai found soil in Africa that was very 32<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>● It was suggested that carbon from soil was entering the atmosphere</p>

      <p className="font-bold my-3">Soil and carbon:</p>
      <p>● plants turn CO2 from the air into carbon-based substances such as 33<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>● some CO2 moves from the 34<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> of plants to microbes in the soil</p>
      <p>● carbon was lost from the soil when agriculture was invented</p>

      <p className="font-bold my-3">Regenerative agriculture:</p>
      <p>● uses established practices to make sure soil remains fertile and 35…<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>
      <p>● e.g. through year-round planting and increasing the 36<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> of plants that are grown</p>

      <p className="font-bold my-3">California study:</p>
      <p>● taking place on a big 37…<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> farm</p>
      <p>● uses compost made from waste from agriculture and 38<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></p>

      <p className="font-bold my-3">Australia study:</p>
      <p>● aims to increase soil carbon by using 39<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> that are always green</p>

      <p className="font-bold my-3">Future developments may include:</p>
      <p>● reducing the amount of fertilizer used in farming</p>
      <p>● giving farmers 40<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> for carbon storage, as well as their produce</p>
    </div>
    </div>
  )
}