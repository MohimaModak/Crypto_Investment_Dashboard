export default function Dashboard() {
  return (
    <div className="h-screen overflow-y-auto bg-black text-white">
      {/* SECTION 1 */}
      <section className="p-6 shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">SECTION 1</h2>
        <p className="mb-4 text-gray-300">Questions 1 – 6</p>
        <p className="mb-4 text-gray-300">Complete the notes below.</p>
        <p className="mb-4 text-gray-300">Write ONE WORD for each answer.</p>

        <h3 className="text-xl font-semibold mb-4 text-white">SELF-DRIVE TOURS IN THE USA</h3>
        <p className="mb-4 text-gray-300">Example</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400">Name:</label>
            <p className="mt-5 text-white">Andrea <strong className="text-gray-300">Brown</strong></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Address:</label>
            <p className="mt-5 text-white">24 <strong className="text-gray-300">1 <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong> Road</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Postcode:</label>
            <p className="mt-5 text-white">BH5 2OP</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Phone:</label>
            <p className="mt-5 text-white">(mobile) 077 8664 3091</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Heard about company from:</label>
            <p className="mt-5 text-white"><strong className="text-gray-300">2 <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Possible self-drive tours</label>
            <div className="mt-2 space-y-2">
              <p className="text-white"><strong>Trip One:</strong></p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Los Angeles: customer wants to visit some <strong>3 <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong> parks with her children</li>
                <li>Yosemite Park: customer wants to stay in a lodge, not a <strong>4 <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></li>
              </ul>
            </div>

            <div className="mt-2 space-y-2">
              <p className="text-white"><strong>Trip Two:</strong></p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Customer wants to see the <strong>5 <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong> on the way to Cambria</li>
                <li>At Santa Monica: not interested in shopping</li>
                <li>At San Diego, wants to spend time on the <strong>6 <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table for Questions 7-10 */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Questions 7-10</h2>
          <p className="mb-4 text-gray-300">Complete the table below.</p>
          <p className="mb-4 text-gray-300">Write ONE WORD AND/OR A NUMBER for each answer.</p>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black">
                <th className="p-3 text-sm font-medium text-gray-400 border border-gray-700">Number of days</th>
                <th className="p-3 text-sm font-medium text-gray-400 border border-gray-700">Total distance</th>
                <th className="p-3 text-sm font-medium text-gray-400 border border-gray-700">Price (per person)</th>
                <th className="p-3 text-sm font-medium text-gray-400 border border-gray-700">Includes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black">
                <td className="p-3 text-sm text-white border border-gray-700">12 days</td>
                <td className="p-3 text-sm text-white border border-gray-700"><strong>7 <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong> km</td>
                <td className="p-3 text-sm text-white border border-gray-700">£525</td>
                <td className="p-3 text-sm text-white border border-gray-700">
                  <ul className="list-disc list-inside">
                    <li>accommodation</li>
                    <li>car</li>
                    <li>one <strong>8………….</strong></li>
                  </ul>
                </td>
              </tr>
              <tr className="bg-black">
                <td className="p-3 text-sm text-white border border-gray-700">9 days</td>
                <td className="p-3 text-sm text-white border border-gray-700">980 km</td>
                <td className="p-3 text-sm text-white border border-gray-700"><strong>9 £ <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong></td>
                <td className="p-3 text-sm text-white border border-gray-700">
                  <ul className="list-disc list-inside">
                    <li>accommodation</li>
                    <li>car</li>
                    <li><strong>10 <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /> </strong></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="p-6 bg-black shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">SECTION 2</h2>

        {/* Questions 11 and 12 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Questions 11 and 12</h3>
          <p className="mb-4 text-gray-300">Choose TWO letters A-E.</p>
          <p className="mb-4 text-gray-300">Which TWO facilities at the leisure club have recently been improved?</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>A. the gym</li>
            <li>B. the tracks</li>
            <li>C. the indoor pool</li>
            <li>D. the outdoor pool</li>
            <li>E. the sports training for children</li>
          </ul>
        </div>

        {/* Questions 13-20 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Questions 13-20</h3>
          <p className="mb-4 text-gray-300">Complete the notes below.</p>
          <p className="mb-4 text-gray-300">Write NO MORE THAN TWO WORDS for each answer.</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400">Joining the leisure club</label>
              <p className="mt-5 text-white"><strong>Personal Assessment</strong></p>
              <ul className="list-disc list-inside text-gray-300">
                <li>New members should describe any <strong>13 <input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong>.</li>
                <li>The <strong>14<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong> will be explained to you before you use the equipment.</li>
                <li>You will be given a six-week <strong>15<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong>.</li>
              </ul>
            </div>

            <div>
              <p className="mt-5 text-white"><strong>Types of membership</strong></p>
              <ul className="list-disc list-inside text-gray-300">
                <li>There is a compulsory £90 <strong>1<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong> fee for members.</li>
                <li>Gold members are given <strong>17<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong> to all the LP clubs.</li>
                <li>Premier members are given priority during <strong>18<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" />.</strong> hours.</li>
                <li>Premier members can bring some <strong>19<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" />.</strong> every month.</li>
                <li>Members should always take their <strong>20<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong> with them.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="p-6 bg-black shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">SECTION 3</h2>

        {/* Questions 21-25 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Questions 21 – 25</h3>
          <p className="mb-4 text-gray-300">Choose the correct letter, A, B or C.</p>

          <div className="space-y-4">
            <div>
              <p className="text-white"><strong>Global Design Competition</strong></p>
              <p className="text-gray-300">21. Students entering the design competition have to</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. produce an energy-efficient design.</li>
                <li>B. adapt an existing energy-saving appliance.</li>
                <li>C. develop a new use for current technology.</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300">22. John chose a dishwasher because he wanted to make dishwashers</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. more appealing.</li>
                <li>B. more common.</li>
                <li>C. more economical.</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300">23. The stone in John’s ‘Rockpool’ design is used</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. for decoration.</li>
                <li>B. to switch it on.</li>
                <li>C. to stop water escaping.</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300">24. In the holding chamber, the carbon dioxide</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. changes back to a gas.</li>
                <li>B. dries the dishes.</li>
                <li>C. is allowed to cool.</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-300">25. At the end of the cleaning process, the carbon dioxide</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>A. is released into the air.</li>
                <li>B. is disposed of with the waste.</li>
                <li>C. is collected ready to be re-used.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Questions 26-30 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Questions 26-30</h3>
          <p className="mb-4 text-gray-300">Complete the notes below.</p>
          <p className="mb-4 text-gray-300">Write ONE WORD ONLY for each answer.</p>

          <div className="space-y-4">
            <ul className="list-disc list-inside text-gray-300">
              <li>John needs help preparing for his <strong>26<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong>.</li>
              <li>The professor advises John to make a <strong>27<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong> of his design.</li>
              <li>John’s main problem is getting good quality <strong>28<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong>.</li>
              <li>The professor suggests John apply for a <strong>29<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong>.</li>
              <li>The professor will check the <strong>30<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong> information in John’s written report.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="p-6 bg-black shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">SECTION 4</h2>

        {/* Questions 31-40 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Questions 31 – 40</h3>
          <p className="mb-4 text-gray-300">Complete the notes below.</p>
          <p className="mb-4 text-gray-300">Write ONE WORD ONLY for each answer.</p>

          <div className="space-y-4">
            <p className="text-white"><strong>THE SPIRIT BEAR</strong></p>
            <p className="text-white"><strong>General facts</strong></p>
            <ul className="list-disc list-inside text-gray-300">
              <li>It is a white bear belonging to the black bear family.</li>
              <li>Its colour comes from an uncommon <strong>31<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong>.</li>
              <li>Local people believe that it has unusual <strong>32<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong>.</li>
              <li>They protect the bear from <strong>33<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong>.</li>
            </ul>

            <p className="text-white"><strong>Habitat</strong></p>
            <ul className="list-disc list-inside text-gray-300">
              <li>The bear’s relationship with the forest is complex.</li>
              <li>Tree roots stop <strong>34<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong> along salmon streams.</li>
              <li>The bears’ feeding habits provide nutrients for forest vegetation.</li>
              <li>It is currently found on a small number of <strong>35<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong>.</li>
            </ul>

            <p className="text-white"><strong>Threats</strong></p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Habitat is being lost due to deforestation and construction of <strong>3<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong> by logging companies.</li>
              <li>Unrestricted <strong>37<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong> is affecting the salmon supply.</li>
              <li>The bears’ existence is also threatened by their low rate of <strong>38<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong>.</li>
            </ul>

            <p className="text-white"><strong>Going forward</strong></p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Interested parties are working together.</li>
              <li>Logging companies must improve their <strong>39<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong> of logging.</li>
              <li>Maintenance and <strong>40<input type="text" className="py-0.5 px-5 my-3 mx-4 rounded-sm" /></strong> of the spirit bears’ territory is needed.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}