import { Checkbox } from '@mui/material';
import React, { useState } from 'react'

export default function AddDetailedTransactions() {
    const [isExpanded, setIsExpanded] = useState(false); // State to toggle the full text

    const toggleText = () => {
        setIsExpanded(!isExpanded); // Toggle the state
    };
    return (
        <div className="bg-white text-black h-screen overflow-y-auto">
            <div className='flex gap-10 text-black  bg-gradient-to-bl from-slate-400 to-slate-100 p-5'>
                <div className='w-2/4 h-screen overflow-y-auto'>
                    <h1 className="text-4xl font-bold">READING PASSAGE 1</h1>
                    <p className="my-5">
                        You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.
                    </p>
                    <h1 className="text-3xl font-bold my-5">Archaeologists discover evidence of prehistoric island settlers
                    </h1>
                    <p>
                        In early April 2019, Dr Ceri Shipton and his colleagues from Australian National University became the first archaeologists to explore Obi, one of many tropical islands in Indonesia’s Maluku Utara province. The research team’s discoveries suggest that the prehistoric people who lived on Obi were adept on both land and sea, hunting in the dense rainforest, foraging on the seashore, and possibly even voyaging between islands.
                    </p>

                    <p className={isExpanded ? '' : ''}>
                        The excavations were part of a project to learn more about how people first dispersed from mainland Asia, through the Indonesian archipelago and into the prehistoric continent that once connected Australia and New Guinea. The team’s earlier research suggested that the northernmost islands in the group, known as the Wallacean islands,including Obi, would have offered the easiest migration route. It also seemed likely that these islands were crucial ‘stepping stones’ on humans’ island-hopping voyages through this region millennia ago. But to support this idea, they needed archaeological evidence for humans living in this remote area in the ancient past. So, they travelled to Obi to look for sites that might reveal evidence of early occupation.
                    </p>

                    {isExpanded && (
                        <p>Just inland from the village of Kelo on Obi’s northern coast, Shipton and his colleagues found two caves containing prehistoric rock shelters that were suitable for excavation. With the permission and help of the local people of Kelo, they dug a small test excavation in each shelter. There they found numerous artefacts, including fragments of axes, some dating to about 14,000 years ago. The earliest axes at Kelo were made using clam shells. Axes made from clam shells from roughly the same time had also previously been found elsewhere in this region, including on the nearby island of Gebe to the northeast. As on Gebe, it is highly likely that Obi’s axes were used in the construction of canoes, thus allowing these early peoples to maintain connections between communities on neighbouring islands.

                            The oldest cultural layers from the Kelo site provided the team with the earliest record for human occupation on Obi, dating back around 18,000 years. At this time the climate was drier and colder than today, and the island’s dense rainforests would likely have been much less impenetrable than they are now. Sea levels were about 120 metres lower, meaning Obi was a much larger island, encompassing what is today the separate island of Bisa, as well as several other small islands nearby.

                            Roughly 11,700 years ago, as the most recent ice age ended, the climate became significantly warmer and wetter, no doubt making Obi’s jungle much thicker. According to the researchers, it is no coincidence that around this time the first axes crafted from stone rather than sea shells appear, likely in response to their heavy-duty use for clearing and modification of the increasingly dense rainforest. While stone takes about twice as long to grind into an axe compared to shell, the harder material keeps its sharp edge for longer.

                            Judging by the bones which the researchers unearthed in the Kelo caves, people living there mainly hunted the Rothschild’s cuscus, a possum-like creature that still lives on Obi today. As the forest grew more dense, people probably used axes to clear patches of forest and make hunting easier. Shipton’s team’s excavation of the shelters at the Kelo site unearthed a volcanic glass substance called obsidian, which must have been brought over from another island, as there is no known source on Obi. It also revealed particular types of beads, similar to those previously found on islands in southern Wallacea. These finds again support the idea that Obi islanders routinely travelled to other islands.

                            The excavations suggest people successfully lived in the two Kelo shelters for about 10,000 years. But then, about 8,000 years ago, both were abandoned. Did the residents leave Obi completely, or move elsewhere on the island? Perhaps the jungle had grown so thick that axes were no longer a match for the dense undergrowth. Perhaps people simply moved to the coast and turned to fishing rather than hunting as a means of survival.

                            Whatever the reason for the departure, there is no evidence for use of the Kelo shelters after this time, until about 1,000 years ago, when they were re-occupied by people who owned pottery as well as items made out of gold and silver. It seems likely, in view of Obi’s location, that this final phase of occupation also saw the Kelo shelters used by people involved in the historic trade in spices between the Maluku islands and the rest of the world.
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
                        <h1 className='font-bold text-2xl'>Questions 1-7</h1>
                        <br /><br />
                        Do the following statements agree with the claims of the writer in Reading Passage?
                        <br /><br />

                        In boxes on your answer sheet, write
                        <br /><br />


                        TRUE  if the statement agrees with the information
                        <br /><br />

                        FALSE if the statement contradicts the information
                        <br /><br />

                        NOT GIVEN if there is no information on this
                        <br /><br />

                        <strong>1.</strong>Archaeological research had taken place on the island of Obi before the arrival of Ceri Shipton and his colleagues.
                        <br /><br />

                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        <strong>2.</strong> At the Kelo sites, the researchers found the first clam shell axes ever to be discovered in the region.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        <strong>3.</strong> The size of Obi today is less than it was 18,000 years ago.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        <strong>4.</strong> A change in the climate around 11,700 years ago had a greater impact on Obi than on the surrounding islands.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        <strong>5.</strong> The researchers believe there is a connection between warmer, wetter weather and a change in the material used to make axes.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        <strong>6.</strong> Shipton's team were surprised to find evidence of the Obi islanders’ hunting practices.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                        <strong>7.</strong> It is thought that the Kelo shelters were occupied continuously until about 1,000 years ago.
                        <br />
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                        <br />
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>Questions 8-13</h1>
                        <br /><br />
                        Complete the notes below.
                        <br /><br />
                        Choose ONE WORD ONLY from the passage for each answer.
                        <br /><br />

                        Write your answers in boxes on your answer sheet.
                        <br /><br />

                        Archaeological findings on Obi
                        <br /><br />

                        Excavations of rock shelters inside <strong>8.</strong><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        near the village of Kelo revealed:

                        – axes from around 14,000 years ago, probably used to make canoes

                        – axes made out of <strong>9.</strong> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        , dating from around 11,700 years ago

                        –  <strong>10.</strong> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        of an animal: evidence of what ancient islanders ate

                        – evidence of travel between islands:

                        + obsidian: a material that is not found naturally on Obi

                        + <strong>11. </strong><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        which resembled ones found on other islands.

                        It is thought that from 8,000 years ago, Obi islanders:

                        – may have switched from hunting to fishing

                        – had <strong>12. </strong><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                        as well as items made out of metal

                        – probably took part in the production and sale of <strong>13.</strong> <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                    </div>
                </div>
            </div>
            <br />
            <br />

            <div className='flex gap-10 text-black  bg-gradient-to-bl from-slate-400 to-slate-100 p-5'>
                <div className='w-2/4 h-screen overflow-y-auto'>
                    <h1 className="text-4xl font-bold my-5">READING PASSAGE 2</h1>
                    <p className="my-5">
                        You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 1 below.
                    </p>
                    <h1 className="text-3xl font-bold my-5">The global importance of wetlands
                    </h1>

                    <p>
                        <br />
                        <span className='font-blod text-2xl my-16'>A</span>
                        <br />
                        Wetlands are areas where water covers the soil, or is present either at or near the surface of the soil, for all or part of the year. These are complex ecosystems, rich in unique plant and animal life. But according to the World Wide Fund for Nature (WWFN), half of the world’s wetlands have disappeared since 1990 – converted or destroyed for commercial development, drainage schemes and the extraction of minerals and peat. Many of those that remain have been damaged by agricultural pesticides and fertilizers, industrial pollutants, and construction works.
                    </p>

                    <p className={isExpanded ? '' : ''}>
                        <span className='font-blod text-2xl my-16'>B</span>

                        <br />
                        Wetlands are areas where water covers the soil, or is present either at or near the surface of the soil, for all or part of the year. These are complex ecosystems, rich in unique plant and animal life. But according to the World Wide Fund for Nature (WWFN), half of the world’s wetlands have disappeared since 1990 – converted or destroyed for commercial development, drainage schemes and the extraction of minerals and peat. Many of those that remain have been damaged by agricultural pesticides and fertilizers, industrial pollutants, and construction works.
                        <br />
                    </p>

                    {isExpanded && (
                        <p>
                            <span className='font-blod text-2xl my-16'>C</span>
                            <br />
                            They also serve a crucial environmental purpose. ‘Wetlands are one of the key tools in mitigating climate change across the planet,’ says Pieter van Eijk, head of Climate Adaptation at Wetlands International (WI), pointing to their use as buffers that protect coastal areas from sea-level rise and extreme weather events such as hurricanes and flooding. Wetland coastal forests provide food and water, as well as shelter from storms, and WI and other agencies are working to restore those forests which have been lost. ‘It can be as simple as planting a few trees per hectare to create shade and substantially change a microclimate,’ he says. ‘Implementing climate change projects isn’t so much about money.’
                            <br />
                            <span className='font-blod text-2xl my-16'>D</span>
                            <br />
                            The world’s wetlands are, unfortunately, rich sources for in-demand commodities, such as palm oil and pulpwood. Peatlands – wetlands with a waterlogged organic soil layer – are particularly targeted. When peatlands are drained for cultivation, they become net carbon emitters instead of active carbon stores, and, according to Marcel Silvius, head of Climate-smart Land-use at WI, this practice causes six per cent of all global carbon emissions. The clearance of peatlands for planting also increases the risk of forest fires, which release huge amounts of CO₂. ‘We’re seeing huge peatland forests with extremely high biodiversity value being lost for a few decades of oil palm revenues,’ says Silvius.
                            <br />
                            <span className='font-blod text-2xl my-16'>E</span>
                            <br />
                            The damage starts when logging companies arrive to clear the trees. They dig ditches to enter the peat swamps by boat and then float the logs out the same way. These are then used to drain water out of the peatlands to allow for the planting of corn, oil palms or pulpwood trees. Once the water has drained away, bacteria and fungi then break down the carbon in the peat and turn it into CO₂ and methane. Meanwhile, the remainder of the solid matter in the peat starts to move downwards, in a process known as subsidence. Peat comprises 90 per cent water, so this is one of the most alarming consequences of peatland clearances. ‘In the tropics, peat subsides at about four centimetres a year, so within half a century, very large landscapes on Sumatra and Borneo will become flooded as the peat drops below water level,’ says Silvius. ‘It’s a huge catastrophe that’s in preparation. Some provinces will lose 40 per cent of their landmass.’
                            <br />
                            <span className='font-blod text-2xl my-16'>F</span>
                            <br />
                            And while these industries affect wetlands in ways that can easily be documented, Dr Dave Tickner of the WWFN believes that more subtle impacts can be even more devastating. ‘Sediment run-off and fertilizers can be pretty invisible,’ says Tickner. ‘Over-extraction of water is equally invisible. You do get shock stories about rivers running red, or even catching fire, but there’s seldom one big impact that really hurts a wetland.’ Tickner does not blame anyone for deliberate damage, however. ‘I’ve worked on wetland issues for 20 years and have never met anybody who wanted to damage a wetland,’ he says. ‘It isn’t something that people generally set out to do. Quite often, the effects simply come from people trying to make a living.’
                            <br />
                            <span className='font-blod text-2xl my-16'>G</span>
                            <br />
                            Silvius also acknowledges the importance of income generation. ‘It’s not that we just want to restore the biodiversity of wetlands – which we do – but we recognise there’s a need to provide an income for local people.’ This approach is supported by IWMI. ‘The idea is that people in a developing country will only protect wetlands if they value and profit from them,’ says McCartney. ‘For sustainability, it’s essential that local people are involved in wetland planning and decision making and have clear rights to use wetlands.’
                            <br />
                            <span className='font-blod text-2xl my-16'>H</span>
                            <br />
                            The fortunes of wetlands would be improved, Silvius suggests, if more governments recognized their long-term value. ‘Different governments have different attitudes,’ he says, and goes on to explain that some countries place a high priority on restoring wetlands, while others still deny the issue. McCartney is cautiously optimistic, however. ‘Awareness of the importance of wetlands is growing,’ he says. ‘It’s true that wetland degradation still continues at a rapid pace, but my impression is that things are slowly changing.’
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
                    <h1 className='font-bold text-2xl'>Questions 14-17</h1>
                    <br /><br />
                    Which paragraph contains the following information?
                    <br /><br />

                    Write the correct letter, A-H, in boxes on your answer sheet.
                    <br /><br />

                    <strong>14</strong> reference to the need to ensure that inhabitants of wetland regions continue to benefit from them <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                    <br />
                    <strong>15</strong> the proportion of wetlands which have already been lost <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> <br />
                    <strong>16</strong> reference to the idea that people are beginning to appreciate the value of wetlands <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> <br />
                    <strong>17</strong> mention of the cultural significance of wetlands <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />




                    <h1 className='font-bold text-2xl'>Questions 18-22</h1>
                    <br />
                    Complete the sentences below.
                    <br />
                    Choose ONE WORD ONLY from the passage for each answer.
                    <br />
                    Write your answers in boxes on your answer sheet.
                    <br />
                    Peatlands which have been drained begin to release <strong>18.</strong><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                    <br />
                    instead of storing it.
                    <br />
                    Once peatland areas have been cleared, <strong>19.</strong><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                    <br />
                    are more likely to occur.
                    <br />
                    Clearing peatland forests to make way for oil palm plantations destroys the <strong>20.</strong><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                    of the local environment.
                    <br />
                    Water is drained out of peatlands through the <strong>21.</strong><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                    <br />
                    which are created by logging companies.
                    <br />
                    Draining peatlands leads to <strong>22.</strong><input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                    : a serious problem which can eventually result in coastal flooding and land loss.
                    <br />


                    <h1 className='font-bold text-2xl'>Questions 23-26</h1>
                    <br />
                    Look at the following statements and the list of experts below.
                    <br />

                    Match each statement with the correct expert, A-D.
                    <br />

                    Write the correct letter, A-D, in boxes on your answer sheet.
                    <br />

                    List of Experts
                    <br />

                    A. Matthew McCartney
                    <br />

                    B. Pieter van Eijk
                    <br />

                    C. Marcel Silvius
                    <br />

                    D. Dave Tickner
                    <br />


                    23. Communities living in wetland regions must be included in discussions about the future of these areas <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                    <br />

                    24. Official policies towards wetlands vary from one nation to the next <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                    <br />

                    25. People cause harm to wetlands without having any intention to do so <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                    <br />

                    26. Initiatives to reverse environmental damage need not be complex. <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
                    <br />
                </div>
            </div>
            <br />
            <br />

            <div className='flex gap-10 text-black  bg-gradient-to-bl from-slate-400 to-slate-100 p-5'>
                <div className='w-2/4 h-screen overflow-y-auto'>
                    <h1 className="text-4xl font-bold">READING PASSAGE 3</h1>
                    <p className="my-5">
                        You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 1 below.
                    </p>
                    <h1 className="text-3xl font-bold my-5">Is the era of artificial speech translation upon us?
                    </h1>
                    <p>
                        Once the stuff of science fiction, technology that enables people to talk using different languages is now here. But how effective is it?
                        Noise, Alex Waibel tells me, is one of the major challenges that artificial speech translation has to meet.
                    </p>

                    <p className={isExpanded ? '' : ''}>
                        A device may be able to recognize speech in a laboratory, or a meeting room, but will struggle to cope with the kind of background noise I can hear in my office surrounding Professor Waibel as he speaks to me from Kyoto station in Japan.
                    </p>

                    {isExpanded && (
                        <p>I’m struggling to follow him in English, on a scratchy line that reminds me we are nearly 10,000 kilometers apart-and that distance is still an obstacle to communication even if you’re speaking the same language, as we are. We haven’t reached the future yet. If we had, Waibel would have been able to speak more comfortably in his native German and I would have been able to hear his words in English.

                            At Karlsruhe Institute of Technology, where he is a professor of computer science, Waibel and his colleagues already give lectures in German that their students can follow in English via an electronic translator. The system generates text that students can read on their laptops or phones, so the process is somewhat similar to subtitling. It helps that lecturers speak clearly, don’t have to compete with background chatter, and say much the same thing each year.

                            The idea of artificial speech translation has been around for a long time. Douglas Adams’ science fiction novel, The Hitchhiker’s Guide to the Galaxy, published in 1979, featured a life form called the ‘Babel fish’ which, when placed in the ear, enabled a listener to understand any language in the universe. It came to represent one of those devices that technology enthusiasts dream of long before they become practically realizable, like TVs flat enough to hang on walls: objects that we once could only dream of having but that are now commonplace. Now devices that look like prototype Babel fish have started to appear, riding a wave of advances in artificial translation and voice recognition.

                            At this stage, however, they seem to be regarded as eye-catching novelties rather than steps towards what Waibel calls ‘making a language-transparent society.’ They tend to be domestic devices or applications suitable for hotel check-ins, for example, providing a practical alternative to speaking traveler’s English. The efficiency of the translator is less important than the social function. However, ‘Professionals are less inclined to be patient in a conversation,’ founder and CEO at Waverly Labs, Andrew Ochoa, observes. To redress this, Waverly is now preparing a new model for professional applications, which entails performance improvements in speech recognition, translation accuracy and the time it takes to deliver the translated speech.

                            For a conversation, both speakers need to have devices called Pilots (translator earpieces) in their ears. ‘We find that there’s a barrier with sharing one of the earphones with a stranger,’ says Ochoa. That can’t have been totally unexpected. The problem would be solved if earpiece translators became sufficiently prevalent that strangers would be likely to already have their own in their ears. Whether that happens, and how quickly, will probably depend not so much on the earpieces themselves, but on the prevalence of voice-controlled devices and artificial translation in general.

                            Waibel highlights the significance of certain Asian nations, noting that voice translation has really taken off in countries such as Japan with a range of systems. There is still a long way to go, though. A translation system needs to be simultaneous, like the translator’s voice speaking over the foreign politician being interviewed on the TV, rather than in sections that oblige speakers to pause after every few remarks and wait for the translation to be delivered. It needs to work offline, for situations where internet access isn’t possible, and to address apprehensions about the amount of private speech data accumulating in the cloud, having been sent to servers for processing.

                            Systems not only need to cope with physical challenges such as noise, they will also need to be socially aware by addressing people in the right way. Some cultural traditions demand solemn respect for academic status, for example, and it is only polite to respect this. Etiquette-sensitive artificial translators could relieve people of the need to know these differing cultural norms. At the same time, they might help to preserve local customs, slowing the spread of habits associated with international English, such as its readiness to get on first-name terms.

                            Professors and other professionals will not outsource language awareness to software, though. If the technology matures into seamless, ubiquitous artificial speech translation, it will actually add value to language skills. Whether it will help people conduct their family lives or relationships is open to question-though one noteworthy possibility is that it could overcome the language barriers that often arise between generations after migration, leaving children and their grandparents without a shared language.

                            Whatever uses it is put to, though, it will never be as good as the real thing. Even if voice-morphing technology simulates the speaker’s voice, their lip movements won’t match, and they will look like they are in a dubbed movie. The contrast will underline the value of shared languages, and the value of learning them. Sharing a language can promote a sense of belonging and community, as with the international scientists who use English as a lingua franca, where their predecessors used Latin. Though the practical need for a common language will diminish, the social value of sharing one will persist. And software will never be a substitute for the subtle but vital understanding that comes with knowledge of a language.
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
                        <h1 className='font-bold text-2xl'>Questions 27-30
                        </h1>
<br />
                        27. What does the reader learn about the conversation in the first paragraph?
                        <br />
                      <span><Checkbox></Checkbox></span> <span> A
                        .The speakers are communicating in different languages.</span>
                        <br />

                        <Checkbox></Checkbox>   B.
                        Neither of the speakers is familiar with their environment.
                        <br />

                        <Checkbox></Checkbox>     C.
                        The topic of the conversation is difficult for both speakers.
                        <br />

                        <Checkbox></Checkbox>     D.
                        Aspects of the conversation are challenging for both speakers.
                        <br />

                        28 What assists the electronic translator during lectures at Karlsruhe Institute of Technology?
                        <br />
                        <Checkbox></Checkbox>  A.
                        the repeated content of lectures
                        <br />
                        <Checkbox></Checkbox>   B.
                        the students’ reading skills
                        <br />
                        <Checkbox></Checkbox>   C.
                        the languages used
                        <br />
                        <Checkbox></Checkbox>   D.
                        the lecturers’ technical ability
                        <br />
                        29. When referring to The Hitchhiker's Guide to the Galaxy, the writer suggests that
                      <br /> 
                      <Checkbox></Checkbox> A.
                        the Babel fish was considered undesirable at the time.
                        <br /> 
                        <Checkbox></Checkbox>   B.
                        this book was not seriously intending to predict the future.
                        <br /> 
                        <Checkbox></Checkbox>   C.
                        artificial speech translation was not a surprising development.
                        <br /> 
                        <Checkbox></Checkbox>    D.
                        some speech translation techniques are better than others.
                        <br /> 
                        30. What does the writer say about sharing earpieces?
                        <br /> 
                        <Checkbox></Checkbox>     A

                        It is something people will get used to doing.
                        <br /> 
                        <Checkbox></Checkbox>       B

                        The reluctance to do this is understandable.
                        <br /> 
                        <Checkbox></Checkbox>      C

                        The equipment will be unnecessary in the future.
                        <br /> 
                        <Checkbox></Checkbox>      D

                        It is something few people need to worry about.
                     <h1 className='font-bold text-2xl'> Questions 31-34</h1>  
                        Complete each sentence with the correct ending, A-F, below.
                        <br />

                        Write the correct letter, A-F, in boxes on your answer sheet.
                        <br />

                        A. but there are concerns about this
                        <br />

                        B. as systems do not need to conform to standard practices.
                        <br />

                        C. but they are far from perfect.
                        <br />

                        D. despite the noise issues
                        <br />

                        E. because translation is immediate.
                        <br />

                        F. and have an awareness of good manners.
                        <br />

                        31.
                        Speech translation methods are developing fast in Japan <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

                        <br />

                        32. TV interviews that use translation voiceover methods are successful <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

                        <br />

                        33. Future translation systems should address people appropriately <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

                        <br />

                        34. Users may be able to maintain their local customs <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

                        <br />
<br />
                     <h1 className='font-blod text-2xl'>Questions 35-40</h1>   
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
                     <strong>35.</strong> Language translation systems will be seen as very useful throughout the academic and professional worlds.
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                       <strong>36.</strong> The overall value of automated translation to family life is yet to be shown.
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                     <strong>37. </strong> Automated translation could make life more difficult for immigrant families.
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                      <strong>38. </strong> Visual aspects of language translation are being considered by scientists.
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                       <strong>39.</strong> International scientists have found English easier to translate into other languages than Latin.
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
                       <strong>40.</strong> As far as language is concerned, there is a difference between people’s social and practical needs.
                        <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                            <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>

                    </div>
                
                    <div>

                    </div>
                </div>
            </div>

        </div>
    )
}
