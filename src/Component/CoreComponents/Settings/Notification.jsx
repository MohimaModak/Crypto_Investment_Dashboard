import { Checkbox } from '@mui/material';
import React, { useState } from 'react';

export default function Notification() {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle the full text

  const toggleText = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };
  return (
    <div className='bg-white text-black h-screen overflow-y-auto w-full'>
      <div className='p-5'>
        <div className='flex gap-10 text-black  bg-gray-300 p-5'>
          <div className='
w-2/4 h-screen overflow-y-auto'>
            <div>
              <h1 className="text-4xl font-bold">READING PASSAGE 1</h1>
              <p className="my-5">
                You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.
              </p>
              <h1 className="text-3xl font-bold my-5">The Context, Meaning and Scope of Tourism
              </h1>
              <p>
                <br /><br /><br /><br />  <span className='font-bold text-xl my-10'>A</span> <br /><br /><br /><br />
                Travel has existed since the beginning of time, when primitive man set out, often traversing great distances in search of game, which provided the food and clothing necessary for his survival. Throughout the course of history, people have travelled for purposes of trade, religious conviction, economic gain, war, migration and other equally compelling motivations. In the Roman era, wealthy aristocrats and high government officials also travelled for pleasure. Seaside resorts located at Pompeii and Herculaneum afforded citizens the opportunity to escape to their vacation villas in order to avoid the summer heat of Rome. Travel, except during the Dark Ages, has continued to grow and, throughout recorded history, has played a vital role in the development of civilisations and their economies.
                <br /><br /><br /><br />
                <span className='font-bold text-xl my-10'>B</span>
                <br /><br /><br /><br />
                Tourism in the mass form as we know it today is a distinctly twentieth-century phenomenon. Historians suggest that the advent of mass tourism began in England during the industrial revolution with the rise of the middle class and the availability of relatively inexpensive transportation. The creation of the commercial airline industry following the Second World War and the subsequent development of the jet aircraft in the 1950s signalled the rapid growth and expansion of international travel. This growth led to the development of a major new industry: tourism. In turn, international tourism became the concern of a number of world governments since it not only provided new employment opportunities but also produced a means of earning foreign exchange.
              </p>

              <p className={isExpanded ? '' : ''}>
                <br /><br /><br /><br /> <span className='font-bold text-xl my-10'>C</span> <br /><br /><br /><br />
                Tourism today has grown significantly in both economic and social importance. In most industrialised countries over the past few years the fastest growth has been seen in the area of services. One of the largest segments of the service industry, although largely unrecognised as an entity in some of these countries, is travel and tourism. According to the World Travel and Tourism Council (1992), Travel and tourism is the largest industry in the world on virtually any economic measure including value-added capital investment, employment and tax contributions. In 1992 ‘the industry’s gross output was estimated to be $3.5 trillion, over 12 per cent of all consumer spending. The travel and tourism industry is the world’s largest employer the almost 130 million jobs, or almost 7 per cent of all employees. This industry is the world’s leading industrial contributor, producing over 6 per cent of the world’s national product and accounting for capital investment in excess of $422 billion m direct indirect and personal taxes each year. Thus, tourism has a profound impact both on the world economy and, because of the educative effect of travel and the effects on employment, on society itself.
              </p>

              {isExpanded && (
                <p> <br /><br /><br /><br /><span className='font-bold text-xl my-10'>D</span> <br /><br /><br /><br />
                  However, the major problems of the travel and tourism industry that have hidden, or obscured, its economic impact are the diversity and fragmentation of the industry itself. The travel industry includes: hotels, motels and other types of accommodation; restaurants and other food services; transportation services and facilities; amusements, attractions and other leisure facilities; gift shops and a large number of other enterprises. Since many of these businesses also serve local residents, the impact of spending by visitors can easily be overlooked or underestimated. In addition, Meis (1992) points out that the tourism industry involves concepts that have remained amorphous to both analysts and decision makers. Moreover, in all nations this problem has made it difficult for the industry to develop any type of reliable or credible tourism information base in order to estimate the contribution it makes to regional, national and global economies. However, the nature of this very diversity makes travel and tourism ideal vehicles for economic development in a wide variety of countries, regions or communities.
                  <br /><br /><br /><br />   <span className='font-bold text-xl my-10'>E</span> <br /><br /><br /><br />
                  Once the exclusive province of the wealthy, travel and tourism have become an institutionalised way of life for most of the population. In fact, McIntosh and Goeldner (1990) suggest that tourism has become the largest commodity in international trade for many nations and, for a significant number of other countries, it ranks second or third. For example, tourism is the major source of income in Bermuda, Greece, Italy, Spain, Switzerland and most Caribbean countries. In addition, Hawkins and Ritchie, quoting from data published by the American Express Company, suggest that the travel and tourism industry is the number one ranked employer in the Bahamas, Brazil, Canada, France, (the former) West Germany, Hong Kong, Italy, Jamaica, Japan, Singapore, the United Kingdom and the United States. However, because of problems of definition, which directly affect statistical measurement, it is not possible with any degree of certainty to provide precise, valid or reliable data about the extent of world-wide tourism participation or its economic impact. In many cases, similar difficulties arise when attempts are made to measure domestic tourism.
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

              <h1 className='font-bold text-xl my-10'>Questions 1-4</h1>
              <br /><br />
              Reading Passage 1 has five paragraphs, A-E.
              <br /><br />
              Choose the correct heading for paragraphs B-E from the list of headings below.
              <br /><br />
              Write the correct number, i-vii, in boxes 1-4 on your answer sheet
              <br /><br />
              List of Headings
              <br /><br />
              i       Economic and social significance of tourism
              <br /><br />
              ii      The development of mass tourism
              <br /><br />
              iii     Travel for the wealthy
              <br /><br />
              iv     Earning foreign exchange through tourism
              <br /><br />
              v      Difficulty in recognising the economic effects of tourism
              <br /><br />
              vi     The contribution of air travel to tourism
              <br /><br />
              vii    The world impact of tourism
              <br /><br />
              viii   The history of travel


              Example          Answer
              <br /><br />
              Paragraph A    viii
              <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
              1   Paragraph B
              <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
              2   Paragraph C
              <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
              3   Paragraph D
              <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
              4   Paragraph E
              <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> <br />
            </div>
            <div>
              <h1 className='font-bold text-xl my-10'> Questions 5-10</h1>
              <br /><br />
              Do the following statements agree with the information given in Reading Passage 1?
              <br /><br />
              In boxes 5-10 on your answer sheet, write
              <br /><br />
              TRUE               if the statement agrees with the information
              <br /><br />
              FALSE              if the statement contradicts the information
              <br /><br />
              NOT GIVEN    if there is no information on this
              <br /><br />

              5 .  The largest employment figures in the world are found in the travel and tourism industry.
              <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
              6 .  Tourism contributes over six per cent of the Australian gross national product.
              <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
              7 .  Tourism has a social impact because it promotes recreation.
              <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />

              8  . Two main features of the travel and tourism industry make its economic significance difficult to ascertain.
              <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
              9 .  Visitor spending is always greater than the spending of residents in tourist areas.
              <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />
              10 .  It is easy to show statistically how tourism affects individual economies.
              <br />  <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div> <br />


              <h1 className='font-bold text-xl my-10'>Questions 11-13</h1>
              Complete the sentences below.

              Choose NO MORE THAN THREE WORDS from the passage for each answer.

              Write your answers in boxes 11-13 on your answer sheet.


              11 .  In Greece, tourism the most important <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> .
              <br /><br />
              12  . The travel and tourism industry in Jamaica is the major <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> .
              <br /><br />
              13 .  The problems associated with measuring international tourism are often reflected in the measurement of <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> .
            </div>
          </div>
        </div>
        <br /><br />
        <div className='flex gap-10 text-black  bg-gray-300 p-5'>
          <div className='w-2/4 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold">READING PASSAGE 2</h1>
            <p className="my-5 text-lg">
              You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 1 below.
            </p>

            <h1 className="text-3xl font-bold my-5">Autumn leaves
            </h1>
            <p className="my-5 text-lg">
              Canadian writer Jay Ingram investigates the mystery of why leaves turn red in the fall
            </p>
            <p>
              <br /><br />  <span className='font-bold text-xl my-10'>A</span> <br /><br />
              One of the most captivating natural events of the year in many areas throughout North America is the turning of the leaves in the fall. The colours are magnificent, but the question of exactly why some trees turn yellow or orange, and others red or purple, is something which has long puzzled scientists.
              <br /><br />
              <span className='font-bold text-xl my-10'>B</span>
              Summer leaves are green because they are full of chlorophyll, the molecule that captures sunlight converts that energy into new building materials for the tree. As fall approaches in the northern hemisphere, the amount of solar energy available declines considerably. For many trees – evergreen conifers being an exception – the best strategy is to abandon photosynthesis* until the spring. So rather than maintaining the now redundant leaves throughout the winter, the tree saves its precious resources and discards them. But before letting its leaves go, the tree dismantles their chlorophyll molecules and ships their valuable nitrogen back into the twigs. As chlorophyll is depleted, other colours that have been dominated by it throughout the summer begin to be revealed. This unmasking explains the autumn colours of yellow and orange, but not the brilliant reds and purples of trees such as the maple or sumac.
            </p>

            <p className={isExpanded ? '' : ''}>
              <br /><br /> <span className='font-bold text-xl my-10'>C</span> <br /><br />
              The source of the red is widely known: it is created by anthocyanins, water-soluble plant pigments reflecting the red to blue range of the visible spectrum. They belong to a class of sugar-based chemical compounds also known as flavonoids. What’s puzzling is that anthocyanins are actually newly minted, made in the leaves at the same time as the tree is preparing to drop them. But it is hard to make sense of the manufacture of anthocyanins – why should a tree bother making new chemicals in its leaves when it’s already scrambling to withdraw and preserve the ones already there?
            </p>

            {isExpanded && (
              <p> <br /><br /><span className='font-bold text-xl my-10'>D</span> <br /><br />
                Some theories about anthocyanins have argued that they might act as a chemical defence against attacks by insects or fungi, or that they might attract fruit-eating birds or increase a leafs tolerance to freezing. However there are problems with each of these theories, including the fact that leaves are red for such a relatively short period that the expense of energy needed to manufacture the anthocyanins would outweigh any anti-fungal or anti-herbivore activity achieved.


                <br /><br />   <span className='font-bold text-xl my-10'>E</span> <br /><br />
                It has also been proposed that trees may produce vivid red colours to convince herbivorous insects that they are healthy and robust and would be easily able to mount chemical defences against infestation. If insects paid attention to such advertisements, they might be prompted to lay their eggs on a duller, and presumably less resistant host. The flaw in this theory lies in the lack of proof to support it. No one has as yet ascertained whether more robust trees sport the brightest leaves, or whether insects make choices according to colour intensity.

                <br /><br />   <span className='font-bold text-xl my-10'>F</span> <br /><br />
                Perhaps the most plausible suggestion as to why leaves would go to the trouble of making anthocyanins when they’re busy packing up for the winter is the theory known as the ‘light screen’ hypothesis. It sounds paradoxical, because the idea behind this hypothesis is that the red pigment is made in autumn leaves to protect chlorophyll, the light-absorbing chemical, from too much light. Why does chlorophyll need protection when it is the natural world’s supreme light absorber? Why protect chlorophyll at a time when the tree is breaking it down to salvage as much of it as possible?

                <br /><br />   <span className='font-bold text-xl my-10'>G</span> <br /><br />
                Chlorophyll, although exquisitely evolved to capture the energy of sunlight, can sometimes be overwhelmed by it, especially in situations of drought, low temperatures, or nutrient deficiency. Moreover, the problem of oversensitivity to light is even more acute in the fall, when the leaf is busy preparing for winter by dismantling its internal machinery. The energy absorbed by the chlorophyll molecules of the unstable autumn leaf is not immediately channelled into useful products and processes, as it would be in an intact summer leaf. The weakened fall leaf then becomes vulnerable to the highly destructive effects of the oxygen created by the excited chlorophyll molecules.
                <br /><br />   <span className='font-bold text-xl my-10'>I</span> <br /><br />
                Even if you had never suspected that this is what was going on when leaves turn red, there are clues out there. One is straightforward: on many trees, the leaves that are the reddest are those on the side of the tree which gets most sun. Not only that, but the red is brighter on the upper side of the leaf. It has also been recognised for decades that the best conditions for intense red colours are dry, sunny days and cool nights, conditions that nicely match those that make leaves susceptible to excess light. And finally, trees such as maples usually get much redder the more north you travel in the northern hemisphere. It’s colder there, they’re more stressed, their chlorophyll is more sensitive and it needs more sunblock.
                <br /><br />   <span className='font-bold text-xl my-10'>H</span> <br /><br />
                What is still not fully understood, however, is why some trees resort to producing red pigments while others don’t bother, and simply reveal their orange or yellow hues. Do these trees have other means at their disposal to prevent overexposure to light in autumn? Their story, though not as spectacular to the eye, will surely turn out to be as subtle and as complex.
                <br />
                ——-
                <br />
                * photosynthesis: the production of new material from sunlight, water and carbon dioxide.








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
              <h1 className='font-bold text-xl my-10'> Questions 14-18</h1>

              Reading Passage 2 has nine paragraphs, A-l.
              <br /><br />
              Which paragraph contains the following information?
              <br /><br />
              Write the correct letter, A-l, in boxes 14-18 on your answer sheet.
              <br /><br />
              NB   You may use any letter more than once.
              <br /><br />

              14.   a description of the substance responsible for the red colouration of leaves
              <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
              15.   the reason why trees drop their leaves in autumn
              <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />

              16  . some evidence to confirm a theory about the purpose of the red leaves
              <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
              17.   an explanation of the function of chlorophyll
              <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
              18 .  a suggestion that the red colouration in leaves could serve as a warning signal
              <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md' /><br />
            </div>
            <div>
              <h1 className='font-bold text-xl my-10'> Questions 19-22</h1>
              <br /><br />
              Complete the notes below.
              <br /><br />
              Choose ONE WORD ONLY from the passage for each answer.
              <br /><br />
              Write your answers in boxes 19-22 on your answer sheet.
              <br /><br />
              Why believe the ‘light screen’ hypothesis?
              <br /><br />

              ●   The most vividly coloured red leaves are found on the side of the tree facing the 19 <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              <br /><br />

              ●   The 20 <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> surfaces of leaves contain the most red pigment.
              <br /><br />

              ●   Red leaves are most abundant when daytime weather conditions are 21 <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> and sunny
              <br /><br />

              ●   The intensity of the red colour of leaves increases as you go further 22 <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              <br /><br />



              <h1 className='font-bold text-xl my-10'> Questions 10-12</h1>
              Do the following statements agree with the information given in Reading Passage 2?
              <br /><br />

              In boxes 23-25 on your answer sheet, write
              <br /><br />

              TRUE               if the statement agrees with the information
              <br /><br />

              FALSE              if the statement contradicts the information
              <br /><br />

              NOT GIVEN    if there is no information on this
              <br /><br />


              23 .  It is likely that the red pigments help to protect the leaf from freezing temperatures.
              <br /><div className='flex items-center gap-5'><div className='my-5'>
                <span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />

              24 .  The ‘light screen’ hypothesis would initially seem to contradict what is known about chlorophyll.
              <br /><div className='flex items-center gap-5'><div className='my-5'>
                <span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />

              25  . Leaves which turn colours other than red are more likely to be damaged by sunlight.
              <br /><div className='flex items-center gap-5'><div className='my-5'>
                <span>TRUE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />



              <h1 className='font-bold text-xl '>Question 26</h1>
              <br /><br />
              Choose the correct letter A, B, C or D.
              <br /><br />

              Write the correct letter in box 26 on your answer sheet.
              <br /><br />

              For which of the following questions does the writer offer an explanation?
              <br /><br />

              A .    why conifers remain green in winter
              <br /><span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><br />

              B .    how leaves turn orange and yellow in autumn
              <br /><span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><br />

              C  .   how herbivorous insects choose which trees to lay their eggs in
              <br /><span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><br />

              D   .  why anthocyanins are restricted to certain trees
              <br /><span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><br />
            </div>
          </div>
        </div>
        <br /><br />


        <div className='flex gap-10 text-black  bg-gray-300 p-5'>

          <div className='w-2/4 h-screen overflow-y-auto'>
            <div>
              <h1 className="text-4xl font-bold">READING PASSAGE 3</h1>
              <p className="my-5">
                You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.
              </p>
              <h1 className="text-3xl font-bold my-5">Beyond the blue horizon
              </h1>
              <p>
                Ancient voyagers who settled the far-flung islands of the Pacific Ocean
                <br />
                An important archaeological discovery on the island of Efate in the Pacific archipelago of Vanuatu has revealed traces of an ancient seafaring people, the distant ancestors of today’s Polynesians. The site came to light only by chance. An agricultural worker, digging in the grounds of a derelict plantation, scraped open a grave – the first of dozens in a burial ground some 3,000 years old. It is the oldest cemetery ever found in the Pacific islands, and it harbors the remains of an ancient people archaeologists call the Lapita.
              </p>

              <p className={isExpanded ? '' : ''}>

                They were daring blue-water adventurers who used basic canoes to rove across the ocean. But they were not just explorers. They were also pioneers who carried with them everything they would need to build new lives – their livestock, taro seedlings and stone tools. Within the span of several centuries, the Lapita stretched the boundaries of their world from the jungle-clad volcanoes of Papua New Guinea to the loneliest coral outliers of Tonga.

                The Lapita left precious few clues about themselves, but Efate expands the volume of data available to researchers dramatically. The remains of 62 individuals have been uncovered so far, and archaeologists were also thrilled to find six complete Lapita pots. Other items included a Lapita burial urn with modeled birds arranged on the rim as though peering down at the human remains sealed inside. ‘It’s an important discovery,’ says Matthew Spriggs, professor of archaeology at the Australian National University and head of the international team digging up the site, ‘for it conclusively identifies the remains as Lapita.’
              </p>

              {isExpanded && (
                <p> DNA teased from these human remains may help answer one of the most puzzling questions in Pacific anthropology: did all Pacific islanders spring from one source or many? Was there only one outward migration from a single point in Asia, or several from different points? ‘This represents the best opportunity we’ve had yet,’ says Spriggs, ‘to find out who the Lapita actually were, where they came from, and who their closest descendants are today.’

                  There is one stubborn question for which archaeology has yet to provide any answers: how did the Lapita accomplish the ancient equivalent of a moon landing, many times over? No-one has found one of their canoes or any rigging, which could reveal how the canoes were sailed. Nor do the oral histories and traditions of later Polynesians offer any insights, for they turn into myths long before they reach as far back in time as the Lapita.‘All we can say for certain is that the Lapita had canoes that were capable of ocean voyages, and they had the ability to sail them,’ says Geoff Irwin, a professor of archaeology at the University of Auckland. Those sailing skills, he says, were developed and passed down over thousands of years by earlier mariners who worked their way through the archipelagoes of the western Pacific, making short crossings to nearby islands. The real adventure didn’t begin, however, until their Lapita descendants sailed out of sight of land, with empty horizons on every side. This must have been as difficult for them as landing on the moon is for us today. Certainly it distinguished them from their ancestors, but what gave them the courage to launch out on such risky voyages?

                  The Lap it as thrust into the Pacific was eastward, against the prevailing trade winds, Irwin notes. Those nagging headwinds, he argues, may have been the key to their success. ‘They could sail out for days into the unknown and assess the area, secure in the knowledge that if they didn’t find anything, they could turn about and catch a swift ride back on the trade winds. This is what would have made the whole thing work.’ Once out there, skilled seafarers would have detected abundant leads to follow to land: seabirds, coconuts and twigs carried out to sea by the tides, and the afternoon pile-up of clouds on the horizon which often indicates an island in the distance.


                  For returning explorers, successful or not, the geography of their own archipelagoes would have provided a safety net. Without this to go by, overshooting their home ports, getting lost and sailing off into eternity would have been all too easy. Vanuatu, for example, stretches more than 500 miles in a northwest-southeast trend, its scores of intervisible islands forming a backstop for mariners riding the trade winds home.

                  All this presupposes one essential detail, says Atholl Anderson, professor of prehistory at the Australian National University: the Lapita had mastered the advanced art of sailing against the wind. ‘And there’s no proof they could do any such thing,’ Anderson says. ‘There has been this assumption they did, and people have built canoes to re-create those early voyages based on that assumption. But nobody has any idea what their canoes looked like or how they were rigged.’

                  Rather than give all the credit to human skill, Anderson invokes the winds of chance. El Nino, the same climate disruption that affects the Pacific today, may have helped scatter the Lapita, Anderson suggests. He points out that climate data obtained from slow-growing corals around the Pacific indicate a series of unusually frequent El Ninos around the time of the Lapita expansion. By reversing the regular east-to-west flow of the trade winds for weeks at a time, these super El Ninos might have taken the Lapita on long unplanned voyages.

                  However they did it, the Lapita spread themselves a third of the way across the Pacific, then called it quits for reasons known only to them. Ahead lay the vast emptiness of the central Pacific and perhaps they were too thinly stretched to venture farther. They probably never numbered more than a few thousand in total, and in their rapid migration eastward they encountered hundreds of islands – more than 300 in Fiji alone.
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

            <h1 className='font-bold text-xl my-10'>Questions 27-31</h1>
            <br />
            Complete the summary using the list of words and phrases, A-J, below.
            <br /><br />
            Write the correct letter, A-J, in boxes 37-31 on your sheet.

            <br /><br />
            The Éfaté burial site
            <br /><br />
            A 3,000-year-old burial ground of a seafaring people called the Lapita has been found on an abandoned 27. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> on the Pacific island of Efate. The cemetery, which is a significant 28. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />. , was uncovered accidentally by an agricultural worker.

            The Lapita explored and colonised many Pacific islands over several centuries. They took many things with them on their voyages including 29. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> and tools.

            The burial ground increases the amount of information about the Lapita available to scientists. A team of researchers, led by Matthew Spriggs from the Australian National University, are helping with the excavation of the site. Spriggs believes the 30. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />.  which was found at the site is very important since it confirms that the 31. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> found inside are Lapita.

            A .    proof
            <br /><br />
            B .    plantation
            <br /><br />
            C .    harbour
            <br /><br />
            D .    bones
            <br /><br />
            E .    data
            <br /><br />
            F .    archaeological discovery
            <br /><br />
            G .    burial urn
            <br /><br />
            H .    source
            <br /><br />
            I .     animals
            <br /><br />
            J .     maps
            <br /><br />



            <h1 className='font-bold text-xl my-10'> Questions 32-35</h1>
            <br /><br />
            Choose the correct letter A, B, C or D.
            <br /><br />
            Write the correct letter in boxes 32-35 on your answer sheet.

            <br /><br />
            <h1 className='font-blod text-2xl mt-8'>32 .   According to the writer, there are difficulties explaining how the Lapita accomplished their journeys because</h1>
            <br /><br />
            A.   the canoes that have been discovered offer relatively few clues.
            <br /> <Checkbox></Checkbox> <br />
            B .  archaeologists have shown limited interest in this area of research.
            <br /><Checkbox></Checkbox><br />
            C .  little information relating to this period can be relied upon for accuracy.
            <br /><Checkbox></Checkbox><br />
            D .  technological advances have altered the way such achievements are viewed.
            <br /><Checkbox></Checkbox><br />

            <h1 className='font-blod text-2xl mt-8'>33 .   According to the sixth paragraph, what was extraordinary about the Lapita?</h1>
            <br /><br />
            A   They sailed beyond the point where land was visible.
            <br /><Checkbox></Checkbox><br />
            B   Their cultural heritage discouraged the expression of fear.
            <br /><Checkbox></Checkbox><br />
            C   They were able to build canoes that withstood ocean voyages.
            <br /><Checkbox></Checkbox><br />
            D   Their navigational skills were passed on from one generation to the next.

            <br /><Checkbox></Checkbox><br />
            <h1 className='font-blod text-2xl mt-8'>34 .   What does ‘This’ refer to in the seventh paragraph?</h1>
            <br /><br />
            A   the Lapita’s seafaring talent
            <br /><Checkbox></Checkbox><br />
            B   the Lapita s ability to detect signs of land
            <br /><Checkbox></Checkbox><br />
            C   the Lapita’s extensive knowledge of the region
            <br /><Checkbox></Checkbox><br />
            D   the Lapita’s belief they would be able to return home

            <br /><Checkbox></Checkbox><br />
            <h1 className='font-blod text-2xl mt-8'>35 .  According to the eighth paragraph, how was the geography of the region significant?</h1>
            <br /><Checkbox></Checkbox><br />
            A   It played an important role in Lapita culture.
            <br /><Checkbox></Checkbox><br />
            B   It meant there were relatively few storms at sea.
            <br /><Checkbox></Checkbox><br />
            C   It provided a navigational aid for the Lapita.
            <br /><Checkbox></Checkbox><br />
            D   It made a large number of islands habitable.


            <br /><Checkbox></Checkbox><br />
            <h1 className='font-bold text-xl my-10'>Questions 36-40</h1>
            Do the following statements agree with the views of the writer in Reading Passage 3?
            <br /><br />

            In boxes 36-40 on your answer sheet, write
            <br /><br />

            YES                  if the statement agrees with the views of the writer
            <br /><br />
            NO                   if the statement contradicts the views of the writer
            <br /><br />

            NOT GIVEN    if it is impossible to say what the writer thinks about this


            36 . It is now clear that the Lapita could sail into a prevailing wind.
            <div className='flex items-center gap-5'><div className='my-5'>
              <span>YES</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NO</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            </div>
            37 . Extreme climate conditions may have played a role in Lapita migration.
            <div className='flex items-center gap-5'><div className='my-5'>
              <span>YES</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NO</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            </div>
            38 . The Lapita learnt to predict the duration of El Ninos.
            <div className='flex items-center gap-5'><div className='my-5'>
              <span>YES</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NO</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            </div>
            39 . It remains unclear why the Lapita halted their expansion across the Pacific.
            <div className='flex items-center gap-5'><div className='my-5'>
              <span>YES</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NO</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            </div>
            40 . It is likely that the majority of Lapita settled on Fiji.
            <div className='flex items-center gap-5'><div className='my-5'>
              <span>YES</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NO</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className=' w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            </div>
          </div>
        </div>

        <br />

      </div>
    </div>
  )
}
