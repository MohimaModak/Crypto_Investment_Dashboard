export default function Dashboard() {
  return (
    <div className="h-screen overflow-y-auto bg-white text-black text-bl">
      {/* SECTION 1 */}
      <section className="p-6  shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 ">SECTION 1</h2>
        <p className="mb-4 text-">Questions 1 – 6</p>
        <p className="mb-4 text-">Complete the notes below.</p>
        <p className="mb-4 text-">Write ONE WORD for each answer.</p>

        <h3 className="text-xl font-semibold mb-4 ">SELF-DRIVE TOURS IN THE USA</h3>
        <p className="mb-4 text-">Example</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-">Name:</label>
            <p className="mt-5 ">Andrea <strong className="text-">Brown</strong></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-">Address:</label>
            <p className="mt-5 ">24 <strong className="text-">1. <input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong> Road</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-">Postcode:</label>
            <p className="mt-5 ">BH5 2OP</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-">Phone:</label>
            <p className="mt-5 ">(mobile) 077 8664 3091</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-">Heard about company from:</label>
            <p className="mt-5 "><strong className="text-">2 <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-">Possible self-drive tours</label>
            <div className="mt-2 space-y-2">
              <p className=""><strong>Trip One:</strong></p>
              <ul className="list-disc list-inside text-">
                <li>Los Angeles: customer wants to visit some <strong>3 <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong> parks with her children</li>
                <li>Yosemite Park: customer wants to stay in a lodge, not a <strong>4 <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></li>
              </ul>
            </div>

            <div className="mt-2 space-y-2">
              <p className=""><strong>Trip Two:</strong></p>
              <ul className="list-disc list-inside text-">
                <li>Customer wants to see the <strong>5 <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong> on the way to Cambria</li>
                <li>At Santa Monica: not interested in shopping</li>
                <li>At San Diego, wants to spend time on the <strong>6 <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table for Questions 7-10 */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 ">Questions 7-10</h2>
          <p className="mb-4 text-">Complete the table below.</p>
          <p className="mb-4 text-">Write ONE WORD AND/OR A NUMBER for each answer.</p>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white">
                <th className="p-3 text-sm font-medium text- border border-gray-700">Number of days</th>
                <th className="p-3 text-sm font-medium text- border border-gray-700">Total distance</th>
                <th className="p-3 text-sm font-medium text- border border-gray-700">Price (per person)</th>
                <th className="p-3 text-sm font-medium text- border border-gray-700">Includes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 text-sm  border border-gray-700">12 days</td>
                <td className="p-3 text-sm  border border-gray-700"><strong>7 <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong> km</td>
                <td className="p-3 text-sm  border border-gray-700">£525</td>
                <td className="p-3 text-sm  border border-gray-700">
                  <ul className="list-disc list-inside">
                    <li>accommodation</li>
                    <li>car</li>
                    <li>one <strong>8………….</strong></li>
                  </ul>
                </td>
              </tr>
              <tr className="bg-black">
                <td className="p-3 text-sm  border border-gray-700">9 days</td>
                <td className="p-3 text-sm  border border-gray-700">980 km</td>
                <td className="p-3 text-sm  border border-gray-700"><strong>9 £ <input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong></td>
                <td className="p-3 text-sm  border border-gray-700">
                  <ul className="list-disc list-inside">
                    <li>accommodation</li>
                    <li>car</li>
                    <li><strong>10 <input type="text" className='text-black my-3 border-2 border-black rounded-md' /> </strong></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="p-6 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 ">SECTION 2</h2>

        {/* Questions 11 and 12 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 ">Questions 11 and 12</h3>
          <p className="mb-4 text-">Choose TWO letters A-E.</p>
          <p className="mb-4 text-">Which TWO facilities at the leisure club have recently been improved?</p>
          <ul className="list-disc list-inside text-">
            <li>A. the gym</li>
            <li>B. the tracks</li>
            <li>C. the indoor pool</li>
            <li>D. the outdoor pool</li>
            <li>E. the sports training for children</li>
          </ul>
        </div>

        {/* Questions 13-20 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 ">Questions 13-20</h3>
          <p className="mb-4 text-">Complete the notes below.</p>
          <p className="mb-4 text-">Write NO MORE THAN TWO WORDS for each answer.</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-">Joining the leisure club</label>
              <p className="mt-5 "><strong>Personal Assessment</strong></p>
              <ul className="list-disc list-inside text-">
                <li>New members should describe any <strong>13 <input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong>.</li>
                <li>The <strong>14<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong> will be explained to you before you use the equipment.</li>
                <li>You will be given a six-week <strong>15<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong>.</li>
              </ul>
            </div>

            <div>
              <p className="mt-5 "><strong>Types of membership</strong></p>
              <ul className="list-disc list-inside text-">
                <li>There is a compulsory £90 <strong>1<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong> fee for members.</li>
                <li>Gold members are given <strong>17<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong> to all the LP clubs.</li>
                <li>Premier members are given priority during <strong>18<input type="text" className='text-black my-3 border-2 border-black rounded-md' />.</strong> hours.</li>
                <li>Premier members can bring some <strong>19<input type="text" className='text-black my-3 border-2 border-black rounded-md' />.</strong> every month.</li>
                <li>Members should always take their <strong>20<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong> with them.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="p-6 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 ">SECTION 3</h2>

        {/* Questions 21-25 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 ">Questions 21 – 25</h3>
          <p className="mb-4 text-">Choose the correct letter, A, B or C.</p>

          <div className="space-y-4">
            <div>
              <p className=""><strong>Global Design Competition</strong></p>
              <p className="text-">21. Students entering the design competition have to</p>
              <ul className="list-disc list-inside text-">
                <li>A. produce an energy-efficient design.</li>
                <li>B. adapt an existing energy-saving appliance.</li>
                <li>C. develop a new use for current technology.</li>
              </ul>
            </div>

            <div>
              <p className="text-">22. John chose a dishwasher because he wanted to make dishwashers</p>
              <ul className="list-disc list-inside text-">
                <li>A. more appealing.</li>
                <li>B. more common.</li>
                <li>C. more economical.</li>
              </ul>
            </div>

            <div>
              <p className="text-">23. The stone in John’s ‘Rockpool’ design is used</p>
              <ul className="list-disc list-inside text-">
                <li>A. for decoration.</li>
                <li>B. to switch it on.</li>
                <li>C. to stop water escaping.</li>
              </ul>
            </div>

            <div>
              <p className="text-">24. In the holding chamber, the carbon dioxide</p>
              <ul className="list-disc list-inside text-">
                <li>A. changes back to a gas.</li>
                <li>B. dries the dishes.</li>
                <li>C. is allowed to cool.</li>
              </ul>
            </div>

            <div>
              <p className="text-">25. At the end of the cleaning process, the carbon dioxide</p>
              <ul className="list-disc list-inside text-">
                <li>A. is released into the air.</li>
                <li>B. is disposed of with the waste.</li>
                <li>C. is collected ready to be re-used.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Questions 26-30 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 ">Questions 26-30</h3>
          <p className="mb-4 text-">Complete the notes below.</p>
          <p className="mb-4 text-">Write ONE WORD ONLY for each answer.</p>

          <div className="space-y-4">
            <ul className="list-disc list-inside text-">
              <li>John needs help preparing for his <strong>26<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong>.</li>
              <li>The professor advises John to make a <strong>27<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong> of his design.</li>
              <li>John’s main problem is getting good quality <strong>28<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong>.</li>
              <li>The professor suggests John apply for a <strong>29<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong>.</li>
              <li>The professor will check the <strong>30<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong> information in John’s written report.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 ">SECTION 4</h2>

        {/* Questions 31-40 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 ">Questions 31 – 40</h3>
          <p className="mb-4 text-">Complete the notes below.</p>
          <p className="mb-4 text-">Write ONE WORD ONLY for each answer.</p>

          <div className="space-y-4">
            <p className=""><strong>THE SPIRIT BEAR</strong></p>
            <p className=""><strong>General facts</strong></p>
            <ul className="list-disc list-inside text-">
              <li>It is a white bear belonging to the black bear family.</li>
              <li>Its colour comes from an uncommon <strong>31<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong>.</li>
              <li>Local people believe that it has unusual <strong>32<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong>.</li>
              <li>They protect the bear from <strong>33<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong>.</li>
            </ul>

            <p className=""><strong>Habitat</strong></p>
            <ul className="list-disc list-inside text-">
              <li>The bear’s relationship with the forest is complex.</li>
              <li>Tree roots stop <strong>34<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong> along salmon streams.</li>
              <li>The bears’ feeding habits provide nutrients for forest vegetation.</li>
              <li>It is currently found on a small number of <strong>35<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong>.</li>
            </ul>

            <p className=""><strong>Threats</strong></p>
            <ul className="list-disc list-inside text-">
              <li>Habitat is being lost due to deforestation and construction of <strong>3<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong> by logging companies.</li>
              <li>Unrestricted <strong>37<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong> is affecting the salmon supply.</li>
              <li>The bears’ existence is also threatened by their low rate of <strong>38<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong>.</li>
            </ul>

            <p className=""><strong>Going forward</strong></p>
            <ul className="list-disc list-inside text-">
              <li>Interested parties are working together.</li>
              <li>Logging companies must improve their <strong>39<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong> of logging.</li>
              <li>Maintenance and <strong>40<input type="text" className='text-black my-3 border-2 border-black rounded-md' /></strong> of the spirit bears’ territory is needed.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}