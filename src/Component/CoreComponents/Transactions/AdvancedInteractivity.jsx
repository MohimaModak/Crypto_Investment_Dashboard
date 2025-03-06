import { Checkbox } from '@mui/material';
import React, { useState } from 'react';

export default function AdvancedInteractivity() {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle the full text

  const toggleText = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };
  return (
    <div className="bg-white text-black h-screen overflow-y-auto">
      <div className='p-5'>
        <div className='flex gap-10 text-black  bg-gradient-to-bl from-slate-400 to-slate-100 p-5'>
          <div className='w-2/4 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold">READING PASSAGE 1</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.
            </p>
            <h1 className="text-3xl font-bold my-5">The Industrial Revolution in Britain
            </h1>
            <p>
              The Industrial Revolution began in Britain in the mid-1700s and by the 1830s and 1840s had spread to many other parts of the world, including the United States. In Britain, it was a period when a largely rural, agrarian* society was transformed into an industrialised, urban one. Goods that had once been crafted by hand started to be produced in mass quantities by machines in factories, thanks to the invention of steam power and the introduction of new machines and manufacturing techniques in textiles, iron-making and other industries.
            </p>

            <p className={isExpanded ? '' : ''}>
              The foundations of the Industrial Revolution date back to the early 1700s, when the English inventor Thomas Newcomen designed the first modern steam engine. Called the ‘atmospheric steam engine’, Newcomen’s invention was originally used to power machines that pumped water out of mines. In the 1760s, the Scottish engineer James Watt started to adapt one of Newcomen’s models, and succeeded in making it far more efficient. Watt later worked with the English manufacturer Matthew Boulton to invent a new steam engine driven by both the forward and backward strokes of the piston, while the gear mechanism it was connected to produced rotary motion. It was a key innovation that would allow steam power to spread across British industries.

              The demand for coal, which was a relatively cheap energy source, grew rapidly during the Industrial Revolution, as it was needed to run not only the factories used to produce manufactured goods, but also steam-powered transportation. In the early 1800s, the English engineer Richard Trevithick built a steam-powered locomotive, and by 1830 goods and passengers were being transported between the industrial centres of Manchester and Liverpool. In addition, steam-powered boats and ships were widely used to carry goods along Britain’s canals as well as across the Atlantic.
            </p>

            {isExpanded && (
              <p>Britain had produced textiles like wool, linen and cotton, for hundreds of years, but prior to the Industrial Revolution, the British textile business was a true ‘cottage industry’, with the work performed in small workshops or even homes by individual spinners, weavers and dyers. Starting in the mid-1700s, innovations like the spinning jenny and the power loom made weaving cloth and spinning yarn and thread much easier. With these machines, relatively little labour was required to produce cloth, and the new, mechanised textile factories that opened around the country were quickly able to meet customer demand for cloth both at home and abroad.

                The British iron industry also underwent major change as it adopted new innovations. Chief among the new techniques was the smelting of iron ore with coke (a material made by heating coal) instead of the traditional charcoal. This method was cheaper and produced metals that were of a higher quality, enabling Britain’s iron and steel production to expand in response to demand created by the Napoleonic Wars (1803-15) and the expansion of the railways from the 1830s.

                The latter part of the Industrial Revolution also saw key advances in communication methods, as people increasingly saw the need to communicate efficiently over long distances. In 1837, British inventors William Cooke and Charles Wheatstone patented the first commercial telegraphy system. In the 1830s and 1840s, Samuel Morse and other inventors worked on their own versions in the United States. Cooke and Wheatstone’s system was soon used for railway signalling in the UK. As the speed of the new locomotives increased, it was essential to have a fast and effective means of avoiding collisions.

                The impact of the Industrial Revolution on people’s lives was immense. Although many people in Britain had begun moving to the cities from rural areas before the Industrial Revolution, this accelerated dramatically with industrialisation, as the rise of large factories turned smaller towns into major cities in just a few decades. This rapid urbanisation brought significant challenges, as overcrowded cities suffered from pollution and inadequate sanitation.

                Although industrialisation increased the country’s economic output overall and improved the standard of living for the middle and upper classes, many poor people continued to struggle. Factory workers had to work long hours in dangerous conditions for extremely low wages. These conditions along with the rapid pace of change fuelled opposition to industrialisation. A group of British workers who became known as ‘Luddites’ were British weavers and textile workers who objected to the increased use of mechanised looms and knitting frames. Many had spent years learning their craft, and they feared that unskilled machine operators were robbing them of their livelihood. A few desperate weavers began breaking into factories and smashing textile machines. They called themselves Luddites after Ned Ludd, a young apprentice who was rumoured to have wrecked a textile machine in 1779.

                The first major instances of machine breaking took place in 1811 in the city of Nottingham, and the practice soon spread across the country. Machine-breaking Luddites attacked and burned factories, and in some cases they even exchanged gunfire with company guards and soldiers. The workers wanted employers to stop installing new machinery, but the British government responded to the uprisings by making machine-breaking punishable by death. The unrest finally reached its peak in April 1812, when a few Luddites were shot during an attack on a mill near Huddersfield. In the days that followed, other Luddites were arrested, and dozens were hanged or transported to Australia. By 1813, the Luddite resistance had all but vanished.
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
            <h1 className='font-bold text-2xl'>Questions 1-7</h1>
            <br /><br />
            Complete the notes below.
            <br /><br />
            Choose ONE WORD ONLY from the passage for each answer.
            <br /><br />

            Write your answers in boxes on your answer sheet.
            <br /><br />

            Britain’s Industrial Revolution
            <br /><br />


            Steam power
            <br /><br />


            – Newcomen’s steam engine was used in mines to remove water.
            <br /><br />


            – In Watt and Boulton’s steam engine, the movement of the <span className='font-bold text-lg'>1.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /></span>
            was linked to a gear system.
            <br /><br />

            – A greater supply of <span className='font-bold text-lg'>2.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /></span>
            was required to power steam engines.
            <br /><br />

            Textile industry
            <br /><br />

            – Before the Industrial Revolution, spinners and weavers worked at home and in <span className='font-bold text-lg'>3.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /></span>
            <br /><br />

            – Not as much <span className='font-bold text-lg'>4.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /></span>
            <br /><br />

            was needed to produce cloth once the spinning jenny and power loom were invented.
            <br /><br />

            Iron industry
            <br /><br />

            – Smelting of iron ore with coke resulted in material that was better <span className='font-bold text-lg'>5.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /></span>
            <br /><br />

            – Demand for iron increased with the growth of the <span className='font-bold text-lg'>6.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /></span>
            <br /><br />

            Communications
            <br /><br />

            – Cooke and Wheatstone patented the first telegraphy system.
            <br /><br />

            – The telegraphy system was used to prevent locomotives colliding.
            <br /><br />

            Urbanisation
            <br /><br />

            – Small towns turned into cities very quickly.
            <br /><br />

            – The new cities were dirty, crowded and lacked sufficient <span className='font-bold text-lg'>7.<input type="text" className='text-black my-3 border-2 border-black rounded-md mx-4' /></span>
            <br /><br />

            <h1 className='font-bold text-2xl'>Questions 8-13</h1>
            <br />

            Do the following statements agree with the claims of the writer in Reading Passage?
            <br /><br />

            In boxes on your answer sheet, write
            <br /><br />


            TRUE if the statement agrees with the claims of the writer
            <br /><br />

            FALSE if the statement contradicts the claims of the writer
            <br /><br />

            NOT GIVEN if it is impossible to say what the writer thinks about this
            <br /><br />

            8 Britain’s canal network grew rapidly so that more goods could be transported around the country.
            <br /><br />

            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            9 Costs in the iron industry rose when the technique of smelting iron ore with coke was introduced.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            10 Samuel Morse's communication system was more reliable than that developed by William Cooke and Charles Wheatstone.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            11 The economic benefits of industrialisation were limited to certain sectors of society.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            12 Some skilled weavers believed that the introduction of the new textile machines would lead to job losses.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            13 There was some sympathy among local people for the Luddites who were arrested near Huddersfield.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
          </div>
        </div>
        <br /><br />
        <div className='flex gap-10 text-black  bg-gradient-to-bl from-slate-400 to-slate-100 p-5'>
          <div className='w-2/4 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold my-5">READING PASSAGE 2</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 1 below.
            </p>
            <h1 className="text-3xl font-bold my-5">Athletes and stress
            </h1>

            <p>
              <br />
              <span className='font-blod text-2xl my-16'>A</span>
              <br />
              It isn’t easy being a professional athlete. Not only are the physical demands greater than most people could handle, athletes also face intense psychological pressure during competition. This is something that British tennis player Emma Raducanu wrote about on social media following her withdrawal from the 2021 Wimbledon tournament. Though the young player had been doing well in the tournament, she began having difficulty regulating her breathing and heart rate during a match, which she later attributed to ’the accumulation of the excitement and the buzz’.
            </p>

            <p className={isExpanded ? '' : ''}>
              <span className='font-blod text-2xl my-16'>B</span>

              <br />
              For athletes, some level of performance stress is almost unavoidable. But there are many different factors that dictate just how people’s minds and bodies respond to stressful events. Typically, stress is the result of an exchange between two factors: demands and resources. An athlete may feel stressed about an event if they feel the demands on them are greater than they can handle. These demands include the high level of physical and mental effort required to succeed, and also the athlete’s concerns about the difficulty of the event, their chance of succeeding, and any potential dangers such as injury. Resources, on the other hand, are a person’s ability to cope with these demands. These include factors such as the competitor’s degree of confidence, how much they believe they can control the situation’s outcome, and whether they’re looking forward to the event or not.
              <br />

            </p>

            {isExpanded && (
              <p>
                <span className='font-blod text-2xl my-16'>C</span>
                <br />
                Each new demand or change in circumstances affects whether a person responds positively or negatively to stress. Typically, the more resources a person feels they have in handling the situation, the more positive their stress response. This positive stress response is called a challenge state. But should the person feel there are too many demands placed on them, the more likely they are to experience a negative stress response -known as a threat state. Research shows that the challenge states lead to good performance, while threat states lead to poorer performance. So, in Emma Raducanu’s case, a much larger audience, higher expectations and facing a more skilful opponent, may all have led her to feel there were greater demands being placed on her at Wimbledon -but she didn’t have the resources to tackle them. This led to her experiencing a threat response.
                <br />
                <span className='font-blod text-2xl my-16'>D</span>
                <br />
                Our challenge and threat responses essentially influence how our body responds to stressful situations, as both affect the production of adrenaline and cortisol-also known as ‘stress hormones’. During a challenge state, adrenaline increases the amount of blood pumped from the heart and expands the blood vessels, which allows more energy to be delivered to the muscles and brain. This increase of blood and decrease of pressure in the blood vessels has been consistently related to superior sport performance in everything from cricket batting, to golf putting and football penalty taking. But during a threat state, cortisol inhibits the positive effect of adrenaline, resulting in tighter blood vessels, higher blood pressure, slower psychological responses, and a faster heart rate. In short, a threat state makes people more anxious -they make worse decisions and perform more poorly. In tennis players, cortisol has been associated with more unsuccessful serves and greater anxiety.
                <br />
                <span className='font-blod text-2xl my-16'>E</span>
                <br />
                That said, anxiety is also a common experience for athletes when they’re under pressure. Anxiety can increase heart rate and perspiration, cause heart palpitations, muscle tremors and shortness of breath, as well as headaches, nausea, stomach pain, weakness and a desire to escape in more extreme cases. Anxiety can also reduce concentration and self-control and cause overthinking. The intensity with which a person experiences anxiety depends on the demands and resources they have. Anxiety may also manifest itself in the form of excitement or nervousness depending on the stress response. Negative stress responses can be damaging to both physical and mental health – and repeated episodes of anxiety coupled with negative responses can increase risk of heart disease and depression.
                <br />
                <span className='font-blod text-2xl my-16'>F</span>
                <br />
                But there are many ways athletes can ensure they respond positively under pressure. Positive stress responses can be promoted through the language that they and others – such as coaches or parents – use. Psychologists can also help athletes change how they see their physiological responses – such as helping them see a higher heart rate as excitement, rather than nerves. Developing psychological skills, such as visualisation, can also help decrease physiological responses to threat. Visualisation may involve the athlete recreating a mental picture of a time when they performed well, or picturing themselves doing well in the future. This can help create a feeling of control over the stressful event. Recreating competitive pressure during training can also help athletes learn how to deal with stress. An example of this might be scoring athletes against their peers to create a sense of competition. This would increase the demands which players experience compared to a normal training session, while still allowing them to practise coping with stress.
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
            <h1 className='font-bold text-2xl'>Questions 14-18</h1>
            <br /><br />
            Which paragraph contains the following information?
            <br /><br />
            Write the correct letter, A-F, in boxes on your answer sheet.
            <br /><br />
            NB You may use any letter more than once.
            <br /><br />
            14. reference to two chemical compounds which impact on performance
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            15. examples of strategies for minimising the effects of stress
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            16. how a sportsperson accounted for their own experience of stress
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            17. study results indicating links between stress responses and performance
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />
            18. mention of people who can influence how athletes perceive their stress responses
            <br /><br />
            <h1 className='font-blod text-2xl'>Questions 19-22</h1>
            <br /><br />

            Complete the sentences below.
            <br /><br />
            Choose ONE WORD ONLY from the passage for each answer.
            <br /><br />
            Write your answers in boxes on your answer sheet.
            <br /><br />
            Performance stress involves many demands on the athlete, for example, coping with the possible risk of <span className='font-bold'>19. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /></span>
            <br /><br />
            Cortisol can cause tennis players to produce fewer good <span className='font-bold'>20. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /></span>
            <br /><br />
            Psychologists can help athletes to view their physiological responses as the effect of a positive feeling such as <span className='font-bold'>21.</span> <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
            <span className='font-bold'>22. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /></span>
            is an example of a psychological technique which can reduce an athlete’s stress responses.
            <br /><br />
            <h1 className='font-bold text-2xl'></h1>  Questions 23-24
            <br /><br />
            Choose TWO letters, A-E.
            <br /><br />
            Write the correct letters in boxes on your answer sheet.
            <br /><br />
            23 24 Which TWO facts about Emma Raducanu’s withdrawal from the Wimbledon tournamentare mentioned in the text?
            <br /><br />

            <div className='flex '><span className='font-bold bg-gray-200 p-2'>A.</span> <span className='bg-white w-5 h-5 flex justify-center items-center mx-5'><Checkbox></Checkbox></span>  <span></span> the stage at which she dropped out of the tournament</div>
            <br /><br />

            <div className='flex '><span className='font-bold bg-gray-200 p-2'>B.</span> <span className='bg-white w-5 h-5 flex justify-center items-center mx-5'><Checkbox></Checkbox></span>  <span></span> symptoms of her performance stress at the tournament
            </div>
            <br /><br />
            <div className='flex '><span className='font-bold bg-gray-200 p-2'>C.</span> <span className='bg-white w-5 h-5 flex justify-center items-center mx-5'><Checkbox></Checkbox></span>  <span></span>measures which she had taken to manage her stress levels</div>
            <br /><br />

            <div className='flex '><span className='font-bold bg-gray-200 p-2'>D.</span> <span className='bg-white w-5 h-5 flex justify-center items-center mx-5'><Checkbox></Checkbox></span>  <span></span> aspects of the Wimbledon tournament which increased her stress levels</div>
            <br /><br />

            <div className='flex '><span className='font-bold bg-gray-200 p-2'>E.</span> <span className='bg-white w-5 h-5 flex justify-center items-center mx-5'><Checkbox></Checkbox></span>  <span></span> reactions to her social media posts about her experience at Wimbledon</div>
            <br /><br />


            reactions to her social media posts about her experience at Wimbledon
            <br /><br />
            <h1 className='font-bold text-2xl'></h1>  Questions 25-26
            Choose TWO letters, A-E.
            <br /><br />
            Write the correct letters in boxes on your answer sheet.
            <br /><br />
            25 26
            <br /><br />

            <div className='flex '><span className='font-bold bg-gray-200 p-2'>A.</span> <span className='bg-white w-5 h-5 flex justify-center items-center mx-5'><Checkbox></Checkbox></span>  <span></span> the factors which determine how severe it may be</div>
            <br /><br />
            <div className='flex '><span className='font-bold bg-gray-200 p-2'>B.</span> <span className='bg-white w-5 h-5 flex justify-center items-center mx-5'><Checkbox></Checkbox></span>  <span></span> how long it takes for its effects to become apparent</div>
            <br /><br />
            <div className='flex '><span className='font-bold bg-gray-200 p-2'>C.</span> <span className='bg-white w-5 h-5 flex justify-center items-center mx-5'><Checkbox></Checkbox></span>  <span></span> which of its symptoms is most frequently encountered</div>
            <br /><br />
            <div className='flex '><span className='font-bold bg-gray-200 p-2'>D.</span> <span className='bg-white w-5 h-5 flex justify-center items-center mx-5'><Checkbox></Checkbox></span>  <span></span>the types of athletes who are most likely to suffer from it</div>
            <br /><br />
            <div className='flex '><span className='font-bold bg-gray-200 p-2'>E.</span> <span className='bg-white w-5 h-5 flex justify-center items-center mx-5'><Checkbox></Checkbox></span>  <span></span> the harm that can result if athletes experience it too often</div>
          </div>
        </div>
        <br /><br />
        <div className='flex gap-10 text-black  bg-gradient-to-bl from-slate-400 to-slate-100 p-5'>
          <div className='w-2/4 h-screen overflow-y-auto'>
            <h1 className="text-4xl font-bold">READING PASSAGE 3</h1>
            <p className="my-5">
              You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 1 below.
            </p>
            <h1 className="text-3xl font-bold my-5">An inquiry into the existence of the gifted child
            </h1>
            <p>
              Let us start by looking at a modern ‘genius’, Maryam Mirzakhani, who died at the early age of 40. She was the only woman to win the Fields Medal the mathematical equivalent of a Nobel prize. It would be easy to assume that someone as special as Mirzakhani must have been one of those ‘gifted’ children, those who have an extraordinary ability in a specific sphere of activity or knowledge. But look closer and a different story emerges. Mirzakhani was born in Tehran, Iran.
            </p>

            <p className={isExpanded ? '' : ''}>
              She went to a highly selective girls’ school but maths wasn’t her interest – reading was. She loved novels and would read anything she could lay her hands on. As for maths, she did rather poorly at it for the first couple of years in her middle school, but became interested when her elder brother told her about what he’d learned. He shared a famous maths problem from a magazine that fascinated her and she was hooked.

              In adult life it is clear that she was curious, excited by what she did and also resolute in the face of setbacks. One of her comments sums it up. ‘Of course, the most rewarding part is the “Alia” moment, the excitement of discovery and enjoyment of understanding something new … But most of the time, doing mathematics for me is like being on a long hike with no trail and no end in sight.’ That trail took her to the heights of original research into mathematics.
            </p>

            {isExpanded && (
              <p>Is her background unusual? Apparently not. Most Nobel prize winners were unexceptional in childhood. Einstein was slow to talk as a baby. He failed the general part of the entry test to Zurich Polytechnic – though they let him in because of high physics and maths scores. He struggled at work initially, but he kept plugging away and eventually rewrote the laws of Newtonian mechanics with his theory of relativity.

                There has been a considerable amount of research on high performance over the last century that suggests it goes way beyond tested intelligence. On top of that, research is clear that brains are flexible, new neural pathways can be created, and IQ isn’t fixed. For example, just because you can read stories with hundreds of pages at the age of five doesn’t mean you will still be ahead of your contemporaries in your teens. While the jury is out on giftedness being innate and other factors potentially making the difference, what is certain is that the behaviours associated with high levels of performance are replicable and most can be taught even traits such as curiosity.

                According to my colleague Prof Deborah Eyre, with whom I’ve collaborated on the book Great Minds and How to Crow Them, the latest neuroscience and psychological research suggests most individuals can reach levels of performance associated in school with the gifted and talented. However, they must be taught the right attitudes and approaches to their learning and develop the attributes of high performers-curiosity, persistence and hard work, for example an approach Eyre calls ‘high performance learning’. Critically, they need the right support in developing those approaches at home as well as at school.

                Prof Anders Ericsson, an eminent education psychologist at Florida State University, US, is the co-author of Peak: Secrets from the New Science of Expertise. After research going back to 1980 into diverse achievements, from music to memory to sport, he doesn’t think unique and innate talents are at the heart of performance. Deliberate practice, that stretches you every step of the way, and around 10,000 hours of it, is what produces the goods. It’s not a magic number the highest performers move on to doing a whole lot more, of course. Ericsson’s memory research is particularly interesting because random students, trained in memory techniques for the study, went on to outperform others thought to have innately superior memories those who you might call gifted.

                But it is perhaps the work of Benjamin Bloom, another distinguished American educationist working in the 1980s, that gives the most pause for thought. Bloom’s team looked at a group of extraordinarily high achieving people in disciplines as varied as ballet, swimming, piano, tennis, maths, sculpture and neurology. He found a pattern of parents encouraging and supporting their children, often in areas they enjoyed themselves. Bloom’s outstanding people had worked very hard and consistently at something they had become hooked on when at a young age, and their parents all emerged as having strong work ethics themselves.

                Eyre says we know how high performers learn. From that she has developed a high performing learning approach. She is working on this with a group of schools, both in Britain and abroad. Some spin-off research, which looked in detail at 24 of the 3,000 children being studied who were succeeding despite difficult circumstances, found something remarkable. Half were getting free school meals because of poverty, more than half were living with a single parent, and four in five were living in disadvantaged areas. Interviews uncovered strong evidence of an adult or adults in the child’s life who valued and supported education, either in the immediate or extended family or in the child’s wider community. Children talked about the need to work hard at school, to listen in class and keep trying.

                Let us end with Einstein, the epitome of a genius. He clearly had curiosity, character and determination. He struggled against rejection in early life but was undeterred. Did he think he was a genius or even gifted? He once wrote: ‘It’s not that I’m so smart, it’s just that I stay with problems longer. Most people say it is the intellect which makes a great scientist. They are wrong: it is character.’
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
            <h1 className='font-bold text-2xl'>Questions 27-32</h1>
            <br /><br />
            Complete the summary using the list of phrases, A-K, below.
            <br /><br />
            Write the correct letter, A-K, in boxes on your answer sheet.
            <br /><br />
            <div className="container mx-auto p-4">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left text-gray-700">Letter</th>
                    <th className="px-4 py-2 text-left text-gray-700">Word</th>
                    <th className="px-4 py-2 text-left text-gray-700">Letter</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-gray-700">A</td>
                    <td className="px-4 py-2 text-gray-700">appeal</td>
                    <td className="px-4 py-2 text-gray-700">B</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-gray-700">C</td>
                    <td className="px-4 py-2 text-gray-700">determined</td>
                    <td className="px-4 py-2 text-gray-700">D</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-gray-700">E</td>
                    <td className="px-4 py-2 text-gray-700">intrigued</td>
                    <td className="px-4 py-2 text-gray-700">F</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-gray-700">G</td>
                    <td className="px-4 py-2 text-gray-700">single</td>
                    <td className="px-4 py-2 text-gray-700">H</td>
                  </tr>
                </tbody>
              </table>
              <br /><br />
              Maryam Mirzakhani is regarded as 27. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />

              <br /><br />

              in the field of mathematics because she was the only female holder of the prestigious Fields Medal – a record that she retained at the time of her death. However, maths held little 28. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              <br />
              for her as a child and in fact her performance was below average until she was 29. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              <br />
              by a difficult puzzle that one of her siblings showed her.
              <br />
              Later, as a professional mathematician, she had an inquiring mind and proved herself to be 30. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
              <br />
              when things did not go smoothly. She said she got the greatest 31.
              from making ground-breaking discoveries and in fact she was responsible for some extremely 32. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />

              mathematical studies.
              <br />


              the claims of the writer
              <br /><br />

              NO if the statement contradicts the claims of the writer
              <br /><br />

              NOT GIVEN if it is impossible to say what the writer thinks about this
              <br /><br />

              33. Many people who ended up winning prestigious intellectual prizes only reached an average standard when young.
              <br />
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />
              34. Einstein's failures as a young man were due to his lack of confidence.
              <br />
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />

              35. It is difficult to reach agreement on whether some children are actually born gifted.
              <br />
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />

              36. Einstein was upset by the public's view of his life's work.
              <br />
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />

              37. Einstein put his success down to the speed at which he dealt with scientific questions.
              <br />
              <div className='flex items-center gap-5'><div className='my-5'><span>TRUE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>FALSE</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
                <div className='my-5'><span>NOT GIVEN</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
              <br />

              <br />

              Questions 38-40
              <br />

              Choose the correct letter, A, B, C or D.
              <br />

              Write the correct letter in boxes on your answer sheet.
              <br />
              <br />
              38. What does Eyre believe is needed for children to equal ’gifted’ standards?
              <br />

              A. strict discipline from the teaching staff
              <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span>
              B. assistance from their peers in the classroom
              <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span>
              C. the development of a spirit of inquiry towards their studies
              <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span>
              D. the determination to surpass everyone else’s achievements
              <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span>
              <br />
              39. What is the result of Ericsson’s research?
              <br />

              A. Very gifted students do not need to work on improving memory skills.
              <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span>

              B. Being born with a special gift is not the key factor in becoming expert.
              <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span>

              C. Including time for physical exercise is crucial in raising performance.
              <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span>

              D. 10,000 hours of relevant and demanding work will create a genius.
              <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span>
              <br />
              40. In the penultimate paragraph, it is stated the key to some deprived children's success is
              <br />
              A. a regular and nourishing diet at home.
              <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span>

              B. the loving support of more than one parent.
              <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span>

              C. a community which has well-funded facilities for learning.
              <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span>

              D. the guidance of someone who recognises the benefits of learning.
              <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
