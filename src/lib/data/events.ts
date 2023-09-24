type contact = {
  id?: string;
  name: string;
  number?: string;
  instagram?: string;
  github?: string;
};

type event = {
  eventId: string;
  eventName: string;
  description: string;
  imgSrc: string;
  poster: string;
  category: 'Tech event' | 'Non Tech event';
  facultyCoordinators?: contact[];
  eventHeads: contact[];
  eventVolunteers: contact[];
  date: string;
  time: string;
  venue: string;
};

const events: event[] = [
  {
    eventId: '1',
    eventName: 'PY-IT',
    description: `**Event Name**: PYIT (Practice Your Interview Techniques)  
    **No. of rounds**: 3  
    **Guidelines and Rules of Event**:  
    1. Any Student (From any branch/any semester ) can take part individually.  
    2. Final Winners will be declared from Round 3  
    3. Round 1-Aptitude Test, two stages of 30 minutes each. (Intranet Quiz)  
    -Stage I: General Aptitude, Current Affairs, GK etc(all Participants)  
    -Stage II: Logical Reasoning, Verbal Reasoning etc (Selected participants from Stage I)  
    Round 2: Group Discussion (20 minutes per group)  
    Round 3: Personal Interview (5-7 minutes per participant) (HR-based Interview skills)`,
    imgSrc: '/events/py.gif',
    poster: '/posters/tech/py_it.png',
    category: 'Tech event',
    facultyCoordinators: [
      {
        id: '1',
        name: 'Dr. Vivaksha Jariwala',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Prof. Apurva Mandalaywala',
        number: '00000 00000',
      },
      {
        id: '3',
        name: 'Prof. Mukesh Patel',
        number: '00000 00000',
      },
    ],
    eventHeads: [
      {
        id: '1',
        name: 'Ayushi Garachh',
        number: '90810 20358',
      },
      {
        id: '2',
        name: 'Taashna Jariwala',
        number: '99096 13991',
      },
    ],
    eventVolunteers: [
      {
        id: '1',
        name: 'Harsh Panchal',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Kuldip khuman',
        number: '00000 00000',
      },
      {
        id: '3',
        name: 'Daraksha Ahmednasirwala',
        number: '00000 00000',
      },
      {
        id: '4',
        name: 'Sujal Ghadiya',
        number: '00000 00000',
      },
      {
        id: '5',
        name: 'Hasti Gondaliya',
        number: '00000 00000',
      },
      {
        id: '6',
        name: 'Yash Chauhan',
        number: '00000 00000',
      },
    ],
    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '2',
    eventName: 'Logo Hunt',
    description: `**Event Name**: Logo Hunt  
    **Event Time Duration**: 1 hour  
    **Number of Rounds**: 2  
    **Time Duration of each round**: 30 minutes   
    **Rules**:  
    1. Individual Participation  
    2. Any brand/company/product logos will be given  
    3. Time duration: 30 minutes  
    4. Mobile Phones are strictly prohibited.  `,
    imgSrc: '/events/pepsi.gif',
    poster: '/posters/tech/logo_hunt.png',
    category: 'Tech event',

    facultyCoordinators: [
      {
        id: '1',
        name: 'Prof. Hiren Vavaiya',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Prof. Ankit Patel',
        number: '00000 00000',
      },
    ],

    eventHeads: [
      {
        id: '1',
        name: 'Dhwani Ladani',
        number: '63548 47367',
      },
      {
        id: '2',
        name: 'Suhani Mehta',
        number: '94281 44682',
      },
      {
        id: '3',
        name: 'Vinay Adatiya',
        number: '94278 82822',
      },
    ],

    eventVolunteers: [
      {
        id: '1',
        name: 'Krishna Panchal',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Sahil Sojitra',
        number: '00000 00000',
      },
      {
        id: '3',
        name: 'Disha Deputy',
        number: '00000 00000',
      },
      {
        id: '4',
        name: 'Patel Swarg',
        number: '00000 00000',
      },
      {
        id: '5',
        name: 'Gandhi Karmavee',
        number: '00000 00000',
      },
      {
        id: '6',
        name: 'Kunj Desai',
        number: '00000 00000',
      },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '3',
    eventName: 'IT Quiz',
    description: `**Event Name**: IT-QUIZ  
    It is an MCQ-based quiz that includes questions about information technology and computer fundamentals   
    **Rules**:   
    1. Individual participation   
    2. **No. Of Questions**: 40   
    3. **Time limit**: 30 mins  
    4. Single round   
    5. Mobile phones are strictly prohibited`,
    imgSrc: '/events/quiz.gif',
    poster: '/posters/tech/it_quiz.png',
    category: 'Tech event',

    facultyCoordinators: [
      {
        id: '1',
        name: 'Dr. Mita Parikh',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Prof. Tushar Gohil',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Prof. Ashish Kharwar',
        number: '00000 00000',
      },
    ],

    eventHeads: [
      {
        id: '1',
        name: 'Komal Patel',
        number: '63545 56682',
      },
      {
        id: '2',
        name: 'Yesha Dobariya',
        number: '99788 99022',
      },
      {
        id: '3',
        name: 'Yash Shah',
        number: '94093 16193',
      },
    ],

    eventVolunteers: [
      {
        id: '1',
        name: 'Krish Patel',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Divyang tank',
        number: '00000 00000',
      },
      {
        id: '3',
        name: 'Kena Sutariya',
        number: '00000 00000',
      },
      {
        id: '4',
        name: 'Aarchi Chhayani',
        number: '00000 00000',
      },
      {
        id: '5',
        name: 'Aanand Palan',
        number: '00000 00000',
      },
      {
        id: '6',
        name: 'Patel Heer',
        number: '00000 00000',
      },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '7',
    eventName: 'MindSpark',
    description: `**Event Name**: MindSpark    
    **Event Time Duration**: 3 Hrs. 30 Min Approx.  
    **No. of rounds**: 2  
    **Time Duration of each round**: Round 1: (~60 minutes) Round 2: (~150 minutes)  
    **Guidelines and Rules of Event**:  
    **Team Size**: Minimum: 2 Maximum: 3  
    **Round 1**:  
    - Pitch your idea within 1 Minute (without PPT or any supportive material).  
    - Shortlisted top 10 teams will go to the Round 2.  
    **Round 2**:  
    - Power Point Presentation (PPT) of your idea.  
    - Time for presentation: 5-7 Minutes   
    - Presentation should include various parameters like Idea, Roadmap for execution, Budget required to execute idea, Risk Factors, Feasibility, Scalability, Technology, etc.  
    - After presentation, Question/Answer session will be there.  
    `,
    imgSrc: '/events/mindspark.gif',
    poster: '/posters/tech/mind_spark.png',
    category: 'Tech event',

    facultyCoordinators: [
      {
        id: '1',
        name: 'Prof. Palak Desai',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Prof. Zalak Desai',
        number: '00000 00000',
      },
    ],

    eventHeads: [
      {
        id: '1',
        name: 'Harsh Bardolia',
        number: '83203 39742',
      },
      {
        id: '2',
        name: 'Jashn Jain',
        number: '70439 87683',
      },
    ],

    eventVolunteers: [
      {
        id: '1',
        name: 'Jayesh Parmar',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Joshi virali Amitbhai',
        number: '00000 00000',
      },
      {
        id: '3',
        name: 'Nidhi Patel',
        number: '00000 00000',
      },
      {
        id: '4',
        name: 'Hitakshi Dholakiya',
        number: '00000 00000',
      },
      {
        id: '5',
        name: 'Arham Sheth',
        number: '00000 00000',
      },
      {
        id: '6',
        name: 'Abhishek Dhanani',
        number: '00000 00000',
      },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '4',
    eventName: 'Rise to Crescendo',
    description: `**Event Name**: Rise to Crescendo (Break the Query)    
    **Event Time Duration**: 1 Hour 30 Mins  
    **No. of rounds**: 2 Rounds  
    **Time Duration of each round**: Round 1: 30 Mins Round 2: 45 Mins   
    **Guidelines and Rules of Event**:  
    1. Event consists of 2 Rounds.  
    2. Each team has 2 members.  
    3. Round 1: Elimination Round (MCQ related to Database)  
    Round 2: Solving SQL Queries for the given data.  
    4. From Round 1, Top 5 teams will be selected on the basis of score.  
    (Vary on the basis of number of participation)  
    5. Technology: SQL   
    `,
    imgSrc: '/events/crescendo.gif',
    poster: '/posters/tech/rise_to_crescendo.png',
    category: 'Tech event',

    facultyCoordinators: [
      {
        id: '1',
        name: 'Prof. Juhi Mehta',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Prof. Dhyani Joshi',
        number: '00000 00000',
      },
    ],

    eventHeads: [
      {
        id: '1',
        name: 'Krisha Patel',
        number: '99987 48733',
      },
      {
        id: '2',
        name: 'Pranavi Mehta',
        number: '97275 15332',
      },
    ],

    eventVolunteers: [
      {
        id: '1',
        name: 'Mili Chanchpara',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Tanisha Agarwal',
        number: '00000 00000',
      },
      {
        id: '3',
        name: 'Chauhan Tisha',
        number: '00000 00000',
      },
      {
        id: '4',
        name: 'Vruxali Borsaniya',
        number: '00000 00000',
      },
      {
        id: '5',
        name: 'Om Chimna',
        number: '00000 00000',
      },
      {
        id: '6',
        name: 'Amaan Payak',
        number: '00000 00000',
      },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '5',
    eventName: 'Bug Buzz',
    description: `**Event Name**: BugBuzz  
    **Event Time Duration**:  1:15 hr  
    **No. of rounds**: 2    
    **Time Duration of each round**: 30 minutes(per round)  
    **Guidelines and Rules of Event**:   
    1. Individual participation.  
    3. In first round top 20 candidates will be selected based on time  
    (vary according to no.of participants) for second round.  
    `,
    imgSrc: '/events/bug.gif',
    poster: '/posters/tech/bug_buzz.png',
    category: 'Tech event',

    facultyCoordinators: [
      {
        id: '1',
        name: 'Prof. Karuna Patel',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Prof. Foram Patel',
        number: '00000 00000',
      },
      {
        id: '3',
        name: 'Prof. Bhargavi Rani',
        number: '00000 00000',
      },
    ],

    eventHeads: [
      {
        id: '1',
        name: 'Smit Gabani',
        number: '75671 06263',
      },
      {
        id: '2',
        name: 'Jeel Patel',
        number: '94274 76665',
      },
    ],

    eventVolunteers: [
      {
        id: '1',
        name: 'Sonawane Nupur',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Jenish Makwana',
        number: '00000 00000',
      },
      {
        id: '3',
        name: 'Tanvi vaghasiya',
        number: '00000 00000',
      },
      {
        id: '4',
        name: 'PARTH TARSARIYA',
        number: '00000 00000',
      },
      {
        id: '5',
        name: 'Kruti kikani',
        number: '00000 00000',
      },
      {
        id: '6',
        name: 'Parth gabani',
        number: '00000 00000',
      },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '6',
    eventName: 'Codathon',
    description: `**Event Name**: Codathon  
    **Event Time Duration**: 2 hours (50mins for first participation and second member will continue the coding from there.)  
    **Number of Rounds**: 1  
    Maximum of 2 people allowed in one team  
    There will be relay coding where first member will code for 50 minutes
    and then second member will continue the coding from there.`,
    imgSrc: '/events/esports.gif',
    poster: '/posters/tech/codathon.png',
    category: 'Tech event',

    facultyCoordinators: [
      {
        id: '1',
        name: 'Prof. Hiren Vavaiya',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Prof. Karishma Desai',
        number: '00000 00000',
      },
      {
        id: '3',
        name: 'Prof. Ankit Patel',
        number: '00000 00000',
      },
    ],

    eventHeads: [
      {
        id: '1',
        name: 'Viddhi Ladva',
        number: '78020 99520',
      },
      {
        id: '2',
        name: 'Priyanshi Sutariya',
        number: '97235 95118',
      },
    ],

    eventVolunteers: [
      {
        id: '1',
        name: 'Het Salmawala',
        number: '00000 00000',
      },
      {
        id: '2',
        name: 'Vidhi Doctor',
        number: '00000 00000',
      },
      {
        id: '3',
        name: 'Disha Bhatia',
        number: '00000 00000',
      },
      {
        id: '4',
        name: 'Twisha Savani',
        number: '00000 00000',
      },
      {
        id: '5',
        name: 'Prapti Mehta',
        number: '00000 00000',
      },
      {
        id: '6',
        name: 'Chodvadiya Aryan',
        number: '00000 00000',
      },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '8',
    eventName: "The Spy's eye",
    description: `**Event Name**: The Spy's eye  
    **Rounds**: One Round  
    **Event Duration**: Time for one group is 15 to 20 minutes  
    **Group Size**: 6/7 group of people are allowed(highly recommended) But if you don't have any group then also you can participate (we will adjust group for you)  
    **Winning Criteria**: One winner will be declared from each group of 6 participants  
    `,
    imgSrc: '/events/spy-eye.gif',
    poster: '/posters/nontech/the_spys_eye.png',
    category: 'Non Tech event',
    eventHeads: [
      {
        id: '1',
        name: 'Harsh Gajjar',
        number: '97278 31907',
      },
      {
        id: '2',
        name: 'Raj Shah',
        number: '87585 02335',
      },
    ],

    eventVolunteers: [
      { name: 'Harsh Gheewala' },
      { name: 'Abdulmateen Shamsi' },
      { name: 'Umesh Tumma' },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '9',
    eventName: 'Capture Quest',
    description: `**Event Name**: CAPTURE QUEST  
    Find. Click. Share  
  1. Solve riddles, capture answers around campus.  
  2. Crack the clues in given time limits.  
  3. Send snapshots via WhatsApp to our trusty volunteers.  
  4. Form a team of 3-5 adventurous souls.  
  5. Don't forget to carry your ID for this extraordinary journey.  
  **Entry Fee**: Only 20 golden coins per head
  Win cash prizes and bask in the glory of your triumph! `,
    imgSrc: '/events/capture_quest.gif',
    poster: '/posters/nontech/capture_quest.png',
    category: 'Non Tech event',
    eventHeads: [
      {
        id: '1',
        name: 'Prapti Mehta',
        number: '63550 41063',
      },
      {
        id: '2',
        name: 'Disha Bhatia',
        number: '99985 82557',
      },
    ],
    eventVolunteers: [
      { name: 'Arham Sheth', instagram: 'arham_shah._' },
      { name: 'Bhavya Bavisi ', instagram: 'bhavya_040' },
      { name: 'Nisit Patel ', instagram: 'nisit_a_patel' },
      { name: 'Vidhi Doctor ', instagram: 'vidhidoctor' },
      { name: 'Viraj Dapkawala' },
      { name: 'Kunj Desai', instagram: 'kunj_2834' },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '10',
    eventName: 'Filmy Dhundhamaka',
    description: `**Event Name**: FILMY DHUN DHAMAKA  
    **Team tukdi**: 3 members per team  
    Three obstacles to your win  
      1. Jab koi clue mil jaye, to baat ban jaye - Guess the songs from emojis  
      2. Aree deewano mujhe pehchano - List out your favourite bollywood idol's movie names  
      3. Hum saath saath hai - SURPRISE!!!![For Bollywood hunterss]  
    There will be time limits for each round  
    **Mandatory**: Carry a pen & paper & your Bollywood enthusiasm and the winner team gets rewards  
    **Entry fees**: 30 Rs`,
    imgSrc: '/events/filmy_dhoomdhadaka.gif',
    poster: '/posters/nontech/filmy_dhoomdhadaka.jpg',
    category: 'Non Tech event',
    eventHeads: [
      {
        id: '1',
        name: 'Diya Moradiya',
        number: '97277 49854',
      },
      {
        id: '2',
        name: 'Vedanshi Ponkia',
        number: '90233 81245',
      },
      {
        id: '3',
        name: 'Diya Patel',
        number: '98247 61515',
      },
    ],
    eventVolunteers: [
      { name: 'Krisha Tejani' },
      { name: 'Prina Bhagat' },
      { name: 'Krishna Panwala' },
      { name: 'Moksha Suhagiya' },
      { name: 'Dev Parneria' },
      { name: 'Jash Charodiya' },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '11',
    eventName: 'Auction Ka Adda',
    description: `**Event Name**: Auction Ka Adda  
- Registered team have to Bid and make team of 4 Players  
- Each team have to buy One Wicketkeeper, Batsmen, Bowler and All-Rounder   
- 1,00,000 credits will be given   
- Best team will be declared as winner   
And winner team will decided by the past IPL performance of their players   
- One Registered Team will be of 3 Members   
**Entry Fees** : 30 /-
`,
    imgSrc: '/events/auction.gif',
    poster: '/posters/nontech/auction_ka_adda.jpg',
    category: 'Non Tech event',
    eventHeads: [
      {
        id: '1',
        name: 'Krish Dhola',
        number: '99049 15704',
      },
      {
        id: '2',
        name: 'Krishna Desai',
        number: '96240 81220',
      },
    ],
    eventVolunteers: [
      { name: 'Krish Vanani' },
      { name: 'Akshat Moradiya' },
      { name: 'Jash Chheta' },
      { name: 'Preet Mehta' },
      { name: 'Malav Radia' },
      { name: 'Parth Desai' },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '12',
    eventName: 'Penalty Shootout',
    description: `**Event Name**: PENALTY SHOOTOUT     
    **Registration fee**: Rs 20  
    **Rules**   
    - penalty would be taken from 20 meter  
    - no goalkeeper   
    - 3 chance would be given per player  
    - the one who hits all 3 shoots gets a prize   
`,
    imgSrc: '/events/penalty_shootout.gif',
    poster: '/posters/nontech/penalty_shootout.jpg',
    category: 'Non Tech event',
    eventHeads: [
      {
        id: '1',
        name: 'Rohan Kahar',
        number: '70168 13756',
      },
      {
        id: '2',
        name: 'Gati Ambaliya',
        number: '63549 75099',
      },
    ],
    eventVolunteers: [
      { name: 'Kartavya Master', instagram: '_kartavya_17' },
      { name: 'Anjal Qureshi ', instagram: '18.anjal' },
      { name: 'Rushikesh Jani', instagram: 'rushikeshjanii' },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '13',
    eventName: 'Esports Revolution',
    description: `**Event name**: Esports Revolution   
    **Entry fee**: 60 Rs.   
    **Rules**:  
    - IF WE CATCH ANY HACKER, HACKER TEAM WILL BE BANNED ON THE SPOT   
    - EVERYONE HAVE TO TAKE SCREENSHOT OF RESULT AT THE END OF THE MATCH   
    - NO ON SPOT ENTRY   
`,
    imgSrc: '/events/esports.gif',
    poster: '/posters/nontech/esport_revolution.jpg',
    category: 'Non Tech event',
    eventHeads: [
      {
        id: '1',
        name: 'Vanani Ayush',
        number: '99799 25276',
      },
      {
        id: '2',
        name: 'Het Ukani',
        number: '96243 46848',
      },
    ],
    eventVolunteers: [
      { name: 'Prince Viradiya' },
      { name: 'Dhruv Italiya' },
      { name: 'Neel Madakana' },
      { name: 'Kunj Radadiya' },
      { name: 'Jainil Rangani' },
      { name: 'Kevin Valiya' },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
  {
    eventId: '14',
    eventName: 'Counter Strike',
    description: `**Event name**: Counter Strike  
    **Entry Fee**: 80rs per team (4 Players)  
    **Cash Prizes**: Winner & Runners Up  
    **Maps**: $2000, de_dust2 , de_inferno
    **Version**: CS 1.6  
    **Rules**:   
    1) Tournament Format - Knockout  
    2) First Few rounds will be played in $2000 map  
    3) Semi-final and Final Will be played in de_dust2 & de_inferno  
    4) No headphones/ Earphones will be given. You can bring your own if you want(wired only)  
    5) Management's Decision will be final  
`,
    imgSrc: '/events/cs.gif',
    poster: '/posters/nontech/counter_strike.jpg',
    category: 'Non Tech event',
    eventHeads: [
      {
        id: '1',
        name: 'Jay Jariwala',
        number: '83205 37469',
      },
      {
        id: '2',
        name: 'Om Boghara',
        number: '90890 89292',
      },
    ],
    eventVolunteers: [
      { name: 'Dhaivat Barot' },
      {
        name: 'Kenil Avaiya',
        instagram: 'kenil_avaiya',
        github: 'kenilavaiya',
      },
      { name: 'Mann Miyani' },
      { name: 'Krupansh Nakrani' },
    ],

    date: '30/09/2022',
    time: '09:15 AM - 10:15 AM',
    venue: 'IT Lab - 1, 2, 3',
  },
];

export default events;
