import React, { useState } from 'react';

export default function TopMovers() {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle the full text

  const toggleText = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };

  return (
    <div className="bg-slate-900 h-screen overflow-y-auto">
      <div className="p-5">
        <div>
          <h1 className="text-4xl font-bold">READING PASSAGE 1</h1>
          <p className="my-5">
            You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.
          </p>
          <h1 className="text-3xl font-bold my-5">Stepwells
          </h1>
          <p>
            A millennium ago, stepwells were fundamental to life in the driest parts of India. Although many have been neglected, recent restoration has returned them to their former glory. Richard Cox travelled to north-western India to document these spectacular monuments from a bygone era.

            During the sixth and seventh centuries, the inhabitants of the modern-day states of Gujarat and Rajasthan in North-western India developed a method of gaining access to clean, fresh groundwater during the dry season for drinking, bathing, watering animals and irrigation. However, the significance of this invention – the stepwell – goes beyond its utilitarian application.

            Unique to the region, stepwells are often architecturally complex and vary widely in size and shape. During their heyday, they were places of gathering, of leisure, of relaxation and of worship for villagers of all but the lowest castes. Most stepwells are found dotted around the desert areas of Gujarat (where they are called vav) and Rajasthan (where they are known as baori), while a few also survive in Delhi. Some were located in or near villages as public spaces for the community; others were positioned beside roads as resting places for travellers.

            As their name suggests, stepwells comprise a series of stone steps descending from ground level to the water source (normally an underground aquifer) as it recedes following the rains. When the water level was high, the user needed only to descend a few steps to reach it; when it was low, several levels would have to be negotiated.

            Some wells are vast, open craters with hundreds of steps paving each sloping side, often in tiers. Others are more elaborate, with long stepped passages leading to the water via several storeys. Built from stone and supported by pillars, they also included pavilions that sheltered visitors from the relentless heat. But perhaps the most impressive features are the intricate decorative sculptures that embellish many stepwells, showing activities from fighting and dancing to everyday acts such as women combing their hair and churning butter.

            Down the centuries, thousands of wells were constructed throughout northwestern India, but the majority have now fallen into disuse; many are derelict and dry, as groundwater has been diverted for industrial use and the wells no longer reach the water table. Their condition hasn’t been helped by recent dry spells: southern Rajasthan suffered an eight-year drought between 1996 and 2004.
          </p>

          <p className={isExpanded ? '' : ''}>
            However, some important sites in Gujarat have recently undergone major restoration, and the state government announced in June last year that it plans to restore the stepwells throughout the state.

            In Patan, the state’s ancient capital, the stepwell of Rani Ki Vav (Queen’s Stepwell) is perhaps the finest current example. It was built by Queen Udayamati during the late 11th century, but became silted up following a flood during the 13th century. But the Archaeological Survey of India began restoring it in the 1960s, and today it’s in pristine condition. At 65 metres long, 20 metres wide and 27 metres deep, Rani Ki Vav features 500 distinct sculptures carved into niches throughout the monument, depicting gods such as Vishnu and Parvati in various incarnations. Incredibly, in January 2001, this ancient structure survived a devastating earthquake that measured 7.6 on the Richter scale.
          </p>

          {isExpanded && (
            <p>
              Today, following years of neglect, many of these monuments to medieval engineering have been saved by the Archaeological Survey of India, which has recognised the importance of preserving them as part of the country’s rich history. Tourists flock to wells in far-flung corners of northwestern India to gaze in wonder at these architectural marvels from 1,000 years ago, which serve as a reminder of both the ingenuity and artistry of ancient civilisations and of the value of water to human existence.
              Another example is the Surya Kund in Modhera, northern Gujarat, next to the Sun Temple, built by King Bhima I in 1026 to honour the sun god Surya. It’s actually a tank (kund means reservoir or pond) rather than a well, but displays the hallmarks of stepwell architecture, including four sides of steps that descend to the bottom in a stunning geometrical formation. The terraces house 108 small, intricately carved shrines between the sets of steps.

              Rajasthan also has a wealth of wells. The ancient city of Bundi, 200 kilometres south of Jaipur, is renowned for its architecture, including its stepwells. One of the larger examples is Raniji Ki Baori, which was built by the queen of the region, Nathavatji, in 1699. At 46 metres deep, 20 metres wide and 40 metres long, the intricately carved monument is one of 21 baoris commissioned in the Bundi area by Nathavatji.

              In the old ruined town of Abhaneri, about 95 kilometres east of Jaipur, is Chand Baori, one of India’s oldest and deepest wells; aesthetically, it’s perhaps one of the most dramatic. Built in around 850 AD next to the temple of Harshat Mata, the baori comprises hundreds of zigzagging steps that run along three of its sides, steeply descending 11 storeys, resulting in a striking geometric pattern when seen from afar. On the fourth side, covered verandas supported by ornate pillars overlook the steps.

              Still in public use is Neemrana Ki Baori, located just off the Jaipur–Dehli highway. Constructed in around 1700, it’s nine storeys deep, with the last two levels underwater. At ground level, there are 86 colonnaded openings from where the visitor descends 170 steps to the deepest water source.
            </p>
          )}
          <button
            onClick={toggleText}
            className="text-blue-500 my-2"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Questions 1–5</h1>
          <p className='my-5'>Do the following statements agree with the information given in Reading Passage 1?</p>
          <p className='my-5'>In boxes 1–5 on your answer sheet, write</p>
          <div>
            <div className='my-5'>
              <div className='flex items-center my-5 gap-10'><h1>TRUE</h1>
              <p> if the statement agrees with the information</p>
              </div>
              <div className='flex items-center my-5 gap-10'><h1>FALSE</h1>
              <p> if the statement contradicts the information</p>
              </div>
              <div className='flex items-center my-5 gap-10'><h1>NOT GIVEN</h1>
              <p>if there is no information on this</p>
              </div>
            </div>
          </div>
  
          <p>1   Examples of ancient stepwells can be found all over the world.
            <br />

            2   Stepwells had a range of functions, in addition to those related to water collection.
            <br />
            3   The few existing stepwells in Delhi are more attractive than those found elsewhere.
            <br />
            4   It took workers many years to build the stone steps characteristic of stepwells.
            <br />
            5   The number of steps above the water level in a stepwell altered during the course of a year.
          </p>

          <h1 className="text-4xl font-bold my-5">Questions 6–8
          </h1>
          <p className='my-5'>Answer the questions below.</p>
          <p className='my-5'>Choose ONE WORD ONLY from the passage for each answer.</p>
          <p className='my-5'>Write your answers in boxes 6–8 on your answer sheet.</p>
          <p className='my-5'>6   Which part of some stepwells provided shade for people?</p>
          <p className='my-5'>7   What type of serious climatic event, which took place in southern Rajasthan, is mentioned in the article?</p>
          <p className='my-5'>8   Who are frequent visitors to stepwells nowadays?</p>

          <h1 className="text-4xl font-bold my-5">Questions 9-13
          </h1>
          <p className='my-5'>Complete the table below</p>
          <p className='my-5'>Choose ONE WORD AND/OR A NUMBER from the passage for each answer.</p>
          <p className='my-5'>Write your answers in boxes 9-13 on your answer sheet.</p>

          <table className="min-w-full table-auto  border-slate-200 border-2 text-white">
        <thead className=' border-slate-200 border-2'>
          <tr className=' border-slate-200 border-2'>
            <th className="border-b p-2 className=' border-slate-200 border-2' text-left">Stepwell</th>
            <th className="border-b p-2 className=' border-slate-200 border-2' text-left">Date</th>
            <th className="border-b p-2 className=' border-slate-200 border-2' text-left">Features</th>
            <th className="border-b p-2 className=' border-slate-200 border-2' text-left">Other Notes</th>
          </tr>
        </thead>
        <tbody className=' border-slate-200 border-2'>
          <tr className=' border-slate-200 border-2'>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Rani Ki Vav</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Late 11th century</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">As many as 500 sculptures decorate the monument</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Restored in the 1990s. Excellent condition, despite the earthquake of 2001.</td>
          </tr>
          <tr className=' border-slate-200 border-2'>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Surya Kund</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">1026</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Steps on the 10th terrace produce a geometric pattern. Carved shrines.</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Looks more like a tank than a well.</td>
          </tr>
          <tr className=' border-slate-200 border-2'>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Raniji Ki Baori</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">1699</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Intricately carved monument</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">One of 21 baoris in the area commissioned by Queen Nathavatji</td>
          </tr>
          <tr className=' border-slate-200 border-2'>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Chand Baori</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">850 AD</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Steps take you down 11 storeys to the bottom</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Old, deep, and very dramatic. Has verandas which provide a view to the steps.</td>
          </tr>
          <tr className=' border-slate-200 border-2'>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Neemrana Ki Baori</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">1700</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Has two underwater levels</td>
            <td className="border-b p-2 className=' border-slate-200 border-2'">Used by the public today.</td>
          </tr>
        </tbody>
      </table>
        </div>

        <div>
          <h1 className="text-4xl font-bold my-5">READING PASSAGE 2</h1>
          <p className="my-5">
            You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.
          </p>
          <h1 className="text-3xl font-bold my-5">EUROPEAN TRANSPORT SYSTEMS 1990-2010
          </h1>

          <p>
            A millennium ago, stepwells were fundamental to life in the driest parts of India. Although many have been neglected, recent restoration has returned them to their former glory. Richard Cox travelled to north-western India to document these spectacular monuments from a bygone era.

            During the sixth and seventh centuries, the inhabitants of the modern-day states of Gujarat and Rajasthan in North-western India developed a method of gaining access to clean, fresh groundwater during the dry season for drinking, bathing, watering animals and irrigation. However, the significance of this invention – the stepwell – goes beyond its utilitarian application.

            Unique to the region, stepwells are often architecturally complex and vary widely in size and shape. During their heyday, they were places of gathering, of leisure, of relaxation and of worship for villagers of all but the lowest castes. Most stepwells are found dotted around the desert areas of Gujarat (where they are called vav) and Rajasthan (where they are known as baori), while a few also survive in Delhi. Some were located in or near villages as public spaces for the community; others were positioned beside roads as resting places for travellers.

            As their name suggests, stepwells comprise a series of stone steps descending from ground level to the water source (normally an underground aquifer) as it recedes following the rains. When the water level was high, the user needed only to descend a few steps to reach it; when it was low, several levels would have to be negotiated.

            Some wells are vast, open craters with hundreds of steps paving each sloping side, often in tiers. Others are more elaborate, with long stepped passages leading to the water via several storeys. Built from stone and supported by pillars, they also included pavilions that sheltered visitors from the relentless heat. But perhaps the most impressive features are the intricate decorative sculptures that embellish many stepwells, showing activities from fighting and dancing to everyday acts such as women combing their hair and churning butter.

            Down the centuries, thousands of wells were constructed throughout northwestern India, but the majority have now fallen into disuse; many are derelict and dry, as groundwater has been diverted for industrial use and the wells no longer reach the water table. Their condition hasn’t been helped by recent dry spells: southern Rajasthan suffered an eight-year drought between 1996 and 2004.
          </p>

          <p className={isExpanded ? '' : ''}>
            However, some important sites in Gujarat have recently undergone major restoration, and the state government announced in June last year that it plans to restore the stepwells throughout the state.

            In Patan, the state’s ancient capital, the stepwell of Rani Ki Vav (Queen’s Stepwell) is perhaps the finest current example. It was built by Queen Udayamati during the late 11th century, but became silted up following a flood during the 13th century. But the Archaeological Survey of India began restoring it in the 1960s, and today it’s in pristine condition. At 65 metres long, 20 metres wide and 27 metres deep, Rani Ki Vav features 500 distinct sculptures carved into niches throughout the monument, depicting gods such as Vishnu and Parvati in various incarnations. Incredibly, in January 2001, this ancient structure survived a devastating earthquake that measured 7.6 on the Richter scale.
          </p>

          {isExpanded && (
            <p>
              Today, following years of neglect, many of these monuments to medieval engineering have been saved by the Archaeological Survey of India, which has recognised the importance of preserving them as part of the country’s rich history. Tourists flock to wells in far-flung corners of northwestern India to gaze in wonder at these architectural marvels from 1,000 years ago, which serve as a reminder of both the ingenuity and artistry of ancient civilisations and of the value of water to human existence.
              Another example is the Surya Kund in Modhera, northern Gujarat, next to the Sun Temple, built by King Bhima I in 1026 to honour the sun god Surya. It’s actually a tank (kund means reservoir or pond) rather than a well, but displays the hallmarks of stepwell architecture, including four sides of steps that descend to the bottom in a stunning geometrical formation. The terraces house 108 small, intricately carved shrines between the sets of steps.

              Rajasthan also has a wealth of wells. The ancient city of Bundi, 200 kilometres south of Jaipur, is renowned for its architecture, including its stepwells. One of the larger examples is Raniji Ki Baori, which was built by the queen of the region, Nathavatji, in 1699. At 46 metres deep, 20 metres wide and 40 metres long, the intricately carved monument is one of 21 baoris commissioned in the Bundi area by Nathavatji.

              In the old ruined town of Abhaneri, about 95 kilometres east of Jaipur, is Chand Baori, one of India’s oldest and deepest wells; aesthetically, it’s perhaps one of the most dramatic. Built in around 850 AD next to the temple of Harshat Mata, the baori comprises hundreds of zigzagging steps that run along three of its sides, steeply descending 11 storeys, resulting in a striking geometric pattern when seen from afar. On the fourth side, covered verandas supported by ornate pillars overlook the steps.

              Still in public use is Neemrana Ki Baori, located just off the Jaipur–Dehli highway. Constructed in around 1700, it’s nine storeys deep, with the last two levels underwater. At ground level, there are 86 colonnaded openings from where the visitor descends 170 steps to the deepest water source.
            </p>
          )}
          <button
            onClick={toggleText}
            className="text-blue-500 my-2"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>

      </div>
    </div>
  );
}
