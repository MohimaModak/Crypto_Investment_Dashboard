import { Checkbox } from '@mui/material';
import React, { useState } from 'react'

export default function ListenningOne() {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='bg-white text-black h-screen overflow-y-auto'>
      <div className='flex gap-10 text-black  bg-gray-300 p-5'>
        <div className='w-2/4 h-screen overflow-y-auto'>
          <h1 className="text-4xl font-bold">READING PASSAGE 1</h1>
          <p className="my-5">
            You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 2 below.
          </p>
          <h1 className="text-3xl font-bold my-5">The development of the London underground railway
          </h1>
          <p>
            In the first half of the 1800s, London’s population grew at an astonishing rate, and the central area became increasingly congested. In addition,
          </p>

          <p className={isExpanded ? '' : ''}>
            the expansion of the overground railway network resulted in more and more passengers arriving in the capital. However, in 1846, a Royal Commission decided that the railways should not be allowed to enter the City, the capital’s historic and business centre.
          </p>

          {isExpanded && (
            <p> The result was that the overground railway stations formed a ring around the City. The area within consisted of poorly built, overcrowded slums and the streets were full of horse-drawn traffic. Crossing the City became a nightmare. It could take an hour and a half to travel 8 km by horse-drawn carriage or bus. Numerous schemes were proposed to resolve these problems, but few succeeded.

              Amongst the most vocal advocates for a solution to London’s traffic problems was Charles Pearson, who worked as a solicitor for the City of London. He saw both social and economic advantages in building an underground railway that would link the overground railway stations together and clear London slums at the same time. His idea was to relocate the poor workers who lived in the inner-city slums to newly constructed suburbs, and to provide cheap rail travel for them to get to work. Pearson’s ideas gained support amongst some businessmen and in 1851 he submitted a plan to Parliament. It was rejected, but coincided with a proposal from another group for an underground connecting line, which Parliament passed.The two groups merged and established the Metropolitan Railway Company in August 1854. The company’s plan was to construct an underground railway line from the Great Western Railway’s (GWR) station at Paddington to the edge of the City at Farringdon Street – a distance of almost 5 km. The organisation had difficulty in raising the funding for such a radical and expensive scheme, not least because of the critical articles printed by the press. Objectors argued that the tunnels would collapse under the weight of traffic overhead, buildings would be shaken and passengers would be poisoned by the emissions from the train engines. However, Pearson and his partners persisted.

              The GWR, aware that the new line would finally enable them to run trains into the heart of the City, invested almost £250,000 in the scheme. Eventually, over a five-year period, £1m was raised. The chosen route ran beneath existing main roads to minimise the expense of demolishing buildings. Originally scheduled to be completed in 21 months, the construction of the underground line took three years. It was built just below street level using a technique known as ‘cut and cover’. A trench about ten metres wide and six metres deep was dug, and the sides temporarily help up with timber beams. Brick walls were then constructed, and finally a brick arch was added to create a tunnel. A two-metre-deep layer of soil was laid on top of the tunnel and the road above rebuilt.


              The Metropolitan line, which opened on 10 January 1863, was the world’s first underground railway. On its first day, almost 40,000 passengers were carried between Paddington and Farringdon, the journey taking about 18 minutes. By the end of the Metropolitan’s first year of operation, 9.5 million journeys had been made.

              Even as the Metropolitan began operation, the first extensions to the line were being authorised; these were built over the next five years, reaching Moorgate in the east to London and Hammersmith in the west. The original plan was to pull the trains with steam locomotives, using firebricks in the boilers to provide steam, but these engines were never introduced. Instead, the line used specially designed locomotives that were fitted with water tanks in which steam could be condensed. However, smoke and fumes remained a problem, even though ventilation shafts were added to the tunnels.

              Despite the extension of the underground railway, by the 1880s, congestion on London’s streets had become worse. The problem was partly that the existing underground lines formed a circuit around the centre of London and extended to the suburbs, but did not cross the capital’s centre. The ‘cut and cover’ method of construction was not an option in this part of the capital. The only alternative was to tunnel deep underground.

              Although the technology to create these tunnels existed, steam locomotives could not be used in such a confined space. It wasn’t until the development of a reliable electric motor, and a means of transferring power from the generator to a moving train, that the world’s first deep-level electric railway, the City & South London, became possible. The line opened in 1890, and ran from the City to Stockwell, south of the River Thames. The trains were made up of three carriages and driven by electric engines. The carriages were narrow and had tiny windows just below the roof because it was thought that passengers would not want to look out at the tunnel walls. The line was not without its problems, mainly caused by an unreliable power supply, Although the City & South London Railway was a great technical achievement, it did not make a profit. Then, in 1900, the Central London Railway, known as the ‘Tuppenny Tube’, began operation using new electric locomotives. It was very popular and soon afterwards new railways and extensions were added to the growing tube network. By 1907, the heart of today’s Underground system was in place.
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
          Questions 1-6
          <br /><br />

          Complete the notes below.
          <br /><br />

          Choose ONE WORD ONLY from the passage for each answer.
          <br /><br />

          Write your answers in boxes 1-6 on your answer sheet.
          <br /><br />

          The London underground railway
          <br /><br />

          The problem
          <br /><br />

          ●   The 1 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> of London increased rapidly between 1800 and 1850
          <br /><br />

          ●   The streets were full of horse-drawn vehicles
          <br /><br />

          The proposed solution
          <br /><br />

          ●   Charles Pearson, a solicitor, suggested building an underground railway
          <br /><br />

          ●   Building the railway would make it possible to move people to better housing in the 2 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
          <br /><br />


          ●   A number of 3 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> agreed with Pearson’s idea
          <br /><br />

          ●   The company initially had problems getting the 4 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> needed for the project
          <br /><br />

          ●   Negative articles about the project appeared in the 5 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
          <br /><br />

          The construction
          <br /><br />

          ●   The chosen route did not require many buildings to be pulled down
          <br /><br />

          ●   The ‘cut and cover’ method was used to construct the tunnels
          <br /><br />

          ●   With the completion of the brick arch, the tunnel was covered with 6 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

          <br /><br />


          <h1 className='font-blod text-xl'>Questions 7-13</h1>
          <br /><br />

          Do the following statements agree with the information given in Reading Passage 1?
          <br /><br />

          In boxes 7-13 on your answer sheet, write
          <br /><br />

          TRUE               if the statement agrees with the information
          <br /><br />

          FALSE              if the statement contradicts the information
          <br /><br />

          NOT GIVEN    if there is no information on this
          <br /><br />
          7 . Other countries had built underground railways before the Metropolitan line opened.
          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />

          8 . More people than predicted travelled on the Metropolitan line on the first day.
          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />

          9 . The use of ventilation shafts failed to prevent pollution in the tunnels.
          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />

          10.  A different approach from the ‘cut and cover’ technique was required in London’s central area.
          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />
          11.  The windows on City & South London trains were at eye level.

          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />
          12.  The City & South London Railway was a financial success.
          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />
          13.  Trains on the ‘Tuppenny Tube’ nearly always ran on time.
          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />
        </div>
      </div>
      <br /><br />
      <div className='flex gap-10 text-black  bg-gray-300 p-5'>
        <div className='w-2/4 h-screen overflow-y-auto'>
          <h1 className="text-4xl font-bold my-5">READING PASSAGE 2</h1>
          <p className="my-5">
            You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 1 below.
          </p>
          <h1 className="text-2xl font-bold my-5">Stadiums: past, present and future
          </h1>

          <p>
            <br />
            <span className='font-blod text-2xl my-16'>A</span>
            <br />
            Stadiums are among the oldest forms of urban architecture: vast stadiums where the public could watch sporting events were at the centre of western city life as far back as the ancient Greek and Roman Empires, well before the construction of the great medieval cathedrals and the grand 19th- and 20th-century railway stations which dominated urban skylines in later eras.

            Today, however, stadiums are regarded with growing scepticism. Construction costs can soar above £1 billion, and stadiums finished for major events such as the Olympic Games or the FIFA World Cup have notably fallen into disuse and disrepair.

            But this need not be the cause. History shows that stadiums can drive urban development and adapt to the culture of every age. Even today, architects and planners are finding new ways to adapt the mono-functional sports arenas which became emblematic of modernisation during the 20th century.
          </p>

          <p className={isExpanded ? '' : ''}>
            <span className='font-blod text-2xl my-16'>B</span>

            <br />
            The amphitheatre* of Arles in southwest France, with a capacity of 25,000 spectators, is perhaps the best example of just how versatile stadiums can be. Built by the Romans in 90 AD, it became a fortress with four towers after the fifth century, and was then transformed into a village containing more than 200 houses. With the growing interest in conservation during the 19th century, it was converted back into an arena for the staging of bullfights, thereby returning the structure to its original use as a venue for public spectacles.

            Another example is the imposing arena of Verona in northern Italy, with space for 30,000 spectators, which was built 60 years before the Arles amphitheatre and 40 years before Rome’s famous Colosseum. It has endured the centuries and is currently considered one of the world’s prime sites for opera, thanks to its outstanding acoustics.

          </p>

          {isExpanded && (
            <p>
              <span className='font-blod text-2xl my-16'>C</span>
              <br />
              The area in the centre of the Italian town of Lucca, known as the Piazza dell’ Anfiteatro, is yet another impressive example of an amphitheatre becoming absorbed into the fabric of the city. The site evolved in a similar way to Arles and was progressively filled with buildings from the Middle Ages until the 19th century, variously used as houses, a salt depot and a prison. But rather than reverting to an arena, it became a market square, designed by Romanticist architect Lorenzo Nottolini. Today, the ruins of the amphitheatre remain embedded in the various shops and residences surrounding the public square.


              <br />
              <span className='font-blod text-2xl my-16'>D</span>
              <br />
              There are many similarities between modern stadiums and the ancient amphitheatres intended for games. But some of the flexibility was lost at the beginning of the 20th century, as stadiums were developed using new products such as steel and reinforced concrete, and made use of bright lights for night-time matches.

              Many such stadiums are situated in suburban areas, designed for sporting use only and surrounded by parking lots. These factors mean that they may not be as accessible to the general public, require more energy to run and contribute to urban heat.


              <br />
              <span className='font-blod text-2xl my-16'>E</span>
              <br />
              But many of today’s most innovative architects see scope for the stadium to help improve the city. Among the current strategies, two seem to be having particular success: the stadium as an urban hub, and as a power plant.

              There’s a growing trend for stadiums to be equipped with public spaces and services that serve a function beyond sport, such as hotels, retail outlets, conference centres, restaurants and bars, children’s playgrounds and green space. Creating mixed-use developments such as this reinforces compactness and multi-functionality, making more efficient use of land and helping to regenerate urban spaces.

              This opens the space up to families and a wider cross-section of society, instead of catering only to sportspeople and supporters. There have been many examples of this in the UK: the mixed-use facilities at Wembley and Old Trafford have become a blueprint for many other stadiums in the world.
              <br />
              <span className='font-blod text-2xl my-16'>F</span>
              <br />
              The phenomenon of stadium as power stations has arisen from the idea that energy problems can be overcome by integrating interconnected buildings by means of a smart grid, which is an electricity supply network that uses digital communications technology to detect and react to local changes in usage, without significant energy losses. Stadiums are ideal for these purposes, because their canopies have a large surface area for fitting photovoltaic panels and rise high enough (more than 40 metres) to make use of micro wind turbines.

              Freiburg Mage Solar Stadium in Germany is the first of a new wave of stadiums as power plants, which also includes the Amsterdam Arena and the Kaohsiung Stadium. The latter, inaugurated in 2009, has 8,844 photovoltaic panels producing up to 1.14 GWh of electricity annually. This reduces the annual output of carbon dioxide by 660 tons and supplies up to 80 percent of the surrounding area when the stadium is not in use. This is proof that a stadium can serve its city, and have a decidedly positive impact in terms of reduction of CO2 emissions.
              <br />
              <span className='font-blod text-2xl my-16'>G</span>
              <br />
              Sporting arenas have always been central to the life and culture of cities. In every era, the stadium has acquired new value and uses: from military fortress to residential village, public space to theatre and most recently a field for experimentation in advanced engineering. The stadium of today now brings together multiple functions, thus helping cities to create a sustainable future.

              —————-

              * amphitheatre: (especially in Greek and Roman architecture) an open circular or oval building with a central space surrounded by tiers of seats for spectators, for the presentation of dramatic or sporting events
              <br />
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

          <h1 className='font-bold text-xl'>Questions 14-17</h1>
          <br /><br />

          Reading Passage 2 has seven paragraphs, A-G.
          <br /><br />

          Which section contains the following information?
          <br /><br />

          Write the correct letter, A-G, in boxes 14-17 on your answer sheet.
          <br /><br />

          NB   You may use any letter more than once.
          <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />

          14 . a mention of negative attitudes towards stadium building projects
          <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />

          15 . figures demonstrating the environmental benefits of a certain stadium
          <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />

          16 . examples of the wide range of facilities available at some new stadiums
          <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />

          17 . reference to the disadvantages of the stadiums built during a certain era
          <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />

          <br /><br />

          Questions 18-22
          <br /><br />

          Complete the summary below.
          <br /><br />

          Choose ONE WORD ONLY from the passage for each answer.
          <br /><br />

          Write your answers in boxes 18-22 on your answer sheet.
          <br /><br />

          Roman amphitheatres
          The Roman stadium of Europe have proved very versatile. The amphitheatre of Arles, for example, was converted first into a 18 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />, then into a residential area and finally into an arena where spectators could watch 19 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> . Meanwhile, the arena in Verona, one of the oldest Roman amphitheatres, is famous today as a venue where 20 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> is performed. The site of Lucca’s amphitheatre has also been used for many purposes over the centuries, including the storage of 21 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> . It is now a market square with 22 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> and homes incorporated into the remains of the Roman amphitheatre.

          <br /><br />


          <h1 className='font-bold text-xl'>Questions 23-24</h1>
          <br /><br />

          Choose TWO letters, A-E.
          <br /><br />

          Write the correct letters in boxes 23 and 24 on your answer sheet.
          <br /><br />

          When comparing twentieth-century stadiums to ancient amphitheatres in Section D, which TWO negative features does the writer mention?
          <br /><br />
          A . They are less imaginatively designed.
          <br />
          <div className='flex items-center gap-5'>
            <div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
          </div>
          <br />

          B . They are less spacious.
          <br />
          <div className='flex items-center gap-5'>
            <div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
          </div>
          <br />

          C . They are in less convenient locations.
          <br />
          <div className='flex items-center gap-5'>
            <div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
          </div>
          <br />
          D . They are less versatile.
          <br />
          <div className='flex items-center gap-5'>
            <div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
          </div>
          <br />
          E . They are made of less durable materials

          <br />
          <div className='flex items-center gap-5'>
            <div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
          </div>
          <br />


          <h1 className='font-bold text-xl'>Questions 25-26</h1>
          <br />
          Choose TWO letters, A-E.
          <br />
          <br />
          Write the correct letters in boxes 25 and 26 on your answer sheet.
          <br />
          <br />
          Which TWO advantages of modern stadium design does the writer mention?
          <br />
          <br />
          A . offering improved amenities for the enjoyment of sports events

          <br />
          <div className='flex items-center gap-5'>
            <div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
          </div>
          <br />

          B . bringing community life back into the city environment
          <br />
          <div className='flex items-center gap-5'>
            <div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
          </div>
          <br />

          C . facilitating research into solar and wind energy solutions
          <br />
          <div className='flex items-center gap-5'>
            <div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
          </div>
          <br />

        </div>
      </div> 
      <br /><br />
      <div className='flex gap-10 text-black  bg-gray-300 p-5'>
        <div className='w-2/4 h-screen overflow-y-auto'>
          <h1 className="text-4xl font-bold">READING PASSAGE 3</h1>
          <p className="my-5">
            You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.
          </p>
          <h1 className="text-3xl font-bold my-5">To catch a king
          </h1>
          <p>
            Anna Keay reviews Charles Spencer’s book about the hunt for King Charles II during the English Civil War of the seventeenth century

            Charles Spencer’s latest book, To Catch a King, tells us the story of the hunt for King Charles II in the six weeks after his resounding defeat at the Battle of Worcester in September 1651. And what a story it is. After his father was executed by the Parliamentarians in 1649, the young Charles II sacrificed one of the very principles his father had died for and did a deal with Scots, thereby accepting Presbyterianism* as the national religion in return for being crowned King of Scots. His arrival in Edinburgh prompted the English Parliamentary army to invade Scotland in a pre-emptive strike. This was followed by a Scottish invasion of England. The two sides finally faced one another at Worcester in the west of England in 1651. After being comprehensively defeated on the meadows outside the city by the Parliamentarian army, the 21-year-old king found himself the subject of a national manhunt, with a huge sum offered for his capture, through a series of heart-poundingly close escapes, to evade the Parliamentarians before seeking refuge in France. For the next nine years, the penniless and defeated Charles wandered around Europe with only a small group of loyal supporters.
          </p>

          <p className={isExpanded ? '' : ''}>
            Years later, after his restoration as king, the 50-year-old Charles II requested a meeting with the writer and diarist Samuel Pepys. His intention when asking Pepys to commit his story to paper was to ensure that this most extraordinary episode was never forgotten. Over two three-hour sittings, the king related to him in great detail his personal recollections of the six weeks he had spent as a fugitive. As the king and secretary settled down (a scene that is surely a gift for a future scriptwriter), Charles commenced his story: ‘After the battle was so absolutely lost as to be beyond hope of recovery, I began to think of the best way of saving myself.’
          </p>

          {isExpanded && (
            <p> One of the joys of Spencer’s book, a result not least of its use of Charles II’s own narrative as well as those of his supporters, is just how close the reader gets to the action. The day-by-day retelling of the fugitives’ doings provides delicious details: the cutting of the king’s long hair with agricultural shears, the use of walnut leaves to dye his pale skin, and the day Charles spent lying on a branch of the great oak tree in Boscobel Wood as the Parliamentary soldiers scoured the forest floor below. Spencer draws out both the humour – such as the preposterous refusal of Charles’s friend Henry Wilmot to adopt disguise on the grounds that it was beneath his dignity – and the emotional tension when the secret of the king’s presence was cautiously revealed to his supporters.

              Charles’s adventures after losing the Battle of Worcester hide the uncomfortable truth that whilst almost everyone in England had been appalled by the execution of his father, they had not welcomed the arrival of his son with the Scots army, but had instead firmly bolted their doors. This was partly because he rode at the head of what looked like a foreign invasion force and partly because, after almost a decade of civil war, people were desperate to avoid it beginning again. This makes it all the more interesting that Charles II himself loved the story so much ever after. As well as retelling it to anyone who would listen, causing eye-rolling among courtiers, he set in train a series of initiatives to memorialise it. There was to be a new order of chivalry, the Knights of the Royal Oak. A series of enormous oil paintings depicting the episode were produced, including a two-metre-wide canvas of Boscobel Wood and a set of six similarly enormous paintings of the king on the run. In 1660, Charles II commissioned the artist John Michael Wright to paint a flying squadron of cherubs* carrying an oak tree to the heavens on the ceiling of his bedchamber. It is hard to imagine many other kings marking the lowest point in their life so enthusiastically, or indeed pulling off such an escape in the first place.

              Charles Spencer is the perfect person to pass the story on to a new generation. His pacey, readable prose steers deftly clear of modern idioms and elegantly brings to life the details of the great tale. He has even-handed sympathy for both the fugitive king and the fierce republican regime that hunted him, and he succeeds in his desire to explore far more of the background of the story than previous books on the subject have done. Indeed, the opening third of the book is about how Charles II found himself at Worcester in the first place, which for some will be reason alone to read To Catch a King.

              The tantalizing question left, in the end, is that of what it all meant. Would Charles II have been a different king had these six weeks never happened? The days and nights spent in hiding must have affected him in some way. Did the need to assume disguises, to survive on wit and charm alone, to use trickery and subterfuge to escape from tight corners help form him? This is the one area where the book doesn’t quite hit the mark. Instead its depiction of Charles II in his final years as an ineffective, pleasure-loving monarch doesn’t do justice to the man (neither is it accurate), or to the complexity of his character. But this one niggle aside, To Catch a King is an excellent read, and those who come to it knowing little of the famous tale will find they have a treat in store.

              ————–

              * Presbyterianism: part of the reformed Protestant religion

              * cherub: an image of angelic children used in paintings
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
          <h1 className='font-bold text-2xl'>Questions 27-31</h1>
          Complete the summary using the list of phrases, A-J, below.
          <br /><br />

          Write the correct letter, A-J, in boxes 27-31 on your answer sheet.
          <br /><br />

          The story behind the hunt for Charles II
          <br /><br />

          Charles II’s father was executed by the Parliamentarian forces in 1649. Charles II then formed a 27 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> with the Scots, and in order to become King of Scots, he abandoned an important 28 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> that was held by his father and had contributed to his father’s death. The opposing sides then met outside Worcester in 1651. The battle led to a 29 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> for the Parliamentarians and Charles had to flee for his life. A 30 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> was offered for Charles’s capture, but after six weeks spent in hiding, he eventually managed to reach the 31 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> of continental Europe.
          A   military innovation             B   large reward
          <br /><br />

          C   widespread conspiracy      D   relative safety
          <br /><br />

          E   new government                 F   decisive victory
          <br /><br />

          G   political debate                   H   strategic alliance
          <br /><br />

          I    popular solution                  J    religious conviction


          <br /><br />

          <h1 className='font-bold text-2xl'> Questions 32-35</h1>
          Do the following statements agree with the claims of the writer in Reading Passage 3?
          <br /><br />

          In boxes 32-35 on your answer sheet, write

          YES                  if the statement agrees with the claims of the writer
          <br /><br />

          NO                   if the statement contradicts the claims of the writer
          <br /><br />

          NOT GIVEN    if it is impossible to say what the writer thinks about this

          <br /><br />

          32 . Charles chose Pepys for the task because he considered him to be trustworthy.

          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />
          33 . Charles’s personal recollection of the escape lacked sufficient detail.

          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />
          34 . Charles indicated to Pepys that he had planned his escape before the battle.

          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />
          35 . The inclusion of Charles’s account is a positive aspect of the book.


          <br />
          <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          <br />

          <h1 className='font-bold text-2xl'>Questions 36-40</h1>
          <br /><br />
          Choose the correct letter, A, B, C, or D.
          <br /><br />

          Write the correct letter in boxes 36-40 on your answer sheet.
          <br /><br />


          36 .  What is the reviewer’s main purpose in the first paragraph?
          <br /><br />

          <Checkbox></Checkbox> A . to describe what happened during the Battle of Worcester
          <br /><br />

          <Checkbox></Checkbox> B . to give an account of the circumstances leading to Charles II’s escape
          <br /><br />

          <Checkbox></Checkbox> C . to provide details of the Parliamentarians’ political views
          <br /><br />

          <Checkbox></Checkbox> D . to compare Charles II’s beliefs with those of his father

          <br /><br />

          37 .  Why does the reviewer include examples of the fugitives’ behaviour in the third paragraph?
          <br /><br />

          <Checkbox></Checkbox> A . to explain how close Charles II came to losing his life
          <br /><br />

          <Checkbox></Checkbox> B . to suggest that Charles II’s supporters were badly prepared
          <br /><br />

          <Checkbox></Checkbox> C . to illustrate how the events of the six weeks are brought to life
          <br /><br />

          <Checkbox></Checkbox> D . to argue that certain aspects are not as well known as they should be
          <br /><br />


          38 .  What point does the reviewer make about Charles II in the fourth paragraph?
          <br /><br />

          <Checkbox></Checkbox> A . He chose to celebrate what was essentially a defeat.
          <br /><br />

          <Checkbox></Checkbox> B . He misunderstood the motives of his opponents.
          <br /><br />

          <Checkbox></Checkbox> C . He aimed to restore people’s faith in the monarchy.
          <br /><br />

          <Checkbox></Checkbox> D . He was driven by a desire to be popular.
          <br /><br />


          39 .  What does the reviewer say about Charles Spencer in the fifth paragraph?
          <br /><br />

          <Checkbox></Checkbox> A . His decision to write the book comes as a surprise.
          <br /><br />

          <Checkbox></Checkbox> B . He takes an unbiased approach to the subject matter.
          <br /><br />

          <Checkbox></Checkbox> C . His descriptions of events would be better if they included more detail.
          <br /><br />

          <Checkbox></Checkbox> D . He chooses language that is suitable for a twenty-first-century audience.
          <br /><br />


          40 .  When the reviewer says the book ‘doesn’t quite hit the mark’, she is making the point that
          <br /><br />

          <Checkbox></Checkbox> A . it overlooks the impact of events on ordinary people.
          <br /><br />

          <Checkbox></Checkbox> B . it lacks an analysis of prevalent views on monarchy.
          <br /><br />

          <Checkbox></Checkbox> C . it omits any references to the deceit practised by Charles II during his time in hiding.
          <br /><br />

          <Checkbox></Checkbox> D . it fails to address whether Charles II’s experiences had a lasting influence on him.
        </div>
      </div>
    </div>
  )
}
