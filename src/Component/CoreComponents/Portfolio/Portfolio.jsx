export default function Portfolio() {
  return (
    <div className="h-screen overflow-y-auto bg-black text-white">
      {/* SECTION 1 */}
      <section className="p-6 bg-gray-900 shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">SECTION 1</h2>
        <p className="mb-4 text-gray-300">Questions 1 – 10</p>
        <p className="mb-4 text-gray-300">Complete the notes below.</p>
        <p className="mb-4 text-gray-300">Write ONE WORD AND/OR A NUMBER for each answer.</p>

        <h3 className="text-xl font-semibold mb-4 text-white">Transport Survey</h3>
        <p className="mb-4 text-gray-300">Example</p>
        <p className="mb-4 text-gray-300">Travelled to town today: by <strong>bus</strong></p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400">Name:</label>
            <p className="mt-1 text-white">Luisa <strong>1<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Address:</label>
            <p className="mt-1 text-white"><strong>2<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong> White Stone Rd</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Area:</label>
            <p className="mt-1 text-white">Bradfield</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Postcode:</label>
            <p className="mt-1 text-white"><strong>3<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Occupation:</label>
            <p className="mt-1 text-white"><strong>4<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Reason for visit to town:</label>
            <p className="mt-1 text-white">to go to the <strong>5<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Suggestions for improvement:</label>
            <ul className="list-disc list-inside text-gray-300">
              <li>better <strong>6<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></li>
              <li>have more footpaths</li>
              <li>more frequent <strong>7<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> ..</strong></li>
            </ul>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Things that would encourage cycling to work:</label>
            <ul className="list-disc list-inside text-gray-300">
              <li>having <strong>8<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong> parking places for bicycles</li>
              <li>being able to use a <strong>9<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong> at work</li>
              <li>the opportunity to have cycling <strong>10<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> .</strong> on busy roads</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="p-6 bg-gray-900 shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">SECTION 2</h2>

        {/* Questions 11-14 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Questions 11 – 14</h3>
          <p className="mb-4 text-gray-300">Choose the correct letter, A, B or C.</p>

          <div className="space-y-4">
            <div>
              <p className="text-white"><strong>New city developments</strong></p>
              <p className="text-gray-300">11. The idea for the two new developments in the city came from</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. local people.</li>
                <li>B. the City Council.</li>
                <li>C. the SWRDC.</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300">12. What is unusual about Brackenside pool?</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. its architectural style</li>
                <li>B. its heating system</li>
                <li>C. its method of water treatment</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300">13. Local newspapers have raised worries about</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. the late opening date.</li>
                <li>B. the cost of the project.</li>
                <li>C. the size of the facilities.</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300">14. What decision has not yet been made about the pool?</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. whose statue will be at the door</li>
                <li>B. the exact opening times</li>
                <li>C. who will open it</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Questions 15-20 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Questions 15-20</h3>
          <p className="mb-4 text-gray-300">Which feature is related to each of the following areas of the world represented in the playground?</p>
          <p className="mb-4 text-gray-300">Choose SIX answers from the box and write the correct letter, A-I, next to questions 15-20.</p>

          <div className="">
            <div>
              <p className="text-white"><strong>Features</strong></p>
              <ul className="list-disc list-inside text-gray-300">
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
              <p className="text-white"><strong>Areas of the world</strong></p>
              <ul className="list-disc list-inside text-gray-300">
                <li>15. Asia <strong><input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></li>
                <li>16. Antarctica <strong><input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></li>
                <li>17. South America <strong><input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></li>
                <li>18. North America <strong><input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></li>
                <li>19. Europe <strong><input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></li>
                <li>20. Africa <strong><input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="p-6 bg-gray-900 shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">SECTION 3</h2>

        {/* Questions 21-22 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Questions 21 and 22</h3>
          <p className="mb-4 text-gray-300">Choose TWO letters, A-E.</p>
          <p className="mb-4 text-gray-300">Which TWO hobbies was Thor Heyerdahl very interested in as a youth?</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>A. camping</li>
            <li>B. climbing</li>
            <li>C. collecting</li>
            <li>D. hunting</li>
            <li>E. reading</li>
          </ul>
        </div>

        {/* Questions 23-24 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Questions 23 and 24</h3>
          <p className="mb-4 text-gray-300">Choose TWO letters, A-E.</p>
          <p className="mb-4 text-gray-300">Which do the speakers say are the TWO reasons why Heyerdahl went to live on an island?</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>A. to examine ancient carvings</li>
            <li>B. to experience an isolated place</li>
            <li>C. to formulate a new theory</li>
            <li>D. to learn survival skills</li>
            <li>E. to study the impact of an extreme environment</li>
          </ul>
        </div>

        {/* Questions 25-30 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Questions 25-30</h3>
          <p className="mb-4 text-gray-300">Choose the correct letter, A, B or C.</p>

          <div className="space-y-4">
            <div>
              <p className="text-white"><strong>The later life of Thor Heyerdahl</strong></p>
              <p className="text-gray-300">25. According to Victor and Olivia, academics thought that Polynesian migration from the east was impossible due to</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. the fact that Eastern countries were far away.</li>
                <li>B. the lack of materials for boat building.</li>
                <li>C. the direction of the winds and currents.</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300">26. Which do the speakers agree was the main reason for Heyerdahl’s raft journey?</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. to overcome a research setback</li>
                <li>B. to demonstrate a personal quality</li>
                <li>C. to test a new theory</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300">27. What was most important to Heyerdahl about his raft journey?</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. the fact that he was the first person to do it</li>
                <li>B. the speed of crossing the Pacific</li>
                <li>C. the use of authentic construction methods</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300">28. Why did Heyerdahl go to Easter Island?</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. to build a stone statue</li>
                <li>B. to sail a reed boat</li>
                <li>C. to learn the local language</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300">29. In Olivia’s opinion, Heyerdahl’s greatest influence was on</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. theories about Polynesian origins.</li>
                <li>B. the development of archaeological methodology.</li>
                <li>C. establishing archaeology as an academic subject.</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300">30. Which criticism do the speakers make of William Oliver’s textbook?</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. Its style is out of date.</li>
                <li>B. Its content is over-simplified.</li>
                <li>C. Its methodology is flawed.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="p-6 bg-gray-900 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">SECTION 4</h2>

        {/* Questions 31-40 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Questions 31 – 40</h3>
          <p className="mb-4 text-gray-300">Complete the notes below.</p>
          <p className="mb-4 text-gray-300">Write ONE WORD ONLY for each answer.</p>

          <div className="space-y-4">
            <p className="text-white"><strong>THE FUTURE OF MANAGEMENT</strong></p>
            <p className="text-white"><strong>Business markets</strong></p>
            <ul className="list-disc list-inside text-gray-300">
              <li>greater <strong>31<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong> among companies</li>
              <li>increase in power of large <strong>32<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> .</strong> companies</li>
              <li>rising <strong>33<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> ..</strong> in certain countries</li>
            </ul>

            <p className="text-white"><strong>External influences on businesses</strong></p>
            <ul className="list-disc list-inside text-gray-300">
              <li>more discussion with <strong>34<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> …</strong> before making business decisions</li>
              <li>environmental concerns which may lead to more <strong>35<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> ..</strong></li>
            </ul>

            <p className="text-white"><strong>Business structures</strong></p>
            <ul className="list-disc list-inside text-gray-300">
              <li>more teams will be formed to work on a particular <strong>36<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> .</strong></li>
              <li>businesses may need to offer hours that are <strong>37<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> …</strong>, or the chance to work remotely</li>
            </ul>

            <p className="text-white"><strong>Management styles</strong></p>
            <ul className="list-disc list-inside text-gray-300">
              <li>increasing need for managers to provide good <strong>38<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> ..</strong></li>
              <li>changes influenced by <strong>39<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> ..</strong> taking senior roles</li>
            </ul>

            <p className="text-white"><strong>Changes in the economy</strong></p>
            <ul className="list-disc list-inside text-gray-300">
              <li>service sector continues to be important</li>
              <li>increasing value of intellectual property</li>
              <li>more and more <strong>40<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> ..</strong> workers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}