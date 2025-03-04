import { Checkbox } from "@mui/material";

export default function Portfolio() {
  return (
    <div className="h-screen overflow-y-auto bg-white text-black ">
      {/* SECTION 1 */}
      <section className="p-6 bg- shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-">SECTION 1</h2>
        <p className="mb-4 text-">Questions 1 – 10</p>
        <p className="mb-4 text-">Complete the notes below.</p>
        <p className="mb-4 text-">Write ONE WORD AND/OR A NUMBER for each answer.</p>

        <h3 className="text-xl font-semibold mb-4 text-">Transport Survey</h3>
        <p className="mb-4 text-">Example</p>
        <p className="mb-4 text-">Travelled to town today: by <strong>bus</strong></p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-">Name:</label>
            <p className="mt-1 text-">Luisa <strong className="font-bold text-xl">1.
              <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-">Address:</label>
            <p className="mt-1 text-"><strong>2.
              <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong>  Stone Rd</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-">Area:</label>
            <p className="mt-1 text-">Bradfield</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-">Postcode:</label>
            <p className="mt-1 text-"><strong>3.
              <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-">Occupation:</label>
            <p className="mt-1 text-"><strong>4.
              <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-">Reason for visit to town:</label>
            <p className="mt-1 text-">to go to the <strong>5.
              <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-">Suggestions for improvement:</label>
            <ul className="list-disc list-inside text-">
              <li>better <strong>6.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></li>
              <li>have more footpaths</li>
              <li>more frequent <strong>7.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> ..</strong></li>
            </ul>
          </div>

          <div>
            <label className="block text-sm font-medium text-">Things that would encourage cycling to work:</label>
            <ul className="list-disc list-inside text-">
              <li>having <strong>8.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong> parking places for bicycles</li>
              <li>being able to use a <strong>9.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong> at work</li>
              <li>the opportunity to have cycling <strong>10.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> .</strong> on busy roads</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="p-6 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-">SECTION 2</h2>

        {/* Questions 11-14 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-">Questions 11 – 14</h3>
          <p className="mb-4 text-">Choose the correct letter, A, B or C.</p>

          <div className="space-y-4">
            <div>
              <p className="text-"><strong>New city developments</strong></p>
              <p className="text-">11. The idea for the two new developments in the city came from</p>
              <ul className="list-disc list-inside text-">
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span> <li>A. local people.</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span> <li>B. the City Council.</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span> <li>C. the SWRDC.</li>
              </ul>
            </div>

            <div>
              <p className="text-">12. What is unusual about Brackenside pool?</p>
              <ul className="list-disc list-inside text-">
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>A. its architectural style</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>B. its heating system</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>C. its method of water treatment</li>
              </ul>
            </div>

            <div>
              <p className="text-">13. Local newspapers have raised worries about</p>
              <ul className="list-disc list-inside text-">
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>A. the late opening date.</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>B. the cost of the project.</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>C. the size of the facilities.</li>
              </ul>
            </div>

            <div>
              <p className="text-">14. What decision has not yet been made about the pool?</p>
              <ul className="list-disc list-inside text-">
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>A. whose statue will be at the door</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>B. the exact opening times</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>C. who will open it</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Questions 15-20 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-">Questions 15-20</h3>
          <p className="mb-4 text-">Which feature is related to each of the following areas of the world represented in the playground?</p>
          <p className="mb-4 text-">Choose SIX answers from the box and write the correct letter, A-I, next to questions 15-20.</p>

          <div className="">
            <div>
              <p className="text-"><strong>Features</strong></p>
              <ul className="list-disc list-inside text-">
                <li>A. ancient forts</li>
                <li>B. waterways</li>
                <li>C. ice and snow</li>
                <li>D. jewels</li>
                <li>E. local animals</li>
                <li>F. mountains</li>
                <li>G. music and film</li>
                <li>H. space travel</li>
                <li>I. volcanoes</li>
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-"><strong>Areas of the world</strong></p>
              <ul className="list-disc list-inside text-">
                <li>15. Asia <strong>.
                  <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></li>
                <li>16. Antarctica <strong>.
                  <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></li>
                <li>17. South America <strong>.
                  <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></li>
                <li>18. North America <strong>.
                  <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></li>
                <li>19. Europe <strong>.
                  <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></li>
                <li>20. Africa <strong>.
                  <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="p-6 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-">SECTION 3</h2>

        {/* Questions 21-22 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-">Questions 21 and 22</h3>
          <p className="mb-4 text-">Choose TWO letters, A-E.</p>
          <p className="mb-4 text-">Which TWO hobbies was Thor Heyerdahl very interested in as a youth?</p>
          <ul className="list-disc list-inside text-">
            <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>A. camping</li>
            <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>B. climbing</li>
            <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>C. collecting</li>
            <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>D. hunting</li>
            <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>E. reading</li>
          </ul>
        </div>

        {/* Questions 23-24 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-">Questions 23 and 24</h3>
          <p className="mb-4 text-">Choose TWO letters, A-E.</p>
          <p className="mb-4 text-">Which do the speakers say are the TWO reasons why Heyerdahl went to live on an island?</p>
          <ul className="list-disc list-inside text-">
            <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>A. to examine ancient carvings</li>
            <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>B. to experience an isolated place</li>
            <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>C. to formulate a new theory</li>
            <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>D. to learn survival skills</li>
            <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>E. to study the impact of an extreme environment</li>
          </ul>
        </div>

        {/* Questions 25-30 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-">Questions 25-30</h3>
          <p className="mb-4 text-">Choose the correct letter, A, B or C.</p>

          <div className="space-y-4">
            <div>
              <p className="text-"><strong>The later life of Thor Heyerdahl</strong></p>
              <p className="text-">25. According to Victor and Olivia, academics thought that Polynesian migration from the east was impossible due to</p>
              <ul className="list-disc list-inside text-">
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>A. the fact that Eastern countries were far away.</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>B. the lack of materials for boat building.</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>C. the direction of the winds and currents.</li>
              </ul>
            </div>

            <div>
              <p className="text-">26. Which do the speakers agree was the main reason for Heyerdahl’s raft journey?</p>
              <ul className="list-disc list-inside text-">
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>A. to overcome a research setback</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>B. to demonstrate a personal quality</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>C. to test a new theory</li>
              </ul>
            </div>

            <div>
              <p className="text-">27. What was most important to Heyerdahl about his raft journey?</p>
              <ul className="list-disc list-inside text-">
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>A. the fact that he was the first person to do it</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>B. the speed of crossing the Pacific</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>C. the use of authentic construction methods</li>
              </ul>
            </div>

            <div>
              <p className="text-">28. Why did Heyerdahl go to Easter Island?</p>
              <ul className="list-disc list-inside text-">
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>A. to build a stone statue</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>B. to sail a reed boat</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>C. to learn the local language</li>
              </ul>
            </div>

            <div>
              <p className="text-">29. In Olivia’s opinion, Heyerdahl’s greatest influence was on</p>
              <ul className="list-disc list-inside text-">
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>A. theories about Polynesian origins.</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>B. the development of archaeological methodology.</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>C. establishing archaeology as an academic subject.</li>
              </ul>
            </div>

            <div>
              <p className="text-">30. Which criticism do the speakers make of William Oliver’s textbook?</p>
              <ul className="list-disc list-inside text-">
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>A. Its style is out of date.</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>B. Its content is over-simplified.</li>
                <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><li>C. Its methodology is flawed.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-">SECTION 4</h2>

        {/* Questions 31-40 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-">Questions 31 – 40</h3>
          <p className="mb-4 text-">Complete the notes below.</p>
          <p className="mb-4 text-">Write ONE WORD ONLY for each answer.</p>

          <div className="space-y-4">
            <p className="text-"><strong>THE FUTURE OF MANAGEMENT</strong></p>
            <p className="text-"><strong>Business markets</strong></p>
            <ul className="list-disc list-inside text-">
              <li>greater <strong>31.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong> among companies</li>
              <li>increase in power of large <strong>32.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> .</strong> companies</li>
              <li>rising <strong>33.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> ..</strong> in certain countries</li>
            </ul>

            <p className="text-"><strong>External influences on businesses</strong></p>
            <ul className="list-disc list-inside text-">
              <li>more discussion with <strong>34.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> …</strong> before making business decisions</li>
              <li>environmental concerns which may lead to more <strong>35.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> ..</strong></li>
            </ul>

            <p className="text-"><strong>Business structures</strong></p>
            <ul className="list-disc list-inside text-">
              <li>more teams will be formed to work on a particular <strong>36.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> .</strong></li>
              <li>businesses may need to offer hours that are <strong>37.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> …</strong>, or the chance to work remotely</li>
            </ul>

            <p className="text-"><strong>Management styles</strong></p>
            <ul className="list-disc list-inside text-">
              <li>increasing need for managers to provide good <strong>38.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> ..</strong></li>
              <li>changes influenced by <strong>39.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> ..</strong> taking senior roles</li>
            </ul>

            <p className="text-"><strong>Changes in the economy</strong></p>
            <ul className="list-disc list-inside text-">
              <li>service sector continues to be important</li>
              <li>increasing value of intellectual property</li>
              <li>more and more <strong>40.
                <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> ..</strong> workers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}