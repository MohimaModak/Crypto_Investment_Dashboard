import React, { useState } from 'react'
import { Checkbox } from '@mui/material';

export default function ReadingTwo() {
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
                    <h1 className="text-3xl font-bold my-5">Bats to the rescue
                    </h1>
                    <p>
                        <br />
                        How Madagascar’s bats are helping to save the rainforest
                        <br />
                        There are few places in the world where relations between agriculture and conservation are more strained. Madagascar’s forests are being converted to agricultural land at a rate of one percent every year. Much of this destruction is fuelled by the cultivation of the country’s main staple crop: rice. And a key reason for this destruction is that insect pests are destroying vast quantities of what is grown by local subsistence farmers, leading them to clear forest to create new paddy fields. The result is devastating habitat and biodiversity loss on the island, but not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving and this has important implications for farmers and conservationists alike.
                    </p>

                    <p className={isExpanded ? '' : ''}>
                        Enter University of Cambridge zoologist Ricardo Rocha. He’s passionate about conservation, and bats. More specifically, he’s interested in how bats are responding to human activity and deforestation in particular. Rocha’s new study shows that several species of bats are giving Madagascar’s rice farmers a vital pest control service by feasting on plagues of insects. And this, he believes, can ease the financial pressure on farmers to turn forest into fields.

                        Bats comprise roughly one-fifth of all mammal species in Madagascar and thirty-six recorded bat species are native to the island, making it one of the most important regions for conservation of this animal group anywhere in the world.
                    </p>

                    {isExpanded && (
                        <p> Co-leading an international team of scientists, Rocha found that several species of indigenous bats are taking advantage of habitat modification to hunt insects swarming above the country’s rice fields. They include the Malagasy mouse-eared bat, Major’s long-fingered bat, the Malagasy white-bellied free-tailed bat and Peters’ wrinkle-lipped bat.


                            ‘These winner species are providing a valuable free service to Madagascar as biological pest suppressors,’ says Rocha. ‘We found that six species of bat are preying on rice pests, including the paddy swarming caterpillar and grass webworm. The damage which these insects cause puts the island’s farmers under huge financial pressure and that encourages deforestation.’

                            The study, now published in the journal Agriculture, Ecosystems and Environment, set out to investigate the feeding activity of insectivorous bats in the farmland bordering the Ranomafana National Park in the southeast of the country.

                            Rocha and his team used state-of-the-art ultrasonic recorders to record over a thousand bat ‘feeling buzzes’ (echolocation sequences used by bats to target their prey) at 54 sites, in order to identify the favourite feeding spots of the bats. The next used DNA barcoding techniques to analyse droppings collected from bats at the different sites.The recordings revealed that bat activity over rice fields was much higher than it was in continuous forest – seven times higher over rice fields which were on flat ground, and sixteen times higher over fields on the sides of hills – leaving no doubt that the animals are preferentially foraging in these man-made ecosystems. The researchers suggest that the bats favour these fields because lack of water and nutrient run-off make these crops more susceptible to insect pest infestations. DNA analysis showed that all six species of bat had fed on economically important insect pests. While the findings indicated that rice farming benefits most from the bats, the scientists also found indications that the bats were consuming pests of other crops, including the black twig borer (which infests coffee plants), the sugarcane cicada, the macadamia nut-borer, and the sober tabby (a pest of citrus fruits).


                            ‘The effectiveness of bats as pest controllers has already been proven in the USA and Catalonia,’ said co-author James Kemp, from the University of Lisbon. ‘But our study is the first to show this happening in Madagascar, where the stakes for both farmers and conservationists are so high.’

                            Local people may have a further reason to be grateful to their bats. While the animal is often associated with spreading disease, Rocha and his team found evidence that Malagasy bats feed not just on crop pests but also on mosquitoes – carriers of malaria, Rift Valley fever virus and elephantiasis – as well as blackflies, which spread river blindness.

                            Rocha points out that the relationship is complicated. When food is scarce, bats become a crucial source of protein for local people. Even the children will hunt them. And as well as roosting in trees, the bats sometimes roost in buildings, but are not welcomed there because they make them unclean. At the same time, however, they are associated with sacred caves and the ancestors, so they can be viewed as beings between worlds, which makes them very significant in the culture of the people. And one potential problem is that while these bats are benefiting from farming, at the same time deforestation is reducing the places where they can roost, which could have long-term effects on their numbers. Rocha says, ‘With the right help, we hope that farmers can promote this mutually beneficial relationship by installing bat houses.’Rocha and his colleagues believe that maximising bat populations can help to boost crop yields and promote sustainable livelihoods. The team is now calling for further research to quantify this contribution. ‘I’m very optimistic,’ says Rocha. ‘If we give nature a hand, we can speed up the process of regeneration.’


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
                        <h1 className='font-bold text-xl'>Part-1</h1>
                        <br /><br />
                        <h1 className='font-bold text-xl'>Questions 1-6</h1>
                        <br /><br />

                        Do the following statements agree with the information given in Reading Passage 1?
                        <br /><br />

                        In boxes 1-6 on your answer sheet, write
                        <br /><br />

                        TRUE  <br /><br />
                        if the statement agrees with the information

                        FALSE              if the statement contradicts the information
                        <br /><br />

                        NOT GIVEN    if there is no information on this
                        <br /><br />


                        1 . Many Madagascan forests are being destroyed by attacks from insects.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        2 . Loss of habitat has badly affected insectivorous bats in Madagascar.

                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        3 . Ricardo Rocha has carried out studies of bats in different parts of the world.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />

                        4 . Habitat modification has resulted in indigenous bats in Madagascar becoming useful to farmers.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        5 . The Malagasy mouse-eared bat is more common than other indigenous bat species in Madagascar.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        6 . Bats may feed on paddy swarming caterpillars and grass webworms.

                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />

                        Questions 7-13 <br /><br />

                        Complete the table below.
                        <br /><br />

                        Choose ONE WORD ONLY from the passage for each answer.
                        <br /><br />

                        Write your answers in boxes 7-13 on your answer sheet.
                        <br /><br />

                        The study carried out by Rocha’s team
                        Aim
                        <br /><br />

                        ●   to investigate the feeding habits of bats in farmland near the Ranomafana National Park

                        Method
                        <br /><br />

                        ●   ultrasonic recording to identify favourite feeding spots
                        <br /><br />

                        ●   DNA analysis of bat 7 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />


                        Findings
                        <br /><br />

                        ●   the bats
                        <br /><br />

                        –  were most active in rice fields located on hills
                        <br /><br />

                        –  ate pests of rice, 8 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        , sugarcane, nuts and fruit
                        <br /><br />

                        –  p<br /><br />
                        revent the spread of disease by eating 9 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        and blackflies

                        ●   local attitudes to bats are mixed:
                        <br /><br />

                        –  they provide food rich in 10 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

                        <br /><br />

                        –  the buildings where they roost become 11 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

                        <br /><br />

                        –  they play an important role in local 12 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />


                        Recommendation
                        <br /><br />

                        ●   farmers should provide special 13 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        to support the bat population

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
                    <h1 className="text-2xl font-bold my-5">Does education fuel economic growth?
                    </h1>
                    <p>
                        <br />
                        <span className='font-blod text-2xl my-16'>A</span>
                        <br />
                        Over the last decade, a huge database about the lives of southwest German villagers between 1600 and 1900 has been compiled by a team led by Professor Sheilagh Ogilvie at Cambridge University’s Faculty of Economics. It includes court records, guild ledgers, parish registers, village censuses, tax lists and – the most recent addition – 9,000 handwritten inventories listing over a million personal possessions belonging to ordinary women and men across three centuries. Ogilvie, who discovered the inventories in the archives of two German communities 30 years ago, believes they may hold the answer to a conundrum that has long puzzled economists: the lack of evidence for a causal link between education and a country’s economic growth.
                    </p>

                    <p className={isExpanded ? '' : ''}>
                        <span className='font-blod text-2xl my-16'>B</span>

                        <br />
                        As Ogilvie explains, ‘Education helps us to work more productively, invent better technology, and earn more … surely it must be critical for economic growth? But, if you look back through history, there’s no evidence that having a high literacy rate made a country industrialise earlier.’ Between 1600 and 1900, England had only mediocre literacy rates by European standards, yet its economy grew fast and it was the first country to industrialise. During this period, Germany and Scandinavia had excellent literacy rates, but their economies grew slowly and they industrialised late. ‘Modern cross-country analyses have also struggled to find evidence that education causes economic growth, even though there is plenty of evidence that growth increases education,’ she adds.
                    </p>

                    {isExpanded && (
                        <p>
                            <span className='font-blod text-2xl my-16'>C</span>
                            <br />
                            In the handwritten inventories that Ogilvie is analysing are the belongings of women and men at marriage, remarriage and death. From badger skins to Bibles, sewing machines to scarlet bodices – the villagers’ entire worldly goods are included. Inventories of agricultural equipment and craft tools reveal economic activities; ownership of books and education-related objects like pens and slates suggests how people learned. In addition, the tax lists included in the database record the value of farms, workshops, assets and debts; signatures and people’s estimates of their age indicate literacy and numeracy levels; and court records reveal obstacles (such as the activities of the guilds*) that stifled industry.

                            Previous studies usually had just one way of linking education with economic growth – the presence of schools and printing presses, perhaps, or school enrolment, or the ability to sign names. According to Ogilvie, the database provides multiple indicators for the same individuals, making it possible to analyse links between literacy, numeracy, wealth, and industriousness, for individual women and men over the long term.


                            <br />
                            <span className='font-blod text-2xl my-16'>D</span>
                            <br />
                            Ogilvie and her team have been building the vast database of material possessions on top of their full demographic reconstruction of the people who lived in these two German communities. ‘We can follow the same people – and their descendants – across 300 years of educational and economic change,’ she says. Individual lives have unfolded before their eyes. Stories like that of the 24-year-olds Ana Regina and Magdalena Riethmüllerin, who were chastised in 1707 for reading books in church instead of listening to the sermon. ‘This tells us they were continuing to develop their reading skills at least a decade after leaving school,’ explains Ogilvie. The database also reveals the case of Juliana Schweickherdt, a 50-year-old spinster living in the small Black Forest community of Wildberg, who was reprimanded in 1752 by the local weavers’ guild for ‘weaving cloth and combing wool, counter to the guide ordinance’. When Juliana continued taking jobs reserved for male guild members, she was summoned before the guild court and told to pay a fine equivalent to one third of a servant’s annual wage. It was a small act of defiance by today’s standards, but it reflects a time when laws in Germany and elsewhere regulated people’s access to labour markets. The dominance of guilds not only prevented people from using their skills, but also held back even the simplest industrial innovation.
                            <br />
                            <span className='font-blod text-2xl my-16'>E
                            </span>
                            <br />
                            The data-gathering phase of the project has been completed and now, according to Ogilvie, it is time ‘to ask the big questions’. One way to look at whether education causes economic growth is to ‘hold wealth constant’. This involves following the lives of different people with the same level of wealth over a period of time. If wealth is constant, it is possible to discover whether education was, for example, linked to the cultivation of new crops, or to the adoption of industrial innovations like sewing machines. The team will also ask what aspect of education helped people engage more with productive and innovative activities. Was it, for instance, literacy, numeracy, book ownership, years of schooling? Was there a threshold level – a tipping point – that needed to be reached to affect economic performance?
                            <br />
                            <span className='font-blod text-2xl my-16'>F</span>
                            <br />
                            Ogilvie hopes to start finding answers to these questions over the next few years. One thing is already clear, she says: the relationship between education and economic growth is far from straightforward. ‘German-speaking central Europe is an excellent laboratory for testing theories of economic growth,’ she explains. Between 1600 and 1900, literacy rates and book ownership were high and yet the region remained poor. It was also the case that local guilds and merchant associations were extremely powerful and legislated against anything that undermined their monopolies. In villages throughout the region, guilds blocked labour migration and resisted changes that might reduce their influence.

                            ‘Early findings suggest that the potential benefits of education for the economy can be held back by other barriers, and this has implications for today,’ says Ogilvie. ‘Huge amounts are spent improving education in developing countries, but this spending can fail to deliver economic growth if restrictions block people – especially women and the poor – from using their education in economically productive ways. If economic institutions are poorly set up, for instance, education can’t lead to growth.’
                            <br />
                            ——————–
                            <br />

                            * guild: an association of artisans or merchants which oversees the practice of their craft or trade in a particular area
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
                    <div>
                        <h1 className='font-bold text-xl'>Part-2</h1>
                        <br /><br />
                        <h1 className='font-bold text-xl'>Questions 14-18</h1>
                        <br /><br />

                        Reading Passage 2 has six paragraphs, A-F.
                        <br /><br />

                        Which section contains the following information?
                        <br /><br />

                        Write the correct letter, A-F, in boxes 14-18 on your answer sheet.
                        <br /><br />


                        14 .  an explanation of the need for research to focus on individuals with a fairly consistent income
                        <br />
                        <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        <br />
                        15 .  examples of the sources the database has been compiled from
                        <br />
                        <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        <br />
                        16 .  an account of one individual’s refusal to obey an order
                        <br />
                        <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        <br />
                        17  . a reference to a region being particularly suited to research into the link between education and economic growth
                        <br />
                        <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        <br />
                        18 .  examples of the items included in a list of personal possessions
                        <br />
                        <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        <br />

                        <h1 className='font-bold text-xl'>Questions 19-22</h1>
                        <br />

                        Complete the summary below.
                        <br />

                        Choose ONE WORD from the passage for each answer.
                        <br />

                        Write your answers in boxes 19-22 on your answer sheet.
                        <br />

                        Demographic reconstruction of two German communities
                        <br />

                        The database that Ogilvie and her team has compiled sheds light on the lives of a range of individuals, as well as those of their 19 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />, over a 300-year period. For example, Ana Regina and Magdalena Riethmüllerin were reprimanded for reading while they should have been paying attention to a 20 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> .

                        There was also Juliana Schweickherdt, who came to the notice of the weavers’ guild in the year 1752 for breaking guild rules. As a punishment, she was later given a 21 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> . Cases like this illustrate how the guilds could prevent 22 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> and stop skilled people from working


                        <br />
                        <br />

                        <h1 className='font-bold text-xl'>Questions 23 and 24</h1>
                        <br />
                        Choose TWO letters, A-E.
                        <br />                        <br />


                        Write the correct letters in boxes 23 and 24 on your answer sheet.
                        <br />                        <br />


                        Which TWO of the following statements does the writer make about literacy rates in Section B?
                        <br />                        <br />


                        <Checkbox></Checkbox>  A .  Very little research has been done into the link between high literacy rates and improved  earnings.
                        <br />

                        <Checkbox></Checkbox>  B .  Literacy rates in Germany between 1600 and 1900 were very good.
                        <br />

                        <Checkbox></Checkbox>  C  . There is strong evidence that high literacy rates in the modern world result in economic  growth.
                        <br />

                        <Checkbox></Checkbox>  D .  England is a good example of how high literacy rates helped a country industrialise.
                        <br />

                        <Checkbox></Checkbox>   E .  Economic growth can help to improve literacy rates.


                        <br />
                        <br />

                        Questions 25 and 26
                        <br />
                        <br />

                        Choose TWO letters, A-E.
                        <br />                        <br />


                        Write the correct letters in boxes 25 and 26 on your answer sheet.
                        <br />

                        Which TWO of the following statements does the writer make in Section F about guilds in
                        German-speaking Central Europe between 1600 and 1900?
                        <br /><br />


                        <Checkbox></Checkbox> A . They helped young people to learn a skill.
                        <br />
                        <Checkbox></Checkbox> B . They were opposed to people moving to an area for work.
                        <br />

                        <Checkbox></Checkbox> C . They kept better records than guilds in other parts of the world.
                        <br />

                        <Checkbox></Checkbox> D . They opposed practices that threatened their control over a trade.
                        <br />

                        <Checkbox></Checkbox> E . They predominantly consisted of wealthy merchants.
                        <br />

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
                    <h1 className="text-2xl font-bold my-5">Timur Gareyev – blindfold chess champion

                    </h1>
                    <p>
                        <br />
                        <span className='font-blod text-2xl my-16'>A</span>
                        <br />
                        Next month, a chess player named Timur Gareyev will take on nearly 50 opponents at once. But that is not the hard part. While his challengers will play the games as normal, Gareyev himself will be blindfolded. Even by world record standards, it sets a high bar for human performance. The 28-year-old already stands out in the rarefied world of blindfold chess. He has a fondness for bright clothes and unusual hairstyles, and he gets his kicks from the adventure sport of BASE jumping. He has already proved himself a strong chess player, too. In a 10-hour chess marathon in 2013, Gareyev played 33 games in his head simultaneously. He won 29 and lost none. The skill has become his brand: he calls himself the Blindfold King.


                    </p>

                    <p className={isExpanded ? '' : ''}>
                        <span className='font-blod text-2xl my-16'>B</span>

                        <br />
                        But Gareyev’s prowess has drawn interest from beyond the chess-playing community. In the hope of understanding how he and others like him can perform such mental feats, researchers at the University of California in Los Angeles (UCLA) called him in for tests. They now have their first results. ‘The ability to play a game of chess with your eyes closed is not a far reach for most accomplished player,’ said Jesse Rissman, who runs a memory lab at UCLA. ‘But the thing that’s so remarkable about Timur and a few other individuals is the number of games they can keep active at once. To me it is simply astonishing.’

                    </p>

                    {isExpanded && (
                        <p>
                            <span className='font-blod text-2xl my-16'>C</span>
                            <br />
                            Gareyev learned to play chess in his native Uzbekistan when he was six years old. Tutored by his grandfather, he entered his first tournament aged eight and soon became obsessed with competitions. At 16, he was crowned Asia’s youngest ever chess grandmaster. He moved to the US soon after, and as a student helped his university win its first national chess championship. In 2013, Gareyev was ranked the third best chess player in the US.



                            <br />
                            <span className='font-blod text-2xl my-16'>D</span>
                            <br />
                            To the uninitiated, blindfold chess seems to call for superhuman skill. But displays of the feat go back centuries. The first recorded game in Europe was played in 13th-century Florence. In 1947, the Argentinian grandmaster Miguel Najdorf played 45 simultaneous games in his mind, winning 39 in the 24-hour session.


                            <br />
                            <span className='font-blod text-2xl my-16'>To the uninitiated, blindfold chess seems to call for superhuman skill. But displays of the feat go back centuries. The first recorded game in Europe was played in 13th-century Florence. In 1947, the Argentinian grandmaster Miguel Najdorf played 45 simultaneous games in his mind, winning 39 in the 24-hour session.


                            </span>
                            <br />
                            <span className='font-blod text-2xl my-16'>F</span>
                            <br />
                            To the uninitiated, blindfold chess seems to call for superhuman skill. But displays of the feat go back centuries. The first recorded game in Europe was played in 13th-century Florence. In 1947, the Argentinian grandmaster Miguel Najdorf played 45 simultaneous games in his mind, winning 39 in the 24-hour session.


                            <br />
                            <br />
                            <span className='font-blod text-2xl my-16'>G</span>
                            <br />
                            To the uninitiated, blindfold chess seems to call for superhuman skill. But displays of the feat go back centuries. The first recorded game in Europe was played in 13th-century Florence. In 1947, the Argentinian grandmaster Miguel Najdorf played 45 simultaneous games in his mind, winning 39 in the 24-hour session.



                            <br />
                            <br />
                            <span className='font-blod text-2xl my-16'>G</span>
                            <br />
                            For the world record attempt, Gareyev hopes to play 47 blindfold games at once in about 16 hours. He will need to win 80% to claim the title. ‘I don’t worry too much about the winning percentage, that’s never been an issue for me,’ he said. ‘The most important part of blindfold chess for me is that I have found the one thing that I can fully dedicate myself to. I miss having an obsession.’


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
                    <div>
                        <h1 className='font-bold text-xl'>Part-3</h1>
                        <br /><br />
                        <h1 className='font-bold text-xl'>Questions 27-32</h1>
                        <br /><br />

                        Reading Passage 3 has eight paragraphs, A-H.
                        <br /><br />

                        Which paragraph contains the following information?
                        <br /><br />

                        Write the correct letter, A-H, in boxes 27-32 on your answer sheet.
                        <br /><br />

                        NB   You may use any letter more than once.
                        <br /><br />


                        <Checkbox></Checkbox> 27 . a reference to earlier examples of blindfold chess
                        <br /><br />

                        <Checkbox></Checkbox> 28 . an outline of what blindfold chess involves
                        <br /><br />

                        <Checkbox></Checkbox> 29 . a claim that Gareyev’s skill is limited to chess
                        <br /><br />

                        <Checkbox></Checkbox> 30 . why Gareyev’s skill is of interest to scientists
                        <br /><br />

                        <Checkbox></Checkbox> 31 . an outline of Gareyev’s priorities
                        <br /><br />

                        <Checkbox></Checkbox> 32 . a reason why the last part of a game may be difficult
                        <br /><br />



                        Questions 33-36
                        <br /><br />

                        Do the following statements agree with the information given in Reading Passage 3?
                        <br /><br />

                        In boxes 33-36 on your answer sheet, write
                        <br /><br />

                        TRUE               if the statement agrees with the information
                        <br /><br />

                        FALSE              if the statement contradicts the information
                        <br /><br />

                        NOT GIVEN    if there is no information on this

                        <br /><br />

                        33 . In the forthcoming games, all the participants will be blindfolded.
                        <br /><br />

                        34 . Gareyev has won competitions in BASE jumping.
                        <br /><br />

                        35 . UCLA is the first university to carry out research into blindfold chess players.
                        <br /><br />

                        36 . Good chess players are likely to be able to play blindfold chess.
                        <br /><br />



                        Questions 37-40
                        <br /><br />

                        Complete the summary below
                        <br /><br />

                        Choose ONE WORD ONLY from the passage for each answer.
                        <br /><br />

                        Write the correct letter in boxes 37-40 on your answer sheet.
                        <br /><br />

                        How the research was carried out
                        <br /><br />

                        The researchers started by testing Gareyev’s 37 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />; for example, he was required to recall a string of 38 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> in order and also in reverse order. Although his performance was normal, scans showed an unusual amount of 39 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> within the areas of Gareyev’s brain that are concerned with directing attention. In addition, the scans raised the possibility of unusual strength in the parts of his brain that deal with 40 <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> input.
                    </div>
                </div>
            </div>
        </div>
    )
}
