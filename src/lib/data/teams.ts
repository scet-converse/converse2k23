// TODO: Remove optional people after data filling is complete

type MemberProps = {
  name: string;
  instagram?: string;
  github?: string;
};

type Member = {
  [key: string]: MemberProps[];
};

type Team = {
  title: string;
  slug: string;
  people?: Member;
};

const teams: Team[] = [
  {
    title: 'Graphics and Web',
    slug: 'graphics_and_web',
    people: {
      'Team Coordinator': [
        {
          name: 'Bhagya Patel',
          instagram: 'maybe_its_bhagya',
          github: 'Code-Knightt',
        },
      ],
      'Team Leader': [
        {
          name: 'Krishna Kalani',
          instagram: 'krishna.kalani.1',
          github: 'Krishnakalani111',
        },
        {
          name: 'Kritik Jiyaviya',
          instagram: 'kritik.jiyaviya',
          github: 'Kritik-J',
        },
        {
          name: 'Jaimin Kapopara',
          instagram: 'kapoparajaimin',
          github: 'Jaiminkapopara',
        },
      ],
      'Team Member': [
        {
          name: 'Darshil Laskari',
          instagram: 'darshil.04',
          github: 'Darshil320',
        },
        { name: 'Rohit Sonvane' },
        { name: 'Uttam Moradiya', instagram: 'uttam_moradiya' },
        { name: 'Vanshika Kapadia' },
        { name: 'Sanchi Savani' },
        { name: 'Tanvi Chovatiya' },
        {
          name: 'Vinay Adatiya',
          instagram: 'vinay_adatiya',
          github: 'Vinay94278',
        },
        { name: 'Manav Desai', instagram: '17_s_e_v_e_n_t_e_e_n' },
      ],
    },
  },
  {
    title: 'Decoration',
    slug: 'decoration',
    people: {
      'Team Coordinator': [
        { name: 'Vaishnavi Patel', instagram: 'vaiishu__3153' },
        { name: 'Jinal Bavadiya' },
      ],
      'Team Leader': [
        { name: 'Siya Anghan', instagram: '_cyaaa_2018' },
        { name: 'Vidhi Jariwala', instagram: 'viuu._' },
      ],
      'Team Member': [
        { name: 'Bhavya Lineswala' },
        { name: 'Dency Desai' },
        { name: 'Tanisha Agarwal' },
        { name: 'Amee Pansuriya' },
        { name: 'Nupur Athvaiya' },
        { name: 'Aakankshya Das' },
        { name: 'Pinal Paladiya' },
        { name: 'Kena Sutariya' },
        { name: 'Naisargi Patel' },
        { name: 'Hitakshi Dholakiya' },
        { name: 'Riddhi Senjaliya' },
        { name: 'Rutvi Dobariya' },
        { name: 'Pal Mavani' },
        { name: 'Suhani Padmani' },
        { name: 'Rajan Khunt' },
        { name: 'Tanvi Patel' },
        { name: 'Nidhi Chauhan' },
        { name: 'Aarchi Chhayani' },
        { name: 'Krish Patel' },
        { name: 'Jensi Tagadiya' },
        { name: 'Akshit Savani' },
      ],
    },
  },
  {
    title: 'Marketing',
    slug: 'marketing',
    people: {
      'Team Coordinator': [
        { name: 'Neel Katrodiya', instagram: 'nee__il.07' },
        { name: 'Pratham Patel ', instagram: 'prathampatel15_' },
      ],
      'Team Leader': [
        { name: 'Nandni Patel', instagram: '_.nandni.patel._' },
        { name: 'Kenil Avaiya', instagram: 'kenil_avaiya' },
      ],
      'Team Member': [
        { name: 'Darshil Lashkari' },
        { name: 'Shruti Desai' },
        { name: 'Jay Reshamwala' },
        { name: 'Ishika Desai' },
        { name: 'Krishna Desai ' },
        { name: 'Prit Mehta' },
      ],
    },
  },
  {
    title: 'Sponsorship',
    slug: 'sponsorship',
    people: {
      'Team Coordinator': [
        { name: 'Neel Katrodiya', instagram: 'nee__il.07' },
        { name: 'Pratham Patel ', instagram: 'prathampatel15_' },
      ],
      'Team Leader': [
        { name: 'Dhaivat Barot' },
        { name: 'Khushi Patel' },
        { name: 'Bhavya Bavisi' },
        { name: 'Disha Bhatia' },
      ],
      'Team Member': [{ name: 'Vishva Gadhiya' }, { name: 'Vidhi Doctor' }],
    },
  },
  {
    title: 'Registration',
    slug: 'registration',
    people: {
      'Team Coordinator': [
        {
          name: 'Ravi Savaliya',
          instagram: 'ravi___023',
          github: 'Savaliya-Ravi',
        },
        {
          name: 'Aayushi Naik',
          instagram: 'aayushinaik__06',
          github: 'aayushinaik05',
        },
        { name: 'Aneri Naik', instagram: 'irenanaik_009', github: 'anerinaik' },
      ],
      'Team Leader': [
        {
          name: 'Mitul Tariwala',
          instagram: 'mitul_tari_',
          github: 'MitulTari',
        },
        {
          name: 'Parthiv Kevdiya',
          instagram: 'parthiv_kevadiya',
          github: 'parthiv8848',
        },
      ],
      'Team Member': [
        { name: 'Parthish Mehta' },
        { name: 'Shruti Desai' },
        { name: 'Pranami Patel' },
        { name: 'Viraj Dapkawala' },
        { name: 'Rishi Mistry' },
        { name: 'Harshil Gajipara' },
      ],
    },
  },
  {
    title: 'Photography',
    slug: 'photography',
    people: {
      'Team Coordinator': [
        { name: 'Neel Katrodiya', instagram: 'nee__il.07' },
        { name: 'Pratham Patel ', instagram: 'prathampatel15_' },
      ],
      'Team Leader': [{ name: 'Aryan Prajapati' }, { name: 'Nishit Patel' }],
      'Team Member': [
        { name: 'Neel Doctor' },
        { name: 'Karan ' },
        { name: 'Harsingh' },
      ],
    },
  },
  {
    title: 'PY-IT',
    slug: 'py-it',
    people: {
      'Faculty Event Head': [
        { name: 'Dr. Vivaksha Jariwala' },
        { name: 'Prof. Apurva Mandalaywala' },
        { name: 'Prof. Mukesh Patel' },
      ],
      'Student Event Head': [
        {
          name: 'Taashna Jariwala',
          instagram: 'Taashna_9703',
          github: 'Taashna9703',
        },
        {
          name: 'Ayushi Garach',
          instagram: 'ayushi_garachh',
          github: 'Ayushi-16',
        },
      ],
      Volunteer: [
        {
          name: 'Harsh Panchal',
          instagram: 'harsh_1_panchal',
          github: 'Harsh29004',
        },
        { name: 'Hasti Gondaliya ' },
        {
          name: 'Kuldip Khuman ',
          instagram: 'kuldip_darbar_7191',
        },
        { name: 'Daraksha Nasirwala' },
        { name: 'Yash Chauhan' },
        { name: 'Sujal Ghadiya', instagram: 'sujal_ghadiya' },
      ],
    },
  },
  {
    title: 'IT Quiz',
    slug: 'it_quiz',
    people: {
      'Faculty Event Head': [
        { name: 'Dr. Mita Parikh' },
        { name: 'Prof. Tushar Gohil' },
        { name: 'Prof. Ashish Kharwar' },
      ],
      'Student Event Head': [
        { name: 'Komal Patel', instagram: 'kolapatel' },
        { name: 'Yesha Dobariya', instagram: 'yesha_dobaria' },
        { name: 'Yash Shah', instagram: '_yash_shah_2807' },
      ],
      Volunteer: [
        { name: 'Kena Sutariya' },
        { name: 'Aarchi Chhayaani' },
        { name: 'Anand Palan ' },
        { name: 'Divayang Tank' },
        { name: 'Heer Patel' },
        { name: 'Krish Patel' },
      ],
    },
  },
  {
    title: 'Rise to Crescendo',
    slug: 'rise_to_crescendo',
    people: {
      'Faculty Event Head': [
        { name: 'Prof. Dhyani Joshi' },
        { name: 'Prof. Juhi Mehta' },
      ],
      'Student Event Head': [
        {
          name: 'Krisha Patel',
          instagram: '__krisha_26',
          github: 'Patel-Krisha',
        },
        {
          name: 'Pranavi Mehta',
          instagram: 'pranavi_007',
          github: 'pranavimehta13',
        },
      ],
      Volunteer: [
        { name: 'Tisha Chauhan' },
        { name: 'Vruxali Borsaniya' },
        { name: 'Om Chimna', instagram: 'om.chimna', github: 'Omchimna' },
        { name: 'Amaan Payak', instagram: 'amaanpayak' },
        {
          name: 'Tanisha Agarwal ',
          instagram: 'tanishaagarwal_28',
        },
        { name: 'Mili Chanchpara ', instagram: 'mili_chanchpara' },
      ],
    },
  },
  {
    title: 'Logo Hunt',
    slug: 'logo_hunt',
    people: {
      'Faculty Event Head': [
        { name: 'Prof. Hiren Vavaiya' },
        { name: 'Prof. Ankit Patel' },
      ],
      'Student Event Head': [
        { name: 'Dhwani Ladani', instagram: 'dhwani.ladani' },
        {
          name: 'Vinay Adatiya',
          instagram: 'vinay_adatiya',
          github: 'Vinay94278',
        },
        { name: 'Suhani Mehta', instagram: 'suhaniiii.28' },
      ],
      Volunteer: [
        { name: 'Swarg Patel', instagram: 'swargpatel781' },
        { name: 'Disha Deputy' },
        { name: 'Sahil Sojitra', instagram: 'sahil_.8541' },
        { name: 'Kunj Desai', instagram: 'Kunj_2834' },
        { name: 'Krishna Panchal', instagram: 'krishna2.11' },
        { name: 'Karmavee Gandhi', instagram: 'karmaveegandhi' },
      ],
    },
  },
  {
    title: 'Bug Buzz',
    slug: 'bug_buzz',
    people: {
      'Faculty Event Head': [
        { name: 'Prof. Karuna Patel' },
        { name: 'Prof. Foram Patel' },
        { name: 'Prof. Bhargavi Rani' },
      ],
      'Student Event Head': [
        { name: 'Smit Gabani ', instagram: '__smit.11', github: 'smitg11' },
        {
          name: 'Jeel Patel',
          instagram: 'mr_jeel_patel_2811',
          github: 'jeel28',
        },
      ],
      Volunteer: [
        { name: 'Kruti Kikani', instagram: '__krutikikani__' },
        { name: 'Parth Gabani ', github: 'Parthh-gabanniii' },
        { name: 'Tanvi Vaghasiya ', instagram: 'tanvivaghasiya04' },
        { name: 'Jenish Makwana' },
        { name: 'Parth Tarsariya ' },
        { name: 'Sonvane Nupur ' },
      ],
    },
  },
  {
    title: 'Codathon',
    slug: 'codathon',
    people: {
      'Faculty Event Head': [
        { name: 'Prof. Hiren Vavaiya' },
        { name: 'Prof. Karishma Desai' },
        { name: 'Prof. Ankit Patel' },
      ],
      'Student Event Head': [
        {
          name: 'Viddhi Ladva',
          instagram: 'viddhi_ladva',
          github: 'viddhiladva',
        },
        {
          name: 'Priyanshi Sutariya',
          instagram: 'priyanshi_sutariya04',
          github: 'sutariyapriyanshi',
        },
      ],
      Volunteer: [
        { name: 'Aryan Chodvadiya' },
        { name: 'Disha Bhatia' },
        { name: 'Het Salmawala' },
        { name: 'Prapti Mehta' },
        { name: 'Twisha Savani' },
        { name: 'Vidhi Doctor' },
      ],
    },
  },
  {
    title: 'Mindspark',
    slug: 'mindspark',
    people: {
      'Faculty Event Head': [
        { name: 'Prof. Palak Desai' },
        { name: 'Prof. Zalak Desai' },
      ],
      'Student Event Head': [
        {
          name: 'Harsh Bardolia',
          instagram: 'harsh.bardolia',
          github: 'harsh-bardolia',
        },
        { name: 'Jashn Jain', github: 'JashnJJain' },
      ],
      Volunteer: [
        { name: 'Jayesh Parmar', github: 'jayesh-parmarr' },
        { name: 'Arham Sheth', instagram: 'arham_shah._' },
        {
          name: 'Nidhi Patel',
          instagram: 'nidhi.patel15',
          github: 'nidhi-158',
        },
        { name: 'virali joshi ', instagram: 'virali_joshi3110' },
        {
          name: 'Abhishek Dhanani ',
          instagram: 'abhishek__dhanani',
        },
      ],
    },
  },
  {
    title: 'Counter Strike',
    slug: 'counter_strike',
    people: {
      'Student Event Head': [
        { name: 'Om Boghara', instagram: '_om.b.533____' },
        { name: 'Jay Jariwala', instagram: 'jariwala_jay' },
      ],
      Volunteer: [
        { name: 'Dhaivat Barot' },
        {
          name: 'Kenil Avaiya',
          instagram: 'kenil_avaiya',
          github: 'kenilavaiya',
        },
        { name: 'Mann Miyani' },
        { name: 'Krupansh Nakrani' },
      ],
    },
  },
  {
    title: 'Penalty Shootout',
    slug: 'penalty_shootout',
    people: {
      'Student Event Head': [
        { name: 'Rohan Kahar' },
        { name: 'Gati Ambaliya', instagram: 'idkgati', github: 'ambaliyagati' },
      ],
      Volunteer: [
        { name: 'Kartavya Master', instagram: '_kartavya_17' },
        { name: 'Anjal Qureshi ', instagram: '18.anjal' },
        { name: 'Rushikesh Jani', instagram: 'rushikeshjanii' },
      ],
    },
  },
  {
    title: "The Spy's Eye",
    slug: 'the_spys_eye',
    people: {
      'Student Event Head': [
        { name: 'Harsh Gajjar', instagram: 'igajjarharsh' },
        { name: 'Raj Shah', instagram: 'rajnipun2003' },
      ],
      Volunteer: [
        { name: 'Harsh Gheewala', instagram: 'harshgheewala.73' },
        { name: 'Abdulmateen Shamsi', instagram: 'matin_shamsi16' },
        { name: 'Umesh Tumma', instagram: 'umeshtumma' },
      ],
    },
  },
  {
    title: 'Capture Quest',
    slug: 'capture_quest',
    people: {
      'Student Event Head': [
        { name: 'Prapti Mehta ', instagram: 'prapti_1324' },
        { name: 'Disha Bhatia', instagram: 'dishab5772' },
      ],
      Volunteer: [
        { name: 'Arham Sheth', instagram: 'arham_shah._' },
        { name: 'Bhavya Bavisi ', instagram: 'bhavya_040' },
        { name: 'Nisit Patel ', instagram: 'nisit_a_patel' },
        { name: 'Vidhi Doctor ', instagram: 'vidhidoctor' },
        { name: 'Viraj Dapkawala' },
        { name: 'Kunj Desai', instagram: 'kunj_2834' },
      ],
    },
  },
  {
    title: 'Filmy Dhum Dhadaka',
    slug: 'filmy_dhum_dhamaka',
    people: {
      'Student Event Head': [
        { name: 'Vedanshi Ponkia', instagram: 'vedanshi._' },
        { name: 'Diya Moradiya', instagram: 'diya_moradiya' },
        { name: 'Diya Patel', instagram: 'diya_ptl15' },
      ],
      Volunteer: [
        { name: 'Krisha Tejani' },
        { name: 'Prina Bhagat' },
        { name: 'Krishna Panwala' },
        { name: 'Moksha Suhagiya' },
        { name: 'Dev Parneria' },
        { name: 'Jash Charodiya' },
      ],
    },
  },
  {
    title: 'E-sports Revolution',
    slug: 'esports_revolution',
    people: {
      'Student Event Head': [
        { name: 'Het Ukani', instagram: 'ukani__ het' },
        { name: 'Ayush Vanani', instagram: 'vanani.ayush' },
      ],
      Volunteer: [
        { name: 'Prince Viradiya' },
        { name: 'Dhruv Italiya' },
        { name: 'Neel Madakana' },
        { name: 'Kunj Radadiya' },
        { name: 'Jainil Rangani' },
        { name: 'Kevin Valiya' },
      ],
    },
  },
  {
    title: 'Auction Ka Adda',
    slug: 'auction_ka_adda',
    people: {
      'Student Event Head': [
        { name: 'Krish Dhola', instagram: 'krish_dhola' },
        { name: 'Krishna Desai', instagram: 'kdesai_107' },
      ],
      Volunteer: [
        { name: 'Krish Vanani' },
        { name: 'Akshat Moradiya' },
        { name: 'Jash Chheta' },
        { name: 'Preet Mehta' },
        { name: 'Malav Radia' },
        { name: 'Parth Desai' },
      ],
    },
  },
];

export default teams;
