import { Checkbox } from '@mui/material';
import React, { useState } from 'react';

export default function AssetAllocation() {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle the full text

  const toggleText = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };

  return (
    <div className="bg-white text-black h-screen overflow-y-auto">
      <div className="p-10">
        <div className='flex gap-10 text-black  bg-gray-300 p-5'>
          <div className='w-5/6 h-screen overflow-y-auto
'>
            <div>
              <h1 className="text-4xl font-bold">READING PASSAGE 1</h1>
              <p className="my-5">
                You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.
              </p>
              <h1 className="text-3xl font-bold my-5">Tea and the Industrial Revolution
              </h1>
              <p>
                <br /><br />  <span className='font-bold text-xl my-10'>A</span> <br /><br />
                Alan Macfarlane, professor of anthropological science at King’s College, Cambridge has, like other historians, spent decades wrestling with the enigma of the Industrial Revolution. Why did this particular Big Bang – the world-changing birth of industry-happen in Britain? And why did it strike at the end of the 18th century?
                <span className='font-bold text-xl my-10'>B</span>
                Macfarlane compares the puzzle to a combination lock. ‘There are about 20 different factors and all of them need to be present before the revolution can happen,’ he says. For industry to take off, there needs to be the technology and power to drive factories, large urban populations to provide cheap labour, easy transport to move goods around, an affluent middle-class willing to buy mass-produced objects, a market-driven economy and a political system that allows this to happen. While this was the case for England, other nations, such as Japan, the Netherlands and France also met some of these criteria but were not industrialising. All these factors must have been necessary. But not sufficient to cause the revolution, says Macfarlane. ‘After all, Holland had everything except coal while China also had many of these factors. Most historians are convinced there are one or two missing factors that you need to open the lock.’
              </p>

              <p className={isExpanded ? '' : ''}>
                <br /><br /> <span className='font-bold text-xl my-10'>C</span> <br /><br />
                The missing factors, he proposes, are to be found in almost even kitchen cupboard. Tea and beer, two of the nation’s favourite drinks, fuelled the revolution. The antiseptic properties of tannin, the active ingredient in tea, and of hops in beer – plus the fact that both are made with boiled water – allowed urban communities to flourish at close quarters without succumbing to water-borne diseases such as dysentery. The theory sounds eccentric but once he starts to explain the detective work that went into his deduction, the scepticism gives way to wary admiration. Macfarlanes case has been strengthened by support from notable quarters – Roy Porter, the distinguished medical historian, recently wrote a favourable appraisal of his research.
              </p>

              {isExpanded && (
                <p> <br /><br /><span className='font-bold text-xl my-10'>D</span> <br /><br />
                  Macfarlane had wondered for a long time how the Industrial Revolution came about. Historians had alighted on one interesting factor around the mid-18th century that required explanation. Between about 1650 and 1740, the population in Britain was static. But then there was a burst in population growth. Macfarlane says: ‘The infant mortality rate halved in the space of 20 years, and this happened in both rural areas and cities, and across all classes. People suggested four possible causes. Was there a sudden change in the viruses and bacteria around? Unlikely. Was there a revolution in medical science? But this was a century before Lister’s revolution*. Was there a change in environmental conditions? There were improvements in agriculture that wiped out malaria, but these were small gains. Sanitation did not become widespread until the 19th century. The only option left is food. But the height and weight statistics show a decline. So the food must have got worse. Efforts to explain this sudden reduction in child deaths appeared to draw a blank.’
                  <br /><br />   <span className='font-bold text-xl my-10'>E</span> <br /><br />
                  This population burst seemed to happen at just the right time to provide labour for the Industrial Revolution. ‘When you start moving towards an industrial revolution, it is economically efficient to have people living close together,’ says Macfarlane. ‘But then you get disease, particularly from human waste.’ Some digging around in historical records revealed that there was a change in the incidence of water-borne disease at that time, especially dysentery. Macfarlane deduced that whatever the British were drinking must have been important in regulating disease. He says, ‘We drank beer. For a long time, the English were protected by the strong antibacterial agent in hops, which were added to help preserve the beer. But in the late 17th century a tax was introduced on malt, the basic ingredient of beer. The poor turned to water and gin and in the 1720s the mortality rate began to rise again. Then it suddenly dropped again. What caused this?’
                  <br /><br />   <span className='font-bold text-xl my-10'>F</span> <br /><br />
                  Macfarlane looked to Japan, which was also developing large cities about the same time, and also had no sanitation. Water-borne diseases had a much looser grip on the Japanese population than those in Britain. Could it be the prevalence of tea in their culture? Macfarlane then noted that the history of tea in Britain provided an extraordinary coincidence of dates. Tea was relatively expensive until Britain started a direct clipper trade with China in the early 18th century. By the 1740s, about the time that infant mortality was dipping, the drink was common. Macfarlane guessed that the fact that water had to be boiled, together with the stomach-purifying properties of tea meant that the breast milk provided by mothers was healthier than it had ever been. No other European nation sipped tea like the British, which, by Macfarlanes logic, pushed these other countries out of contention for the revolution.
                  <br /><br />   <span className='font-bold text-xl my-10'>G</span> <br /><br />
                  But, if tea is a factor in the combination lock, why didn’t Japan forge ahead in a tea-soaked industrial revolution of its own? Macfarlane notes that even though 17th-century Japan had large cities, high literacy rates, even a futures market, it had turned its back on the essence of any work-based revolution by giving up labour-saving devices such as animals, afraid that they would put people out of work. So, the nation that we now think of as one of the most technologically advanced entered the 19th century having ‘abandoned the wheel’.
                  <br /><br />
                  ——–
                  * Joseph Lister was the first doctor to use antiseptic techniques during surgical operations to prevent infections.
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
            <div>
              <p>
                <h1 className='font-bold text-xl my-10'>Questions 1-7</h1>
                Reading Passage 1 has seven paragraphs, A-G. <br /><br />
                <br /><br />
                Choose the correct heading for each paragraph from the list of headings below.
                <br /><br />
                Write the correct number, i-ix, in boxes 1-7 on your answer sheet
                <br /><br />
                List of Headings
                <br /><br />
                i .      The search for the reasons for an increase in population
                <br /><br />
                ii .     Industrialisation and the fear of unemployment
                <br /><br />
                iii     The development of cities in Japan 4 The time and place of the Industrial Revolution.
                <br /><br />
                iv     The time and place of the Industrial Revolution
                <br /><br />
                v      The cases of Holland, France and China
                <br /><br />
                vi     Changes in drinking habits in Britain
                <br /><br />
                vii    Two keys to Britain’s industrial revolution
                <br /><br />
                viii   Conditions required for industrialisation
                <br /><br />
                ix     Comparisons with Japan lead to the answer
                <br /><br />

                1 .   Paragraph A
                <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
                2 .   Paragraph B
                <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
                3 .   Paragraph C
                <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
                4 .   Paragraph D
                <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
                5 .   Paragraph E
                <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
                6 .   Paragraph F
                <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
                7 .   Paragraph G
              </p>
            </div>
            <div>
              <h1 className='font-bold text-xl my-10'>Questions 8-13</h1>
              <p>
                Do the following statements agree with the information given in Reading Passage 1?
                <br /><br />
                In boxes 8-13 on your answer sheet, write
                <br /><br />
                TRUE               if the statement agrees with the information
                <br /><br />
                FALSE              if the statement contradicts the information
                <br /><br />
                NOT GIVEN    if there is no information on this
                <br /><br />
                8 .  China’s transport system was not suitable for industry in the 18th century.
                <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                  <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                  <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
                9  . Tea and beer both helped to prevent dysentery in Britain.
                <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                  <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                  <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
                10   Roy Porter disagrees with Professor Macfarlane’s findings.
                <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                  <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                  <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
                11 .  After 1740，there was a reduction in population in Britain.
                <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                  <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                  <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
                12 .  People in Britain used to make beer at home.
                <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                  <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                  <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
                13 .  The tax on malt indirectly caused a rise in the death rate.
                <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                  <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                  <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              </p>
            </div>
          </div>

        </div>
        <br /><br />

        <div className='flex gap-10 text-black  bg-gray-300 p-5'>
          <div className='w-5/6 h-screen overflow-y-auto'>
            <div>
              <h1 className='font-bold text-2xl my-10'>READING PASSAGE 2</h1>
              <h1 className='text-xl my-5'>You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below. </h1>
              <h1 className='font-bold text-xl my-5'>Gifted children and learning      </h1>
            </div>

            <div >

              <p>
                <br /><br />  <span className='font-bold text-xl my-5'>A</span> <br /><br />
                Internationally, ‘giftedness’ is most frequently determined by a score on a general intelligence test, known as an IQ test, which is above a chosen cutoff point, usually at around the top 2-5%. Children’s educational environment contributes to the IQ score and the way intelligence is used. For example, a very close positive relationship was found when children’s IQ scores were compared with their home educational provision (Freeman, 2010). The higher the children’s IQ scores, especially over IQ 130, the better the quality of their educational backup, measured in terms of reported verbal interactions with parents, number of books and activities in their home etc. Because IQ tests are decidedly influenced by what the child has learned, they are to some extent measures of current achievement based on age-norms; that is, how well the children have learned to manipulate their knowledge and know-how within the terms of the test. The vocabulary aspect, for example, is dependent on having heard those words. But IQ tests can neither identify the processes of learning and thinking nor predict creativity.
                <span className='font-bold text-xl my-10'>B</span>
                Excellence does not emerge without appropriate help. To reach an exceptionally high standard in any area very able children need the means to learn, which includes material to work with and focused challenging tuition -and the encouragement to follow their dream. There appears to be a qualitative difference in the way the intellectually highly able think, compared with more average-ability or older pupils, for whom external regulation by the teacher often compensates for lack of internal regulation. To be at their most effective in their self-regulation, all children can be helped to identify their own ways of learning – metacognition – which will include strategies of planning, monitoring, evaluation, and choice of what to learn. Emotional awareness is also part of metacognition, so children should be helped to be aware of their feelings around the area to be learned, feelings of curiosity or confidence, for example.
              </p>

              <p className={isExpanded ? '' : ''}>
                <br /><br /> <span className='font-bold text-xl my-10'>C</span> <br /><br />
                High achievers have been found to use self-regulatory learning strategies more often and more effectively than lower achievers, and are better able to transfer these strategies to deal with unfamiliar tasks. This happens to such a high degree in some children that they appear to be demonstrating talent in particular areas. Overviewing research on the thinking process of highly able children, (Shore and Kanevsky, 1993) put the instructor’s problem succinctly: ‘If they [the gifted] merely think more quickly, then .we need only teach more quickly. If they merely make fewer errors, then we can shorten the practice’. But of course, this is not entirely the case; adjustments have to be made in methods of learning and teaching, to take account of the many ways individuals think.
              </p>

              {isExpanded && (
                <p> <br /><br /><span className='font-bold text-xl my-10'>D</span> <br /><br />
                  Yet in order to learn by themselves, the gifted do need some support from their teachers. Conversely, teachers who have a tendency to ‘overdirect’ can diminish their gifted pupils’ learning autonomy. Although ‘spoon-feeding’ can produce extremely high examination results, these are not always followed by equally impressive life successes. Too much dependence on the teachers risks loss of autonomy and motivation to discover. However, when teachers o pupils to reflect on their own learning and thinking activities, they increase their pupils’ self-regulation. For a young child, it may be just the simple question ‘What have you learned today?’ which helps them to recognise what they are doing. Given that a fundamental goal of education is to transfer the control of learning from teachers to pupils, improving pupils’ learning to learn techniques should be a major outcome of the school experience, especially for the highly competent. There are quite a number of new methods which can help, such as child- initiated learning, ability-peer tutoring, etc. Such practices have been found to be particularly useful for bright children from deprived areas.
                  <br /><br />   <span className='font-bold text-xl my-10'>E</span> <br /><br />
                  But scientific progress is not all theoretical, knowledge is a so vital to outstanding performance: individuals who know a great deal about a specific domain will achieve at a higher level than those who do not (Elshout, 1995). Research with creative scientists by Simonton (1988) brought him to the conclusion that above a certain high level, characteristics such as independence seemed to contribute more to reaching the highest levels of expertise than intellectual skills, due to the great demands of effort and time needed for learning and practice. Creativity in all forms can be seen as expertise se mixed with a high level of motivation (Weisberg, 1993).
                  <br /><br />   <span className='font-bold text-xl my-10'>F</span> <br /><br />
                  To sum up, learning is affected by emotions of both the individual and significant others. Positive emotions facilitate the creative aspects of earning and negative emotions inhibit it. Fear, for example, can limit the development of curiosity, which is a strong force in scientific advance, because it motivates problem-solving behaviour. In Boekaerts’ (1991) review of emotion the learning of very high IQ and highly achieving children, she found emotional forces in harness. They were not only curious, but often had a strong desire to control their environment, improve their learning efficiency and increase their own learning resources.
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
            <h1 className='font-bold my-10 text-xl'>Questions 14-17
            </h1>
            <p>

              Reading Passage 2 has six paragraphs, A-F.<br /><br />

              Which paragraph contains the following information?<br /><br />

              Write the correct letter, A-F, in boxes 14-17 on your answer sheet<br /><br />

              NB    You may use any letter more than once.<br /><br />


              14.   a reference to the influence of the domestic background on the gifted child.<br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />

              15.   reference to what can be lost if learners are given too much guidance.<br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />

              16.   a reference to the damaging effects of anxiety.<br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />

              17.   examples of classroom techniques which favour socially-disadvantaged children.<br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />



              <h1 className='font-bold my-5 text-xl'>Questions 18-22</h1> <br /><br />
              Look at the following statements (Questions 18-22) and the list of people below.<br /><br />

              Match each statement with the correct person or people, A-E.<br /><br />

              Write the correct letter, A-E, in boxes 18-22 on your answer sheet.<br /><br />


              18 .  Less time can be spent on exercises with gifted pupils who produce accurate work.<br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
              19 .  Self-reliance is a valuable tool that helps gifted students reach their goals.<br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
              20 .  Gifted children know how to channel their feelings to assist their learning.<br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
              21 .  The very gifted child benefits from appropriate support from close relatives.<br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
              22 .  Really successful students have learnt a considerable amount about their subject.<br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />

              List of People<br /><br />

              A .    Freeman<br /><br />
              B .    Shore and Kanevsky<br /><br />
              C .    Elshout<br /><br />
              D .    Simonton<br /><br />
              E .    Boekaerts <br /><br />



              <h1 className='font-bold my-10 text-xl'>Questions 23-26</h1>
              Complete the sentences below. <br /><br />

              Choose NO MORE THAN THREE WORDS from the passage for each answer. <br /><br />

              Write your answers in boxes 23-26 on your answer sheet <br /><br />


              23    One study found a strong connection between children’s IQ and the availability of <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300 border-2" /> and <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300 border-2" />.  at home. <br /><br />

              24   Children of average ability seem to need more direction from teachers because they do not have <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300 border-2" /> . <br /><br />

              25    Meta-cognition involves children understanding their own learning strategies, as well as developing <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300 border-2" />. . <br /><br />

              26   Teachers who rely on what is known as <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300 border-2" /> often produce sets of impressive grades in class tests. <br /><br />

            </p>
          </div>

        </div>
        <br /><br />

        <div className='flex gap-10 text-black  bg-gray-300 p-5
'>
          <div className='w-5/6 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold">READING PASSAGE 3</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 1 below.
            </p>
            <h1 className="text-3xl font-bold my-5">Museums of fine art and their public
            </h1>
            <p>
              The fact that people go to the Louvre museum in Paris to see the original painting Mona Lisa when they can see a reproduction anywhere leads us to question some assumptions about the role of museums of fine art in today’s world

              One of the most famous works of art in the world is Leonardo da Vinci’s Mona Lisa. Nearly everyone who goes to see the original will already be familiar with it from reproductions, but they accept that fine art is more rewardingly viewed in its original form.
            </p>

            <p className={isExpanded ? '' : ''}>
              However, if Mona Lisa was a famous novel, few people would bother to go to a museum to read the writer’s actual manuscript rather than a printed reproduction. This might be explained by the fact that the novel has evolved precisely because of technological developments that made it possible to print out huge numbers of texts, whereas oil paintings have always been produced as unique objects. In addition, it could be argued that the practice of interpreting or ‘reading’ each medium follows different conventions. With novels, the reader attends mainly to the meaning of words rather than the way they are printed on the page, whereas the ‘reader’ of a painting must attend just as closely to the material form of marks and shapes in the picture as to any ideas they may signify.

              Yet it has always been possible to make very accurate facsimiles of pretty well any fine art work. The seven surviving versions of Mona Lisa bear witness to the fact that in the 16th century, artists seemed perfectly content to assign the reproduction of their creations to their workshop apprentices as regular ‘bread and butter’ work. And today the task of reproducing pictures is incomparably more simple and reliable, with reprographic techniques that allow the production of high-quality prints made exactly to the original scale, with faithful colour values, and even with duplication of the surface relief of the painting.
            </p>

            {isExpanded && (
              <p>
                But despite an implicit recognition that the spread of good reproductions can be culturally valuable, museums continue to promote the special status of original work.

                Unfortunately, this seems to place severe limitations on the kind of experience offered to visitors.

                One limitation is related to the way the museum presents its exhibits. As repositories of unique historical objects, art museums are often called ‘treasure houses’. We are reminded of this even before we view a collection by the presence of security guards, attendants, ropes and display cases to keep us away from the exhibits. In many cases, the architectural style of the building further reinforces that notion. In addition, a major collection like that of London’s National Gallery is housed in numerous rooms, each with dozens of works, any one of which is likely to be worth more than all the average visitor possesses. In a society that judges the personal status of the individual so much by their material worth, it is therefore difficult not to be impressed by one’s own relative ‘worthlessness’ in such an environment.

                Furthermore, consideration of the ‘value’ of the original work in its treasure house setting impresses upon the viewer that, since these works were originally produced, they have been assigned a huge monetary value by some person or institution more powerful than themselves. Evidently, nothing the viewer thinks about the work is going to alter that value, and so today’s viewer is deterred from trying to extend that spontaneous, immediate, self-reliant kind of reading which would originally have met the work.
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
            <h1 className='font-bold text-xl my-10'>Questions 27-31
            </h1>
            <p>Complete the summary using the list of words, A-L, below.
              <br /><br />
              Write the correct letter, A-L, in boxes 27-31 on your answer sheet.
              <br /><br />
              The value attached to original works of art
              People go to art museums because they accept the value of seeing an original work of art. But they do not go to museums to read original manuscripts of novels, perhaps because the availability of novels has depended on 27<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300 border-2" /> for so long, and also because with novels, the 28<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300 border-2" /> are the most important thing.
              <br /><br />

              However, in historical times artists such as Leonardo were happy to instruct 29<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300 border-2" />to produce copies of their work and these days new methods of reproduction allow excellent replication of surface relief features as well as colour and 30<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300 border-2" />.
              <br /><br />
              It is regrettable that museums still promote the superiority of original works of art, since this may not be in the interests of the 31<input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300 border-2" /> .
              <br /><br />
              A   institution <br /><br /> B   mass production <br /><br />   C   mechanical processes
              <br /><br />
              D   public  E   paints  F   artist
              <br /><br />
              G   size  H   underlying ideas basic technology
              <br /><br />
              J   readers K  picture frames  L   assistants
              <br /><br />
              <h1 className='font-bold text-xl my-10'>Questions 32-35</h1>
              <br /><br />
              Choose the correct letter, A, B, C or D.
              <br /><br />
              Write the correct letter in boxes 32-35 on your answer sheet
              <br /><br />
              32 .  The writer mentions London’s National Gallery to illustrate
              <br /><br />
              A   the undesirable cost to a nation of maintaining a huge collection of art.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              B   the conflict that may arise in society between financial and artistic values.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              C   the negative effect a museum can have on visitors’ opinions of themselves.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              D   the need to put individual well-being above large-scale artistic schemes.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              33.   The writer says that today, viewers may be unwilling to criticise a because
              <br /><br />
              A   they lack the knowledge needed to support an opinion.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              B   they fear it may have financial implications.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              C   they have no real concept of the work’s value.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              D   they feel their personal reaction is of no significance.

              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              34 .  According to the writer, the ‘displacement effect’ on the visitor is caused by
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              A   the variety of works on display and the way they are arranged.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              B   the impossibility of viewing particular works of art over a long period.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              C   the similar nature of the paintings and the lack of great works.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              D   the inappropriate nature of the individual works selected for exhibition.

              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              35.   The writer says that unlike other forms of art, a painting does not
              <br /><br />
              A   involve direct contact with an audience.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              B   require a specific location for a performance.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              C   need the involvement of other professionals.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              D   have a specific beginning or end.
              <br /> <div className=' flex justify-center items-center w-max h-max'> <Checkbox></Checkbox> </div> <br />
              <h1 className='font-blod text-xl my-10'>Questions 36-40</h1>
              <br /><br />
              Do the following statements agree with the views of the writer in Reading Passage 3?
              <br /><br />
              In boxes 36-40 on your answer sheet, write
              <br /><br />
              YES                  if the statement agrees with the views of the writer
              <br /><br />
              NO                   if the statement contradicts the views of the writer
              <br /><br />
              NOT GIVEN    if the is impossible to say what the writer thinks about this
              <br /><br />
              36.   Art history should focus on discovering the meaning of art using a range of media.
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              37.   The approach of art historians conflicts with that of art museums.
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              38.   People should be encouraged to give their opinions openly on works of art.
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              39.   Reproductions of fine art should only be sold to the public if they are of high quality.
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              40.   In the future, those with power are likely to encourage more people to enjoy art.</p>
            <div className='flex items-center gap-5'><div className='my-5'>
              <span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
