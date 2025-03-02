import React from 'react';
import photo from "../../../assets/Gallery/13-1.png"

export default function Jayanti() {
    return (
        <div className="h-screen overflow-y-auto w-full bg-white text-black p-5">
            {/* SECTION 1 */}
            <div>
                <h2 className="text-xl font-bold mb-4">SECTION 1</h2>
                <p>Complete the table below.</p>
                <p>Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.</p>
                <div className="mt-4">
                    <h3 className="font-bold">COOKERY CLASSES</h3>
                    <table className="w-full border-collapse border border-gray-500 mt-2">
                        <thead>
                            <tr>
                                <th className="border border-gray-500 p-2">Cookery Class</th>
                                <th className="border border-gray-500 p-2">Focus</th>
                                <th className="border border-gray-500 p-2">Other Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-500 p-2">Example: The Food <strong>Studio</strong></td>
                                <td className="border border-gray-500 p-2">how to <strong>1. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> and cook with seasonal products</td>
                                <td className="border border-gray-500 p-2">
                                    <ul className="list-disc pl-5">
                                        <li>small classes</li>
                                        <li>also offers <strong>2. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> classes</li>
                                        <li>clients who return get a <strong>3. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> discount</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-500 p-2">Bond’s Cookery School</td>
                                <td className="border border-gray-500 p-2">food that is <strong>4. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></td>
                                <td className="border border-gray-500 p-2">
                                    <ul className="list-disc pl-5">
                                        <li>includes recipes to strengthen your <strong>5. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></li>
                                        <li>they have a free <strong>6. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> every Thursday</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-500 p-2">The <strong>7. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> Centre</td>
                                <td className="border border-gray-500 p-2">mainly <strong>8. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> food</td>
                                <td className="border border-gray-500 p-2">
                                    <ul className="list-disc pl-5">
                                        <li>located near the <strong>9. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></li>
                                        <li>a special course in skills with a <strong>10. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> is sometimes available</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* SECTION 2 */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">SECTION 2</h2>
                <div>
                    <p><strong>Questions 11 – 13</strong></p>
                    <p>Choose the correct letter, <strong>A, B or C</strong>.</p>
                    <p>11. Why are changes needed to traffic systems in Granford?</p>
                    <ul className="list-disc pl-5">
                        <li>A. The number of traffic accidents has risen.</li>
                        <li>B. The amount of traffic on the roads has increased.</li>
                        <li>C. The types of vehicles on the roads have changed.</li>
                    </ul>
                    <p>12. In a survey, local residents particularly complained about</p>
                    <ul className="list-disc pl-5">
                        <li>A. dangerous driving by parents.</li>
                        <li>B. pollution from trucks and lorries.</li>
                        <li>C. inconvenience from parked cars.</li>
                    </ul>
                    <p>13. According to the speaker, one problem with the new regulations will be</p>
                    <ul className="list-disc pl-5">
                        <li>A. raising money to pay for them.</li>
                        <li>B. finding a way to make people follow them.</li>
                        <li>C. getting the support of the police.</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <p><strong>Questions 14-20</strong></p>
                    <p>Label the map below.</p>
                    <img src={photo} className='my-8' />
                    <p>Write the correct letter, <strong>A-I</strong>, next to Questions 14-20.</p>
                    <ul className="list-disc pl-5">
                        <li>14. New traffic lights <strong><input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></li>
                        <li>15. Pedestrian crossing <strong><input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></li>
                        <li>16. Parking allowed <strong><input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></li>
                        <li>17. New ‘No Parking’ sign <strong><input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></li>
                        <li>18. New disabled parking spaces <strong><input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></li>
                        <li>19. Widened pavement <strong><input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></li>
                        <li>20. Lorry loading/unloading restrictions <strong><input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></li>
                    </ul>
                </div>
            </div>

            {/* SECTION 3 */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">SECTION 3</h2>
                <div>
                    <p><strong>Questions 21 – 25</strong></p>
                    <p>Choose the correct letter, <strong>A, B or C</strong>.</p>
                    <p>21. Why is Jack interested in investigating seed germination?</p>
                    <ul className="list-disc pl-5">
                        <li>A. He may do a module on a related topic later on.</li>
                        <li>B. He wants to have a career in plant science.</li>
                        <li>C. He is thinking of choosing this topic for his dissertation.</li>
                    </ul>
                    <p>22. Jack and Emma agree the main advantage of their present experiment is that it can be</p>
                    <ul className="list-disc pl-5">
                        <li>A. described very easily.</li>
                        <li>B. carried out inside the laboratory.</li>
                        <li>C. completed in the time available.</li>
                    </ul>
                    <p>23. What do they decide to check with their tutor?</p>
                    <ul className="list-disc pl-5">
                        <li>A. whether their aim is appropriate</li>
                        <li>B. whether anyone else has chosen this topic</li>
                        <li>C. whether the assignment contributes to their final grade</li>
                    </ul>
                    <p>24. They agree that Graves’ book on seed germination is disappointing because</p>
                    <ul className="list-disc pl-5">
                        <li>A. it fails to cover recent advances in seed science.</li>
                        <li>B. the content is irrelevant for them.</li>
                        <li>C. its focus is very theoretical.</li>
                    </ul>
                    <p>25. What does Jack say about the article on seed germination by Lee Hall?</p>
                    <ul className="list-disc pl-5">
                        <li>A. The diagrams of plant development are useful.</li>
                        <li>B. The analysis of seed germination statistics is thorough.</li>
                        <li>C. The findings on seed germination after fires are surprising.</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <p><strong>Questions 26-30</strong></p>
                    <p>Complete the flow-chart below.</p>
                    <p>Choose the correct letter, <strong>A-H</strong>, for each answer.</p>
                    <div className="mt-2">
                        <p><strong>Stage in the experiment</strong></p>
                        <ul className="list-disc pl-5">
                            <li>Select seeds of different <strong>26. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> and sizes.</li>
                            <li>↓</li>
                            <li>Measure and record the <strong>27. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> and size of each one.</li>
                            <li>↓</li>
                            <li>Decide on the <strong>28. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> to be used.</li>
                            <li>↓</li>
                            <li>Use a different <strong>29. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> for each seed and label it.</li>
                            <li>↓</li>
                            <li>After about 3 weeks, record the plant’s <strong>30. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong>.</li>
                            <li>↓</li>
                            <li>Investigate the findings.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* SECTION 4 */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">SECTION 4</h2>
                <div>
                    <p><strong>Questions 31 – 40</strong></p>
                    <p>Complete the notes below.</p>
                    <p>Write <strong>ONE WORD ONLY</strong> for each answer.</p>
                    <div className="mt-4">
                        <h3 className="font-bold">Effects of urban environments on animals</h3>
                        <p><strong>Introduction</strong></p>
                        <ul className="list-disc pl-5">
                            <li>Recent urban developments represent massive environmental changes. It was previously thought that only a few animals were suitable for city life, e.g.</li>
                            <ul className="list-disc pl-5">
                                <li>the <strong>31. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> – because of its general adaptability</li>
                                <li>the pigeon – because walls of city buildings are similar to <strong>32. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></li>
                            </ul>
                            <li>In fact, many urban animals are adapting with unusual <strong>33. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></li>
                        </ul>
                        <p><strong>Recent research</strong></p>
                        <ul className="list-disc pl-5">
                            <li>Emilie Snell-Rood studied small urbanised mammal specimens from museums in Minnesota.</li>
                            <ul className="list-disc pl-5">
                                <li>She found the size of their <strong>34. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> had increased.</li>
                                <li>She suggests this may be due to the need to locate new sources of <strong>35. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> and to deal with new dangers.</li>
                            </ul>
                            <li>Catarina Miranda focused on the <strong>36. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> of urban and rural blackbirds.</li>
                            <ul className="list-disc pl-5">
                                <li>She found urban birds were often braver, but were afraid of situations that were <strong>37. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong></li>
                            </ul>
                            <li>Jonathan Atwell studies how animals respond to urban environments.</li>
                            <ul className="list-disc pl-5">
                                <li>He found that some animals respond to <strong>38. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> by producing lower levels of hormones.</li>
                            </ul>
                            <li>Sarah Partan’s team found urban squirrels use their <strong>39. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong> to help them communicate.</li>
                        </ul>
                        <p><strong>Long-term possibilities</strong></p>
                        <ul className="list-disc pl-5">
                            <li>Species of animals may develop which are unique to cities. However, some changes may not be <strong>40. <input type="py-0.5 px-5 my-3 mx-4 rounded-sm border-2 border-slate-300" /></strong>.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}