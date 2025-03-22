import { Checkbox } from '@mui/material';
import React, { useState } from 'react'

export default function RiskAssessment() {

  const [isExpanded, setIsExpanded] = useState(false); // State to toggle the full text

  const toggleText = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };

  return (
    <div className="bg-white text-black h-screen overflow-y-auto">
      <div className='p-5'>
        <div className='flex gap-10 text-black  bg-gray-300 p-5'>
          <div className='w-2/4 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold my-5">READING PASSAGE 1</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 1 below.
            </p>
            <h1 className="text-3xl font-bold my-5">Green roofs
            </h1>

            <p>
              <br />
              <span className='font-blod text-2xl my-16'>A</span>
              <br />
              Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world. More and more private companies and city authorities are investing in green roofs, drawn to their wide-ranging benefits. Among the benefits are saving on energy costs, mitigating the risk of floods, making habitats for urban wildlife, tackling air pollution and even growing food. These increasingly radical urban designs can help cities adapt to the monumental problems they face, such as access to resources and a lack of green space due to development. But the involvement of city authorities, businesses and other institutions is crucial to ensuring their success – as is research investigating different options to suit the variety of rooftop spaces found in cities. The UK is relatively new to developing green roofs, and local governments and institutions are playing a major role in spreading the practice. London is home to much of the UK’s green roof market, mainly due to forward-thinking policies such as the London Plan, which has paved the way to more than doubling the area of green roofs in the capital.
            </p>

            <p className={isExpanded ? '' : ''}>
              <span className='font-blod text-2xl my-16'>B</span>

              <br />
              Ongoing research is showcasing how green roofs in cities can integrate with ‘living walls’: environmentally friendly walls which are partially or completely covered with greenery, including a growing medium, such as soil or water. Research also indicates that green roofs can be integrated with drainage systems on the ground, such as street trees, so that the water is managed better and the built environment is made more sustainable. There is also evidence to demonstrate the social value of green roofs. Doctors are increasingly prescribing time spent gardening outdoors for patients dealing with anxiety and depression. And research has found that access to even the most basic green spaces can provide a better quality of life for dementia sufferers and help people avoid obesity.
              <br />

            </p>

            {isExpanded && (
              <p>
                <span className='font-blod text-2xl my-16'>C</span>
                <br />
                In North America, green roofs have become mainstream, with a wide array of expansive, accessible and food-producing roofs installed in buildings. Again, city leaders and authorities have helped push the movement forward – only recently, San Francisco, USA, created a policy requiring new buildings to have green roofs. Toronto, Canada, has policies dating from the 1990s, encouraging the development of urban farms on rooftops. These countries also benefit from having newer buildings than in many parts of the world, which makes it easier to install green roofs. Being able to keep enough water at roof height and distribute it right across the rooftop is crucial to maintaining the plants on any green roof – especially on ‘edible roofs’ where fruit and vegetables are farmed. And it’s much easier to do this in newer buildings, which can typically hold greater weight, than to retro-fit old ones. Having a stronger roof also makes it easier to grow a greater variety of plants, since the soil can be deeper.
                <br />
                <span className='font-blod text-2xl my-16'>D</span>
                <br />
                For green roofs to become the norm for new developments, there needs to be support from public authorities and private investors. Those responsible for maintaining buildings may have to acquire new skills, such as landscaping, and in some cases, volunteers may be needed to help out. Other considerations include installing drainage paths, meeting health and safety requirements and perhaps allowing access for the public, as well as planning restrictions and disruption from regular activities in and around the buildings during installation. To convince investors and developers that installing green roofs is worthwhile, economic arguments are still the most important. The term ‘natural capital’ has been developed to explain the economic value of nature; for example, measuring the money saved by installing natural solutions to protect against flood damage, adapt to climate change or help people lead healthier and happier lives.
                <br />
                <span className='font-blod text-2xl my-16'>E</span>
                <br />
                As the expertise about green roofs grows, official standards have been developed to ensure that they are designed, constructed and maintained properly, and function well. Improvements in the science and technology underpinning green roof development have also led to new variations in the concept. For example, ‘blue roofs’ enable buildings to hold water over longer periods of time, rather than draining it away quickly – crucial in times of heavier rainfall. There are also combinations of green roofs with solar panels, and ‘brown roofs’ which are wilder in nature and maximise biodiversity. If the trend continues, it could create new jobs and a more vibrant and sustainable local food economy – alongside many other benefits. There are still barriers to overcome, but the evidence so far indicates that green roofs have the potential to transform cities and help them function sustainably long into the future. The success stories need to be studied and replicated elsewhere, to make green, blue, brown and food-producing roofs the norm in cities around the world.
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
              <h1 className='font-bold text-xl'>  Questions 1-5
              </h1>
              <br /><br />

              Reading Passage 1 has five paragraphs, A-E.
              <br /><br />

              Which paragraph contains the following information?
              <br /><br />

              Write the correct letter, A-E, in boxes 1-5 on your answer sheet.
              <br /><br />

              NB   You may use any letter more than once.


              <br /><br />

              1 . mention of several challenges to be overcome before a green roof can be installed
              <input
                type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br /><br />

              2 . reference to a city where green roofs have been promoted for many years
              <input
                type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

              <br /><br />

              3 . a belief that existing green roofs should be used as a model for new ones
              <input
                type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br /><br />


              4 . examples of how green roofs can work in combination with other green urban initiatives
              <input
                type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
              <br /><br />

              5 . the need to make a persuasive argument for the financial benefits of green roofs
              <input
                type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />

              <br /><br />

              <h1 className='font-bold text-xl'>Questions 6-9</h1>
              <br /><br />

              Complete the summary below.
              <br /><br />

              Choose ONE WORD ONLY from the passage for each answer.
              <br /><br />

              Write your answers in boxes 6-9 on your answer sheet.
              <br /><br />

              Advantages of green roofs
              <br /><br />

              City rooftops covered with greenery have many advantages. These include lessening the likelihood that floods will occur, reducing how much money is spent on 6. <input
                type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />  and creating environments that are suitable for wildlife. In many cases, they can also be used for producing 7. <input
                type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />  .
              <br /><br />

              There are also social benefits of green roofs. For example, the medical profession recommends 8. <input
                type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />  as an activity to help people cope with mental health issues. Studies have also shown that the availability of green spaces can prevent physical problems such as 9. <input
                type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />  .

              <br /><br />

              <h1>Questions 10 and 11</h1>
              <br /><br />

              Choose TWO letters, A-E.
              <br /><br />

              Write the correct letters in boxes 10 and 11 on your answer sheet.
              <br /><br />

              Which TWO advantages of using newer buildings for green roofs are mentioned in Paragraph C of the passage?
              <br /><br />

              <Checkbox></Checkbox> A . a longer growing season for edible produce
              <br /><br />

              <Checkbox></Checkbox> B . more economical use of water
              <br /><br />

              <Checkbox></Checkbox> C . greater water-storage capacity
              <br /><br />

              <Checkbox></Checkbox> D . ability to cultivate more plant types
              <br /><br />

              <Checkbox></Checkbox> E . a large surface area for growing plants


              <br /><br />

              <h1 className='font-bold text-xl'> Questions 12 and 13</h1>
              <br /><br />

              Choose TWO letters, A-E.
              <br /><br />

              Write the correct letters in boxes 12 and 13 on your answer sheet.
              <br /><br />

              Which TWO aims of new variations on the concept of green roofs are mentioned in Paragraph E of the passage?

              <br /><br />

              A . to provide habitats for a wide range of species

              <div className='flex items-center gap-5'><div className='my-0.5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>

              B . to grow plants successfully even in the wettest climates
              <div className='flex items-center gap-5'><div className='my-0.5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>

              C . to regulate the temperature of the immediate environment
              <div className='flex items-center gap-5'><div className='my-0.5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>

              D . to generate power from a sustainable source
              <div className='flex items-center gap-5'><div className='my-0.5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>

              <br />
              E . to collect water to supply other buildings
              <div className='flex items-center gap-5'><div className='my-0.5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              </div>
              <br />
            </div>




          </div>
        </div>
        <br /><br />

        <div className='flex gap-10 text-black  bg-gray-300 p-5'>

          <div className='w-2/4 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold">READING PASSAGE 2</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.
            </p>
            <h1 className="text-3xl font-bold my-5">The growth mindset
            </h1>
            <p>
              Over the past century, a powerful idea has taken root in the educational landscape. The concept of intelligence as something innate has been supplanted by the idea that intelligence is not fixed, and that, with the right training, we can be the authors of our own cognitive capabilities. Psychologist Alfred Binet, the developer of the first intelligence tests, was one of many 19th-century scientists who held that earlier view and sought to quantify cognitive ability. Then, in the early 20th century, progressive thinkers revolted against the notion that inherent ability is destiny. Instead, educators such as John Dewey argued that every child’s intelligence could be developed, given the right environment.
            </p>

            <p className={isExpanded ? '' : ''}>
              ‘Growth mindset theory’ is a relatively new – and extremely popular – version of this idea. In many schools today you will see hallways covered in motivational posters and hear speeches on the mindset of great sporting heroes who simply believed their way to the top. A major focus of the growth mindset in schools is coaxing students away from seeing failure as an indication of their ability, and towards seeing it as a chance to improve that ability. As educationalist Jeff Howard noted several decades ago: ‘Smart is not something that you just are, smart is something that you can get.’
            </p>

            {isExpanded && (
              <p> The idea of the growth mindset is based on the work of psychologist Carol Dweck in California in the 1990s. In one key experiment, Dweck divided a group of 10- to 12-year-olds into two groups. All were told that they had achieved a high score on a test but the first group were praised for their intelligence in achieving this, while the others were praised for their effort. The second group – those who had been instilled with a ‘growth mindset’ – were subsequently far more likely to put effort into future tasks. Meanwhile, the former took on only those tasks that would not risk their sense of worth. This group had inferred that success or failure is due to innate ability, and this ‘fixed mindset’ had led them to fear of failure and lack of effort. Praising ability actually made the students perform worse, while praising effort emphasised that change was possible.

                One of the greatest impediments to successfully implementing a growth mindset, however, is the education system itself: in many parts of the world, the school climate is obsessed with performance in the form of constant testing, analysing and ranking of students – a key characteristic of the fixed mindset. Nor is it unusual for schools to create a certain cognitive dissonance, when they applaud the benefits of a growth mindset but then hand out fixed target grades in lessons based on performance.

                Aside from the implementation problem, the original growth mindset research has also received harsh criticism. The statistician Andrew Gelman claims that ‘their research designs have enough degrees of freedom that they could take their data to support just about any theory at all’. Professor of Psychology Timothy Bates, who has been trying to replicate Dweck’s work, is finding that the results are repeatedly null. He notes that: ‘People with a growth mindset don’t cope any better with failure … Kids with the growth mindset aren’t getting better grades, either before or after our intervention study.’

                Much of this criticism is not lost on Dweck, and she deserves great credit for responding to it and adapting her work accordingly. In fact, she argues that her work has been misunderstood and misapplied in a range of ways. She has also expressed concerns that her theories are being misappropriated in schools by being conflated with the self-esteem movement: ‘For me the growth mindset is a tool for learning and improvement. It’s not just a vehicle for making children feel good.’

                But there is another factor at work here. The failure to translate the growth mindset into the classroom might reflect a misunderstanding of the nature of teaching and learning itself. Growth mindset supporters David Yeager and Gregory Walton claim that interventions should be delivered in a subtle way to maximise their effectiveness. They say that if adolescents perceive a teacher’s intervention as conveying that they are in need of help, this could undo its intended effects.

                A lot of what drives students is their innate beliefs and how they perceive themselves. There is a strong correlation between self-perception and achievement, but there is evidence to suggest that the actual effect of achievement on self-perception is stronger than the other way round. To stand up in a classroom and successfully deliver a good speech is a genuine achievement, and that is likely to be more powerfully motivating than vague notions of ‘motivation’ itself.

                Recent evidence would suggest that growth mindset interventions are not the elixir of student learning that its proponents claim it to be. The growth mindset appears to be a viable construct in the lab, which, when administered in the classroom via targeted interventions, doesn’t seem to work. It is hard to dispute that having faith in the capacity to change is a good attribute for students. Paradoxically, however, that aspiration is not well served by direct interventions that try to instil it.

                Motivational posters and talks are often a waste of time, and might well give students a deluded notion of what success actually means. Teaching concrete skills such as how to write an effective introduction to an essay then praising students’ effort in getting there is probably a far better way of improving confidence than telling them how unique they are, or indeed how capable they are of changing their own brains. Perhaps growth mindset works best as a philosophy and not an intervention.
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

            <h1 className='font-bold text-xl'>Questions 14-16</h1>
            <br /><br />

            Choose the correct letter, A, B, C or D.
            <br /><br />

            Write the correct letter in boxes 14-16 on your answer sheet

            <br /><br />

            14 .  What can we learn from the first paragraph?
            <br /><br />

            <Checkbox></Checkbox>  A . where the notion of innate intelligence first began
            <br /><br />

            <Checkbox></Checkbox>  B . when ideas about the nature of intelligence began to shift
            <br /><br />

            <Checkbox></Checkbox>  C . how scientists have responded to changing views of intelligence
            <br /><br />

            <Checkbox></Checkbox>  D . why thinkers turned away from the idea of intelligence being fixed

            <br /><br />

            15 .  The second paragraph describes how schools encourage students to
            <br /><br />

            <Checkbox></Checkbox>  A . identify their personal ambitions.
            <br /><br />

            <Checkbox></Checkbox>  B . help each other to realise their goals.
            <br /><br />

            <Checkbox></Checkbox>  C . have confidence in their potential to succeed.
            <br /><br />

            <Checkbox></Checkbox> D . concentrate on where their particular strengths lie.

            <br /><br />

            16 .  In the third paragraph, the writer suggests that students with a fixed mindset
            <br /><br />

            <Checkbox></Checkbox> A . tend to be less competitive.
            <br /><br />

            <Checkbox></Checkbox> B . generally have a low sense of self-esteem.
            <br /><br />

            <Checkbox></Checkbox> C . will only work hard if they are given constant encouragement.
            <br /><br />

            <Checkbox></Checkbox> D . are afraid to push themselves beyond what they see as their limitations.
            <br /><br />


            <h1 className='font-bold text-xl'>Questions 17-22</h1>
            <br /><br />

            Look at the following statements (Questions 17-22) and the list of people below.
            <br /><br />

            Match each statement with the correct person or people, A-E.
            <br /><br />

            Write the correct letter, A-E, in boxes 17-22 on your answer sheet.
            <br /><br />

            NB   You may use any letter more than once.
            <br /><br />


            17 . The methodology behind the growth mindset studies was not strict enough.
            <br />
            <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' />
            <br />
            18 . The idea of the growth mindset has been incorrectly interpreted.
            <br />
            <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />
            19 . Intellectual ability is an unchangeable feature of each individual.
            <br />
            <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />
            20 . The growth mindset should be promoted without students being aware of it.
            <br />
            <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />
            21 . The growth mindset is not simply about boosting students’ morale.
            <br />
            <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />
            22 . Research shows that the growth mindset has no effect on academic achievement.
            <br />
            <input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /><br />
            <br /><br />
            List of People
            <br /><br />
            A . Alfred Binet<br /><br />

            B . Carol Dweck<br /><br />

            C . Andrew Gelman<br /><br />

            D . Timothy Bates<br /><br />

            E . David Yeager and Gregory Walton<br /><br />

            <h1 className='font-bold text-xl'>Questions 23-26</h1>
            Do the following statements agree with the views of the writer in Reading Passage 2?
            <br /><br />
            In boxes 23-26 on your answer sheet, write
            <br /><br />
            YES                 if the statement agrees with the views of the writer
            <br /><br />
            NO                  if the statement contradicts the views of the writer
            <br /><br />
            NOT GIVEN    if it is impossible to say what the writer thinks about this
            <br /><br />

            23 . Dweck has handled criticisms of her work in an admirable way.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            24 . Students’ self-perception is a more effective driver of self-confidence than actual achievement is.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            25 . Recent evidence about growth mindset interventions has attracted unfair coverage in the media.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            26 . Deliberate attempts to encourage students to strive for high achievement may have a negative effect.
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
            <h1 className="text-4xl font-bold">READING PASSAGE 3</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 2 below.
            </p>
            <h1 className="text-3xl font-bold my-5">This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as ‘continental drift’. Wegener proposed this theory in 1912 and developed it extensively for nearly 20 years. His book on the subject, The Origin of Continents and Oceans, went through four editions and was the focus of an international controversy in his lifetime and for some years after his death.
            </h1>
            <p>
              Wegener’s basic idea was that many mysteries about the Earth’s history could be solved if one supposed that the continents moved laterally, rather than supposing that they remained fixed in place. Wegener showed in great detail how such continental movements were plausible and how they worked, using evidence from a large number of sciences including geology,
            </p>

            <p className={isExpanded ? '' : ''}>
              geophysics, paleontology, and climatology. Wegener’s idea – that the continents move – is at the heart of the theory that guides Earth sciences today: namely plate tectonics. Plate tectonics is in many respects quite different from Wegener’s proposal, in the same way that modern evolutionary theory is very different from the ideas Charles Darwin proposed in the 1850s about biological evolution. Yet plate tectonics is a descendant of Alfred Wegener’s theory of continental drift, in quite the same way that modern evolutionary theory is a descendant of Darwin’s theory of natural selection.
            </p>

            {isExpanded && (
              <p> When I started writing about Wegener’s life and work, one of the most intriguing things about him for me was that, although he came up with a theory on continental drift, he was not a geologist. He trained as an astronomer and pursued a career in atmospheric physics. When he proposed the theory of continental displacements in 1912, he was a lecturer in physics and astronomy at the University of Marburg, in southern Germany. However, he was not an ‘unknown’. In 1906 he had set a world record (with his brother Kurt) for time aloft in a hot-air balloon: 52 hours. Between 1906 and 1908 he had taken part in a highly publicized and extremely dangerous expedition to the coast of northeast Greenland. He had also made a name for himself amongst a small circle of meteorologists and atmospheric physicists in Germany as the author of a textbook, Thermodynamics of the Atmosphere (1911), and of a number of interesting scientific papers.

                As important as Wegener’s work on continental drift has turned out to be, it was largely a sideline to his interest in atmospheric physics, geophysics, and paleoclimatology*, and thus I have been at great pains to put Wegener’s work on continental drift in the larger context of his other scientific work, and in the even larger context of atmospheric sciences in his lifetime. This is a ‘continental drift book’ only to the extent that Wegener was interested in that topic and later became famous for it. My treatment of his other scientific work is no less detailed, though I certainly have devoted more attention to the reception of his ideas on continental displacement, as they were much more controversial than his other work.

                Readers interested in the specific detail of Wegener’s career will see that he often stopped pursuing a given line of investigation (sometimes for years on end), only to pick it up later. I have tried to provide guideposts to his rapidly shifting interests by characterizing different phases of his life as careers in different sciences, which is reflected in the titles of the chapters. Thus, the index should be a sufficient guide for those interested in a particular aspect of Wegener’s life but perhaps not all of it. My own feeling, however, is that the parts do not make as much sense on their own as do all of his activities taken together. In this respect I urge readers to try to experience Wegener’s life as he lived it, with all the interruptions, changes of mind, and renewed efforts this entailed.

                Wegener left behind a few published works but, as was standard practice, these reported the results of his work – not the journey he took to reach that point. Only a few hundred of the many thousands of letters he wrote and received in his lifetime have survived and he didn’t keep notebooks or diaries that recorded his life and activities. He was not active (with a few exceptions) in scientific societies, and did not seek to find influence or advance his ideas through professional contacts and politics, spending most of his time at home in his study reading and writing, or in the field collecting observations.

                Some famous scientists, such as Newton, Darwin, and Einstein, left mountains of written material behind, hundreds of notebooks and letters numbering in the tens of thousands. Others, like Michael Faraday, left extensive journals of their thoughts and speculations, parallel to their scientific notebooks. The more such material a scientist leaves behind, the better chance a biographer has of forming an accurate picture of how a scientist’s ideas took shape and evolved.

                I am firmly of the opinion that most of us, Wegener included, are not in any real sense the authors of our own lives. We plan, think, and act, often with apparent freedom, but most of the time our lives ‘happen to us’, and we only retrospectively turn this happenstance into a coherent narrative of fulfilled intentions. This book, therefore, is a story both of the life and scientific work that Alfred Wegener planned and intended and of the life and scientific work that actually ‘happened to him’. These are, as I think you will soon see, not always the same thing.
                <br />

                ————-
                <br />
                * Paleoclimatology – The study of past climates
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
          <br /><br />
            Do the following statements agree with the claims of the writer in Reading Passage 3?
            <br /><br />

            In boxes 27-30 on your answer sheet, write
            <br /><br />

            YES                 if the statement agrees with the claims of the writer
            <br /><br />

            NO                 if the statement contradicts the claims of the writer
            <br /><br />

            NOT GIVEN   if it is impossible to say what the writer thinks about this

            <br /><br />

            27   Wegener’s ideas about continental drift were widely disputed while he was alive.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            28   The idea that the continents remained fixed in place was defended in a number of respected scientific publications.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            29   Wegener relied on a limited range of scientific fields to support his theory of continental drift.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            30   The similarities between Wegener’s theory of continental drift and modern-day plate tectonics are enormous.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />


            Questions 31-36
            <br /><br />

            Complete the summary using the list of phrases, A-J, below.
            <br /><br />

            Write the correct letter, A-J, in boxes 31-36 on your answer sheet.
            <br /><br />

            Wegener’s life and work
            One of the remarkable things about Wegener from a 31<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> is that although he proposed a theory of continental drift, he was not a geologist. His 32<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> were limited to atmospheric physics. However, at the time he proposed his theory of continental drift in 1912, he was already a person of 33<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> . Six years previously, there had been his 34<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> of 52 hours in a hot-air balloon, followed by his well-publicised but 35<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> of Greenland’s coast. With the publication of his textbook on thermodynamics, he had also come to the attention of a 36<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /> of German scientists.
            <br /><br />


            A . modest fame
            <br /><br />

            B .  vast range
            <br /><br />

            C . record-breaking achievement
            <br /><br />

            D . research methods
            <br /><br />

            E  . select group
            <br /><br />

            F . professional interests
            <br /><br />

            G .  scientific debate
            <br /><br />

            H . hazardous exploration
            <br /><br />

            I  .  biographer’s perspective
            <br /><br />

            J .  narrow investigation
            <br /><br />


            <br /><br />

            Questions 37-40
            <br /><br />

            Choose the correct letter, A, B, C or D.
            <br /><br />

            Write the correct letter in boxes 37-40 on your answer sheet.

            <br /><br />

            37  . What is Mott T Greene doing in the fifth paragraph?
            <br /><br />
            <Checkbox></Checkbox> A . describing what motivated him to write the book
            <br /><br />

            <Checkbox></Checkbox> B . explaining why it is desirable to read the whole book
            <br /><br />

            <Checkbox></Checkbox> C . suggesting why Wegener pursued so many different careers
            <br /><br />

            <Checkbox></Checkbox> D . indicating what aspects of Wegener’s life interested him most
            <br /><br />


            38 .  What is said about Wegener in the sixth paragraph?
            <br /><br />

            <Checkbox></Checkbox> A . He was not a particularly ambitious person.
            <br /><br />

            <Checkbox></Checkbox> B . He kept a record of all his scientific observations.
            <br /><br />

            <Checkbox></Checkbox> C . He did not adopt many of the scientific practices of the time.
            <br /><br />

            <Checkbox></Checkbox> D . He enjoyed discussing new discoveries with other scientists.

            <br /><br />

            39 .  What does Greene say about some other famous scientists?
            <br /><br />

            <Checkbox></Checkbox> A . Their published works had a greater impact than Wegener’s did.
            <br /><br />

            <Checkbox></Checkbox> B . They had fewer doubts about their scientific ideas than Wegener did.
            <br /><br />

            <Checkbox></Checkbox> C . Their scientific ideas were more controversial than Wegener’s.
            <br /><br />

            <Checkbox></Checkbox> D . They are easier subjects to write about than Wegener.
            <br /><br />


            40 .  What is Greene’s main point in the final paragraph?
            <br /><br />

            <Checkbox></Checkbox> A . It is not enough in life to have good intentions.
            <br /><br />

            <Checkbox></Checkbox> B . People need to plan carefully if they want to succeed.
            <br /><br />

            <Checkbox></Checkbox> C . People have little control over many aspects of their lives.
            <br /><br />

            <Checkbox></Checkbox> B . It is important that people ensure they have the freedom to act.
            <br /><br />


          </div>

        </div>

      </div>
    </div>
  )
}
