import { Checkbox } from '@mui/material';
import React from 'react';

export default function Analytics() {
  return (
    <div className='h-screen overflow-y-auto w-full bg-white text-black'>
      <div className='p-5'>
        <h2 className='my-5 font-bold'>SECTION 1</h2>
        <p>Customer heard about Thorndyke’s from a friend.</p>
        <p>Name: Edith 1.
          <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>Address: Flat 4, 2. Park Flats (Behind the 3…………..)
          <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>Phone number: 875934</p>
        <p>Best time to contact customer: during the 4.
          <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>Where to park: opposite entrance next to the 5.
          <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>Needs full quote showing all the jobs and the 6.
          <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>

        <h3 className='my-5 font-bold'>Questions 7-10</h3>
        <table className='border-2 p-2'>
          <thead className='border-2 p-2'>
            <tr className='border-2 p-2'>
              <th className='border-2 p-2'>Area</th>
              <th className='border-2 p-2'>Work to be done</th>
              <th className='border-2 p-2'>Notes</th>
            </tr>
          </thead>
          <tbody className='border-2 p-2'>
            <tr>
              <td className='border-2 p-2'>Kitchen</td>
              <td className='border-2 p-2'>
                Replace the <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> in the door
              </td>
              <td className='border-2 p-2'>Fix tomorrow</td>
            </tr>
            <tr className='border-2 p-2'>
              <td className='border-2 p-2'>Kitchen</td>
              <td className='border-2 p-2'>
                Paint wall above the <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              </td>
              <td className='border-2 p-2'>
                Strip paint and plaster approximately one <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> in advance
              </td>
            </tr>
            <tr className='border-2 p-2'>
              <td className='border-2 p-2'>Garden</td>
              <td className='border-2 p-2'>
                One <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> needs replacing (end of garden)
              </td>
              <td className='border-2 p-2'></td>
            </tr>
          </tbody>
        </table>

        <h2 className='my-5 font-bold'>SECTION 2</h2>
        <br />
        <p>11. Why did a port originally develop at Manham?</p>
        <Checkbox /> <p>A. It was safe from enemy attack.</p>
        <Checkbox /> <p>B. It was convenient for river transport.</p>
        <Checkbox /> <p>C. It had a good position on the sea coast.</p>
        <br />
        <p>12. What caused Manham’s sudden expansion during the Industrial Revolution?</p>
        <Checkbox /> <p>A. the improvement in mining techniques</p>
        <Checkbox /> <p>B. the increase in demand for metals</p>
        <Checkbox /> <p>C. the discovery of tin in the area</p>
        <br />
        <p>13. Why did rocks have to be sent away from Manham to be processed?</p>
        <Checkbox /> <p>A. shortage of fuel</p>
        <Checkbox /> <p>B. poor transport systems</p>
        <Checkbox /> <p>C. lack of skills among local people</p>
        <br />
        <p>14. What happened when the port declined in the twentieth century?</p>
        <Checkbox /> <p>A. The workers went away.</p>
        <Checkbox /> <p>B. Traditional skills were lost.</p>
        <Checkbox /> <p>C. Buildings were used for new purposes.</p>
        <br />
        <p>15. What did the Manham Trust hope to do?</p>
        <Checkbox /> <p>A. discover the location of the original port</p>
        <Checkbox /> <p>B. provide jobs for the unemployed</p>
        <Checkbox /> <p>C. rebuild the port complex</p>

        <h3 className='my-5 font-bold'>Questions 16-20</h3>
        <table className='border-2 p-2'>
          <thead className='border-2 p-2'>
            <tr className='border-2 p-2'>
              <th className='border-2 p-2'>Place</th>
              <th className='border-2 p-2'>Features and activities</th>
              <th className='border-2 p-2'>Advice</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-2 p-2'>
              <td className='border-2 p-2'>copper mine</td>
              <td className='border-2 p-2'>
                specially adapted miners’ <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> take visitors into the mountain
              </td>
              <td className='border-2 p-2'>
                the mine is <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> and enclosed – unsuitable for children and animals
              </td>
            </tr>
            <tr className='border-2 p-2'>
              <td className='border-2 p-2'>village school</td>
              <td className='border-2 p-2'>
                classrooms and a special exhibition of <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              </td>
              <td className='border-2 p-2'>
                a <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> is recommended
              </td>
            </tr>
            <tr className='border-2 p-2'>
              <td className='border-2 p-2'>‘The George’ (old sailing ship)</td>
              <td className='border-2 p-2'>the ship’s wheel (was lost but has now been restored)</td>
              <td className='border-2 p-2'>
                children shouldn’t use the <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className='my-5 font-bold'>SECTION 3</h2>
        <p className='my-5 font-bold'>Questions 21 and 22</p>
        <br />
        <p>Which TWO skills did Laura improve as a result of her work placement?</p>
        <Checkbox /> <p>A. communication</p>
        <Checkbox /> <p>B. design</p>
        <Checkbox /> <p>C. IT</p>
        <Checkbox /> <p>D. marketing</p>
        <Checkbox /> <p>E. organisation</p>
        <br />
        <p className='font-bold mb-5'>Questions 23 and 24</p>
        <p>Which TWO immediate benefits did the company get from Laura’s work placement?</p>
        <Checkbox /> <p>A. updates for its software</p>
        <Checkbox /> <p>B. cost savings</p>
        <Checkbox /> <p>C. an improved image</p>
        <Checkbox /> <p>D. new clients</p>
        <Checkbox /> <p>E. a growth in sales</p>
        <br />
        <h3 className='font-bold mb-5'>Questions 25-30</h3>
        <p>What source of information should Tim use at each of the following stages of the work placement?</p>
        <p>25. obtaining booklet:
          <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>26. discussing options:
          <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>27. getting updates:
          <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>28. responding to invitation for interview:
          <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>29. informing about outcome of interview:
          <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <p>30. requesting a reference:
          <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        </p>
        <br />
        <h2>SECTION 4</h2>
        <p className='my-5 font-bold'>Questions 31 – 33</p>
        <br />
        <p className='font-medium'>31. The speaker says that one problem with nanotechnology is that</p>
        <Checkbox /> <p>A. it could threaten our way of life.</p>
        <Checkbox /> <p>B. it could be used to spy on people.</p>
        <Checkbox /> <p>C. it is misunderstood by the public.</p>
        <br />
        <p className='font-medium'>32. According to the speaker, some scientists believe that nono-particles</p>
        <Checkbox /> <p>A. should be restricted to secure environments.</p>
        <Checkbox /> <p>B. should be used with more caution.</p>
        <Checkbox /> <p>C. should only be developed for essential products.</p>
        <br />
        <p className='font-medium'>33. In the speaker’s opinion, research into nanotechnology</p>
        <Checkbox /> <p>A. has yet to win popular support.</p>
        <Checkbox /> <p>B. could be seen as unethical.</p>
        <Checkbox /> <p>C. ought to be continued.</p>
        <br />
        <h3 className='my-5 font-bold'>Questions 34-40</h3>
        <br />
        <p className='font-medium'>Uses of Nanotechnology</p>
        <p className='font-medium mt-5'>Transport</p>
        <p>● Nanotechnology could allow the development of stronger 34. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /></p>
        <p>● Planes would be much lighter in weight.</p>
        <p>● 35. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> travel will be made available to the masses.</p>
        <br />
        <p className='font-medium'>Technology</p>
        <p>● Computers will be even smaller, faster, and will have a greater 36. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> ..</p>
        <p>● 37. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> Energy will become more affordable.</p>
        <br />
        <p className='font-medium'>The Environment</p>
        <p>● Nano-robots could rebuild the ozone layer.</p>
        <p>● Pollutants such as 38. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> could be removed from water</p>
        <p>● There will be no 39. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> from manufacturing.</p>
        <br />
        <p className='font-medium'>Health and Medicine</p>
        <p>● New methods of food production could eradicate famine.</p>
        <p>● Analysis of medical 40. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> will be speeded up.</p>
        <p>● Life expectancy could be increased.</p>
      </div>
    </div>
  );
}
