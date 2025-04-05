import { Checkbox } from '@mui/material';
import React, { useState } from 'react'

export default function ReadingTHree() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='bg-white text-black h-screen overflow-y-auto'>
            <div className='flex gap-10 text-black  bg-gray-300 p-5'>
                <div className='w-5/6 h-screen overflow-y-auto'>
                    <h1 className="text-4xl font-bold">READING PASSAGE 1</h1>
                    <p className="my-5">
                        You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 2 below.
                    </p>
                    <h1 className="text-3xl font-bold my-5">Why we need to protect polar bears
                    </h1>
                    <p>
                        <br />
                        Polar bears are being increasingly threatened by the effects of climate change, but their disappearance could have far-reaching consequences. They are uniquely adapted to the extreme conditions of the Arctic Circle, where temperatures can reach -40°C. One reason for this is that they have up to 11 centimetres of fat underneath their skin.
                        <br /><br /><br /><br />
                        Humans with comparative levels of adipose tissue would be considered obese and would be likely to suffer from diabetes and heart disease. Yet the polar bear experiences no such consequences.
                        <br />
                        A 2014 study by Shi Ping Liu and colleagues sheds light on this mystery. They compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears. This allowed them to determine the genes that have allowed polar bears to survive in one of the toughest environments on Earth.
                        <br /><br /><br /><br />
                        Liu and his colleagues found the polar bears had a gene known as APoB, which reduces levels of low-density lipoproteins (LDLs) – a form of ‘bad’ cholesterol. In humans, mutations of this gene are associated with increased risk of heart disease. Polar bears may therefore be an important study model to understand heart disease in humans.
                        <br /><br /><br /><br />
                    </p>

                    <p className={isExpanded ? '' : ''}>
                        The genome of the polar bear may also provide the solution for another condition, one that particularly affects our older generation: osteoporosis. This is a disease where bones show reduced density, usually caused by insufficient exercise, reduced calcium intake or food starvation. Bone tissue is constantly being remodelled, meaning that bone is added or removed, depending on nutrient availability and the stress that the bone is under.
                        <br /><br /><br /><br />
                        Female polar bears, however, undergo extreme conditions during every pregnancy. Once autumn comes around, these females will dig maternity dens in the snow and will remain there throughout the winter, both before and after the birth of their cubs.
                        <br /><br /><br /><br />
                        This process results in about six months of fasting, where the female bears have to keep themselves and their cubs alive, depleting their own calcium and calorie reserves. Despite this, their bones remain strong and dense.
                        <br /><br /><br /><br />
                    </p>

                    {isExpanded && (
                        <p>
                            Physiologists Alanda Lennox and Allen Goodship found an explanation for this paradox in 2008. They discovered that pregnant bears were able to increase the density of their bones before they started to build their dens. In addition, six months later, when they finally emerged from the den with their cubs, there was no evidence of significant loss of bone density. Hibernating brown bears do not have this capacity and must therefore resort to major bone reformation in the following spring. If the mechanism of bone remodelling in polar bears can be understood, many bedridden humans, and even astronauts, could potentially benefit.
                            <br /><br /><br /><br />
                            The medical benefits of the polar bear for humanity certainly have their importance in our conservation efforts, but these should not be the only factors taken into consideration. We tend to want to protect animals we think are intelligent and possess emotions, such as elephants and primates. Bears, on the other hand, seem to be perceived as stupid and in many cases violent. And yet anecdotal evidence from the field challenges those assumptions, suggesting for example that polar bears have good problem-solving abilities.
                            <br /><br /><br /><br />
                            A male bear called GoGo in Tennoji Zoo, Osaka, has even been observed making use of a tool to manipulate his environment. The bear used a tree branch on multiple occasions to dislodge a piece of meat hung out of his reach. Problem-solving ability has also been witnessed in wild polar bears, although not as obviously as with GoGo. A calculated move by a male bear involved running and jumping onto barrels in an attempt to get to a photographer standing on a platform four metres high.
                            <br /><br /><br /><br />
                            In other studies, such as one by Alison Ames in 2008, polar bears showed deliberate and focused manipulation. For example, Ames observed bears putting objects in piles and then knocking them over in what appeared to be a game. The study demonstrates that bears are capable of agile and thought-out behaviours. These examples suggest bears have greater creativity and problem-solving abilities than previously thought.
                            <br /><br /><br /><br />
                            As for emotions, while the evidence is once again anecdotal, many bears have been seen to hit out at ice and snow – seemingly out of frustration – when they have just missed out on a kill. Moreover, polar bears can form unusual relationships with other species, including playing with the dogs used to pull sleds in the Arctic. Remarkably, one hand-raised polar bear called Agee has formed a close relationship with her owner Mark Dumas to the point where they even swim together. This is even more astonishing since polar bears are known to actively hunt humans in the wild.
                            <br /><br /><br /><br />
                            If climate change were to lead to their extinction, this would mean not only the loss of potential breakthroughs in human medicine, but more importantly, the disappearance of an intelligent, majestic animal.
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
                        Questions 1-7
                        <br /><br />
                        Do the following statements agree with the information given in Reading Passage 1?
                        <br /><br />
                        In boxes 1-7 on your answer sheet, write
                        <br /><br />
                        TRUE               if the statement agrees with the information
                        <br /><br />
                        FALSE              if the statement contradicts the information
                        <br /><br />
                        NOT GIVEN    if there is no information on this
                        <br /><br />
                        1 . Polar bears suffer from various health problems due to the build-up of fat under their skin.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        2 . The study done by Liu and his colleagues compared different groups of polar bears.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        3 . Liu and colleagues were the first researchers to compare polar bears and brown bears genetically.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        4 . Polar bears are able to control their levels of ‘bad’ cholesterol by genetic means.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        5 . Female polar bears are able to survive for about six months without food.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        6 . It was found that the bones of female polar bears were very weak when they came out of their dens in spring.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        7 .  The polar bear’s mechanism for increasing bone density could also be used by people one day.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        Questions 8-13
                        <br /><br />
                        Complete the table below.
                        <br /><br />
                        Choose ONE WORD ONLY from the passage for each answer.
                        <br /><br />
                        Write your answers in boxes 8-13 on your answer sheet.
                        <br /><br />
                        Reasons why polar bears should be protected
                        <br /><br />
                        People think of bears as unintelligent and 8 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> .
                        <br /><br />
                        However, this may not be correct. For example:
                        <br /><br />
                        ●   In Tennoji Zoo, a bear has been seen using a branch as a 9 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> . This allowed him to knock down some 10 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> .
                        <br /><br />
                        ●   A wild polar bear worked out a method of reaching a platform where a 11 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> was located.
                        <br /><br />
                        ●   Polar bears have displayed behaviour such as conscious manipulation of objects and activity similar to a 12 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> .
                        <br /><br />
                        Bears may also display emotions. For example:
                        <br /><br />
                        ●   They may make movements suggesting 13 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> if disappointed when hunting.
                        <br /><br />
                        ●   They may form relationships with other species.
                        <br /><br />
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div className='flex gap-10 text-black  bg-gray-300 p-5'>
                <div className='w-5/6 h-screen overflow-y-auto'>
                    <h1 className="text-4xl font-bold my-5">READING PASSAGE 2</h1>
                    <p className="my-5">
                        You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 1 below.
                    </p>
                    <h1 className="text-2xl font-bold my-5">The Step Pyramid of Djoser
                    </h1>
                    <p>
                        <br />
                        <span className='font-blod text-2xl my-16'>A</span>
                        <br />
                        The pyramids are the most famous monuments of ancient Egypt and still hold enormous interest for people in the present day. These grand, impressive tributes to the memory of the Egyptian kings have become linked with the country even though other cultures,
                        <br /> such as the Chinese and Mayan, also built pyramids. The evolution of the pyramid form has been written and argued about for centuries. However, there is no question that, as far as Egypt is concerned, it began with one monument to one king designed by one brilliant architect: the Step Pyramid of Djoser at Saqqara.
                    </p>
                    <br /><br /><br />
                    <p className={isExpanded ? '' : ''}>
                        <span className='font-blod text-2xl my-16'>B</span>

                        <br />
                        Djoser was the first king of the Third Dynasty of Egypt and the first to build in stone. Prior to Djoser’s reign, tombs were rectangular monuments made of dried clay brick, which covered underground passages where the deceased person was buried. For reasons which remain unclear, Djoser’s main official, whose name was Imhotep,
                        <br /> conceived of building a taller, more impressive tomb for his king by stacking stone slabs on top of one another, progressively making them smaller, to form the shape now known as the Step Pyramid. Djoser is thought to have reigned for 19 years, but some historians and scholars attribute a much longer time for his rule, owing to the number and size of the monuments he built.
                    </p>
                    <br /><br /><br />

                    {isExpanded && (
                        <p>
                            <span className='font-blod text-2xl my-16'>C</span>
                            <br />
                            The Step Pyramid has been thoroughly examined and investigated over the last century, and it is now known that the building process went through many different stages. Historian Marc Van de Mieroop comments on this, writing ‘Much experimentation was involved, which is especially clear in the construction of the pyramid in the center of the complex.
                            <br /> It had several plans … before it became the first Step Pyramid in history, piling six levels on top of one another … The weight of the enormous mass was a challenge for the builders, who placed the stones at an inward incline in order to prevent the monument breaking up.’
                            <br /><br /><br /><br />

                            <span className='font-blod text-2xl my-16'>D</span>
                            <br />
                            When finally completed, the Step Pyramid rose 62 meters high and was the tallest structure of its time. The complex in which it was built was the size of a city in ancient Egypt and included a temple, courtyards, shrines, and living quarters for the priests. It covered a region of 16 hectares and was surrounded by a wall 10.5 meters high.
                            <br /> The wall had 13 false doors cut into it with only one true entrance cut into the south-east corner; the entire wall was then ringed by a trench 750 meters long and 40 meters wide. The false doors and the trench were incorporated into the complex to discourage unwanted visitors. If someone wished to enter, he or she would have needed to know in advance how to find the location of the true opening in the wall. Djoser was so proud of his accomplishment that he broke the tradition of having only his own name on the monument and had Imhotep’s name carved on it as well.
                            <br /><br /><br /><br />

                            <span className='font-blod text-2xl my-16'>E
                            </span>
                            <br />
                            The burial chamber of the tomb, where the king’s body was laid to rest, was dug beneath the base of the pyramid, surrounded by a vast maze of long tunnels that had rooms off them to discourage robbers. One of the most mysterious discoveries found inside the pyramid was a large number of stone vessels. Over 40,000 of these vessels, of various forms and shapes, were discovered in storerooms off the pyramid’s underground passages. <br /> They are inscribed with the names of rulers from the First and Second Dynasties of Egypt and made from different kinds of stone. There is no agreement among scholars and archaeologists on why the vessels were placed in the tomb of Djoser or what they were supposed to represent. The archaeologist Jean-Philippe Lauer, who excavated most of the pyramid and complex, believes they were originally stored and then give a ‘proper burial’ by Djoser in his pyramid to honor his predecessors. There are other historians, however, who claim the vessels were dumped into the shafts as yet another attempt to prevent grave robbers from getting to the king’s burial chamber.
                            <br /><br /><br /><br />

                            <span className='font-blod text-2xl my-16'>F</span>
                            <br />
                            Unfortunately, all of the precautions and intricate design of the underground network did not prevent ancient robbers from finding a way in. Djoser’s grave goods, and even his body, were stolen at some point in the past and all archaeologists found were a small number of his valuables overlooked by the thieves. There was enough left throughout the pyramid and its complex, however, to astonish and amaze the archaeologists who excavated it.
                            <br /><br /><br /><br />

                            <span className='font-blod text-2xl my-16'>G</span>

                            <br />

                            Egyptologist Miroslav Verner writes, ‘Few monuments hold a place in human history as significant as that of the Step Pyramid in Saqqara … It can be said without exaggeration that this pyramid complex constitutes a milestone in the evolution of monumental stone architecture in Egypt and in the world as a whole.’ The Step Pyramid was a revolutionary advance in architecture and became the archetype which all the other great pyramid builders of Egypt would follow.
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
                    Questions 14-20
                    <br /><br />

                    Reading Passage 2 has seven paragraphs, A-G.
                    <br /><br />

                    Choose the correct heading for each paragraph from the list of headings below.
                    <br /><br />

                    Write the correct number, i-ix, in boxes 14-20 on your answer sheet.
                    <br /><br />

                    List of Headings
                    <br /><br />

                    i    .The areas and artefacts within the pyramid itself
                    <br /><br />

                    ii   . A difficult task for those involved
                    <br /><br />

                    iii  .  A king who saved his people
                    <br /><br />

                    iv   . A single certainty among other less definite facts
                    <br /><br />

                    v    .An overview of the external buildings and areas
                    <br /><br />

                    vi   . A pyramid design that others copied
                    <br /><br />

                    vii  .  An idea for changing the design of burial structures
                    <br /><br />

                    viii .   An incredible experience despite the few remains
                    <br /><br />

                    ix   . The answers to some unexpected questions
                    <br /><br />

                    14 . Paragraph A
                    <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />
                    15 . Paragraph B
                    <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />
                    16 . Paragraph C
                    <br /><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />
                    17 . Paragraph D
                    <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />
                    18 . Paragraph E
                    <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />
                    19 . Paragraph F
                    <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />
                    20 . Paragraph G
                    <br />  <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                    <br /><br />

                    Questions 21-24

                    Complete the notes below.
                    <br /><br />

                    Choose ONE WORD ONLY from the passage for each answer.
                    <br /><br />

                    Write your answers in boxes 21-24 on your answer sheet.
                    <br /><br />

                    The Step Pyramid of Djoser
                    <br /><br />

                    The complex that includes the Step Pyramid and its surroundings is considered to be as big as an Egyptian 21 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />. of the past. The area outside the pyramid included accommodation that was occupied by 22 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />., along with many other buildings and features.
                    <br /><br />

                    A wall ran around the outside of the complex and a number of false entrances were built into this. In addition, a long 23 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />. encircled the wall. As a result, any visitors who had not been invited were cleverly prevented from entering the pyramid grounds unless they knew the 24 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />. of the real entrance.
                    <br /><br />
                    Questions 25-26
                    <br /><br />
                    Choose TWO letters, A-E.
                    <br /><br />
                    Write the correct letters in boxes 25 and 26 on your answer sheet.
                    <br /><br />
                    Which TWO of the following points does the writer make about King Djoser?
                    <br /><br />
                    <Checkbox></Checkbox> A . Initially he had to be persuaded to build in stone rather than clay.
                    <br /><br />
                    <Checkbox></Checkbox> B . There is disagreement concerning the length of his reign.
                    <br /><br />
                    <Checkbox></Checkbox> C . He failed to appreciate Imhotep’s part in the design of the Step Pyramid.
                    <br /><br />
                    <Checkbox></Checkbox> D . A few of his possessions were still in his tomb when archaeologists found it.
                    <br /><br />
                    <Checkbox></Checkbox> E . He criticised the design and construction of other pyramids in Egypt.
                    <br /><br />
                </div>
            </div>
            <br /><br /><br />
            <div className='flex gap-10 text-black  bg-gray-300 p-5'>
                <div className='w-5/6 h-screen overflow-y-auto'>
                    <h1 className="text-4xl font-bold">READING PASSAGE 1</h1>
                    <p className="my-5">
                        You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 2 below.
                    </p>
                    <h1 className="text-3xl font-bold my-5">The future of work
                    </h1>
                    <p>
                        <br />
                        According to a leading business consultancy, 3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation – or ‘embodied artificial intelligence’ (AI) – is one aspect of the disruptive effects of technology on the labour market. ‘Disembodied AI’, like the algorithms running in our smartphones, is another.
                        <br /><br /><br />
                        <br />
                    </p>

                    <p className={isExpanded ? '' : ''}>
                        Dr Stella Pachidi from Cambridge Judge Business School believes that some of the most fundamental changes are happening as a result of the ‘algorithmication’ of jobs that are dependent on data rather than on production – the so-called knowledge economy. Algorithms are capable of learning from data to undertake tasks that previously needed human judgement, such as reading legal contracts, analysing medical scans and gathering market intelligence.
                        <br /><br /><br /><br />
                    </p>

                    {isExpanded && (
                        <p>
                            ‘In many cases, they can outperform humans,’ says Pachidi. ‘Organisations are attracted to using algorithms because they want to make choices based on what they consider is “perfect information”, as well as to reduce costs and enhance productivity.’ <br /><br /><br /><br />
                            ‘But these enhancements are not without consequences,’ says Pachidi. ‘If routine cognitive tasks are taken over by AI, how do professions develop their future experts?’ she asks. ‘One way of learning about a job is “legitimate peripheral participation” – a novice stands next to experts and learns by observation. If this isn’t happening, then you need to find new ways to learn.’ <br /><br /><br /><br />
                            Another issue is the extent to which the technology influences or even controls the workforce. For over two years, Pachidi monitored a telecommunications company. ‘The way telecoms salespeople work is through personal and frequent contact with clients, using the benefit of experience to assess a situation and reach a decision. However, the company had started using a(n) … algorithm that defined when account managers should contact certain customers about which kinds of campaigns and what to offer them.’
                            <br /><br /><br /><br />
                            The algorithm – usually build by external designers – often becomes the keeper of knowledge, she explains. In cases like this, Pachidi believes, a short-sighted view begins to creep into working practices whereby workers learn through the ‘algorithm’s eyes’ and become dependent on its instructions. Alternative explorations – where experimentation and human instinct lead to progress and new ideas – are effectively discouraged.
                            <br /><br /><br /><br />
                            Pachidi and colleagues even observed people developing strategies to make the algorithm work to their own advantage. ‘We are seeing cases where workers feed the algorithm with false data to reach their targets,’ she reports.
                            <br /><br /><br /><br />
                            It’s scenarios like these that many researchers are working to avoid. Their objective is to make AI technologies more trustworthy and transparent, so that organisations and individuals understand how AI decisions are made. In the meantime, says Pachidi, ‘We need to make sure we fully understand the dilemmas that this new world raises regarding expertise, occupational boundaries and control.’
                            <br /><br /><br /><br />
                            Economist Professor Hamish Low believes that the future of work will involve major transitions across the whole life course for everyone: ‘The traditional trajectory of full-time education followed by full-time work followed by a pensioned retirement is a thing of the past,’ says Low. Instead, he envisages a multistage employment life: one where retraining happens across the life course, and where multiple jobs and no job happen by choice at different stages.
                            <br /><br /><br /><br />
                            On the subject of job losses, Low believes the predictions are founded on a fallacy: ‘It assumes that the number of jobs is fixed. If in 30 years, half of 100 jobs are being carried out by robots, that doesn’t mean we are left with just 50 jobs for humans. The number of jobs will increase: we would expect there to be 150 jobs.’
                            <br /><br /><br /><br />
                            Dr Ewan McGaughey, at Cambridge’s Centre for Business Research and King’s College London, agrees that ‘apocalyptic’ views about the future of work are misguided. ‘It’s the laws that restrict the supply of capital to the job market, not the advent of new technologies that causes unemployment.’
                            <br /><br /><br /><br />
                            His recently published research answers the question of whether automation, AI and robotics will mean a ‘jobless future’ by looking at the causes of unemployment. ‘History is clear that change can mean redundancies. But social policies can tackle this through retraining and redeployment.’
                            <br /><br /><br /><br />
                            He adds: ‘If there is going to be change to jobs as a result of AI and robotics then I’d like to see governments seizing the opportunity to improve policy to enforce good job security. We can “reprogramme” the law to prepare for a fairer future of work and leisure.’ McGaughey’s findings are a call to arms to leaders of organisations, governments and banks to pre-empt the coming changes with bold new policies that guarantee full employment, fair incomes and a thriving economic democracy.
                            <br /><br /><br /><br />
                            ‘The promises of these new technologies are astounding. They deliver humankind the capacity to live in a way that nobody could have once imagined,’ he adds. ‘Just as the industrial revolution brought people past subsistence agriculture, and the corporate revolution enabled mass production, a third revolution has been pronounced. But it will not only be one of technology. The next revolution will be social.’
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
                    <br />
                    Questions 27-30
                    <br /><br />
                    Choose the correct letter, A, B, C or D.
                    <br /><br />
                    Write the correct letter in boxes 27-30 on your answer sheet.
                    <br />
                    27.  The first paragraph tells us about
                    <br /><br /><br />
                    <Checkbox></Checkbox>  A . the kinds of jobs that will be most affected by the growth of AI.
                    <br /><br /><br />
                    <Checkbox></Checkbox>  B . the extent to which AI will after the nature of the work that people do.
                    <br /><br /><br />
                    <Checkbox></Checkbox>  C . the proportion of the world’s labour force who will have jobs in AI in the future.
                    <br /><br /><br />
                    <Checkbox></Checkbox>  D . the difference between ways that embodied and disembodied AI with impact on workers.
                    <br /><br /><br />
                    28.  According to the second paragraph, what is Stella Pachidi’s view of the ‘knowledge economy’?
                    <br /><br /><br />
                    <Checkbox></Checkbox> A . It is having an influence on the number of jobs available.
                    <br /><br /><br />
                    <Checkbox></Checkbox> B . It is changing people’s attitudes towards their occupations.
                    <br /><br /><br />
                    <Checkbox></Checkbox> C . It is the main reason why the production sector is declining.
                    <br /><br /><br />
                    <Checkbox></Checkbox> D . It is a key factor driving current developments in the workplace.
                    <br /><br /><br />
                    29.  What did Pachidi observe at the telecommunications company?
                    <br /><br /><br />
                    <Checkbox></Checkbox> A . staff disagreeing with the recommendations of AI
                    <br /><br /><br />
                    <Checkbox></Checkbox> B . staff feeling resentful about the intrusion of AI in their work
                    <br /><br /><br />
                    <Checkbox></Checkbox> C . staff making sure that AI produces the results that they want
                    <br /><br /><br />
                    <Checkbox></Checkbox> D . staff allowing AI to carry out tasks they ought to do themselves
                    <br /><br /><br />
                    30.  In his recently published research, Ewan McGaughey
                    <br /><br /><br />
                    <Checkbox></Checkbox> A . challenges the idea that redundancy is a negative thing.
                    <br /><br /><br />
                    <Checkbox></Checkbox> B . shows the profound effect of mass unemployment on society.
                    <br /><br /><br />
                    <Checkbox></Checkbox> C . highlights some differences between past and future job losses.
                    <br /><br /><br />
                    <Checkbox></Checkbox> D . illustrates how changes in the job market can be successfully handled.
                    <br /><br /><br />
                    Questions 31-34
                    <br /><br /><br />
                    Complete the summary using the list of words, A-G, below.
                    <br /><br /><br />
                    Write the correct letter, A-G, in boxes 31-34 on your answer sheet.
                    <br /><br /><br />
                    The ‘algorithmication’ of jobs
                    <br /><br /><br />
                    Stella Pachidi of Cambridge Judge Business School has been focusing on the ‘algorithmication’ of jobs which rely not on production but on 31 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> .
                    <br /><br /><br />
                    While monitoring a telecommunications company, Pachidi observed a growing 32 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> on the recommendations made by AI, as workers begin to learn through the ‘algorithm’s eyes’. Meanwhile, staff are deterred from experimenting and using their own 33 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />, and are therefore prevented from achieving innovation.
                    <br /><br /><br />
                    To avoid the kind of situations which Pachidi observed, researchers are trying to make AI’s decision-making process easier to comprehend, and to increase users’ 34 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> with regard to the technology.
                    <br /><br /><br />
                    A . pressure
                    <br /><br /><br />
                    B . satisfaction
                    <br /><br /><br />
                    C . intuition
                    <br />
                    D . promotion
                    <br /><br /><br />
                    E . reliance
                    <br /><br /><br />
                    F . confidence
                    <br /><br /><br />
                    G . information
                    <br /><br /><br />

                    Questions 35-40
                    <br /><br /><br />
                    Look at the following statements (Questions 35-40) and the list of people below.
                    <br /><br /><br />
                    Match each statement with the correct person, A, B or C.
                    <br /><br /><br />
                    Write the correct letter, A, B or C, in boxes 35-40 on your answer sheet.
                    <br /><br /><br />
                    NB   You may use any letter more than once.
                    <br /><br /><br />
                    35   Greater levels of automation will not result in lower employment.
                    <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> <br />
                    36   There are several reasons why AI is appealing to businesses.
                    <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> <br />
                    37   AI’s potential to transform people’s lives has parallels with major cultural shifts which occurred in previous eras.
                    <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> <br />
                    38   It is important to be aware of the range of problems that AI causes.
                    <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> <br />
                    39   People are going to follow a less conventional career path than in the past.
                    <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> <br />
                    40   Authorities should take measures to ensure that there will be adequately paid work for everyone

                    List of people
                    <br /> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> <br />
                    A  .  Stella Pachidi
                    <br /><br />
                    B  .  Hamish Low
                    <br /><br />
                    C  .  Ewan McGaughey
                    <br /><br />
                </div>
            </div>
        </div>
    )
}
