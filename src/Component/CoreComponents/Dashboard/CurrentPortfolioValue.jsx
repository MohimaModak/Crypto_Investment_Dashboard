import { Checkbox } from '@mui/material';
import React, { useState } from 'react';

export default function CurrentPortfolioValue() {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle the full text

  const toggleText = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };
  return (
    <div className='bg-white text-black h-screen overflow-y-auto w-full'>
      <div className=''>
        <div className='flex gap-10 text-black  bg-gray-300 p-5'>
          <div className='w-2/4 h-screen overflow-y-auto'>
            <div>
              <h1 className="text-4xl font-bold">READING PASSAGE 1</h1>
              <p className="my-5">
                You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.
              </p>
              <h1 className="text-3xl font-bold my-5">The megafires of California
              </h1>
              <p>
                Drought, housing expansion, and oversupply of tinder make for bigger, hotter fires in the western United States

                Wildfires are becoming an increasing menace in the western United States, with Southern California being the hardest hit area. There’s a reason fire squads battling more frequent blazes in Southern California are having such difficulty containing the flames, despite better preparedness than ever and decades of experience fighting fires fanned by the ‘Santa Ana Winds’. The wildfires themselves, experts say, are generally hotter, faster, and spread more erratically than in the past.


              </p>

              <p className={isExpanded ? '' : ''}>
                Megafires, also called ‘siege fires’, are the increasingly frequent blazes that burn 500,000 acres or more – 10 times the size of the average forest fire of 20 years ago. Some recent wildfires are among the biggest ever in California in terms of acreage burned, according to state figures and news reports.

                One explanation for the trend to more superhot fires is that the region, which usually has dry summers, has had significantly below normal precipitation in many recent years. Another reason, experts say, is related to the century- long policy of the US Forest Service to stop wildfires as quickly as possible.

                The unintentional consequence has been to halt the natural eradication of underbrush, now the primary fuel for megafires.

                Three other factors contribute to the trend, they add. First is climate change, marked by a 1-degree Fahrenheit rise in average yearly temperature across the western states. Second is fire seasons that on average are 78 days longer than they were 20 years ago. Third is increased construction of homes in wooded areas.

                ‘We are increasingly building our homes in fire-prone ecosystems,’ says Dominik Kulakowski, adjunct professor of biology at Clark University Graduate School of Geography in Worcester, Massachusetts. ‘Doing that in many of the forests of the western US is like building homes on the side of an active volcano.’
              </p>

              {isExpanded && (
                <p> In California, where population growth has averaged more than 600,000 a year for at least a decade, more residential housing is being built. ‘What once was open space is now residential homes providing fuel to make fires burn with greater intensity,’ says Terry McHale of the California Department of Forestry firefighters’ union. ‘With so much dryness, so many communities to catch fire, so many fronts to fight, it becomes an almost incredible job.’

                  That said, many experts give California high marks for making progress on preparedness in recent years, after some of the largest fires in state history scorched thousands of acres, burned thousands of homes, and killed numerous people. Stung in the past by criticism of bungling that allowed fires to spread when they might have been contained, personnel are meeting the peculiar challenges of neighborhood – and canyon- hopping fires better than previously, observers say.

                  State promises to provide more up-to-date engines, planes, and helicopters to fight fires have been fulfilled. Firefighters’ unions that in the past complained of dilapidated equipment, old fire engines, and insufficient blueprints for fire safety are now praising the state’s commitment, noting that funding for firefighting has increased, despite huge cuts in many other programs. ‘We are pleased that the current state administration has been very proactive in its support of us, and [has] come through with budgetary support of the infrastructure needs we have long sought,’ says Mr. McHale of the firefighters’ union.Besides providing money to upgrade the fire engines that must traverse the mammoth state and wind along serpentine canyon roads, the state has invested in better command-and-control facilities as well as in the strategies to run them. ‘In the fire sieges of earlier years, we found that other jurisdictions and states were willing to offer mutual-aid help, but we were not able to communicate adequately with them,’ says Kim Zagaris, chief of the state’s Office of Emergency Services Fire and Rescue Branch.

                  After a commission examined and revamped communications procedures, the statewide response ‘has become far more professional and responsive,’ he says. There is a sense among both government officials and residents that the speed, dedication, and coordination of firefighters from several states and jurisdictions are resulting in greater efficiency than in past ‘siege fire’ situations.

                  In recent years, the Southern California region has improved building codes, evacuation procedures, and procurement of new technology. ‘I am extraordinarily impressed by the improvements we have witnessed,’ says Randy Jacobs, a Southern California- based lawyer who has had to evacuate both his home and business to escape wildfires. ‘Notwithstanding all the damage that will continue to be caused by wildfires, we will no longer suffer the loss of life endured in the past because of the fire prevention and firefighting measures that have been put in place,’ he says.
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
          <div className='h-screen overflow-y-auto w-full'>
            <h1 className='font-bold text-2xl'>Questions 1-6</h1>
            Complete the notes below.
            <br /><br />

            Choose ONE WORD AND/OR A NUMBER from the passage for each answer.
            <br /><br />

            Write your answers in boxes 1-6 on your answer sheet.
            <br /><br />

            Wildfires
            <br /><br />

            ●   Characteristics of wildfires and wildfire conditions today compared to the past:
            <br /><br />

            –  occurrence: more frequent
            <br /><br />

            –  temperature: hotter
            <br /><br />

            –  speed: faster
            <br /><br />

            –  movement: 1 <input type="text" className='text-black my-3 border-2 border-black rounded-md' />  more unpredictably
            <br /><br />

            –  size of fires: 2 <input type="text" className='text-black my-3 border-2 border-black rounded-md' />  greater on average than two decades ago
            <br /><br />

            ●   Reasons wildfires cause more damage today compared to the past:
            <br /><br />

            –  rainfall: 3 <input type="text" className='text-black my-3 border-2 border-black rounded-md' />  average
            <br /><br />

            –  more brush to act as 4 <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> .
            <br /><br />

            –  increase in yearly temperature
            <br /><br />

            –  extended fire 5 <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> .
            <br /><br />

            –  more building of 6 <input type="text" className='text-black my-3 border-2 border-black rounded-md' />  in vulnerable places

            <br /><br />


            <h1 className='font-bold text-2xl'>Questions 7-13</h1>
            Do the following statements agree with the information given in Reading Passage?
            <br /><br />
            In boxes 7-13 on your answer sheet, write
            <br /><br />
            TRUE               if the statement agrees with the information
            <br /><br />

            FALSE              if the statement contradicts the information
            <br /><br />

            NOT GIVEN    if there is no information on this
            <br /><br />


            7 .  The amount of open space in California has diminished over the last ten years.
            <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />

            8 .  Many experts believe California has made little progress in readying itself to fight fires.
            <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
            9 .  Personnel in the past have been criticised for mishandling fire containment.
            <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
            10 .  California has replaced a range of firefighting tools.
            <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />

            11 .  More firefighters have been hired to improve fire-fighting capacity.
            <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />

            12. Citizens and government groups disapprove of the efforts of different states and agencies working together.
            <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />

            13 .  Randy Jacobs believes that loss of life from fires will continue at the same levels, despite changes made.
            <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className='flex gap-10 text-black  bg-gray-300 p-5'>
          <div className='w-2/4 h-screen overflow-y-auto'>
            <div>
              <h1 className="text-4xl font-bold">READING PASSAGE 2</h1>
              <p>
                <br /><br />  <span className='font-bold text-xl '>A</span> <br />
                Psychologists have long held that a person’s character cannot undergo a transformation in any meaningful way and that the key traits of personality are determined at a very young age. However, researchers have begun looking more closely at ways we can change. Positive psychologists have identified 24 qualities we admire, such as loyalty and kindness, and are studying them to find out why they come so naturally to some people. What they’re discovering is that many of these qualities amount to habitual behaviour that determines the way we respond to the world. The good news is that all this can be learned.

                Some qualities are less challenging to develop than others, optimism being one of them. However, developing qualities requires mastering a range of skills which are diverse and sometimes surprising. For example, to bring more joy and passion into your life, you must be open to experiencing negative emotions. Cultivating such qualities will help you realise your full potential.
                <br />   <span className='font-bold text-xl '>B</span>
                <br />
                ‘The evidence is good that most personality traits can be altered,’ says Christopher Peterson, professor of psychology at the University of Michigan, who cites himself as an example. Inherently introverted, he realised early on that as an academic, his reticence would prove disastrous in the lecture hall. So he learned to be more outgoing and to entertain his classes. ‘Now my extroverted behaviour is spontaneous,’ he says.


              </p>

              <p className={isExpanded ? '' : ''}>
                <br /> <span className='font-bold text-xl '>C</span> <br />
                David Fajgenbaum had to make a similar transition. He was preparing for university, when he had an accident that put an end to his sports career. On campus, he quickly found that beyond ordinary counselling, the university had no services for students who were undergoing physical rehabilitation and suffering from depression like him. He therefore launched a support group to help others in similar situations. He took action despite his own pain – a typical response of an optimist.


              </p>

              {isExpanded && (
                <p> <br /><span className='font-bold text-xl '>D</span> <br />
                  Suzanne Segerstrom, professor of psychology at the University of Kentucky, believes that the key to increasing optimism is through cultivating optimistic behaviour, rather than positive thinking. She recommends you train yourself to pay attention to good fortune by writing down three positive things that come about each day. This will help you convince yourself that favourable outcomes actually happen all the time, making it easier to begin taking action.


                  <br /><br />   <span className='font-bold text-xl '>E</span> <br />
                  You can recognise a person who is passionate about a pursuit by the way they are so strongly involved in it. Tanya Streeter’s passion is freediving – the sport of plunging deep into the water without tanks or other breathing equipment. Beginning in 1998, she set nine world records and can hold her breath for six minutes. The physical stamina required for this sport is intense but the psychological demands are even more overwhelming. Streeter learned to untangle her fears from her judgment of what her body and mind could do. ‘In my career as a competitive freediver, there was a limit to what I could do – but it wasn’t anywhere near what I thought it was/ she says.


                  <br /><br />   <span className='font-bold text-xl '>F</span> <br />
                  Finding a pursuit that excites you can improve anyone’s life. The secret about consuming passions, though, according to psychologist Paul Silvia of the University of North Carolina, is that ‘they require discipline, hard work and ability, which is why they are so rewarding.’ Psychologist Todd Kashdan has this advice for those people taking up a new passion: ‘As a newcomer, you also have to tolerate and laugh at your own ignorance. You must be willing to accept the negative feelings that come your way,’ he says.
                  <br /><br />   <span className='font-bold text-xl '>G</span> <br />
                  In 2004, physician-scientist Mauro Zappaterra began his PhD research at Harvard Medical School. Unfortunately, he was miserable as his research wasn’t compatible with his curiosity about healing. He finally took a break and during eight months in Santa Fe, Zappaterra learned about alternative healing techniques not taught at Harvard. When he got back, he switched labs to study how cerebrospinal fluid nourishes the developing nervous system. He also vowed to look for the joy in everything, including failure, as this could help him learn about his research and himself.

                  One thing that can hold joy back is a person’s concentration on avoiding failure rather than their looking forward to doing something well. ‘Focusing on being safe might get in the way of your reaching your goals,’ explains Kashdan. For example, are you hoping to get through a business lunch without embarrassing yourself, or are you thinking about how fascinating the conversation might be?
                  <br /><br />   <span className='font-bold text-xl '>I</span> <br />
                  Usually, we think of courage in physical terms but ordinary life demands something else. For marketing executive Kenneth Pedeleose, it meant speaking out against something he thought was ethically wrong. The new manager was intimidating staff so Pedeleose carefully recorded each instance of bullying and eventually took the evidence to a senior director, knowing his own job security would be threatened. Eventually the manager was the one to go. According to Cynthia Pury, a psychologist at Clemson University, Pedeleose’s story proves the point that courage is not motivated by fearlessness, but by moral obligation. Pury also believes that people can acquire courage. Many of her students said that faced with a risky situation, they first tried to calm themselves down, then looked for a way to mitigate the danger, just as Pedeleose did by documenting his allegations.

                  Over the long term, picking up a new character trait may help you move toward being the person you want to be. And in the short term, the effort itself could be surprisingly rewarding, a kind of internal adventure.
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
          <div className='h-screen overflow-y-auto w-full'>

            <h1 className='font-bold text-2xl'>Questions 14-18</h1>
            <br /><br />

            Complete the summary below.
            <br /><br />

            Choose NO MORE THAN TWO WORDS from the passage for each answer.
            <br /><br />

            Write your answers in boxes 14-18 on your answer sheet.

            <br /><br />

            Psychologists have traditionally believed that a personality 14. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            was impossible and that by a 15. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            a person’s character tends to be fixed. This is not true according to positive psychologists, who say that our personal qualities can be seen as habitual behaviour. One of the easiest qualities to acquire is 16. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            . . However, regardless of the quality, it is necessary to learn a wide variety of different 17. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            . in order for a new quality to develop; for example, a person must understand and feel some 18. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            in order to increase their happiness.

            <br /><br />


            <h1 className='font-bold text-2xl'>Questions 19-22</h1>
            <br /><br />

            Look at the following statements (Questions 19-22) and the list of people below.
            <br /><br />

            Match each statement with the correct person, A-G.
            <br /><br />

            Write the correct letter, A-G, in boxes 19-22 on your answer sheet.

            <br /><br />

            19 .  People must accept that they do not know much when first trying something new.
            <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            <br />

            20 .  It is important for people to actively notice when good things happen.
            <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            <br />

            21 .  Courage can be learned once its origins in a sense of responsibility are understood.
            <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            <br />

            22 .  It is possible to overcome shyness when faced with the need to speak in public.
            <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            <br />

            List of People
            <br /><br />

            A  .   Christopher Peterson
            <br /><br />

            B  .   David Fajgenbaum
            <br /><br />

            C .    Suzanne Segerstrom
            <br /><br />

            D  .   Tanya Streeter
            <br /><br />

            E  .   Todd Kashdan
            <br /><br />

            F  .   Kenneth Pedeleose
            <br /><br />

            G  .   Cynthia Pury
            <br /><br />



            Questions 23-26
            <br /><br />

            Reading Passage 2 has eight sections, A-H.

            Which section contains the following information?
            <br /><br />

            Write the correct letter, A-H, in boxes 23-26 on your answer sheet.

            <br /><br />

            23 .  a mention of how rational thinking enabled someone to achieve physical goals
            <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            <br />

            24  . an account of how someone overcame a sad experience
            <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            <br />

            25 .  a description of how someone decided to rethink their academic career path
            <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            <br />

            26 .  an example of how someone risked his career out of a sense of duty
            <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            <br />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className='flex gap-10 text-black  bg-gray-300 p-5'>
          <div className='w-2/4 h-screen overflow-y-auto'>
            <div>
              <h1 className="text-4xl font-bold">READING PASSAGE 3</h1>
              <p className="my-5">
                You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.
              </p>
              <h1 className="text-3xl font-bold my-5">When evolution runs backwards
              </h1>
              <p>
                Evolution isn’t supposed to run backwards – yet an increasing number of examples show that it does and that it can sometimes represent the future of a species.

                The description of any animal as an ‘evolutionary throwback’ is controversial. For the better part of a century, most biologists have been reluctant to use those words, mindful of a principle of evolution that says ‘evolution cannot run backwards. But as more and more examples come to light and modern genetics enters the scene, that principle is having to be rewritten. Not only are evolutionary throwbacks possible, they sometimes play an important role in the forward march of evolution.
              </p>

              <p className={isExpanded ? '' : ''}>
                The technical term for an evolutionary throwback is an ‘atavism’, from the Latin atavus, meaning forefather. The word has ugly connotations thanks largely to Cesare Lombroso, a 19th-century Italian medic who argued that criminals were born not made and could be identified by certain physical features that were throwbacks to a primitive, sub-human state.

                While Lombroso was measuring criminals, a Belgian palaeontologist called Louis Dollo was studying fossil records and coming to the opposite conclusion. In 1890 he proposed that evolution was irreversible: that ‘an organism is unable to return, even partially, to a previous stage already realised in the ranks of its ancestors. Early 20th-century biologists came to a similar conclusion, though they qualified it in terms of probability, stating that there is no reason why evolution cannot run backwards -it is just very unlikely. And so the idea of irreversibility in evolution stuck and came to be known as ‘Dollo’s law.

                If Dollo’s law is right, atavisms should occur only very rarely, if at all. Yet almost since the idea took root, exceptions have been cropping up. In 1919, for example, a humpback whale with a pair of leglike appendages over a metre long, complete with a full set of limb bones, was caught off Vancouver Island in Canada. Explorer Roy Chapman Andrews argued at the time that the whale must be a throwback to a land-living ancestor. ‘I can see no other explanation,’ he wrote in 1921.

                Since then, so many other examples have been discovered that it no longer makes sense to say that evolution is as good as irreversible. And this poses a puzzle: how can characteristics that disappeared millions of years ago suddenly reappear?

                In 1994, Rudolf Raff and colleagues at Indiana University in the USA decided to use genetics to put a number on the probability of evolution going into reverse. They reasoned that while some evolutionary changes involve the loss of genes and are therefore irreversible, others may be the result of genes being switched off. If these silent genes are somehow switched back on, they argued, long-lost traits could reappear.

                Raff’s team went on to calculate the likelihood of it happening. Silent genes accumulate random mutations, they reasoned, eventually rendering them useless. So how long can a gene survive in a species if it is no longer used? The team calculated that there is a good chance of silent genes surviving for up to 6 million years in at least a few individuals in a population, and that some might survive as long as 10 million years. In other words, throwbacks are possible, but only to the relatively recent evolutionary past.

                As a possible example, the team pointed to the mole salamanders of Mexico and California. Like most amphibians these begin life in a juvenile ‘tadpole’ state, then metamorphose into the adult form – except for one species, the axolotl, which famously lives its entire life as a juvenile. The simplest explanation for this is that the axolotl lineage alone lost the ability to metamorphose, while others retained it. From a detailed analysis of the salamanders’ family tree, however, it is clear that the other lineages evolved from an ancestor that itself had lost the ability to metamorphose. In other words, metamorphosis in mole salamanders is an atavism. The salamander example fits with Raff’s 10million-year time frame.

                More recently, however, examples have been reported that break the time limit, suggesting that silent genes may not be the whole story. In a paper published last year, biologist Gunter Wagner of Yale University reported some work on the evolutionary history of a group of South American lizards called Bachia. Many of these have minuscule limbs; some look more like snakes than lizards and a few have completely lost the toes on their hind limbs. Other species, however, sport up to four toes on their hind legs. The simplest explanation is that the toed lineages never lost their toes, but Wagner begs to differ. According to his analysis of the Bachia family tree, the toed species re-evolved toes from toeless ancestors and, what is more, digit loss and gain has occurred on more than one occasion over tens of millions of years.


              </p>

              {isExpanded && (
                <p> So what’s going on? One possibility is that these traits are lost and then simply reappear, in much the same way that similar structures can independently arise in unrelated species, such as the dorsal fins of sharks and killer whales. Another more intriguing possibility is that the genetic information needed to make toes somehow survived for tens or perhaps hundreds of millions of years in the lizards and was reactivated. These atavistic traits provided an advantage and spread through the population, effectively reversing evolution.

                  But if silent genes degrade within 6 to million years, how can long-lost traits be reactivated over longer timescales? The answer may lie in the womb. Early embryos of many species develop ancestral features. Snake embryos, for example, sprout hind limb buds. Later in development these features disappear thanks to developmental programs that say ‘lose the leg’. If for any reason this does not happen, the ancestral feature may not disappear, leading to an atavism.
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
          <div className='h-screen overflow-y-auto w-full'>
            Questions 27-31
            <br /><br />

            Choose the correct letter, A, B, C or D.
            <br /><br />

            Write the correct letter in boxes 27-31 on your answer sheet.
            <br /><br />


            27    When discussing the theory developed by Louis Dollo, the writer says that
            <br /><br />

            A.  it was immediately referred to as Dollo’s law.
            <br /><Checkbox></Checkbox><br />

            B.  it supported the possibility of evolutionary throwbacks.
            <br /><Checkbox></Checkbox><br />

            C.  it was modified by biologists in the early twentieth century.
            <br /><Checkbox></Checkbox><br />

            D.  it was based on many years of research.
            <br /><Checkbox></Checkbox><br />


            28 .   The humpback whale caught off Vancouver Island is mentioned because of
            <br /><br />
            A .  the exceptional size of its body.
            <br /><Checkbox></Checkbox><br />
            B .  the way it exemplifies Dollo’s law.
            <br /><Checkbox></Checkbox><br />
            C .  the amount of local controversy it caused.
            <br /><Checkbox></Checkbox><br />
            D  . the reason given for its unusual features.

            <br /><Checkbox></Checkbox><br />
            29 .   What is said about ‘silent genes’?
            <br /><Checkbox></Checkbox><br />
            A   Their numbers vary according to species.
            <br /><Checkbox></Checkbox><br />
            B   Raff disagreed with the use of the term.
            <br /><Checkbox></Checkbox><br />
            C   They could lead to the re-emergence of certain characteristics.
            <br /><Checkbox></Checkbox><br />
            D   They can have an unlimited life span.

            <br /><Checkbox></Checkbox><br />
            30 .   The writer mentions the mole salamander because
            <br /><br />
            A.   it exemplifies what happens in the development of most amphibians.
            <br /><Checkbox></Checkbox><br />
            B .  it suggests that Raff’s theory is correct.
            <br /><Checkbox></Checkbox><br />
            C .  it has lost and regained more than one ability.
            <br /><Checkbox></Checkbox><br />
            D  . its ancestors have become the subject of extensive research.
            <br /><Checkbox></Checkbox><br />

            31 .   Which of the following does Wagner claim?
            <br /><br />
            A .  Members of the Bachia lizard family have lost and regained certain features several times.
            <br /><Checkbox></Checkbox><br />
            B .  Evidence shows that the evolution of the Bachia lizard is due to the environment.
            <br /><Checkbox></Checkbox><br />
            C .  His research into South American lizards supports Raff’s assertions.
            <br /><Checkbox></Checkbox><br />
            D .  His findings will apply to other species of South American lizards.
            <br /><Checkbox></Checkbox><br />


            <h1 className='font-bold text-2xl'>Questions 32-36</h1>
            <br /><br />

            Complete each sentence with the correct ending, A-G, below.
            <br /><br />

            Write the correct letter, A-G, in boxes 32-36 on your answer sheet.
            <br /><br />


            32.  For a long time biologists rejected
            <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
            33.  Opposing views on evolutionary throwbacks are represented by
            <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
            34.  Examples of evolutionary throwbacks have led to
            <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
            35.  The shark and killer whale are mentioned to exemplify
            <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
            36.  One explanation for the findings of Wagner’s research is
            <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
            A .   the question of how certain long-lost traits could reappear.
            <br /><br />
            B .   the occurrence of a particular feature in different species.
            <br /><br />
            C .   parallels drawn between behaviour and appearance.
            <br /><br />
            D .   the continued existence of certain genetic information.
            <br /><br />
            E .   the doubts felt about evolutionary throwbacks.
            <br /><br />
            F .   the possibility of evolution being reversible.
            <br /><br />

            G .   Dollo’s findings and the convictions held by Lombroso.
            <br /><br />



            <h1 className='font-bold text-2xl'>Questions 37-40</h1>
            <br /><br />

            Do the following statements agree with the claims of the writer in Reading Passage 3?
            <br /><br />
            In boxes 37-40 on your answer sheet, write
            <br /><br />
            YES                  if the statement agrees with the claims of the writer
            <br /><br />

            NO                   if the statement contradicts the claims of the writer
            <br /><br />

            NOT GIVEN    if it is impossible to say what the writer thinks about this
            <br /><br />

            37.  Wagner was the first person to do research on South American lizards.
            <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
            38.  Wagner believes that Bachia lizards with toes had toeless ancestors.
            <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
            39.  The temporary occurrence of long-lost traits in embryos is rare.
            <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
            40.  Evolutionary throwbacks might be caused by developmental problems in the womb.
            <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
          </div>
        </div>

      </div>
    </div>
  )
}
