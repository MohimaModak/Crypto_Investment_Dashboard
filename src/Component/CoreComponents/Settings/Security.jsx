import { Checkbox } from '@mui/material';
import React, { useState } from 'react'

export default function Security() {
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
            <h1 className="text-3xl font-bold my-5">The impact of climate change on butterflies in Britain
            </h1>
            <p>
              According to conservationists, populations of around two thirds of butterfly species have declined in Britain over the past 40 years. If this trend continues, it might have unpredictable knock-on effects for other species in the ecosystem. Butterfly eggs develop into caterpillars and these insects, which are the second stage in a new butterfly’s lifecycle, consume vast quantities of plant material, and in turn act as prey for birds as well as bats and other small mammals. Only by arming themselves with an understanding of why butterfly numbers are down can conservationists hope to halt or reverse the decline.
            </p>

            <p className={isExpanded ? '' : ''}>
              Butterflies prefer outdoor conditions to be ‘just right’, which means neither too hot nor too cold. Under the conditions of climate change, the temperature at any given time in summer is generally getting warmer, leaving butterflies with the challenge of how to deal with this. One of the main ways in which species are ensuring conditions suit them is by changing the time of year at which they are active and reproduce. Scientists refer to the timing of such lifecycle events as ‘phenology’, so when an animal or plant starts to do something earlier in the year than it usually does, it is said to be ‘advancing its phenology’.
            </p>

            {isExpanded && (
              <p> These advances have been observed already in a wide range of butterflies – indeed, most species are advancing their phenology to some extent. In Britain, as the average spring temperature has increased by roughly 0.5°C over the past 20 years, species have advanced by between three days and a week on average, to keep in line with cooler temperatures. Is this a sign that butterflies are well equipped to cope with climate change, and readily adjust to new temperatures? Or are these populations under stress, being dragged along unwillingly by unnaturally fast changes? The answer is still unknown, but a new study is seeking to answer these questions.

                First, the researchers pulled together data from millions of records that had been submitted by butterfly enthusiasts-people who spend their free time observing the activities of different species. This provided information on 130 species of butterflies in Great Britain every year for a 20-year period. They then estimated the abundance and distribution of each species across this time, along with how far north in the country they had moved. The data also, crucially, allowed researchers to estimate subtle changes in what time of the year each species was changing into an adult butterfly.

                Analyzing the trends in each variable, the researchers discovered that species with more flexible lifecycles were more likely to be able to benefit from an earlier emergence driven by climate change. Some species are able to go from caterpillar to butterfly twice or more per year, so that the individual butterflies you see flying in the spring are the grandchildren or great-grandchildren of the individuals seen a year previously.

                Among these species, researchers observed that those which have been advancing their phenology the most over the 20-year study period also had the most positive trends in abundance, distribution and northwards extent. For these species, such as Britain’s tiniest butterfly, the dainty Small Blue, whose colonies are up to a hundred strong, some develop into butterflies early in spring, allowing their summer generations to complete another reproductive cycle by autumn so that more population growth occurs.

                Other species, however, are less flexible and restricted to a single reproductive cycle per year. For these species, there was no evidence of any benefit to emerging earlier. Indeed, worryingly, it was found that the species in this group that specialize in very specific habitat types, often related to the caterpillar’s preferred diet, actually tended to be most at harm from advancing phenology. The beautiful High Brown Fritillary, often described as Britain’s most endangered butterfly, is in this group. It is found only in coppiced woodland and limestone pavement habitats. It is also a single-generation butterfly that has advanced its phenology. This suggests that climate change, while undoubtedly not the sole cause, might have played a part in the downfall of this species.

                All is not lost, however. Many of Britain’s single-generation species show the capacity, in continental Europe, to add a second generation in years that are sufficiently warm. Therefore, as the climate continues to warm, species like the Silver-studded Blue might be able to switch to multiple generations in the UK as well, and so begin to extract benefits from the additional warmth, potentially leading to population increases.

                More immediately, conservationists can arm themselves with all this knowledge to spot the warning signs of species that may be at risk. The White Admiral of southern England, a much sought-after butterfly, experienced a significant increase in numbers from the 1920s but has shown a considerable decline in the past 20 years. This may be because the caterpillar exists solely on a diet of a plant called honeysuckle. But it is also likely to be due to climate change.
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
            <h1 className='font-bold text-xl'>Questions 1-6</h1>
            <br />
            <h1>Do the following statements agree with the information given in Reading Passage?</h1>
            <br />
            In boxes on your answer sheet, write
            <br />
            <br />
            TRUE                     if the statement agrees with the information
            <br />
            <br />
            FALSE                   if the statement contradicts the information
            <br />
            <br />
            NOT GIVEN         if there is no information on this
            <br />
            <br />
            <div>
              <h1 className='font-bold'><strong>1. </strong> Forty years ago, there were fewer butterflies in Britain than at present.</h1>
              <br />
              <div className='flex items-center gap-5'>
                <div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>
              <br />
              <h1 className='font-bold'><strong>2. </strong> Caterpillars are eaten by a number of different predators.</h1>
              <br />
              <div className='flex items-center gap-5'>
                <div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>
              <br />
              <h1 className='font-bold'><strong>3. </strong> ‘Phenology’ is a term used to describe a creature’s ability to alter the location of a lifecycle event.</h1>
              <br />
              <div className='flex items-center gap-5'>
                <div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>
              <br />
              <h1 className='font-bold'><strong>4. </strong> Some species of butterfly have a reduced lifespan due to spring temperature increases.</h1>
              <br />
              <div className='flex items-center gap-5'>
                <div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>
              <br />
              <h1 className='font-bold'><strong>5. </strong> There is a clear reason for the adaptations that butterflies are making to climate change.</h1>
              <br />
              <div className='flex items-center gap-5'>
                <div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>
              <br />
              <h1 className='font-bold'><strong>6. </strong> The data used in the study was taken from the work of amateur butterfly watchers.</h1>
              <br />
              <div className='flex items-center gap-5'>
                <div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>
              <br />
            </div>
            <div>
              <h1 className='font-bold text-xl'>Questions 7-13</h1>
              <br /><br />

              Complete the notes below.
              <br /><br />

              Choose ONE WORD ONLY from the passage for each answer.
              <br /><br />

              Write your answers in boxes on your answer sheet.


              <br /><br />

              The Small Blue
              <br /><br />

              * lives in large <strong>7.</strong>
              <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br /><br />

              * first appears at the start of <strong>8.</strong>
              <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br /><br />

              * completes more than one reproductive cycle per year


              <br /><br />

              The High Brown Fritillary
              <br /><br />

              *has one reproductive cycle
              <br /><br />

              *is considered to be more <strong>9. </strong>
              <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br /><br />

              than other species
              <br /><br />

              *its caterpillars occupy a limited range of <strong>10.</strong>
              <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

              <br /><br />


              The Silver-studded Blue
              <br /><br />

              *is already able to reproduce twice a year in warm areas of <strong>11. </strong>
              <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />


              <br /><br />

              The White Admiral
              <br /><br />

              *is found in <strong>12. </strong>
              <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br /><br />

              areas of England
              <br /><br />

              *both climate change and the <strong>13. </strong>
              <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br /><br />

              of the caterpillar are possible reasons for decline
              <br /><br />

            </div>
          </div>
        </div>
        <br /><br />

        <div className='flex gap-10 text-black  bg-gray-300 p-5'>

          <div className='w-2/4 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold my-5">READING PASSAGE 2</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 1 below.
            </p>
            <h1 className="text-3xl font-bold my-5">Deep-sea Mining
            </h1>

            <p>
              <br />
              <span className='font-blod text-2xl my-16'>A</span>
              <br />
              When Professor Mat IJpton found that a microbe from a deep-sea sponge was killing pathogenic bugs in his laboratory, he realised it could be a breakthrough in the fight against antibiotic-resistant superbugs, which are responsible for thousands of deaths a year in the UK alone. Further tests confirmed that an antibiotic from the sponge bacteria, found living more than 700 metres under the sea at the Rockall trough in the north-east Atlantic, was previously unknown to science, boosting its potential as a life-saving medicine. But Upton, and other scientists who view the deep ocean and its wealth of unique and undocumented species as a prospecting ground for new medicines, fear such potential will be lost in the rush to exploit the deep sea’s equally rich metal and mineral resources.
            </p>

            <p className={isExpanded ? '' : ''}>
              <span className='font-blod text-2xl my-16'>B</span>

              <br />
              ‘We’re looking at the bioactive potential of marine resources, to see if there are any more medicines or drugs down there before we destroy it for ever,’ says Upton, a medical microbiologist at the University of Plymouth. Ile is among many scientists urging a halt to deep-sea mining, asking for time to weigh up the pros and cons. ‘In sustainability terms, this could be a better way of exploiting the economic potential of the deep sea,’ he argues. Oceanographers using remotely operated vehicles have spotted many new species. Among them have been sea cucumbers with tails allowing them to sail along the ocean floor, and a rare ‘Dumbo’octopus, found 3,000 metres under the Pacific Ocean, off the coast of California. Any one of these could offer lifesaving potential. Upton estimates it could take up to a decade for a newly discovered antibiotic to become a medicine but the race towards commercial mining in the ocean abyss has already begun.
              <br />



            </p>

            {isExpanded && (
              <p>
                <span className='font-blod text-2xl my-16'>C</span>
                <br />

                The deep sea contains more nickel, cobalt and rare earth metals than all land reserves combined, according to the US Geological Survey. Mining corporations argue that deep-sea exploration could help diversify the supply of metals and point to the fact that demand for resources such as copper, aluminum, cobalt for electric car batteries and other metals to power technology and smartphones, is soaring. They say that deep-sea mining could yield far superior ore to land mining with little, if any, waste. Different methods of extraction exist, but most involve employing some form of converted machinery previously used in terrestrial mining to excavate materials from the sea floor, at depths of up to 6,000 meters, then drawing a seawater slurry, containing rock and other solid particles, from the sea floor to ships on the surface. The slurry is then ‘de-watered ’ and transferred to another vessel for shipping. Extracted seawater is pumped back down and discharged close to the sea floor.
                <br />
                <span className='font-blod text-2xl my-16'>D</span>
                <br />
                But environmental and legal groups have urged caution, arguing there are potentially massive and unknown ramifications for the environment and for nearby communities, and that the global regulatory framework is not yet drafted. ‘Despite arising in the last half century, the “new global gold rush” of deep-sea mining shares many features with past resource scrambles -including a general disregard for environmental and social impacts, and the marginalisation of indigenous peoples and their rights,a paper, written by Julie Hunter and Julian Aguon, from Blue Ocean Law,and Pradeep Singh, from the Center for Marine Environmental Sciences, Bremen, argues, ‘flic authors say that knowledge of the deep seabed remains extremely limited.‘The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail, leading marine scientists to commonly remark that, with respect to the deep sea, “We don’t yet know what we need to know”.
                <br />
                <span className='font-blod text-2xl my-16'>E</span>
                <br />
                Scientific research-including a recent paper in Marine Policy journal has suggested the deep seabed, and hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity and the global climate. The mineral-rich vents and their surrounds are also home to many well-known animals including crustaceans, tubeworms, clams, slugs, anemones and fish. ‘It is becoming increasingly clear that deep- sea mining poses a grave threat to these vital seabed functions,’ the paper says. ‘Extraction methods would produce large sediment plumes and involve the discharge of waste back into the ocean, significantly disturbing seafloor environments,’ the paper continues.‘On deep sea vents, scientists are clear,’ says Dr Jon Copley of the National Oceanography Centre, Southampton: ‘We don’t want mining on them.’
                <br />
                <span className='font-blod text-2xl my-16'>F</span>
                <br />
                Scientific research-including a recent paper in Marine Policy journal has suggested the deep seabed, and hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity and the global climate. The mineral-rich vents and their surrounds are also home to many well-known animals including crustaceans, tubeworms, clams, slugs, anemones and fish. ‘It is becoming increasingly clear that deep- sea mining poses a grave threat to these vital seabed functions,’ the paper says. ‘Extraction methods would produce large sediment plumes and involve the discharge of waste back into the ocean, significantly disturbing seafloor environments,’ the paper continues.‘On deep sea vents, scientists are clear,’ says Dr Jon Copley of the National Oceanography Centre, Southampton: ‘We don’t want mining on them.’
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
              <h1 className='font-bold text-xl'>Questions 14-17</h1>
              <br />
              Reading Passage has six paragraphs, A-F.
              <br />
              Which paragraph contains the following information?
              <br />
              Write the correct letter, A-F, in boxes on your answer sheet.
              <br />
              14. reference to the rapidly increasing need for one raw material in the transport industry <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

              <br />
              15. a rough estimate of the area of the Earth covered by the oceans <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

              <br />
              16. how a particular underwater habitat, where minerals and organisms co-exist, is formed <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

              <br />
              17. reference to the fact that the countries of the world have yet to agree on rules for the exploration of the seabed <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

              <br />
            </div>

            <div>

              <h1 className='font-bold text-xl'>Questions 18-23</h1>
              <br />
              Look at the following statements and the list of people below.         <br />

              Match each statement with the correct person or people, A-E.         <br />

              Write the correct letter, A-E, in boxes on your answer sheet.         <br />

              NB You may use any letter more than once.

              List of People         <br />

              A. Professor Mat Upton         <br />

              B. Julie Hunter, Julian Aguon and Pradeep Singh         <br />

              C. Dr Jon Copley         <br />

              D. Mike Johnston         <br />

              E. Verena Tunnicliffe         <br />


              18. A move away from the exploration of heavily mined reserves on land is a good idea.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br />
              19. The negative effects of undersea exploration on local areas and their inhabitants are being ignored.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br />
              20. There are more worthwhile things to extract from the sea than minerals.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br />
              21. No other form of human exploration will have such a destructive impact on marine life as deep-sea mining.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br />
              22. More is known about outer space than about what lies beneath the oceans.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br />
              23. There is one marine life habitat where experts agree mining should not take place.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br />


            </div>

            <div>
              <h1 className='font-bold text-xl'>Questions 24-26</h1>
              <br />
              Complete the summary below.
              <br />

              Choose ONE WORD ONLY from the passage for each answer.
              <br />

              Write your answers in boxes on your answer sheet.
              <br />

              Mining the sea floor
              <br />

              Mining corporations believe that the mineral resources lying under the sea may be superior to those found in the earth.
              <br />
              They also say that these can be removed without producing much <strong>24. </strong><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />


              The extraction is often done by adapting the <strong>25. </strong> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />


              that has already been used to work on land. The method of excavation involves removing the seawater from the slurry that
              is brought up to ships and returning it to the seabed. However, concerned groups strongly believe that <strong>26. </strong><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />


              is necessary due to the possible number of unidentified consequences.
            </div>


          </div>

        </div>
        <br /><br />

        <div className='flex gap-10 text-black  bg-gray-300 p-5'>
          <div className='w-2/4 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold">READING PASSAGE 3</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 1 below.
            </p>
            <h1 className="text-3xl font-bold my-5">The Unselfish Gene
            </h1>
            <p>
              A psychologist gives his view on how humans became self-centred

              There has long been a general assumption that human beings are essentially selfish. We’re apparently ruthless, with strong impulses to compete against each other for resources and to accumulate power and possessions. If we are kind to one another, it’s usually because we have ulterior motives. If we are good, it’s only because we have managed to control and transcend our innate selfishness and brutality.
            </p>

            <p className={isExpanded ? '' : ''}>
              This bleak view of human nature is closely associated with the science writer Richard Dawkins, whose 1976 book The Selfish Gene became popular because it fitted so well with-and helped to justify-the competitive and individualistic ethos that was so prevalent in late 20th-century societies. Like many others, Dawkins justifies his views with reference to the field of evolutionary psychology. Evolutionary psychology theorises that present-day human traits developed in prehistoric times, during what is termed the ‘environment of evolutionary adaptedness’.
            </p>

            {isExpanded && (
              <p> Prehistory is usually seen as a period of intense competition, when life was such a brutal battle that only those with traits such as selfishness, aggression and ruthlessness survived. And because survival depended on access to resources – such as rivers, forests and animals – there was bound to be conflict between rival groups, which led to the development of traits such as racism and warfare. This seems logical. But, in fact, the assumption on which this all rests – that prehistoric life was a desperate struggle for survival – is false.

                It’s important to remember that in the prehistoric era, the world was very sparsely populated. According to some estimates, around 15,000 years ago, the population of Europe was only 29,000, and the population of the whole world was less than half a million. Humans at that time were hunter-gatherers: people who lived by hunting wild animals and collecting wild plants. With such small population densities, it seems unlikely that prehistoric hunter-gatherer groups had to compete against each other for resources or had any need to develop ruthlessness and competitiveness, or to go to war.

                There is significant evidence to back this notion from contemporary hunter-gatherer groups, who live in the same way as prehistoric humans did. As the anthropologist Bruce Knauft has remarked, hunter-gatherers are characterized by ‘extreme political and sexual egalitarianism’. Knauft has observed that individuals in such groups don’t accumulate property or possessions and have an ethical obligation to share everything. They also have methods of preserving egalitarianism by ensuring that disparities of status don’t arise.

                The !Kung people of southern Africa, for example, swap arrows before going hunting and when an animal is killed, the acclaim does not go to the person who fired the arrow, but to the person the arrow belongs to. And if a person becomes too domineering, the other members of the group ostracise them, exiling the offender from society. Typically in such groups, men do not dictate what women do. Women in hunter-gatherer groups worldwide often benefit from a high level of autonomy, being able to select their own marriage partners, decide what work they do and work whenever they choose to. And if a marriage breaks down, they have custody rights over their children.

                Many anthropologists believe that societies such as the !Kung were normal until a few thousand years ago, when population growth led to the development of agriculture and a settled lifestyle. In view of the above, there seems little reason to assume that traits such as racism, warfare and male domination should have been selected by evolution-as they would have been of little benefit in the prehistoric era. Individuals who behaved selfishly and ruthlessly would be less likely to survive, since they would have been ostracised from their groups.

                It makes more sense, then, to see traits such as cooperation, egalitarianism, altruism and peacefulness as innate characteristics of human beings. These were the traits that were prevalent in human life for tens of thousands of years. So presumably these traits are still strong in us now.

                But if prehistoric life wasn’t really as brutal as has often been assumed, why do modern humans behave so selfishly and ruthlessly? Perhaps these negative traits should be seen as a later development, the result of environmental and psychological factors. Research has shown repeatedly that when the natural habitats of primates such as apes and gorillas are disrupted, they tend to become more violent and hierarchical.

                So, it could well be that the same thing has happened to us. I believe that the end of the hunter-gatherer lifestyle and the advent of farming was connected to a psychological change that occurred in some groups of people. There was a new sense of individuality and separateness, which led to a new selfishness, and ultimately to hierarchical societies, patriarchy and warfare. At any rate, these negative traits appear to have developed so recently that it doesn’t seem feasible to explain them in adaptive or evolutionary terms.
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
            <h1 className='font-bold text-xl'>Questions 27-30</h1>
            <br />
            Choose the correct letter, A, B, C or D.
            <br />
            Write the correct letter in boxes on your answer sheet.
            <br />
            <br />
            <div>
              <strong>27.</strong> What is the writer doing in the first paragraph?
              <br />
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>A.</strong> setting out two opposing views about human nature</span></div>
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>B.</strong> justifying his opinion about our tendency to be greedy</span></div>
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>C.</strong> describing a commonly held belief about people’s behaviour</span></div>
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>D.</strong> explaining why he thinks that humans act in a selfish manner</span></div>
            </div>
            <br />
            <div>
              <strong>28.</strong> What point is made about Richard Dawkins’ book The Selfish Gene?
              <br />
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>A.</strong> Its appeal lay in the radical nature of its ideas.</span></div>
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>B.</strong> Its success was due to the scientific support it offered.</span></div>
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>C.</strong> It presented a view that was in line with the attitudes of its time.</span></div>
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>D.</strong> It took an innovative approach to the analysis of human psychology.</span></div>
            </div>
            <br />
            <div>
              <strong>29.</strong> What does the writer suggest about the prehistoric era in the fourth paragraph?
              <br />
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>A.</strong> Societies were more complex than many people believe.</span></div>
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>B.</strong> Supplies of natural resources were probably relatively plentiful.</span></div>
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>C.</strong> Most estimates about population sizes are likely to be inaccurate.</span></div>
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>D.</strong> Humans moved across continents more than was previously thought.</span></div>
            </div>
            <br />
            <div>
              <strong>29.</strong> The writer refers to Bruce Knauft’s work as support for the idea that
              <br />
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>A.</strong> selfishness is a relatively recent development in human societies.</span></div>
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>B.</strong> only people in isolated communities can live in an unselfish manner.</span></div>
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>C.</strong> very few lifestyles have survived unchanged since prehistoric times.</span></div>
              <div className='flex items-center'><span><Checkbox></Checkbox></span><span><strong>D.</strong> hunter-gatherer cultures worldwide are declining in number.</span></div>
            </div>
            <br />

            <h1 className='font-bold text-xl'>Questions 31-35</h1>
            <br />
            Complete the summary below.
            <br />

            Choose ONE WORD ONLY from the passage for each answer.
            <br />

            Write your answers in boxes on your answer sheet.
            <br />

            Contemporary hunter-gatherer societies
            <br />

            Bruce Knauft’s research shows that contemporary hunter-gatherer societies tend to exhibit a high level of <strong>31.</strong> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
            <br />

            in all areas of life. In these cultures, distributing resources fairly among all members is a moral obligation. These societies also employ strategies to prevent differences in <strong>32.</strong> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
            <br />

            occurring: for example, the !Kung follow a custom whereby the credit for one person’s success at <strong>33.</strong> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
            <br />

            is given to another member of the group. Individuals who behave in a <strong>34.</strong> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
            <br />

            manner are punished by being excluded from the group, and women have a considerable amount of <strong>35.</strong><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

            in choices regarding work and marriage.
            <br />

            <h1 className='font-bold text-xl'>Questions 36-40</h1>
            <br />

            Do the following statements agree with the views of the writer in Reading Passage?
            <br />

            In boxes on your answer sheet, write
            <br />

            YES if the statement agrees with the views of the writer
            <br />

            NO if the statement contradicts the views of the writer
            <br />

            NOT GIVEN if it is impossible to say what the writer thinks about this
            <br />
            <br />
            <div>
              36. Some anthropologists are mistaken about the point when the number of societies such as the !Kung began to decline.
              <br />
              <div className='flex items-center gap-5'>
                <div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>
              <br />
            </div>

            <div>
            <strong>37.</strong>   Humans who developed warlike traits in prehistory would have had an advantage over those who did not.
              <br />
              <div className='flex items-center gap-5'>
                <div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>
              <br />
            </div>

            <div>
            <strong>38.</strong>   Being peaceful and cooperative is a natural way for people to behave.
              <br />
              <div className='flex items-center gap-5'>
                <div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>
              <br />
            </div>

            <div>
            <strong>39.</strong>   Negative traits are more apparent in some modern cultures than in others.
              <br />
              <div className='flex items-center gap-5'>
                <div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>
              <br />
            </div>

            <div>
              <strong>40.</strong>  Animal research has failed to reveal a link between changes in the environment and the emergence of aggressive tendencies.
              <br />
              <div className='flex items-center gap-5'>
                <div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>
              <br />
            </div>



          </div>
        </div>



      </div>
    </div>
  )
}
