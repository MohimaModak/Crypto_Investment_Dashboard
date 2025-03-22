import { Checkbox } from '@mui/material';
import React, { useState } from 'react'

export default function Miscellaneous() {

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
            <h1 className="text-3xl font-bold my-5">Materials to take us beyond concrete
            </h1>

            <p>
              <br />
              <span className='font-blod text-2xl my-16'>A</span>
              <br />
              Concrete is the second most used substance in the global economy, after water – and one of the world’s biggest single sources of greenhouse gas emissions. The chemical process by which cement, the key ingredient of concrete, is created results in large quantities of carbon dioxide. The UN estimates that there will be 9.8 billion people living on the planet by mid-century. They will need somewhere to live. If concrete is the only answer to the construction of new cities, then carbon emissions will soar, aggravating global warming. And so scientists have started innovating with other materials, in a scramble for alternatives to a universal commodity that has underpinned our modem life for many years.
            </p>

            <p className={isExpanded ? '' : ''}>
              <span className='font-blod text-2xl my-16'>B</span>

              <br />
              The problem with replacing concrete is that it is so very good at what it does. Chris Cheeseman, an engineering professor at Imperial College London, says the key thing to consider is the extent to which concrete is used around the world, and is likely to continue to be used. ‘Concrete is not a high-carbon product. Cement is high carbon, but concrete is not. But it is the scale on which it is used that makes it high carbon. The sheer scale of manufacture is so huge, that is the issue.’
              <br />

            </p>

            {isExpanded && (
              <p>
                <span className='font-blod text-2xl my-16'>C</span>
                <br />

                Not only are the ingredients of concrete relatively cheap and found in abundance in most places around the globe, the stuff itself has marvellous properties: Portland cement, the vital component of concrete, is mouldable and pourable, but quickly sets hard. Cheeseman also notes another advantage: concrete and steel have similar thermal expansion properties, so steel can be used to reinforce concrete, making it far stronger and more flexible as a building material than it could be on its own. According to Cheeseman, all these factors together make concrete hard to beat. ‘Concrete is amazing stuff. Making anything with similar properties is going to be very difficult.’
                <br />
                <span className='font-blod text-2xl my-16'>D</span>
                <br />
                A possible alternative to concrete is wood. Making buildings from wood may seem like a rather medieval idea, but climate change is driving architects to turn to treated timber as a possible resource. Recent years have seen the emergence of tall buildings constructed almost entirely from timber. Vancouver, Vienna and Brumunddal in Norway are all home to constructed tall, wooden buildings.
                <br />
                <span className='font-blod text-2xl my-16'>E</span>
                <br />
                Using wood to construct buildings, however, is not straightforward. Wood expands as it absorbs moisture from the air and is susceptible to pests, not to mention fire. But treating wood and combining it with other materials can improve its properties. Cross-laminated timber is engineered wood. An adhesive is used to stick layers of solid-sawn timber together, crosswise, to form building blocks. This material is light but has the strength of concrete and steel. Construction experts say that wooden buildings can be constructed at a greater speed than ones of concrete and steel and the process, it seems, is quieter.
                <br />
                <span className='font-blod text-2xl my-16'>F</span>
                <br />
                Stora Enso is Europe’s biggest supplier of cross-laminated timber, and its vice-president Markus Mannstrom reports that the company is seeing increasing demand globally for building in wood, with climate change concerns the key driver. Finland, with its large forests, where Stora Enso is based, has been leading the way, but the company is seeing a rise in demand for its timber products across the world, including in Asia. Of course, using timber in a building also locks away the carbon that it absorbed as it grew. But even treated wood has its limitations and only when a wider range of construction projects has been proven in practice will it be possible to see wood as a real alternative to concrete in constructing tall buildings.
                <span className='font-blod text-2xl my-16'>G</span>
                <br />
                Fly ash and slag from iron ore are possible alternatives to cement in a concrete mix. Fly ash, a byproduct of coal-burning power plants, can be incorporated into concrete mixes to make up as much as 15 to 30% of the cement, without harming the strength or durability of the resulting mix. Iron-ore slag, a byproduct of the iron-ore smelting process, can be used in a similar way. Their incorporation into concrete mixes has the potential to reduce greenhouse gas emissions.

                But Anna Surgenor, of the UK’s Green Building Council, notes that although these waste products can save carbon in the concrete mix, their use is not always straightforward. ‘It’s possible to replace the cement content in concrete with waste products to lower the overall carbon impact. But there are several calculations that need to be considered across the entire life cycle of the building- these include factoring in where these materials are being shipped from. If they are transported over long distances, using fossil fuels, the use of alternative materials might not make sense from an overall carbon reduction perspective.’
                <span className='font-blod text-2xl my-16'>H</span>
                <br />
                While these technologies are all promising ideas, they are either unproven or based on materials that are not abundant. In their overview of innovation in the concrete industry, Felix Preston and Johanna Lehne of the UK’s Royal Institute of International Affairs reached the conclusion that, ‘Some novel cements have been discussed for more than a decade within the research community, without breaking through. At present, these alternatives are rarely as cost-effective as conventional cement, and they face raw-material shortages and resistance from customers.’
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

            <h1 className='font-bold text-xl'>Questions 1-4</h1>
            <br /><br />

            Reading Passage 1 has eight sections, A-H.
            <br /><br />

            Which section contains the following information?
            <br /><br />

            Write the correct letter, A-H, in boxes 1-4 on your answer sheet.

            <br /><br />

            1 . an explanation of the industrial processes that create potential raw materials for concrete
            <br />
            <div className='flex items-center gap-5'>
              <div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>F</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            </div>
            <br />

            2 . a reference to the various locations where high-rise wooden buildings can be found
            <br />
            <div className='flex items-center gap-5'>
              <div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>F</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            </div>
            <br />

            3 . an indication of how widely available the raw materials of concrete are
            <br />
            <div className='flex items-center gap-5'>
              <div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>F</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            </div>
            <br />

            4 . the belief that more high-rise wooden buildings are needed before wood can be regarded as a viable construction material

            <br />
            <div className='flex items-center gap-5'>
              <div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>D</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>E</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>F</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
            </div>
            <br />


            <h1 className='font-bold text-xl'>Questions 5-8</h1>
            <br /><br />

            Complete the summary below.
            <br /><br />

            Choose ONE WORD ONLY from the passage for each answer.
            <br /><br />

            Write your answers in boxes 5-8 on your answer sheet.
            <br /><br />

            Making buildings with wood
            Wood is a traditional building material, but current environmental concerns are encouraging 5. <input
              type="text" className='text-black my-3 border-2 border-black rounded-md' /> to use wood in modern construction projects. Using wood, however, has its challenges. For example, as 6. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> in the atmosphere enters wood, it increases in size. In addition, wood is prone to pests and the risk of fire is greater. However, wood can be turned into a better construction material if it is treated and combined with other materials. In one process, 7. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> of solid wood are glued together to create building blocks. These blocks are lighter than concrete and steel but equal them in strength. Experts say that wooden buildings are an improvement on those made of concrete and steel in terms of the 8. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> with which they can be constructed and how much noise is generated by the process.



            <h1 className='font-bold text-xl'>Questions 6-13</h1>
            <br /><br />
            Look at the following statements (Questions 9-13) and the list of people below.
            <br /><br />

            Match each statement with the correct person, A, B, C or D.
            <br /><br />
            Write the correct letter, A, B, C or D, in boxes 9-13 on your answer sheet.
            <br /><br />

            NB   You may use any letter more than once.
            <br /><br />


            9  .The environmental advantage of cement alternatives may not be as great as initially assumed.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />

            10 . It would be hard to create a construction alternative to concrete that offers so many comparable benefits.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />

            11 . Worries about the environment have led to increased interest in wood as a construction material.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />

            12 . Expense has been a factor in the negative response to the development of new cements.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />

            13 . The environmental damage caused by concrete is due to it being produced in large quantities.
            <br />
            <div className='flex items-center gap-5'><div className='my-5'><span>A</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>B</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div>
              <div className='my-5'><span>C</span> <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span></div></div>
            <br />

            List of People
            <br /><br />

            A  .  Chris Cheeseman
            <br /><br />

            B  .  Markus Mannstrom
            <br /><br />

            C  .  Anna Surgenor
            <br /><br />

            D  .  Felix Preston and Johanna Lehne

          </div>


        </div>
      </div>
    </div>
  )
}
