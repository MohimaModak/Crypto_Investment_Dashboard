import { Checkbox } from '@mui/material';
import React, { useState } from 'react'

export default function BasicData() {

  const [isExpanded, setIsExpanded] = useState(false); // State to toggle the full text

  const toggleText = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };

  return (
    <div className="bg-white text-black h-screen overflow-y-auto">
      <div className='flex gap-10 text-black  bg-gray-300 p-5'>
        <div className='w-5/6 h-screen overflow-y-auto'>
          <h1 className="text-4xl font-bold">READING PASSAGE 1</h1>
          <p className="my-5">
            You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.
          </p>
          <h1 className="text-3xl font-bold my-5">Urban farming
          </h1>
          <p>
            In Paris, urban farmers are trying a soil-free approach to agriculture that uses less space and fewer resources. Could it help cities face the threats to our food supplies?

            On top of a striking new exhibition hall in southern Paris, the world’s largest urban rooftop farm has started to bear fruit. Strawberries that are small, intensely flavoured and resplendently red sprout abundantly from large plastic tubes. Peer inside and you see the tubes are completely hollow, the roots of dozens of strawberry plants dangling down inside them. From identical vertical tubes nearby burst row upon row of lettuces; near those are aromatic herbs, such as basil, sage and peppermint. Opposite, in narrow, horizontal trays packed not with soil but with coconut fibre, grow cherry tomatoes, shiny aubergines and brightly coloured chards.
          </p>

          <p className={isExpanded ? '' : ''}>
            Pascal Hardy, an engineer and sustainable development consultant, began experimenting with vertical farming and aeroponic growing towers- as the soil-free plastic tubes are known – on his Paris apartment block roof five years ago. The urban rooftop space above the exhibition hall is somewhat bigger: 14,000 square metres and almost exactly the size of a couple of football pitches. Already, the team of young urban farmers who tend it have picked, in one day, 3,000 lettuces and 150 punnets of strawberries.
          </p>

          {isExpanded && (
            <p> When the remaining two thirds of the vast open area are in production, 20 staff will harvest up to 1,000 kg of perhaps 35 different varieties of fruit and vegetables, every day. ‘We’re not ever, obviously, going to feed the whole city this way,’ cautions Hardy. ‘In the urban environment you’re working with very significant practical constraints, clearly, on what you can do and where. But if enough unused space can be developed like this, there’s no reason why you shouldn’t eventually target maybe between 5% and 10% of consumption.’

              Perhaps most significantly, however, this is a real-life showcase for the work of Hardy’s flourishing urban agriculture consultancy, Agripolis, which is currently fielding enquiries from around the world to design, build and equip a new breed of soil-free inner-city farm. ‘The method’s advantages are many,’ he says. ‘First, I don’t much like the fact that most of the fruit and vegetables we eat have been treated with something like 17 different pesticides, or that the intensive farming techniques that produced them are such huge generators of greenhouse gases. I don’t much like the fact, either, that they’ve travelled an average of 2,000 refrigerated kilometres to my plate, that their quality is so poor, because the varieties are selected for their capacity to withstand such substantial journeys, or that 80% of the price I pay goes to wholesalers and transport companies, not the producers.’

              Produce grown using this soil-free method, on the other hand- which relies solely on a small quantity of water, enriched with organic nutrients, pumped around a closed circuit of pipes, towers and trays- is ‘produced up here, and sold locally, just down there. It barely travels at all,’ Hardy says. ‘You can select crop varieties for their flavour, not their resistance to the transport and storage chain, and you can pick them when they’re really at their best, and not before.’ No soil is exhausted, and the water that gently showers the plants’ roots every 12 minutes is recycled, so the method uses 90% less water than a classic intensive farm for the same yield.

              Urban farming is not, of course, a new phenomenon. Inner-city agriculture is booming from Shanghai to Detroit and Tokyo to Bangkok. Strawberries are being grown in disused shipping containers, mushrooms in underground carparks. Aeroponic farming, he says, is ‘virtuous’. The equipment weighs little, can be installed on almost any flat surface and is cheap to buy: roughly 100 to 150 per square metre. It is cheap to run, too, consuming a tiny fraction of the electricity used by some techniques.

              Produce grown this way typically sells at prices that, while generally higher than those of classic intensive agriculture, are lower than soil-based organic growers. There are limits to what farmers can grow this way, of course, and much of the produce is suited to the summer months. ‘Root vegetables we cannot do, at least not yet,’ he says. ‘Radishes are OK, but carrots, potatoes, that kind of thing- the roots are simply too long. Fruit trees are obviously not an option. And beans tend to take up a lot of space for not much return.’ Nevertheless, urban farming of the kind being practiced in Paris is one part of a bigger and fast-changing picture that is bringing food production closer to our lives.
            </p>
          )}
          <button
            onClick={toggleText}
            className="text-blue-500 my-2"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
        <div className='h-screen overflow-y-auto w-full'>

          <h1 className='font-bold text-xl'>Questions 1-3</h1>
          <br /><br />
          Complete the sentences below.
          <br /><br />

          Choose NO MORE THAN TWO WORDS ANDIOR A NUMBER from the passage for each answer.
          <br /><br />

          Write your answers in boxes 1-3 on your answer sheet.
          <br /><br />

          Urban farming in Paris
          <br /><br />

          1.   Vertical tubes are used to grow strawberries, <input type="text" className='border-2 border-slate-700 px-10 text-black my-3' /> and herbs.
          <br /><br />

          2. There will eventually be a daily harvest of as much as <input type="text" className='border-2 border-slate-700 px-10 text-black my-3' /> in weight of fruit and vegetables.
          <br /><br />


          3  . It may be possible that the farm’s produce will account for as much as 10% of the city’s <input type="text" className='border-2 border-slate-700 px-10 text-black my-3' /> overall.

          <br /><br />


          <h1 className='font-bold text-xl'>Questions 4-7 </h1>
          <br /><br />

          Complete the table below.
          <br /><br />

          Choose ONE WORD ONLY from the passage for each answer.
          <br /><br />

          Write your answers in boxes 4-7 on your answer sheet.
          <br /><br />

          <table className="min-w-full table-auto  border-black border-2 tebg-white">
            <thead className=' border-black border-2'>
              <tr className=' border-black border-2'>
                <th className="border-b p-2 className=' border-black border-2' text-left">Stepwell</th>
                <th className="border-b p-2 className=' border-black border-2' text-left">Date</th>
                <th className="border-b p-2 className=' border-black border-2' text-left">Features</th>
                <th className="border-b p-2 className=' border-black border-2' text-left">Other Notes</th>
              </tr>
            </thead>
            <tbody className=' border-black border-2'>
              <tr className=' border-black border-2'>
                <td className="border-b p-2 className=' border-black border-2'">Intensive farming</td>
                <td className="border-b p-2 className=' border-black border-2'">wide range of 4<input type="text" className='border-2 border-slate-700 px-10 text-black my-3' />
                  used

                  techniques pollute air</td>
                <td className="border-b p-2 className=' border-black border-2'">quality not good

                  varieties of fruit and vegetables chosen that can survive long 5<input type="text" className='border-2 border-slate-700 px-10 text-black my-3' />
                </td>
                <td className="border-b p-2 className=' border-black border-2'">quality not good

                  varieties of fruit and vegetables chosen that can survive long 5<input type="text" className='border-2 border-slate-700 px-10 text-black my-3' />
                </td>
              </tr>
              <tr className=' border-black border-2'>
                <td className="border-b p-2 className=' border-black border-2'">Aeroponic urban farming</td>
                <td className="border-b p-2 className=' border-black border-2'">   no soil used

                  nutrients added to water, which is recycled</td>
                <td className="border-b p-2 className=' border-black border-2'"> produce chosen because of its 7<input type="text" className='border-2 border-slate-700 px-10 text-black my-3' />
                </td>

              </tr>

            </tbody>
          </table>
          <br /><br />

          <h1 className='font-bold text-xl'>Questions 8-13</h1>
          <br /><br />

          Do the following statements agree with the information given in Reading Passage 1?
          <br /><br />

          In boxes 8-13 on your answer sheet, write
          <br /><br />


          TRUE               if the statement agrees with the information
          <br /><br />


          FALSE              if the statement contradicts the information
          <br /><br />

          NOT GIVEN     if there is no information on this
          <br /><br />


          8  .Urban farming can take place above or below ground.
          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />

          9  .Some of the equipment used in aeroponic farming can be made by hand.

          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />

          10 . Urban farming relies more on electricity than some other types of farming.
          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />

          11 . Fruit and vegetables grown on an aeroponic urban farm are cheaper than traditionally grown organic produce.
          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />

          12 . Most produce can be grown on an aeroponic urban farm at any time of the year.
          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />

          13 . Beans take longer to grow on an urban farm than other vegetables.
          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />

        </div>
      </div>
      <br /><br />
      <div className='flex gap-10 text-black  bg-gray-300 p-5'>

        <div className='w-5/6 h-screen overflow-y-auto'>
          <h1 className="text-4xl font-bold my-5">READING PASSAGE 2</h1>
          <p className="my-5">
            You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 1 below.
          </p>
          <h1 className="text-3xl font-bold my-5">Forest management in Pennsylvania, USA
          </h1>

          <p>
            <br />
            <span className='font-blod text-2xl my-16'>A</span>
            <br />
            A tree’s ‘value’ depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest. The same tree can be valued very differently by each person who looks at it. A large, straight black cherry tree has high value as timber to be cut into logs or made into furniture, but for a landowner more interested in wildlife habitat, the real value of that stem (or trunk) may be the food it provides to animals. Likewise, if the tree suffers from black knot disease, its value for timber decreases, but to a woodworker interested in making bowls, it brings an opportunity for a unique and beautiful piece of art.
          </p>

          <p className={isExpanded ? '' : ''}>
            <span className='font-blod text-2xl my-16'>B</span>

            <br />
            In the past, Pennsylvania landowners were solely interested in the value of their trees as high-quality timber. The norm was to remove the stems of highest quality and leave behind poorly formed trees that were not as well suited to the site where they grew. This practice, called ‘high-grading’, has left a legacy of ‘low-use wood’ in the forests. Some people even call these ‘junk trees’, and they are abundant in Pennsylvania. These trees have lower economic value for traditional timber markets, compete for growth with higher-value trees, shade out desirable regeneration and decrease the health of a stand leaving it more vulnerable to poor weather and disease. Management that specifically targets low-use wood can help landowners manage these forest health issues, and wood energy markets help promote this.
            <br />

          </p>

          {isExpanded && (
            <p>
              <span className='font-blod text-2xl my-16'>C</span>
              <br />
              Wood energy markets can accept less expensive wood material of lower quality than would be suitable for traditional timber markets. Most wood used for energy in Pennsylvania is used to produce heat or electricity through combustion. Many schools and hospitals use wood boiler systems to heat and power their facilities, many homes are primarily heated with wood, and some coal plants incorporate wood into their coal streams to produce electricity. Wood can also be gasified for electrical generation and can even be made into liquid fuels like ethanol and gasoline for lorries and cars. All these products are made primarily from low-use wood. Several tree- and plant-cutting approaches, which could greatly improve the long-term quality of a forest, focus strongly or solely on the use of wood for those markets.
              <br />
              <span className='font-blod text-2xl my-16'>D</span>
              <br />
              One such approach is called a Timber Stand Improvement (TSI) Cut. In a TSI Cut, really poor-quality tree and plant material is cut down to allow more space, light, and other resources to the highest-valued stems that remain. Removing invasive plants might be another primary goal of a TSI Cut. The stems that are left behind might then grow in size and develop more foliage and larger crowns or tops that produce more coverage for wildlife; they have a better chance to regenerate in a less crowded environment. TSI Cuts can be tailored to one farmer’s specific management goals for his or her land.
              <br />
              <span className='font-blod text-2xl my-16'>E</span>
              <br />
              Another approach that might yield a high amount of low-use wood is a Salvage Cut. With the many pests and pathogens visiting forests including hemlock wooly adelgid, Asian longhomed beetle, emerald ash borer, and gypsy moth, to name just a few, it is important to remember that those working in the forests can help ease these issues through cutting procedures. These types of cut reduce the number of sick trees and seek to manage the future spread of a pest problem. They leave vigorous trees that have stayed healthy enough to survive the outbreak.
              <br />
              <span className='font-blod text-2xl my-16'>F</span>
              <br />
              A Shelterwood Cut, which only takes place in a mature forest that has already been thinned several times, involves removing all the mature trees when other seedlings have become established. This then allows the forester to decide which tree species are regenerated. It leaves a young forest where all trees are at a similar point in their growth. It can also be used to develop a two-tier forest so that there are two harvests and the money that comes in is spread out over a decade or more.
              <span className='font-blod text-2xl my-16'>G</span>
              <br />
              Thinnings and dense and dead wood removal for fire prevention also center on the production of low-use wood. However, it is important to remember that some retention of what many would classify as low-use wood is very important. The tops of trees that have been cut down should be left on the site so that their nutrients cycle back into the soil. In addition, trees with many cavities are extremely important habitats for insect predators like woodpeckers, bats and small mammals. They help control problem insects and increase the health and resilience of the forest. It is also important to remember that not all small trees are low-use. For example, many species like hawthorn provide food for wildlife. Finally, rare species of trees in a forest should also stay behind as they add to its structural diversity.
              <br />
              ............
              <br />
              *Stand – An area covered with trees that have common features (e.g. size)
            </p>
          )}
          <button
            onClick={toggleText}
            className="text-blue-500 my-2"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>

        <div className='h-screen overflow-y-auto w-full'>

          <h1 className='font-bold text-xl'>Questions 14-18</h1>
          <br /><br />
          Reading Passage 2 has seven paragraphs, A-G.
          <br /><br />

          Which paragraph contains the following information?
          <br /><br />

          Write the correct letter, A-G, in boxes 14-18 on your answer sheet.
          <br /><br />

          NB   You may use any letter more than once.
          <br /><br />


          14 . bad outcomes for a forest when people focus only on its financial reward
          <br /><input type="text" className='border-2 border-slate-700 px-10 text-black my-3' /> <br />

          15 . reference to the aspects of any tree that contribute to its worth

          <br /><input type="text" className='border-2 border-slate-700 px-10 text-black my-3' /> <br />

          16 . mention of the potential use of wood to help run vehicles
          <br /><input type="text" className='border-2 border-slate-700 px-10 text-black my-3' /> <br />

          17 . examples of insects that attack trees
          <br /><input type="text" className='border-2 border-slate-700 px-10 text-black my-3' /> <br />

          18 . an alternative name for trees that produce low-use wood
          <br /><input type="text" className='border-2 border-slate-700 px-10 text-black my-3' /> <br />


          Questions 19-21
          <br /><br />

          Look at the following purposes (Questions 18-21) and the list of timber cuts below.
          <br /><br />

          Match each purpose with the correct timber cut, A, B or C.
          <br /><br />

          Write the correct letter, A, B or C, in boxes 19-21 on your answer sheet.
          <br /><br />

          NB   You may use any letter more than once.

          <br /><br />

          19 . to remove trees that are diseased
          <br /><input type="text" className='border-2 border-slate-700 px-10 text-black my-3' /> <br />
          20 . to generate income across a number of years
          <br /><input type="text" className='border-2 border-slate-700 px-10 text-black my-3' /> <br />
          21 . to create a forest whose trees are close in age
          <br /><input type="text" className='border-2 border-slate-700 px-10 text-black my-3' /> <br />
          List of Timber Cuts
          <br /><br />
          A  .   a TSI Cut
          <br /><br />

          B  .   a Salvage Cut
          <br /><br />

          C  .   a Shelterwood Cut
          <br /><br />



          <h1 className='font-bold text-xl'>Questions 22-26</h1>
          <br /><br />

          Complete the sentences below.
          <br /><br />

          Choose ONE WORD ONLY from the passage for each answer.
          <br /><br />

          Write your answers in boxes 22-26 on your answer sheet.
          <br /><br />


          22 .  Some dead wood is removed to avoid the possibility of <input type="text" className='border-2 border-slate-700 px-10 text-black my-3' />  .
          <br /><br />

          23 .  The <input type="text" className='border-2 border-slate-700 px-10 text-black my-3' />  from the tops of cut trees can help improve soil quality.
          <br /><br />

          24 .  Some damaged trees should be left, as their <input type="text" className='border-2 border-slate-700 px-10 text-black my-3' />  provide habitats for a range of creatures.
          <br /><br />

          25 .  Some trees that are small, such as <input type="text" className='border-2 border-slate-700 px-10 text-black my-3' /> , are a source of food for animals and insects.
          <br /><br />

          26 .  Any trees that are <input type="text" className='border-2 border-slate-700 px-10 text-black my-3' />  should be left to grow, as they add to the variety of species in the forest.


        </div>
      </div>

      <br /><br />

      <div className='flex gap-10 text-black  bg-gray-300 p-5'>

        <div className='w-5/6 h-screen overflow-y-auto'>
          <h1 className="text-4xl font-bold my-5">READING PASSAGE 2</h1>
          <p className="my-5">
            You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 1 below.
          </p>
          <h1 className="text-3xl font-bold my-5">Forest management in Pennsylvania, USA
          </h1>

          <p>
            <br />
            <span className='font-blod text-2xl my-16'>A</span>
            <br />
            Last year, commercial companies, military and civil departments and amateurs sent more than 400 satellites into orbit, over four times the yearly average in the previous decade. Numbers could rise even more sharply if leading space companies follow through on plans to deploy hundreds to thousands of large constellations of satellites to space in the next few years.

            All that traffic can lead to disaster. Ten years ago, a US commercial Iridium satellite smashed into an inactive Russian communications satellite called Cosmos-2251, creating thousands of new pieces of space shrapnel that now threaten other satellites in low Earth orbit – the zone stretching up to 2,000 kilometres in altitude. Altogether, there are roughly 20,000 human-made objects in orbit, from working satellites to small rocket pieces. And satellite operators can’t steer away from every potential crash, because each move consumes time and fuel that could otherwise be used for the spacecraft’s main job.
          </p>

          <p className={isExpanded ? '' : ''}>
            <span className='font-blod text-2xl my-16'>B</span>

            <br />
            Concern about space junk goes back to the beginning of the satellite era, but the number of objects in orbit is rising so rapidly that researchers are investigating new ways of attacking the problem. Several teams are trying to improve methods for assessing what is in orbit, so that satellite operators can work more efficiently in ever-more-crowded space. Some researchers are now starting to compile a massive data set that includes the best possible information on where everything is in orbit. Others are developing taxonomies of space – working on measuring properties such as the shape and size of an object, so that satellite operators know how much to worry about what’s coming their way.

            The alternative, many say, is unthinkable. Just a few uncontrolled space crashes could generate enough debris to set off a runaway cascade of fragments, rendering near-Earth space unusable. ‘If we go on like this, we will reach a point of no return,’ says Carolin Frueh, an astrodynamical researcher at Purdue University in West Lafayette, Indiana.
            <br />

          </p>

          {isExpanded && (
            <p>
              <span className='font-blod text-2xl my-16'>C</span>
              <br />
              Even as our ability to monitor space objects increases, so too does the total number of items in orbit. That means companies, governments and other players in space are collaborating in new ways to avoid a shared threat. International groups such as the Inter-Agency Space Debris Coordination Committee have developed guidelines on space sustainability. Those include inactivating satellites at the end of their useful life by venting pressurised materials or leftover fuel that might lead to explosions. The intergovernmental groups also advise lowering satellites deep enough into the atmosphere that they will burn up or disintegrate within 25 years. But so far, only about half of all missions have abided by this 25-year goal, says Holger Krag, head of the European Space Agency’s space-debris office in Darmstadt, Germany. Operators of the planned large constellations of satellites say they will be responsible stewards in their enterprises in space, but Krag worries that problems could increase, despite their best intentions. ‘What happens to those that fail or go bankrupt?’ he asks. They are probably not going to spend money to remove their satellites from space.’
              <br />
              <span className='font-blod text-2xl my-16'>D</span>
              <br />
              In theory, given the vastness of space, satellite operators should have plenty of room for all these missions to fly safely without ever nearing another object. So some scientists are tackling the problem of space junk by trying to find out where all the debris is to a high degree of precision. That would alleviate the need for many of the unnecessary manoeuvres that are carried out to avoid potential collisions. ‘If you knew precisely where everything was, you would almost never have a problem,’ says Marlon Sorge, a space-debris specialist at the Aerospace Corporation in El Segundo, California.
              <br />
              <span className='font-blod text-2xl my-16'>E</span>
              <br />
              The field is called space traffic management, because it’s similar to managing traffic on the roads or in the air. Think about a busy day at an airport, says Moriba Jah, an astrodynamicist at the University of Texas at Austin: planes line up in the sky, landing and taking off close to one another in a carefully choreographed routine. Air-traffic controllers know the location of the planes down to one metre in accuracy. The same can’t be said for space debris. Not all objects in orbit are known, and even those included in databases are not tracked consistently.
              <br />
              <span className='font-blod text-2xl my-16'>F</span>
              <br />
              An additional problem is that there is no authoritative catalogue that accurately lists the orbits of all known space debris. Jah illustrates this with a web-based database that he has developed. It draws on several sources, such as catalogues maintained by the US and Russian governments, to visualise where objects are in space. When he types in an identifier for a particular space object, the database draws a purple line to designate its orbit. Only this doesn’t quite work for a number of objects, such as a Russian rocket body designated in the database as object number 32280. When Jah enters that number, the database draws two purple lines: the US and Russian sources contain two completely different orbits for the same object. Jah says that it is almost impossible to tell which is correct, unless a third source of information made it possible to cross-correlate.

              Jah describes himself as a space environmentalist: ‘I want to make space a place that is safe to operate, that is free and useful for generations to come.’ Until that happens, he argues, the space community will continue devolving into a tragedy in which all spaceflight operators are polluting a common resource.

            </p>
          )}
          <button
            onClick={toggleText}
            className="text-blue-500 my-2"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>

        <div className='h-screen overflow-y-auto w-full'>


          <h1 className='font-bold text-xl'>Questions 27-31</h1>
          <br /><br />
          Reading Passage 3 has six sections, A-F.
          <br /><br />

          Which section contains the following information?
          <br /><br />

          Write the correct letter, A-F, in boxes 27-31 on your answer sheet.
          <br /><br />


          27 . a reference to the cooperation that takes place to try and minimise risk
          <br />
          <div className='flex gap-2'>
            <span>A<Checkbox></Checkbox></span>
            <span>B<Checkbox></Checkbox></span>
            <span>C<Checkbox></Checkbox></span>
            <span>D<Checkbox></Checkbox></span>
            <span>E<Checkbox></Checkbox></span>
            <span>F<Checkbox></Checkbox></span>
          </div>
          <br />

          28 . an explanation of a person’s aims
          <br />
          <div className='flex gap-2'>
            <span>A<Checkbox></Checkbox></span>
            <span>B<Checkbox></Checkbox></span>
            <span>C<Checkbox></Checkbox></span>
            <span>D<Checkbox></Checkbox></span>
            <span>E<Checkbox></Checkbox></span>
            <span>F<Checkbox></Checkbox></span>
          </div>
          <br />

          29 . a description of a major collision that occurred in space
          <br />
          <div className='flex gap-2'>
            <span>A<Checkbox></Checkbox></span>
            <span>B<Checkbox></Checkbox></span>
            <span>C<Checkbox></Checkbox></span>
            <span>D<Checkbox></Checkbox></span>
            <span>E<Checkbox></Checkbox></span>
            <span>F<Checkbox></Checkbox></span>
          </div>
          <br />

          30 . a comparison between tracking objects in space and the efficiency of a transportation system
          <br />
          <div className='flex gap-2'>
            <span>A<Checkbox></Checkbox></span>
            <span>B<Checkbox></Checkbox></span>
            <span>C<Checkbox></Checkbox></span>
            <span>D<Checkbox></Checkbox></span>
            <span>E<Checkbox></Checkbox></span>
            <span>F<Checkbox></Checkbox></span>
          </div>
          <br />

          31 . a reference to efforts to classify space junk
          <br />
          <div className='flex gap-2'>
            <span>A<Checkbox></Checkbox></span>
            <span>B<Checkbox></Checkbox></span>
            <span>C<Checkbox></Checkbox></span>
            <span>D<Checkbox></Checkbox></span>
            <span>E<Checkbox></Checkbox></span>
            <span>F<Checkbox></Checkbox></span>
          </div>
          <br />



          <h1 className='font-bold text-xl'>Questions 32-35</h1>
          <br /><br />

          Complete the summary below.
          <br /><br />

          Choose ONE WORD ONLY from the passage for each answer.
          <br /><br />

          Write your answers in boxes 32-35 on your answer sheet.
          <br /><br />

          The Inter-Agency Space Debris Coordination Committee
          The committee gives advice on how the 32<input type="text" className='border-2 border-slate-700 px-10 text-black my-3' />  of space can be achieved. The committee advises that when satellites are no longer active, any unused 33<input type="text" className='border-2 border-slate-700 px-10 text-black my-3' />  or pressurised material that could cause 34<input type="text" className='border-2 border-slate-700 px-10 text-black my-3' />  should be removed.

          Although operators of large satellite constellations accept that they have obligations as stewards of space, Holger Krag points out that the operators that become 35<input type="text" className='border-2 border-slate-700 px-10 text-black my-3' />  are unlikely to prioritise removing their satellites from space.


          <h1 className='font-bold text-xl'>Questions 36-40</h1>
          <br /><br />

          Look at the following statements (Questions 36-40) and the list of people below.
          <br /><br />

          Match each statement with the correct person, A, B, C or D.
          <br /><br />

          Write the correct letter, A, B, C or D, in boxes 36-40 on your answer sheet.
          <br /><br />

          NB   You may use any letter more than once.
          <br /><br />


          36 . Knowing the exact location of space junk would help prevent any possible danger.
          <br />
          <div className='flex gap-2'>
            <span>A<Checkbox></Checkbox></span>
            <span>B<Checkbox></Checkbox></span>
            <span>C<Checkbox></Checkbox></span>
          </div>
          <br />

          37 . Space should be available to everyone and should be preserved for the future.
          <br /><div className='flex gap-2'>
            <span>A<Checkbox></Checkbox></span>
            <span>B<Checkbox></Checkbox></span>
            <span>C<Checkbox></Checkbox></span>
          </div><br />

          38 . A recommendation regarding satellites is widely ignored.
          <br /><div className='flex gap-2'>
            <span>A<Checkbox></Checkbox></span>
            <span>B<Checkbox></Checkbox></span>
            <span>C<Checkbox></Checkbox></span>
          </div><br />

          39 . There is conflicting information about where some satellites are in space.
          <br /><div className='flex gap-2'>
            <span>A<Checkbox></Checkbox></span>
            <span>B<Checkbox></Checkbox></span>
            <span>C<Checkbox></Checkbox></span>
          </div><br />

          40 . There is a risk we will not be able to undo the damage that occurs in space.
          <br /><div className='flex gap-2'>
            <span>A<Checkbox></Checkbox></span>
            <span>B<Checkbox></Checkbox></span>
            <span>C<Checkbox></Checkbox></span>
          </div><br />

          List of People
          <br /><br />

          A .   Carolin Frueh
          <br /><br />

          B .   Holger Krag
          <br /><br />

          C .   Marlon Sorge
          <br /><br />

          D .   Moriba Jah

          <br /><br />


        </div>

      </div>


    </div>
  )
}
