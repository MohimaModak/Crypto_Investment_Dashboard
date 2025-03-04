import { Checkbox } from "@mui/material";

export default function Transactions() {
  return (
    <div className="h-screen overflow-y-auto text-black bg-white  p-10 rounded-md">
      <h1 className="text-2xl  bg-white font-bold mb-5">Early Learning Childcare Centre</h1>
      <h2 className="text-xl font-semibold mb-4">Enrolment Form</h2>

      <h3 className="font-semibold mb-2">Personal Details</h3>
      <p>Child’s name: Kate</p>
      <p>Age: 1. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>Address: 2. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        Road, Woodside, 4032</p>
      <p>Phone: 3345 9865</p>

      <h3 className="font-semibold mt-4 mb-2">Childcare Information</h3>
      <p>Days enrolled for: Monday and 3. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>Start time: 4. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        am</p>
      <p>Childcare group: the 5. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        group</p>
      <p>Which meal/s are required each day? 6. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>Medical conditions: needs 7. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>Emergency contact: Jenny 8. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        Phone: 3346 7523</p>
      <p>Relationship to child: 9. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>

      <h3 className="font-semibold mt-4 mb-2">Fees</h3>
      <p>Will pay each 10. <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-4">Section 2 - Dolphin Conservation Trust</h2>
      <h3 className="font-semibold mb-2">Which TWO things does Alice say about the Dolphin Conservation Trust?</h3>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A.  Children make up most of the membership.</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B.  It’s the country’s largest conservation organisation.</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C.  It helps finance campaigns for changes in fishing practices.</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>D.  It employs several dolphin experts full-time.</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>E.  Volunteers help in various ways.</p>

      <h3 className="font-semibold mt-4 mb-2">Questions 13-15</h3>
      <br />
      <p>13. Why is Alice so pleased the Trust has won the Charity Commission award?</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A .  It has brought in extra money.</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B .  It made the work of the trust better known.</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C .  It has attracted more members.</p>

      <br />
      <p>14. Alice says oil exploration causes problems to dolphins because of</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A.  noise.</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B.  oil leaks.</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C.  movement of ships.</p>
      <br />
      <p>15. Alice became interested in dolphins when</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A .  she saw one swimming near her home.</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B .  she heard a speaker at her school.</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C .  she read a book about them.</p>
      <br />
      <h1 className="font-bold my-5">Dolphins</h1>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A. Moondancer</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B. Echo</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C. Kiwi</p>
      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>D. Samson</p>

      <h1 className="font-bold my-5">Comments</h1>

      <h3 className="font-semibold mt-4 text-xl mb-2">Questions 16-20 - Dolphin Comments</h3>
      <p>It has not been seen this year.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>It is photographed more than the others.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>It is always very energetic.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>It is the newest one in the scheme.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>It has an unusual shape.<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-4">Theatre Studies Course</h2>
      <br />
      <p>21. What helped Rob to prepare to play the character of a doctor?</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A.  the stories his grandfather told him</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B.  the times when he watched his grandfather working</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C.  the way he imagined his grandfather at work</p>
      <br />

      <p>22. In the play’s first scene, the boredom of village life was suggested by</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A.   repetition of words and phrases.</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B.   scenery painted in dull colours.</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C.   long pauses within conversations.</p>
      <br />
      <p>23. What has Rob learned about himself through working in a group?</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A .  He likes to have clear guidelines.</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B .  He copes well with stress.</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C .  He thinks he is a good leader.</p>
      <br />
      <p>24. To support the production, research material was used which described</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A.   political developments.</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B.   changing social attitudes.</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C.   economic transformations.</p>
      <br />
      <p>25. What problem did the students overcome in the final rehearsal?</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A .  one person forgetting their words</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B .  an equipment failure</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C .  the injury of one character</p>

      <h3 className="font-semibold mt-4 mb-2">Questions 26-30 - 'Year Abroad' Option</h3>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>A be on time</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>B get a letter of recommendation</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>C plan for the final year</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>D make sure the institution’s focus is relevant</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>E show ability in Theatre Studies</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>F make travel arrangements and bookings</p>

      <span className='bg-white w-5 h-5 flex justify-center items-center '><Checkbox></Checkbox></span><p>G ask for help</p>

      <h1 className="font-bold my-5">Stages in doing the ‘year abroad’ option</h1>

      <p>26. in the second year of the course                       <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>27. when first choosing where to go                       <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>28. when sending in your choices                           <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>29. when writing your personal statement            <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>30. when doing the year abroad                              <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-4">Self-regulatory Focus Theory and Leadership</h2>
      <p>31. Promotion goals focus on 31 <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>32. comes from one’s 32 <input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>33. we are more likely to focus on promotion goals when with a 34<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>34. we are more likely to focus on prevention goals with our boss</p>

      <p>35. Promotion Focus: People think about an ideal version of themselves, their 35<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        and their gains.</p>
      <p>36. Prevention Focus: People think about their ‘ought’ self and their obligations</p>

      <p>37. Leadership behaviour and 36<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        . affects people’s focus</p>

      <p>38. Transformational Leaders:</p>
      <p>pay special attention to the 37<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        . of their followers</p>
      <p>39. passionately communicate a clear 38<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        .</p>
      <p>40. inspire promotion focus in followers</p>

      <p>41. Transactional Leaders:</p>
      <p>create 39<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
        to make expectations clear</p>
      <p>emphasise the results of a mistake</p>
      <p>inspire prevention focus in followers</p>

      <p>42. Conclusion</p>
      <p>Promotion Focus is good for jobs requiring 40<input type="text" className='text-black my-3 border-2 border-black rounded-md' />
      </p>
      <p>Prevention Focus is good for work such as a surgeon</p>
      <p>Leaders’ actions affect which focus people use.</p>
    </div>
  );
}
