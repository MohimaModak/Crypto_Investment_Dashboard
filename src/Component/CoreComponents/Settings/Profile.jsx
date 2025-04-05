import { Checkbox } from '@mui/material';
import React, { useState } from 'react'

export default function Profile() {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle the full text

  const toggleText = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };
  return (
    <div className='bg-white text-black h-screen overflow-y-auto'>
      <div className='p-5'>
        {/* 1 */}
        <div className='flex gap-10 text-black  bg-gray-100 p-5'>
          <div className='w-5/6 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold">READING PASSAGE 1</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 1-13, which are based on Reading Passage 1 below.
            </p>
            <h1 className="text-3xl font-bold my-5">How tennis rackets have changed
            </h1>
            <p>
              In 2016, the British professional tennis player Andy Murray was ranked as the world’s number one. It was an incredible achievement by any standard – made even more remarkable by the fact that he did this during a period considered
            </p>

            <p className={isExpanded ? '' : ''}>
              to be one of the strongest in the sport’s history, competing against the likes of Rafael Nadal, Roger Federer and Novak Djokovic, to name just a few. Yet five years previously, he had been regarded as a talented outsider who entered but never won the major tournaments.
            </p>

            {isExpanded && (
              <p> Of the changes that account for this transformation, one was visible and widely publicised: in 2011, Murray invited former number one player Ivan Lendl onto his coaching team – a valuable addition that had a visible impact on the player’s playing style. Another change was so subtle as to pass more or less unnoticed. Like many players, Murray has long preferred a racket that consists of two types of string: one for the mains (verticals) and another for the crosses (horizontals). While he continued to use natural string in the crosses, in 2012 he switched to a synthetic string for the mains. A small change, perhaps, but its importance should not be underestimated.The modification that Murray made is just one of a number of options available to players looking to tweak their rackets in order to improve their games. ‘Touring professionals have their rackets customised to their specific needs,’ says Colin Triplow, a UK-based professional racket stringer. ‘It’s a highly important part of performance maximisation.’ Consequently, the specific rackets used by the world’s elite are not actually readily available to the public; rather, each racket is individually made to suit the player who uses it. Take the US professional tennis players Mike and Bob Bryan, for example: ‘We’re very particular with our racket specifications,’ they say. ‘All our rackets are sent from our manufacturer to Tampa, Florida, where our frames go through a . . . thorough customisation process.’ They explain how they have adjusted not only racket length, but even experimented with different kinds of paint. The rackets they use now weigh more than the average model and also have a denser string pattern (i.e. more crosses and mains).

                The primary reason for these modifications is simple: as the line between winning and losing becomes thinner and thinner, even these slight changes become more and more important. As a result, players and their teams are becoming increasingly creative with the modifications to their rackets as they look to maximise their competitive advantage.

                Racket modifications mainly date back to the 1970s, when the amateur German tennis player Werner Fischer started playing with the so-called spaghetti-strung racket. It created a string bed that generated so much topspin that it was quickly banned by the International Tennis Federation. However, within a decade or two, racket modification became a regularity. Today it is, in many ways, an aspect of the game that is equal in significance to nutrition or training.

                Modifications can be divided into two categories: those to the string bed and those to the racket frame. The former is far more common than the latter: the choice of the strings and the tension with which they are installed is something that nearly all professional players experiment with. They will continually change it depending on various factors including the court surface, climatic conditions, and game styles. Some will even change it depending on how they feel at the time.At one time, all tennis rackets were strung with natural gut made from the outer layer of sheep or cow intestines. This all changed in the early 1990s with the development of synthetic strings that were cheaper and more durable. They are made from three materials: nylon (relatively durable and affordable), Kevlar (too stiff to be used alone) or co-polyester (polyester combined with additives that enhance its performance). Even so, many professional players continue to use a ‘hybrid set-up’, where a combination of both synthetic and natural strings are used.

                Of the synthetics, co-polyester is by far the most widely used. It’s a perfect fit for the style of tennis now played, where players tend to battle it out from the back of the court rather than coming to the net. Studies indicate that the average spin from a co-polyester string is 25% greater than that from natural string or other synthetics. In a sense, the development of co-polyester strings has revolutionised the game.

                However, many players go beyond these basic adjustments to the strings and make changes to the racket frame itself. For example, much of the serving power of US professional player Pete Sampras was attributed to the addition of four to five lead weights onto his rackets, and today many professionals have the weight adjusted during the manufacturing process.

                Other changes to the frame involve the handle. Players have individual preferences for the shape of the handle and some will have the handle of one racket moulded onto the frame of a different racket. Other players make different changes. The professional Portuguese player Gonçalo Oliveira replaced the original grips of his rackets with something thinner because they had previously felt uncomfortable to hold.

                Racket customisation and modification have pushed the standards of the game to greater levels that few could have anticipated in the days of natural strings and heavy, wooden frames, and it’s exciting to see what further developments there will be in the future.
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
            <h1 className='font-bold text-2xl'>Questions 1–7</h1>
            <br /><br />
            Do the following statements agree with the information given in Reading Passage 1?
            <br /><br />

            In boxes 1–7 on your answer sheet, write
            <br /><br />

            TRUE               if the statement agrees with the information
            <br /><br />

            FALSE              if the statement contradicts the information
            <br /><br />

            NOT GIVEN     if there is no information on this
            <br /><br />

            1 .  People had expected Andy Murray to become the world’s top tennis player for at least five years before 2016.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />

            2 .  The change that Andy Murray made to his rackets attracted a lot of attention.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />

            3 .  Most of the world’s top players take a professional racket stringer on tour with them.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />

            4 .  Mike and Bob Bryan use rackets that are light in comparison to the majority of rackets.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />

            5  . Werner Fischer played with a spaghetti-strung racket that he designed himself.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />

            6  . The weather can affect how professional players adjust the strings on their rackets.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />

            7 .  It was believed that the change Pete Sampras made to his rackets contributed to his strong serve.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />


            <h1 className='font-bold text-2xl'>Questions 8–13</h1>
            <br /><br />

            Complete the notes below.
            <br /><br />

            Choose ONE WORD ONLY from the passage for each answer.
            <br /><br />

            Write your answers in boxes 8–13 on your answer sheet.
            <br /><br />

            The tennis racket and how it has changed
            <br /><br />

            ●   Mike and Bob Bryan made changes to the types of <span className='font-bold'>8.</span> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> used on their racket frames.
            <br /><br />

            ●   Players were not allowed to use the spaghetti-strung racket because of the amount of <span className='font-bold'>9.</span> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> it created.
            <br /><br />

            ●   Changes to rackets can be regarded as being as important as players’ diets or the <span className='font-bold'>10.</span> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> they do.
            <br /><br />

            ●   All rackets used to have natural strings made from the <span className='font-bold'>11.</span> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> of animals.
            <br /><br />

            ●   Pete Sampras had metal <span className='font-bold'>12.</span> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> put into the frames of his rackets.
            <br /><br />

            ●   Gonçalo Oliveira changed the <span className='font-bold'>13.</span> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> on his racket handles.
            <br /><br />
          </div>
        </div>
        {/* 1 */}
        <br /><br />
        <div className='flex gap-10 text-black  bg-gray-100 p-5'>
          <div className='w-5/6 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold my-5">READING PASSAGE 2</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.
            </p>
            <h1 className="text-3xl font-bold my-5">The pirates of the ancient Mediterranean
            </h1>
            <h1 className="text-lg font-bold my-5">In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers
            </h1>

            <p>
              <br />
              <span className='font-blod text-2xl my-16'>A</span>
              <br />
              When one mentions pirates, an image springs to most people’s minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea. Yet from the first to the third millennium BCE, thousands of years before these swashbucklers began spreading fear across the Caribbean, pirates prowled the Mediterranean, raiding merchant ships and threatening vital trade routes. However, despite all efforts and the might of various ancient states, piracy could not be stopped. The situation remained unchanged for thousands of years. Only when the pirates directly threatened the interests of ancient Rome did the Roman Republic organise a massive fleet to eliminate piracy. Under the command of the Roman general Pompey, Rome eradicated piracy, transforming the Mediterranean into ‘Mare Nostrum’ (Our Sea).
            </p>

            <p className={isExpanded ? '' : ''}>
              <span className='font-blod text-2xl my-16'>B</span>

              <br />
              Although piracy in the Mediterranean is first recorded in ancient Egypt during the reign of Pharaoh Amenhotep III (c 1390–1353 BCE), it is reasonable to assume it predated this powerful civilisation. This is partly due to the great importance the Mediterranean held at this time, and partly due to its geography. While the Mediterranean region is predominantly fertile, some parts are rugged and hilly, even mountainous. In the ancient times, the inhabitants of these areas relied heavily on marine resources, including fish and salt. Most had their own boats, possessed good seafaring skills, and unsurpassed knowledge of the local coastline and sailing routes. Thus, it is not surprising that during hardships, these men turned to piracy. Geography itself further benefited the pirates, with the numerous coves along the coast providing places for them to hide their boats and strike undetected. Before the invention of ocean-going caravels* in the 15th century, ships could not easily cross long distances over open water. Thus, in the ancient world most were restricted to a few well-known navigable routes that followed the coastline. Caught in a trap, a slow merchant ship laden with goods had no other option but to surrender. In addition, knowledge of the local area helped the pirates to avoid retaliation once a state fleet arrived.
              <br />
              ————————————-
              <br />
              * caravel: a small, highly manoeuvrable sailing ship developed by the Portuguese
              <br />
              <span className='font-blod text-2xl my-16'>C</span>
              <br />
              One should also add that it was not unknown in the first and second millennia BCE for governments to resort to pirates’ services, especially during wartime, employing their skills and numbers against their opponents. A pirate fleet would serve in the first wave of attack, preparing the way for the navy. Some of the regions were known for providing safe harbours to pirates, who, in return, boosted the local economy.
              <br />
              <span className='font-blod text-2xl my-16'>D</span>
              <br />
              The first known record of a named group of Mediterranean pirates, made during the rule of ancient Egyptian Pharaoh Akhenaten (c 1353–1336 BCE), was in the Amarna Letters. These were extracts of diplomatic correspondence between the pharaoh and his allies, and covered many pressing issues, including piracy. It seems the pharaoh was troubled by two distinct pirate groups, the Lukka and the Sherden. Despite the Egyptian fleet’s best efforts, the pirates continued to cause substantial disruption to regional commerce. In the letters, the king of Alashiya (modern Cyprus) rejected Akhenaten’s claims of a connection with the Lukka (based in modern-day Turkey). The king assured Akhenaten he was prepared to punish any of his subjects involved in piracy.


              <br />
              <span className='font-blod text-2xl my-16'>E</span>
              <br />
              The ancient Greek world’s experience of piracy was different from that of Egyptian rulers. While Egypt’s power was land-based, the ancient Greeks relied on the Mediterranean in almost all aspects of life, from trade to warfare. Interestingly, in his works the Iliad and the Odyssey, the ancient Greek writer Homer not only condones, but praises the lifestyle and actions of pirates. The opinion remained unchanged in the following centuries. The ancient Greek historian Thucydides, for instance, glorified pirates’ daring attacks on ships or even cities. For Greeks, piracy was a part of everyday life. Even high-ranking members of the state were not beyond engaging in such activities. According to the Greek orator Demosthenes, in 355 BCE, Athenian ambassadors made a detour from their official travel to capture a ship sailing from Egypt, taking the wealth found onboard for themselves! The Greeks’ liberal approach towards piracy does not mean they always tolerated it, but attempts to curtail piracy were hampered by the large number of pirates operating in the Mediterranean.


              <br />
              <span className='font-blod text-2xl my-16'>F</span>
              <br />
              The rising power of ancient Rome required the Roman Republic to deal with piracy in the Mediterranean. While piracy was a serious issue for the Republic, Rome profited greatly from its existence. Pirate raids provided a steady source of slaves, essential for Rome’s agriculture and mining industries. But this arrangement could work only while the pirates left Roman interests alone. Pirate attacks on grain ships, which were essential to Roman citizens, led to angry voices in the Senate, demanding punishment of the culprits. Rome, however, did nothing, further encouraging piracy. By the 1st century BCE, emboldened pirates kidnapped prominent Roman dignitaries, asking for a large ransom to be paid. Their most famous hostage was none other than Julius Caesar, captured in 75 BCE.
            </p>

            {isExpanded && (
              <p>
                <span className='font-blod text-2xl my-16'>G</span>
                <br />
                By now, Rome was well aware that pirates had outlived their usefulness. The time had come for concerted action. In 67 BCE, a new law granted Pompey vast funds to combat the Mediterranean menace. Taking personal command, Pompey divided the entire Mediterranean into 13 districts, assigning a fleet and commander to each. After cleansing one district of pirates, the fleet would join another in the next district. The process continued until the entire Mediterranean was free of pirates. Although thousands of pirates died at the hands of Pompey’s troops, as a long-term solution to the problem, many more were offered land in fertile areas located far from the sea. Instead of a maritime menace, Rome got productive farmers that further boosted its economy.
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
            <h1 className='font-bold text-2xl'>Questions 14–19</h1>
            <br /><br />
            Reading Passage 2 has seven paragraphs, A–G.
            <br /><br />

            Which paragraph contains the following information?
            <br /><br />

            Write the correct letter, A–G, in boxes 14–19 on your answer sheet.
            <br /><br />

            NB   You may use any letter more than once.
            <br /><br />

            14 .  a reference to a denial of involvement in piracy
            <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
            15 .  details of how a campaign to eradicate piracy was carried out
            <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
            16 .  a mention of the circumstances in which states in the ancient world would make use of pirates
            <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
            17 .  a reference to how people today commonly view pirates
            <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
            18 .  an explanation of how some people were encouraged not to return to piracy
            <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
            19 .  a mention of the need for many sailing vessels to stay relatively close to land
            <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />

            <h1 className='font-bold text-2xl'>Questions 20 and 21</h1>
            <br /><br />
            Choose TWO letters, A–E.
            <br /><br />

            Write the correct letters in boxes 20 and 21 on your answer sheet.
            <br /><br />

            Which TWO of the following statements does the writer make about inhabitants of the Mediterranean region in the ancient world?
            <br /><br />

            A .  They often used stolen vessels to carry out pirate attacks.
            <br /> <Checkbox></Checkbox> <br />
            B .  They managed to escape capture by the authorities because they knew the area so well.
            <br /><Checkbox></Checkbox><br />
            C .  They paid for information about the routes merchant ships would take.
            <br /><Checkbox></Checkbox><br />
            D .  They depended more on the sea for their livelihood than on farming.
            <br /><Checkbox></Checkbox><br />
            E .  They stored many of the goods taken in pirate attacks in coves along the coastline.
            <br /><Checkbox></Checkbox><br />

            <h1 className='font-bold text-2xl'>Questions 22 and 23</h1>
            <br /><br />

            Choose TWO letters, A–E.
            <br /><br />

            Write the correct letters in boxes 22 and 23 on your answer sheet.
            <br /><br />

            Which TWO of the following statements does the writer make about piracy and ancient Greece?
            <br /><br />

            A . The state estimated that very few people were involved in piracy.
            <br /><Checkbox></Checkbox><br />

            B . Attitudes towards piracy changed shortly after the Iliad and the Odyssey were written.
            <br /><Checkbox></Checkbox><br />

            C . Important officials were known to occasionally take part in piracy.
            <br /><Checkbox></Checkbox><br />

            D . Every citizen regarded pirate attacks on cities as unacceptable.
            <br /><Checkbox></Checkbox><br />

            E . A favourable view of piracy is evident in certain ancient Greek texts.
            <br /><Checkbox></Checkbox><br />

            <span className='font-bold text-2xl'>Questions 24–26</span>
            <br /><br />

            Complete the summary below.
            <br /><br />

            Choose ONE WORD ONLY from the passage for each answer.
            <br /><br />

            Write your answers in boxes 24–26 on your answer sheet.
            <br /><br />

            Ancient Rome and piracy
            Piracy was an issue ancient Rome had to deal with, but it also brought some benefits for Rome. For example, pirates supplied slaves that were important for Rome’s industries. However, attacks on vessels transporting <span className='font-bold'>24. </span><input type="text" className='text-black my-3 border-2 border-black rounded-md' /> to Rome resulted in calls for <span className='font-bold'>25.</span> <input type="text" className='text-black my-3 border-2 border-black rounded-md' />for the pirates responsible. Nevertheless, piracy continued, with some pirates demanding a <span className='font-bold'>26. </span> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> for the return of the Roman officials they captured.
          </div>

        </div>
        <br /><br />

        <div className='flex gap-10 text-black  bg-gray-100 p-5'>
          <div className='w-5/6 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold">READING PASSAGE 3</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.
            </p>
            <h1 className="text-3xl font-bold my-5">The persistence and peril of misinformation
            </h1>
            <p>
              Brian Southwell looks at how human brains verify information and discusses some of the challenges of battling widespread falsehoods
            </p>

            <p className={isExpanded ? '' : ''}>
              Misinformation – both deliberately promoted and accidentally shared – is perhaps an inevitable part of the world in which we live, but it is not a new problem. People likely have lied to one another for roughly as long as verbal communication has existed. Deceiving others can offer an apparent opportunity to gain strategic advantage, to motivate others to action, or even to protect interpersonal bonds. Moreover, people inadvertently have been sharing inaccurate information with one another for thousands of years.

              However, we currently live in an era in which technology enables information to reach large audiences distributed across the globe, and thus the potential for immediate and widespread effects from misinformation now looms larger than in the past. Yet the means to correct misinformation might, over time, be found in those same patterns of mass communication and of the facilitated spread of information.

              The main worry regarding misinformation is its potential to unduly influence attitudes and behavior, leading people to think and act differently than they would if they were correctly informed, as suggested by the research teams of Stephan Lewandowsky of the University of Bristol and Elizabeth Marsh of Duke University, among others. In other words, we worry that misinformation might lead people to hold misperceptions (or false beliefs) and that these misperceptions, especially when they occur among large groups of people, may have detrimental, downstream consequences for health, social harmony, and the political climate.

              At least three observations related to misinformation in the contemporary mass-media environment warrant the attention of researchers, policy makers, and really everyone who watches television, listens to the radio, or reads information online. First of all, people who encounter misinformation tend to believe it, at least initially. Secondly, electronic and print media often do not block many types of misinformation before it appears in content available to large audiences. Thirdly, countering misinformation once it has enjoyed wide exposure can be a resource-intensive effort.

              Knowing what happens when people initially encounter misinformation holds tremendous importance for estimating the potential for subsequent problems. Although it is fairly routine for individuals to come across information that is false, the question of exactly how – and when – we mentally label information as true or false has garnered philosophical debate. The dilemma is neatly summarized by a contrast between how the 17th-century philosophers René Descartes and Baruch Spinoza described human information engagement, with conflicting predictions that only recently have been empirically tested in robust ways. Descartes argued that a person only accepts or rejects information after considering its truth or falsehood; Spinoza argued that people accept all encountered information (or misinformation) by default and then subsequently verify or reject it through a separate cognitive process. In recent decades, empirical evidence from the research teams of Erik Asp of the University of Chicago and Daniel Gilbert at Harvard University, among others, has supported Spinoza’s account: people appear to encode all new information as if it were true, even if only momentarily, and later tag the information as being either true or false, a pattern that seems consistent with the observation that mental resources for skepticism physically reside in a different part of the brain than the resources used in perceiving and encoding.
            </p>

            {isExpanded && (
              <p> What about our second observation that misinformation often can appear in electronic or print media without being preemptively blocked? In support of this, one might consider the nature of regulatory structures in the United States: regulatory agencies here tend to focus on post hoc detection of broadcast information. Organizations such as the Food and Drug Administration (FDA) offer considerable monitoring and notification functions, but these roles typically do not involve preemptive censoring. The FDA oversees direct-to-consumer prescription drug advertising, for example, and has developed mechanisms such as the ‘Bad Ad’ program, through which people can report advertising in apparent violation of FDA guidelines on drug risks. Such programs, although laudable and useful, do not keep false advertising off the airwaves. In addition, even misinformation that is successfully corrected can continue to affect attitudes.

                This leads us to our third observation: a campaign to correct misinformation, even if rhetorically compelling, requires resources and planning to accomplish necessary reach and frequency. For corrective campaigns to be persuasive, audiences need to be able to comprehend them, which requires either effort to frame messages in ways that are accessible or effort to educate and sensitize audiences to the possibility of misinformation. That some audiences might be unaware of the potential for misinformation also suggests the utility of media literacy efforts as early as elementary school. Even with journalists and scholars pointing to the phenomenon of ‘fake news’, people do not distinguish between demonstrably false stories and those based in fact when scanning and processing written information.

                We live at a time when widespread misinformation is common. Yet at this time many people also are passionately developing potential solutions and remedies. The journey forward undoubtedly will be a long and arduous one. Future remedies will require not only continued theoretical consideration but also the development and maintenance of consistent monitoring tools – and a recognition among fellow members of society that claims which find prominence in the media that are insufficiently based in scientific consensus and social reality should be countered. Misinformation arises as a result of human fallibility and human information needs. To overcome the worst effects of the phenomenon, we will need coordinated efforts over time, rather than any singular one-time panacea we could hope to offer.
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
            <h1 className='font-bold text-2xl'>Questions 27–30</h1>
            <br /><br />
            Choose the correct letter, A, B, C or D.
            <br /><br />

            Write the correct letter in boxes 27–30 on your answer sheet.
            <br /><br />

            27.   What point does the writer make about misinformation in the first paragraph?
            <br /><br />

            A .  Misinformation is a relatively recent phenomenon.
            <br /><Checkbox></Checkbox><br />

            B.   Some people find it easy to identify misinformation.
            <br /><Checkbox></Checkbox><br />

            C .  Misinformation changes as it is passed from one person to another.
            <br /><Checkbox></Checkbox><br />

            D .  There may be a number of reasons for the spread of misinformation.
            <br /><Checkbox></Checkbox><br />


            28 .  What does the writer say about the role of technology?
            <br /><br />

            A  . It may at some point provide us with a solution to misinformation.
            <br /><Checkbox></Checkbox><br />

            B .  It could fundamentally alter the way in which people regard information.
            <br /><Checkbox></Checkbox><br />

            C .  It has changed the way in which organisations use misinformation.
            <br /><Checkbox></Checkbox><br />

            D .  It has made it easier for people to check whether information is accurate.
            <br /><Checkbox></Checkbox><br />


            29.  What is the writer doing in the fourth paragraph?
            <br /><br />

            A . comparing the different opinions people have of misinformation.
            <br /><Checkbox></Checkbox><br />

            B . explaining how the effects of misinformation have changed over time
            <br /><Checkbox></Checkbox><br />

            C . outlining which issues connected with misinformation are significant today
            <br /><Checkbox></Checkbox><br />

            D . describing the attitude of policy makers towards misinformation in the media
            <br /><Checkbox></Checkbox><br />


            30.  What point does the writer make about regulation in the USA?
            <br /><br />

            A . The guidelines issued by the FDA need to be simplified.
            <br /> <Checkbox></Checkbox> <br />

            B . Regulation does not affect people’s opinions of new prescription drugs.
            <br /><Checkbox></Checkbox><br />

            C . The USA has more regulatory bodies than most other countries.
            <br /><Checkbox></Checkbox><br />

            D . Regulation fails to prevent misinformation from appearing in the media.
            <br /><Checkbox></Checkbox><br />

            <h1 className='font-bold text-2xl'>Questions 31–36</h1>
            <br /><br />

            Complete the summary using the list of phrases, A–J, below
            <br /><br />

            Write the correct letter, A–J, in boxes 31–36 on your answer sheet.
            <br /><br />

            What happens when people encounter misinformation?
            Although people have 31<input type="text" className='text-black my-3 border-2 border-black rounded-md' /> to misinformation, there is debate about precisely how and when we label something as true or untrue. The philosophers Descartes and Spinoza had 32<input type="text" className='text-black my-3 border-2 border-black rounded-md' /> about how people engage with information. While Descartes believed that people accept or reject information after considering whether it is true or not, Spinoza argued that people accepted all information they encountered (and by default misinformation) and did not verify or reject it until afterwards. Moreover, Spinoza believes that a distinct 33<input type="text" className='text-black my-3 border-2 border-black rounded-md' /> is involved in these stages. Recent research has provided 34<input type="text" className='text-black my-3 border-2 border-black rounded-md' /> for Spinoza’s theory and it would appear that people accept all encountered information as if it were true, even if this is for an extremely 35<input type="text" className='text-black my-3 border-2 border-black rounded-md' />, and do not label the information as true or false until later. This is consistent with the fact that the resources for scepticism and the resources for perceiving and encoding are in 36<input type="text" className='text-black my-3 border-2 border-black rounded-md' /> in the brain.
            <br /><br />

            A . constant conflict
            <br /><br />

            D . experimental subjects
            <br /><br />

            G . frequent exposure

            J <br /><br />
            .  different ideas
            <br /><br />

            B . additional evidence
            <br /><br />

            E . short period

            H <br /><br />
            . mental operation

            <br /><br />


            C . different locations
            <br /><br />

            F . extreme distrust
            <br /><br />

            I .  dubious reason

            <br /><br />


         <h1 className='font-bold text-2xl'>Questions 37–40</h1>   
            <br /><br />

            Do the following statements agree with the claims of the writer in Reading Passage 3?
            <br /><br />

            In boxes 37–40 on your answer sheet, write
            <br /><br />

            YES                  if the statement agrees with the claims of the writer
            <br /><br />

            NO                   if the statement contradicts the claims of the writer
            <br /><br />

            NOT GIVEN     if it is impossible to say what the writer thinks about this
            <br /><br />

            37 .  Campaigns designed to correct misinformation will fail to achieve their purpose if people are unable to understand them.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />

            38 .  Attempts to teach elementary school students about misinformation have been opposed.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            39 .  It may be possible to overcome the problem of misinformation in a relatively short period.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            40 .  The need to keep up with new information is hugely exaggerated in today’s world.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
          </div>
        </div>

      </div>
    </div>
  )
}
