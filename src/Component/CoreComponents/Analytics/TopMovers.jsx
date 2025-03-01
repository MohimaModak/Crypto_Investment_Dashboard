import { Checkbox } from '@mui/material';
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

            In Patan, the state’s ancient capital, the stepwell of Rani Ki Vav (Queen’s Stepwell) is perhaps the finest current example. It was built by Queen Udayamati during the late 11th century, but became silted up following a flood during the 13th century.
          </p>

          {isExpanded && (
            <p> But the Archaeological Survey of India began restoring it in the 1960s, and today it’s in pristine condition. At 65 metres long, 20 metres wide and 27 metres deep, Rani Ki Vav features 500 distinct sculptures carved into niches throughout the monument, depicting gods such as Vishnu and Parvati in various incarnations. Incredibly, in January 2001, this ancient structure survived a devastating earthquake that measured 7.6 on the Richter scale.
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

          <p>1.  Examples of ancient stepwells can be found all over the world.
            <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> 
            <br />
            2   Stepwells had a range of functions, in addition to those related to water collection.
            <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> 
            <br />
            3   The few existing stepwells in Delhi are more attractive than those found elsewhere.
            <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> 
            <br />
            4   It took workers many years to build the stone steps characteristic of stepwells.
            <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> 
            <br />
            5   The number of steps above the water level in a stepwell altered during the course of a year.
            <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> 
            <br />
          </p>

          <h1 className="text-4xl font-bold my-5">Questions 6–8
          </h1>
          <p className='my-5'>Answer the questions below.</p>
          <p className='my-5'>Choose ONE WORD ONLY from the passage for each answer.</p> <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />
          <p className='my-5'>Write your answers in boxes 6–8 on your answer sheet.</p> <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />
          <p className='my-5'>6   Which part of some stepwells provided shade for people?</p> <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />
          <p className='my-5'>7   What type of serious climatic event, which took place in southern Rajasthan, is mentioned in the article?</p> <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />
          <p className='my-5'>8   Who are frequent visitors to stepwells nowadays?</p> <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" />

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
                <td className="border-b p-2 className=' border-slate-200 border-2'">Restored in the 1990s. Excellent condition,9. <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm border-2" />  despite the earthquake of 2001.</td>
              </tr>
              <tr className=' border-slate-200 border-2'>
                <td className="border-b p-2 className=' border-slate-200 border-2'">Surya Kund</td>
                <td className="border-b p-2 className=' border-slate-200 border-2'">1026</td>
                <td className="border-b p-2 className=' border-slate-200 border-2'">Steps on the 10 <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm border-2" /> terrace produce a geometric pattern. Carved shrines.</td>
                <td className="border-b p-2 className=' border-slate-200 border-2'">Looks more like a 11. <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm border-2" /> tank than a well.</td>
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
                <td className="border-b p-2 className=' border-slate-200 border-2'">Old, deep, and very dramatic. Has 12. <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm border-2" />verandas which provide a view to the steps.</td>
              </tr>
              <tr className=' border-slate-200 border-2'>
                <td className="border-b p-2 className=' border-slate-200 border-2'">Neemrana Ki Baori</td>
                <td className="border-b p-2 className=' border-slate-200 border-2'">1700</td>
                <td className="border-b p-2 className=' border-slate-200 border-2'">Has two 13. <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm border-2" />  underwater levels</td>
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
            <br />
            <span className='font-blod text-2xl my-16'>A</span>
            <br />
            It is difficult to conceive of vigorous economic growth without an efficient transport system. Although modern information technologies can reduce the demand for physical transport by facilitating teleworking and teleservices, the requirement for transport continues to increase. There are two key factors behind this trend. For passenger transport, the determining factor is the spectacular growth in car use. The number of cars on European Union (EU) roads saw an increase of three million cars each year from 1990 to 2010, and in the next decade the EU will see a further substantial increase in its fleet.
          </p>

          <p className={isExpanded ? '' : ''}>
            <span className='font-blod text-2xl my-16'>B</span>

            <br />
            As far as goods transport is concerned, growth is due to a large extent to changes in the European economy and its system of production. In the last 20 years, as internal frontiers have been abolished, the EU has moved from a ‘stock’ economy to a ‘flow’ economy. This phenomenon has been emphasised by the relocation of some industries, particularly those which are labour intensive, to reduce production costs, even though the production site is hundreds or even thousands of kilometres away from the final assembly plant or away from users.
            <br />
            <span className='font-blod text-2xl my-16'>C</span>
            <br />

            The strong economic growth expected in countries which are candidates for entry to the EU will also increase transport flows, in particular road haulage traffic. In 1998, some of these countries already exported more than twice their 1990 volumes and imported more than five times their 1990 volumes. And although many candidate countries inherited a transport system which encourages rail, the distribution between modes has tipped sharply in favour of road transport since the 1990s. Between 1990 and 1998, road haulage increased by 19.4%, while during the same period rail haulage decreased by 43.5%, although – and this could benefit the enlarged EU – it is still on average at a much higher level than in existing member states.
            <br />
            <span className='font-blod text-2xl my-16'>D</span>
            <br />
            However, a new imperative-sustainable development – offers an opportunity for adapting the EU’s common transport policy. This objective, agreed by the Gothenburg European Council, has to be achieved by integrating environmental considerations into Community policies, and shifting the balance between modes of transport lies at the heart of its strategy. The ambitious objective can only be fully achieved by 2020, but proposed measures are nonetheless a first essential step towards a sustainable transport system which will ideally be in place in 30 years‟ time, that is by 2040.
            <br />
            <span className='font-blod text-2xl my-16'>E</span>
            <br />
            In 1998, energy consumption in the transport sector was to blame for 28% of emissions of CO2, the leading greenhouse gas. According to the latest estimates, if nothing is done to reverse the traffic growth trend, CO2 emissions from transport can be expected to increase by around 50% to 1,113 billion tonnes by 2020，compared with the 739 billion tonnes recorded in 1990. Once again, road transport is the main culprit since it alone accounts for 84% of the CO2 emissions attributable to transport. Using alternative fuels and improving energy efficiency is thus both an ecological necessity and a technological challenge.
            <br />
            <span className='font-blod text-2xl my-16'>F</span>
            <br />
            At the same time greater efforts must be made to achieve a modal shift. Such a change cannot be achieved overnight, all the less so after over half a century of constant deterioration in favour of road. This has reached such a pitch that today rail freight services are facing marginalisation, with just 8% of market share, and with international goods trains struggling along at an average speed of 18km/h. Three possible options have emerged.


          </p>

          {isExpanded && (
            <p>
              <span className='font-blod text-2xl my-16'>G</span>
              <br />
              The first approach would consist of focusing on road transport solely through pricing. This option would not be accompanied by complementary measures in the other modes of transport. In the short term it might curb the growth in road transport through the better loading ratio of goods vehicles and occupancy rates of passenger vehicles expected as a result of the increase in the price of transport. However, the lack of measures available to revitalise other modes of transport would make it impossible for more sustainable modes of transport to take up the baton.
              <br />
              <span className='font-blod text-2xl my-16'>H</span>
              <br />
              The second approach also concentrates on road transport pricing but is accompanied by measures to increase the efficiency of the other modes (better quality of services, logistics, technology). However, this approach does not include investment in new infrastructure, nor does it guarantee better regional cohesion. It could help to achieve greater uncoupling than the first approach, but road transport would keep the lion’s share of the market and continue to concentrate on saturated arteries, despite being the most polluting of the modes. It is therefore not enough to guarantee the necessary shift of the balance.
              <br />
              <span className='font-blod text-2xl my-16'>I</span>
              <br />
              The third approach, which is not new, comprises a series of measures ranging from pricing to revitalising alternative modes of transport and targeting investment in the trans-European network. This integrated approach would allow the market shares of the other modes to return to their 1998 levels and thus make a shift of balance. It is far more ambitious than it looks, bearing in mind the historical imbalance in favour of roads for the last fifty years, but would achieve a marked break in the link between road transport growth and economic growth, without placing restrictions on the mobility of people and goods.
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
          <h1 className='my-10 text-2xl font-bold'>Questions 1-8
          </h1>
          <h1 className='my-5 text-xl'>Reading Passage 2 has nine paragraphs, A-I.</h1>
          <h1 className='my-5 text-xl'>Choose the correct heading for paragraphs A-E and G-I from the list of headings below.</h1>
          <h1 className='my-5 text-xl'>Write the correct number, i-xi, in boxes 14-21 on your answer sheet.</h1>
          <h1 className='my-5 text-xl'>List of Headings</h1>
          <h1 className='my-5 text-xl'>i   .  A fresh and important long-term goal</h1> 
          <h1 className='my-5 text-xl'>ii  .  Charging for roads and improving other transport methods 
          </h1>
          <h1 className='my-5 text-xl'>iii .  Changes affecting the distances goods may be transported 
          </h1>
          <h1 className='my-5 text-xl'>iv  . Taking all the steps necessary to change transport patterns 
          </h1>
          <h1 className='my-5 text-xl'>v   . The environmental costs of road transport 
          </h1>
          <h1 className='my-5 text-xl'>vi  . The escalating cost of rail transport
          </h1>
          <h1 className='my-5 text-xl'>vii . The need to achieve transport rebalance 
          </h1>
          <h1 className='my-5 text-xl'>viii. The rapid growth of private transport 
          </h1>
          <h1 className='my-5 text-xl'>ix  . Plans to develop major road networks 
          </h1>
          <h1 className='my-5 text-xl'>x   . Restricting road use through charging policies alone 
          </h1>
          <h1 className='my-5 text-xl'>xi  . Transport trends in countries awaiting EU admission 
          </h1>
        </div>
        <div>
          <h1 className='my-5 font-bold'>14.    Paragraph A</h1> <br /> <input type="text"  className='border-4 border-red-50 px-10 text-black'/> <br />
          <h1 className='my-5 font-bold'>15.    Paragraph B</h1> <br /> <input type="text"  className='border-4 border-red-50 px-10 text-black'/> <br />
          <h1 className='my-5 font-bold'>16.    Paragraph C</h1> <br /> <input type="text"  className='border-4 border-red-50 px-10 text-black'/> <br />
          <h1 className='my-5 font-bold'>17.    Paragraph D</h1> <br /> <input type="text"  className='border-4 border-red-50 px-10 text-black'/> <br />
          <h1 className='my-5 font-bold'>18.    Paragraph E</h1> <br /> <input type="text"  className='border-4 border-red-50 px-10 text-black'/> <br />
          <h1 className='my-5 font-bold'>Example  Answer</h1>
          <h1 className='my-5 font-bold'>Paragraph F  vii</h1>
          <h1 className='my-5 font-bold'>19.    Paragraph F</h1>
          <h1 className='my-5 font-bold'>20.    Paragraph G</h1>
          <h1 className='my-5 font-bold'>21.    Paragraph I</h1>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Questions 22–26</h1>
          <h1 className='my-5'>Do the following statements agree with the information given in Reading Passage 2?</h1>
          <h1 className='my-5'>In boxes 22-26 on your answer sheet, write</h1>
          <h1 className='my-5'>TRUE if the statement agrees with the information <br /><br />
            FALSE if the statement contradicts the information <br /><br />
            NOT GIVEN if there is no information on this</h1>
          <h1 className='my-5 font-bold'>22.   The need for transport is growing, despite technological developments.</h1>

          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> 
            
          <h1 className='my-5 font-bold'>23.   To reduce production costs, some industries have been moved closer to their relevant consumers.</h1>
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> 

          <h1 className='my-5 font-bold'>24.   Cars are prohibitively expensive in some EU candidate countries.</h1>
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> 
          <h1 className='my-5 font-bold'>25.   The Gothenburg European Council was set up 30 years ago.</h1>
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> 
          <h1 className='my-5 font-bold'>26.   By the end of this decade, CO2 emissions from transport are predicted to reach 739 billion tonnes.</h1>
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span  className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> 
        </div>

        <div>
          <h1 className="text-4xl font-bold my-5">READING PASSAGE 3</h1>
          <p className="my-5">
            You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.
          </p>
          <h1 className="text-3xl font-bold my-5">The psychology of innovation
          </h1>
          <h1 className="text-3xl font-bold my-5">Why are so few companies truly innovative?
          </h1>

          <p>
            Innovation is key to business survival, and companies put substantial resources into inspiring employees to develop new ideas. There are, nevertheless, people working in luxurious, state-of-the-art centres designed to stimulate innovation who find that their environment doesn’t make them feel at all creative. And there are those who don’t have a budget, or much space, but who innovate successfully.
          </p>

          {isExpanded && (
            <p>
              <br />
              For Robert B. Cialdini, Professor of Psychology at Arizona State University, one reason that companies don’t succeed as often as they should is that innovation starts with recruitment. Research shows that the fit between an employee’s values and a company’s values makes a difference to what contribution they make and whether, two years after they join, they’re still at the company. Studies at Harvard Business School show that, although some individuals may be more creative than others, almost every individual can be creative in the right circumstances.
              <br />
              One of the most famous photographs in the story of rock’n’roll emphasises Ciaidini’s views. The 1956 picture of singers Elvis Presley, Carl Perkins, Johnny Cash and Jerry Lee Lewis jamming at a piano in Sun Studios in Memphis tells a hidden story. Sun’s ‘million-dollar quartet’ could have been a quintet. Missing from the picture is Roy Orbison’ a greater natural singer than Lewis, Perkins or Cash. Sam Phillips, who owned Sun, wanted to revolutionise popular music with songs that fused black and white music, and country and blues. Presley, Cash, Perkins and Lewis instinctively understood Phillips’s ambition and believed in it. Orbison wasn’t inspired by the goal, and only ever achieved one hit with the Sun label.
              <br />
              The value fit matters, says Cialdini, because innovation is, in part, a process of change, and under that pressure we, as a species, behave differently, ‘When things change, we are hard-wired to play it safe.’ Managers should therefore adopt an approach that appears counterintuitive -they should explain what stands to be lost if the company fails to seize a particular opportunity. Studies show that we invariably take more gambles when threatened with a loss than when offered a reward.
              <br />
              Managing innovation is a delicate art. It’s easy for a company to be pulled in conflicting directions as the marketing, product development, and finance departments each get different feedback from different sets of people. And without a system which ensures collaborative exchanges within the company, it’s also easy for small ‘pockets of innovation’ to disappear. Innovation is a contact sport. You can’t brief people just by saying, ‘We’re going in this direction and I’m going to take you with me.’
              <br />
              Cialdini believes that this ‘follow-the-leader syndrome, is dangerous, not least because it encourages bosses to go it alone. ‘It’s been scientifically proven that three people will be better than one at solving problems, even if that one person is the smartest person in the field.’ To prove his point, Cialdini cites an interview with molecular biologist James Watson. Watson, together with Francis Crick, discovered the structure of DNA, the genetic information carrier of all living organisms. ‘When asked how they had cracked the code ahead of an array of highly accomplished rival investigators, he said something that stunned me. He said he and Crick had succeeded because they were aware that they weren’t the most intelligent of the scientists pursuing the answer. The smartest scientist was called Rosalind Franklin who, Watson said, “was so intelligent she rarely sought advice”.’
              <br />
              Teamwork taps into one of the basic drivers of human behaviour. ‘The principle of social proof is so pervasive that we don’t even recognise it,’ says Cialdini. ‘If your project is being resisted, for example, by a group of veteran employees, ask another old-timer to speak up for it.’ Cialdini is not alone in advocating this strategy. Research shows that peer power, used horizontally not vertically, is much more powerful than any boss’s speech.
              <br />
              Authority doesn’t have to inhibit innovation but it often does. The wrong kind of leadership will lead to what Cialdini calls ‘captainitis, the regrettable tendency of team members to opt out of team responsibilities that are properly theirs’. He calls it captainitis because, he says, ‘crew members of multipilot aircraft exhibit a sometimes deadly passivity when the flight captain makes a clearly wrong-headed decision’. This behaviour is not, he says, unique to air travel, but can happen in any workplace where the leader is overbearing.
              <br />
              At the other end of the scale is the 1980s Memphis design collective, a group of young designers for whom ‘the only rule was that there were no rule’. This environment encouraged a free interchange of ideas, which led to more creativity with form, function, colour and materials that revolutionised attitudes to furniture design.
              <br />
              Many theorists believe the ideal boss should lead from behind, taking pride in collective accomplishment and giving credit where it is due. Cialdini says: ‘Leaders should encourage everyone to contribute and simultaneously assure all concerned that every recommendation is important to making the right decision and will be given full attention.’ The frustrating thing about innovation is that there are many approaches, but no magic formula. However, a manager who wants to create a truly innovative culture can make their job a lot easier by recognising these psychological realities.
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
          <h1 className='my-5 font-bold text-xl'>Questions 27-30</h1>
          <h1 className='my-5 text-xl'>Choose the correct letter, A, B, C or D.</h1>
          <h1 className='my-5 text-xl'>Write the correct letter in boxes 27-30 on your answer sheet.</h1>
          <h1 className='my-5 text-xl'>27.  The example of the ‘million-dollar quartet’ underlines the writer’s point about</h1>
          <h1>A. recognising talent.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />
          <h1>B. working as a team.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />
          <h1>C. having a shared objective.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />
          <h1>D. being an effective leader.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />

          <h1 className='my-5 text-xl'>28.  James Watson suggests that he and Francis Crick won the race to discover the DNA code because they</h1>
          <h1>A. were conscious of their own limitations.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />
          <h1>B. brought complementary skills to their partnership.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />
          <h1>C. were determined to outperform their brighter rivals.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />
          <h1>D. encouraged each other to realise their joint ambition.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />

          <h1 className='my-5 text-xl'>29.  The writer mentions competitions on breakfast cereal packets as an example of how to</h1>
          <h1>A. inspire creative thinking.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />
          <h1>B. inspire creative thinking.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />
          <h1>C. promote loyalty to a group.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />
          <h1>D. strengthen commitment to an idea.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />

          <h1 className='my-5 text-xl'>30. In the last paragraph, the writer suggests that it is important for employees to</h1>
          <h1>A. be aware of their company’s goals.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />
          <h1>B. feel that their contributions are valued.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />
          <h1>C. have respect for their co-workers‟ achievements.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />
          <h1>D. understand why certain management decisions are made.</h1> <div  className='bg-white w-5 h-5 flex justify-center items-center mt-5'><Checkbox></Checkbox></div> <br />


        </div>

        <div>
          <h1 className='my-5 font-bold text-xl'>Questions 31-35</h1>
          <p>Complete each sentence with the correct ending, A-G, below. <br /><br />

            Write the correct letter, A-G, in boxes 31-35 on your answer sheet<br /><br />


            31   Employees whose values match those of their employers are more likely to<br /> <input type="text"  className='border-4 border-red-50 px-10 text-black my-3'/> <br />
            

            32   At times of change, people tend to<br /> <input type="text"  className='border-4 border-red-50 px-10 text-black my-3'/> <br />

            33   If people are aware of what they might lose, they will often <br /> <input type="text"  className='border-4 border-red-50 px-10 text-black my-3'/> <br />

            34   People working under a dominant boss are liable to <br /> <input type="text"  className='border-4 border-red-50 px-10 text-black my-3'/> <br />

            35   Employees working in organisations with few rules are more likely to <br /> <input type="text"  className='border-4 border-red-50 px-10 text-black my-3'/> <br />

            A     take chances. <br /><br />

            B     share their ideas. <br /><br />

            C     become competitive. <br /><br />

            D     get promotion. <br /><br />

            E     avoid risk. <br /><br />

            F     ignore their duties. <br /> <br />

            G     remain in their jobs.</p>
        </div>
        <div>
          <h1 className='my-5 font-bold text-xl'>Questions 36-40</h1>
          <p>Do the following statements agree with the claims of the writer in Reading Passage 3? <br /><br />

            In boxes 36-40 on your answer sheet, write<br /><br />

            YES                  if the statement agrees with the claims of the writer<br /><br />

            NO                   if the statement contradicts the claims of the writer<br /><br />

            NOT GIVEN    if it is impossible to say what the writer thinks about this.<br /><br />


            36   The physical surroundings in which a person works play a key role in determining their creativity.<br /><br />

            37   Most people have the potential to be creative.<br /><br />

            38   Teams work best when their members are of equally matched intelligence.<br /><br />

            39   It is easier for smaller companies to be innovative.<br /><br />

            40   A manager’s approval of an idea is more persuasive than that of a colleague.</p>
        </div>
      </div>
    </div>
  );
}
