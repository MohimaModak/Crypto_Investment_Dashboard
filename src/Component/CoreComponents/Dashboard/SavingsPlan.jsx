import { Checkbox } from '@mui/material';
import React, { useState } from 'react'

export default function SavingsPlan() {

  const [isExpanded, setIsExpanded] = useState(false); // State to toggle the full text

  const toggleText = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };


  return (
    <div className="bg-white text-black h-screen overflow-y-auto">
      <div className='p-5'>

        <div className='flex gap-10 text-black  bg-gray-300 p-5'>
          <div className='w-2/4 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold">READING PASSAGE 1</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.
            </p>
            <h1 className="text-3xl font-bold my-5">Stonehenge
            </h1>
            <p>
              For centuries, historians and archaeologists have puzzled over the many mysteries of Stonehenge, a prehistoric monument that took an estimated 1,500 years to erect. Located on Salisbury Plain in southern England, it is comprised of roughly 100 massive upright stones placed in a circular layout.

              Archaeologists believe England’s most iconic prehistoric ruin was built in several stages with the earliest constructed 5,000 or more years ago. First, Neolithic* Britons used primitive tools, which may have been fashioned out of deer antlers, to dig a massive circular ditch and bank, or henge. Deep pits dating back to that era and located within the circle may have once held a ring of timber posts, according to some scholars.
            </p>

            <p className={isExpanded ? '' : ''}>
              Several hundred years later, it is thought, Stonehenge’s builders hoisted an estimated 80 bluestones, 43 of which remain today, into standing positions and placed them in either a horseshoe or circular formation. These stones have been traced all the way to the Preseli Hills in Wales, some 300 kilometres from Stonehenge. How, then, did prehistoric builders without sophisticated tools or engineering haul these boulders, which weigh up to four tons, over such a great distance?
            </p>

            {isExpanded && (
              <p>
                According to one long-standing theory among archaeologists, Stonehenge’s builders fashioned sledges and rollers out of tree trunks to lug the bluestones from the Preseli Hills. They then transferred the boulders onto rafts and floated them first along the Welsh coast and then up the River Avon toward Salisbury Plain; alternatively, they may have towed each stone with a fleet of vessels. More recent archaeological hypotheses have them transporting the bluestones with supersized wicker baskets on a combination of ball bearings and long grooved planks, hauled by oxen.

                As early as the 1970s, geologists have been adding their voices to the debate over how Stonehenge came into being. Challenging the classic image of industrious builders pushing, carting, rolling or hauling giant stones from faraway Wales, some scientists have suggested that it was glaciers, not humans, that carried the bluestones to Salisbury Plain. Most archaeologists have remained sceptical about this theory, however, wondering how the forces of nature could possibly have delivered the exact number of stones needed to complete the circle.


                The third phase of construction took place around 2000 BCE. At this point, sandstone slabs – known as ‘sarsens’ – were arranged into an outer crescent or ring; some were assembled into the iconic three-pieced structures called trilithons that stand tall in the centre of Stonehenge. Some 50 of these stones are now visible on the site, which may once have contained many more. Radiocarbon dating has revealed that work continued at Stonehenge until roughly 1600 BCE, with the bluestones in particular being repositioned multiple times.

                But who were the builders of Stonehenge? In the 17th century, archaeologist John Aubrey made the claim that Stonehenge was the work of druids, who had important religious, judicial and political roles in Celtic** society. This theory was widely popularized by the antiquarian William Stukeley, who had unearthed primitive graves at the site. Even today, people who identify as modern druids continue to gather at Stonehenge for the summer solstice. However, in the mid-20th century, radiocarbon dating demonstrated that Stonehenge stood more than 1,000 years before the Celts inhabited the region.

                Many modern historians and archaeologists now agree that several distinct tribes of people contributed to Stonehenge, each undertaking a different phase of its construction. Bones, tools and other artefacts found on the site seem to support this hypothesis. The first stage was achieved by Neolithic agrarians who were likely to have been indigenous to the British Isles. Later, it is believed, groups with advanced tools and a more communal way of life left their mark on the site. Some believe that they were immigrants from the European continent, while others maintain that they were probably native Britons, descended from the original builders.


                If the facts surrounding the architects and construction of Stonehenge remain shadowy at best, the purpose of the striking monument is even more of a mystery. While there is consensus among the majority of modern scholars that Stonehenge once served the function of burial ground, they have yet to determine what other purposes it had.

                In the 1960s, the astronomer Gerald Hawkins suggested that the cluster of megalithic stones operated as a form of calendar, with different points corresponding to astrological phenomena such as solstices, equinoxes and eclipses occurring at different times of the year. While his theory has received a considerable amount of attention over the decades, critics maintain that Stonehenge’s builders probably lacked the knowledge necessary to predict such events or that England’s dense cloud cover would have obscured their view of the skies.

                More recently, signs of illness and injury in the human remains unearthed at Stonehenge led a group of British archaeologists to speculate that it was considered a place of healing, perhaps because bluestones were thought to have curative powers.

                —–

                * Neolithic – The era, also known as the New Stone Age, which began around 12,000 years ago and ended around 3500 BCE

                ** Celtic – The Celts were people who lived in Britain and northwest Europe during the Iron Age from 600 BCE to 43 C
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
            <div>


              <br /><br />
              <h1 className='font-bold text-xl'>Questions 1-8</h1>
              <br /><br />

              Complete the notes below.
              <br /><br />

              Choose NO MORE THAN TWO WORDS from the passage for each answer.
              <br /><br />

              Write your answers in boxes 1-8 on your answer sheet.
              <br /><br />

              Stonehenge
              <br /><br />

              Construction
              <br /><br />

              Stage 1:
              <br /><br />

              ●   the ditch and henge were dug, possibly using tools made from 1. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              <br /><br />

              ●   2. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> may have been arranged in deep pits inside the circle
              <br /><br />

              Stage 2:
              <br /><br />

              ●   bluestones from the Preseli Hills were placed in standing position
              <br /><br />

              ●   theories about the transportation of the bluestones:
              <br /><br />

              –   archaeological:
              <br /><br />

              o   builders used 3. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> to make sledges and rollers
              <br /><br />

              o   4. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> pulled them on giant baskets
              <br /><br />

              –   geological:
              <br /><br />

              o   they were brought from Wales by 5. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              Stage 3:
              <br /><br />

              ●   sandstone slabs were arranged into an outer crescent or ring
              Builders
              <br /><br />

              ●   a theory arose in the 17th century that its builders were Celtic 6<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              <br /><br />

              Purpose
              <br /><br />

              ●   many experts agree it has been used as a 7<input type="text" className='text-black my-3 border-2 border-black rounded-md' /> site
              <br /><br />

              ●   in the 1960s, it was suggested that it worked as a kind of 8<input type="text" className='text-black my-3 border-2 border-black rounded-md' />

              <br /><br />


              <h1 className='font-bold text-xl'>Questions 9-13</h1>
              <br /><br />

              Do the following statements agree with the information given in Reading Passage 1?
              <br /><br />

              In boxes 9-13 on your answer sheet, write
              <br /><br />

              TRUE               if the statement agrees with the information
              <br /><br />

              FALSE              if the statement contradicts the information
              <br /><br />

              NOT GIVEN     if there is no information on this
              <br /><br />


              9 .  During the third phase of construction, sandstone slabs were placed in both the outer areas and the middle of the Stonehenge site.

              <br />
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />

              10 . There is scientific proof that the bluestones stood in the same spot until approximately 1600 BCE.

              <br />
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />

              11 . John Aubrey’s claim about Stonehenge was supported by 20th-century findings.

              <br />
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />

              12 . Objects discovered at Stonehenge seem to indicate that it was constructed by a number of different groups of people.

              <br />
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />

              13 . Criticism of Gerald Hawkins’ theory about Stonehenge has come mainly from other astronomers.

              <br />
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />


            </div>
          </div>

        </div>
        <br /><br />
        <div className='flex gap-10 text-black bg-gray-300 p-5'>
          <div className='w-2/4 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold">READING PASSAGE 2</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.
            </p>
            <h1 className="text-3xl font-bold my-5">Living with artificial intelligence
            </h1>
            <p>
              This has been the decade of AI, with one astonishing feat after another. A chess-playing AI that can defeat not only all human chess players, but also all previous human-programmed chess machines, after learning the game in just four hours? That’s yesterday’s news, what’s next? True, these prodigious accomplishments are all in so-called narrow AI, where machines perform highly specialised tasks. But many experts believe this restriction is very temporary. By mid-century, we may have artificial general intelligence (AGI) – machines that can achieve human-level performance on the full range of tasks that we ourselves can tackle.
            </p>

            <p className={isExpanded ? '' : ''}>
              If so, there’s little reason to think it will stop there. Machines will be free of many of the physical constraints on human intelligence. Our brains run at slow biochemical processing speeds on the power of a light bulb, and their size is restricted by the dimensions of the human birth canal. It is remarkable what they accomplish, given these handicaps. But they may be as far from the physical limits of thought as our eyes are from the incredibly powerful Webb Space Telescope.
            </p>

            {isExpanded && (
              <p>
                Once machines are better than us at designing even smarter machines, progress towards these limits could accelerate. What would this mean for us? Could we ensure a safe and worthwhile coexistence with such machines? On the plus side, AI is already useful and profitable for many things, and super AI might be expected to be super useful and super profitable. But the more powerful AI becomes, the more important it will be to specify its goals with great care. Folklore is full of tales of people who ask for the wrong thing, with disastrous consequences- King Midas, for example, might have wished that everything he touched turned to gold, but didn’t really intend this to apply to his breakfast.

                So we need to create powerful AI machines that are ‘human-friendly’- that have goals reliably aligned with our own values. One thing that makes this task difficult is that we are far from reliably human-friendly ourselves. We do many terrible things to each other and to many other creatures with whom we share the planet. If superintendent machines don’t do a lot better than us, we’ll be in deep trouble. We’ll have powerful new intelligence amplifying the dark sides of our own fallible natures.

                For safety’s sake, then, we want the machines to be ethically as well as cognitively superhuman. We want them to aim for the moral high ground, not for the troughs in which many of us spend some of our time. Luckily they’ll be smart enough for the job. If there are routes to the moral high ground, they’ll be better than us at finding them, and steering us in the right direction.

                However, there are two big problems with this utopian vision. One is how we get the machines started on the journey, the other is what it would mean to reach this destination. The ‘getting started’ problem is that we need to tell the machines what they’re looking for with sufficient clarity that we can be confident they will find it – whatever ‘it’ actually turns out to be. This won’t be easy, given that we are tribal creatures and conflicted about the ideals ourselves. We often ignore the suffering of strangers, and even contribute to it, at least indirectly. How then, do we point machines in the direction of something better?

                As for the ‘destination’ problem, we might, by putting ourselves in the hands of these moral guides and gatekeepers, be sacrificing our own autonomy – an important part of what makes us human. Machines who are better than us at sticking to the moral high ground may be expected to discourage some of the lapses we presently take for granted. We might lose our freedom to discriminate in favour of our own communities, for example.

                Loss of freedom to behave badly isn’t always a bad thing, of course: denying ourselves the freedom to put children to work in factories, or to smoke in restaurants are signs of progress. But are we ready for ethical silicon police limiting our options? They might be so good at doing it that we won’t notice them; but few of us are likely to welcome such a future.

                These issues might seem far-fetched, but they are to some extent already here. AI already has some input into how resources are used in our National Health Service (NHS) here in the UK, for example. If it was given a greater role, it might do so much more efficiently than humans can manage, and act in the interests of taxpayers and those who use the health system. However, we’d be depriving some humans (e.g. senior doctors) of the control they presently enjoy. Since we’d want to ensure that people are treated equally and that policies are fair, the goals of AI would need to be specified correctly.

                We have a new powerful technology to deal with- itself, literally, a new way of thinking. For our own safety, we need to point these new thinkers in the right direction, and get them to act well for us. It is not yet clear whether this is possible, but if it is, it will require a cooperative spirit, and a willingness to set aside self-interest.

                Both general intelligence and moral reasoning are often thought to be uniquely human capacities. But safety seems to require that we think of them as a package: if we are to give general intelligence to machines, we’ll need to give them moral authority, too. And where exactly would that leave human beings? All the more reason to think about the destination now, and to be careful about what we wish for.
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
            <h1 className='font-bold text-xl'>Questions 14-19</h1>
            <br /><br />
            Choose the correct letter, A, B, C or D.
            <br /><br />

            Write the correct letter in boxes 14-19 on your answer sheet.
            <br /><br />


            14 .  What point does the writer make about AI in the first paragraph?
            <br /><br />

            <Checkbox></Checkbox> A . It is difficult to predict how quickly AI will progress.
            <br /><br />

            <Checkbox></Checkbox>  B . Much can be learned about the use of AI in chess machines.
            <br /><br />

            <Checkbox></Checkbox>  C . The future is unlikely to see limitations on the capabilities of AI.
            <br /><br />

            <Checkbox></Checkbox>  D . Experts disagree on which specialised tasks AI will be able to perform.
            <br /><br />


            15 .  What is the writer doing in the second paragraph?
            <br /><br />

            <Checkbox></Checkbox>  A . explaining why machines will be able to outperform humans
            <br /><br />

            <Checkbox></Checkbox>  B . describing the characteristics that humans and machines share
            <br /><br />

            <Checkbox></Checkbox>  C . giving information about the development of machine intelligence
            <br /><br />

            <Checkbox></Checkbox>  D . indicating which aspects of humans are the most advanced
            <br /><br />


            16 .  Why does the writer mention the story of King Midas?
            <br /><br />

            <Checkbox></Checkbox> A . to compare different visions of progress
            <br /><br />

            <Checkbox></Checkbox> B . to illustrate that poorly defined objectives can go wrong
            <br /><br />

            <Checkbox></Checkbox> C . to emphasise the need for cooperation
            <br /><br />

            <Checkbox></Checkbox> D . to point out the financial advantages of a course of action
            <br /><br />

            17 .  What challenge does the writer refer to in the fourth paragraph?
            <br /><br />

            <Checkbox></Checkbox> A . encouraging humans to behave in a more principled way
            <br /><br />

            <Checkbox></Checkbox> B . deciding which values we want AI to share with us
            <br /><br />

            <Checkbox></Checkbox> C . creating a better world for all creatures on the planet
            <br /><br />

            <Checkbox></Checkbox> D . ensuring AI is more human-friendly than we are ourselves
            <br /><br />


            18 .  What does the writer suggest about the future of AI in the fifth paragraph?
            <br /><br />

            <Checkbox></Checkbox> A . The safety of machines will become a key issue.
            <br /><br />

            <Checkbox></Checkbox> B . It is hard to know what impact machines will have on the world.
            <br /><br />

            <Checkbox></Checkbox> C . Machines will be superior to humans in certain respects.
            <br /><br />

            <Checkbox></Checkbox> D . Many humans will oppose machines having a wider role.
            <br /><br />


            19 .  Which of the following best summarises the writer’s argument in the sixth paragraph?
            <br /><br />

            <Checkbox></Checkbox> A . More intelligent machines will result in greater abuses of power.
            <br /><br />

            <Checkbox></Checkbox> B . Machine learning will share very few features with human learning.
            <br /><br />

            <Checkbox></Checkbox> C . There are a limited number of people with the knowledge to program machines.
            <br /><br />

            <Checkbox></Checkbox> D . Human shortcomings will make creating the machines we need more difficult.
            <br /><br />

            <h1 className='font-bold text-xl'>Questions 20-23</h1>
            <br /><br />

            Do the following statements agree with the claims of the writer in Reading Passage 2?
            <br /><br />

            In boxes 20-23 on your answer sheet, write
            <br /><br />

            YES               if the statement agrees with the claims of the writer
            <br /><br />

            NO                if the statement contradicts the claims of the writer
            <br /><br />

            NOT GIVEN  if it is impossible to say what the writer thinks about this

            <br /><br />

            20 . Machines with the ability to make moral decisions may prevent us from promoting the interests of our communities.
            <br /><br />

            21 . Silicon police would need to exist in large numbers in order to be effective.
            <br /><br />

            22 . Many people are comfortable with the prospect of their independence being restricted by machines.
            <br /><br />

            23 . If we want to ensure that machines act in our best interests, we all need to work together.


            <br /><br />

            <h1 className='font-bold text-xl'>Questions 24-26</h1>
            <br /><br />

            Complete the summary using the list of phrases, A-F, below.
            <br /><br />

            Write the correct letter, A-F, in boxes 24-26 on your answer sheet.
            <br /><br />

            Using AI in the UK health system
            AI currently has a limited role in the way 24. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> are allocated in the health service. The positive aspect of AI having a bigger role is that it would be more efficient and lead to patient benefits. However, such a change would result, for example, in certain 25. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> not having their current level of 26. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> . It is therefore important that AI goals are appropriate so that discriminatory practices could be avoided.


            <br /><br />
            A .  medical practitioners  <br /><br />
            B .  specialised tasks
            <br /><br />
            C .  available resources   <br /><br />
            D .  reduced illness
            <br /><br />

            E .  professional authority    <br /><br />
            F  . technology experts
            <br /><br />

          </div>
        </div>
        <br /><br />

        <div className='flex gap-10 text-black bg-gray-300 p-5'>

          <div className='w-2/4 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold">READING PASSAGE 3</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.
            </p>
            <h1 className="text-3xl font-bold my-5">An ideal city
            </h1>
            <p>
              The word ‘genius’ is universally associated with the name of Leonardo da Vinci. A true Renaissance man, he embodied scientific spirit, artistic talent and humanist sensibilities. Five hundred years have passed since Leonardo died in his home at Chateau du Clos Luce, outside Tours, France. Yet far from fading into insignificance, his thinking has carried down the centuries and still surprises today.
            </p>

            <p className={isExpanded ? '' : ''}>
              The Renaissance marked the transition from the 15th century to modernity and took place after the spread of the plague in the 14th century, which caused a global crisis resulting in some 200 million deaths across Europe and Asia. Today, the world is on the cusp of a climate crisis, which is predicted to cause widespread displacement, extinctions and death, if left unaddressed. Then, as now, radical solutions were called for to revolutionise the way people lived and safeguard humanity against catastrophe.
            </p>

            {isExpanded && (
              <p>
                Around 1486 – after a pestilence that killed half the population in Milan, Italy – Leonardo turned his thoughts to urban planning problems. Following a typical Renaissance trend, he began to work on an ‘ideal city’ project, which – due to its excessive costs – would remain unfulfilled. Yet given that unsustainable urban models are a key cause of global climate change today, it’s only natural to wonder how Leonardo might have changed the shape of modem cities.

                Although the Renaissance is renowned as an era of incredible progress in art and architecture, it is rarely noted that the 15th century also marked the birth of urbanism as a true academic discipline. The rigour and method behind the conscious conception of a city had been largely missing in Western thought until the moment when prominent Renaissance men pushed forward large-scale urban projects in Italy, such as the reconfiguration of the town of Pienza and the expansion of the city of Ferrara. These works surely inspired Leonardo’s decision to rethink the design of medieval cities, with their winding and overcrowded streets and with houses piled against one another.

                It is not easy to identify a coordinated vision of Leonardo’s ideal city because of his disordered way of working with notes and sketches. But from the largest collection of Leonardo’s papers ever assembled, a series of innovative thoughts can be reconstructed regarding the foundation of a new city along the Ticino River, which runs from Switzerland into Italy and is 248 kilometres long. He designed the city for the easy transport of goods and clean urban spaces, and he wanted a comfortable and spacious city, with well-ordered streets and architecture. He recommended ‘high, strong walls’, with ‘towers and battlements of all necessary and pleasant beauty’.

                His plans for a modem and ‘rational’ city were consistent with Renaissance ideals. But, in keeping with his personality, Leonardo included several innovations in his urban design. Leonardo wanted the city to be built on several levels, linked with vertical outdoor staircases. This design can be seen in some of today’s high-rise buildings but was unconventional at the time. Indeed, this idea of taking full advantage of the interior spaces wasn’t implemented until the 1920s and 1930s, with the birth of the Modernist movement.

                While in the upper layers of the city, people could walk undisturbed between elegant palaces and streets, the lower layer was the place for services, trade, transport and industry. But the true originality of Leonardo’s vision was its fusion of architecture and engineering. Leonardo designed extensive hydraulic plants to create artificial canals throughout the city. The canals, regulated by clocks and basins, were supposed to make it easier for boats to navigate inland. Leonardo also thought that the width of the streets ought to match the average height of the adjacent houses: a rule still followed in many contemporary cities across Italy, to allow access to sun and reduce the risk of damage from earthquakes.

                Although some of these features existed in Roman cities, before Leonardo’s drawings there had never been a multi-level, compact modem city which was thoroughly technically conceived. Indeed, it wasn’t until the 19th century that some of his ideas were applied. For example, the subdivision of the city by function- with services and infrastructures located in the lower levels and wide and well-ventilated boulevards and walkways above for residents – is an idea that can be found in Georges-Eugene Haussmann’s renovation of Paris under Emperor Napoleon III between 1853 and 1870.

                Today, Leonardo’s ideas are not simply valid, they actually suggest a way forward for urban planning. Many scholars think that the compact city, built upwards instead of outwards, integrated with nature (especially water systems), with efficient transport infrastructure, could help modem cities become more efficient and sustainable. This is yet another reason why Leonardo was aligned so closely with modem urban planning and centuries ahead of his time.
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

            <br /><br />

            Questions 27-33
            <br /><br />

            Do the following statements agree with the information given in Reading Passage 3?
            <br /><br />

            In boxes 27-33 on your answer sheet, write
            <br /><br />

            TRUE              if the statement agrees with the information
            <br /><br />

            FALSE             if the statement contradicts the information
            <br /><br />

            NOT GIVEN    if there is no information on this


            27 . People first referred to Leonardo da Vinci as a genius 500 years ago.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            28 . The current climate crisis is predicted to cause more deaths than the plague.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            29 . Some of the challenges we face today can be compared to those of earlier times.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            30 . Leonardo da Vinci’s ‘ideal city’ was constructed in the 15th century.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            31 . Poor town planning is a major contributor to climate change.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            32 . In Renaissance times, local people fought against the changes to Pienza and Ferrara.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            33 . Leonardo da Vinci kept a neat, organised record of his designs.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            <h1 className='font-bold text-xl'>Questions 34-40</h1>
            <br /><br />

            Complete the summary below.
            <br /><br />

            Choose ONE WORD ONLY from the passage for each answer.
            <br /><br />

            Write your answers in boxes 34-40 on your answer sheet.
            <br /><br />
            <h1 className='font-bold text-xl'>Leonardo da Vinci’s ideal city</h1>
            A collection of Leonardo da Vinci’s paperwork reveals his design of a new city beside the Ticino River. This was to provide better 34. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> for trade and a less polluted environment. Although Leonardo da Vinci’s city shared many of the ideals of his time, some of his innovations were considered unconventional in their design. They included features that can be seen in some tower blocks today, such as 35. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> on the exterior of a building.

            Leonardo da Vinci wasn’t only an architect. His expertise in 36. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> was evident in his plans for artificial canals within his ideal city. He also believed that the height of houses should relate to the width of streets in case earthquakes occurred. The design of many cities in Italy today follows this 37. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> .

            While some cities from 38. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> times have aspects that can also be found in Leonardo’s designs, his ideas weren’t put into practice until long after his  death. 39. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> is one example of a city that was redesigned in the 19th century in the way that Leonardo had envisaged. His ideas are also relevant to today’s world, where building 40. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> no longer seems to be the best approach.
          </div>
        </div>
      </div>
    </div>
  )
}
