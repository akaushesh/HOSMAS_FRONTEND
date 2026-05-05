import type { Hostel } from '@/types/hostels';
import { hostelA, hostelB, hostelC, hostelD, hostelJ, hostelN, hostelO } from './HostelImages';


const hostels = [
    {
        name: 'Agira Hall',
        path: 'agira-hall',
        floors: 9,
        rooms: 464,
        students: 928,
        warden: 'Dr. Pramod Kumar Vaishnav',
        warden_image: 'https://som.thapar.edu/files/faculty/217/1507612443217.jpg',
        assistantWarden: 'Dr. Surjit Singh',
        dayCaretaker: 'Mr. Birjesh Kumar, Mr. Ram Singh',
        nightCaretaker: 'Mr. Amrinder Singh, Mr. Thakur Singh',
        contact: '8288008640, 9115600644, 9878667829, 9814202987, 9464600180, 9877831617, 9115611510',
        emailW: 'warden.agira@thapar.edu',
        emailC: 'caretaker.agira@thapar.edu',
        gender: 'Boys',
        image: hostelA,
        description: `Agira Hall (previously known as Hostel-A) is one of the latest additions to the hostel facilities, offering a modern and comfortable living environment for students. With a total capacity of 928 students, the hostel provides double-seater rooms with shared washrooms for boys.
  
  <br/>• Each room is fully furnished with a study table, chair, wardrobe, bookrack, shoe rack, mattress, geyser, curtains, and dustbins, ensuring a comfortable and organized living space.

  <br/>• Students benefit from essential amenities such as water coolers and RO systems for safe drinking water. The hostel is equipped with elevators, ensuring convenient access to all floors, along with power backup during emergencies.

  <br/>• High-speed Wi-Fi is available 24/7 throughout the premises, enabling students to stay connected for academic and personal needs.

  <br/>• The hostel features a well-equipped gymnasium with modern fitness equipment, promoting students’ health and well-being. A well-maintained mess facility caters to students' nutritional needs and is managed by a reputed organization ensuring quality standards.

  <br/>• Cleanliness is maintained by dedicated housekeeping staff, and laundry services are also available for student convenience.

  <br/>• The campus environment includes well-maintained lawns and water bodies, providing a peaceful and relaxing atmosphere.

  <br/>• Safety is a top priority, with guards stationed at entrances and blocks, along with fire alarm systems installed throughout the premises.

  <br/>• An executive student committee manages day-to-day affairs, ensuring smooth hostel operations. Night canteen facilities are also available for late-night food requirements.`,
    },
    {
        name: 'Amritam Hall',
        path: 'amritam-hall',
        floors: 3,
        rooms: 250,
        students: 724,
        warden: 'Dr. Pratik Tiwari',
        warden_image: 'https://ced.thapar.edu/files/microfaculty/22/165875420216587542021497.jpg',
        assistantWarden: 'Dr. Amit Kumar',
        dayCaretaker: 'Mr. Hardeep Singh, Mr. Avtar Singh',
        nightCaretaker: 'Mr. Maninder Singh, Mr. Hardeep Singh',
        contact: '8288088161, 8088810529, 7888626061, 9876664547, 9855594440, 9781141433, 9115611512',
        emailW: 'warden.amritam@thapar.edu',
        emailC: 'caretaker.amritam@thapar.edu',
        gender: 'Boys',
        image: hostelB,
        description: `Amritam Hall (previously known as Hostel-B) offers a comfortable and enjoyable student environment with its easy-going and relaxing atmosphere. The rooms are designed to be spacious, bright, and clean, providing a pleasant living space. Each room has beds, study tables, chairs, and almirahs, ensuring students have a comfortable place to study and store their belongings.

  <br/>• Connectivity is essential for students, and Amritam Hall ensures that every room provides Wi-Fi connectivity accessible 24 hours a day, allowing students to stay connected and access online resources whenever needed.

  <br/>• Hygiene and convenience are prioritized with adequate shared bathrooms and geyser facilities, ensuring hot water availability. RO-treated drinking water is also provided for safe consumption.

  <br/>• The hostel offers various facilities including a TV room, gymnasium, and a standard air-conditioned study room for group or quiet study. Night canteen services are available for late-night meals and snacks.

  <br/>• Laundry services are available for convenience, and the hostel mess with an air-conditioned dining area caters to students' food and nutritional requirements. The menu is decided by a committee of residential students.

  <br/>• CCTV cameras are installed throughout the premises to ensure safety and security, along with 24/7 security guard presence.

  <br/>• An executive committee of residential students manages day-to-day hostel affairs, acting as a liaison between students and management to address concerns and improve living conditions.`,
    },
    {
        name: 'Prithvi Hall',
        path: 'prithvi-hall',
        floors: 2,
        rooms: 160,
        students: 387,
        warden: 'Dr. Hari Shankar Singh',
        warden_image: 'https://www.thapar.edu/webroot/files/faculty/286/1508245793286.png',
        assistantWarden: '',
        dayCaretaker: 'Mr. Gurmeet Singh',
        nightCaretaker: 'Nishan Singh',
        contact: '8090143992, 9115608803, 9464969982, 9115611513',
        emailW: 'warden.prithvi@thapar.edu',
        emailC: 'caretaker.prithvi@thapar.edu',
        gender: 'Boys',
        image: ['https://www.thapar.edu/upload/files/chostel8.jpg'],
        description: `Prithvi Hall (previously known as Hostel-C) is one of the oldest hostels equipped with modern amenities. With a total capacity of 387, the hostel offers air-conditioned accommodation in two-seater and three-seater rooms, each featuring a shared washroom for students.

  <br/>• Every room is thoughtfully furnished with essential living conveniences such as a study table, chair, wardrobe, bookrack, mattress, curtains, cloth stands, and dustbins.

  <br/>• The hostel provides facilities such as a water cooler with an in-built RO system, a TV/common room, a reading room, hot water availability, and indoor games like table tennis, chess, and carom.

  <br/>• The hostel has extensive and well-maintained lawns with water fountains, creating a peaceful and serene atmosphere.

  <br/>• Housekeeping staff maintain cleanliness standards, and a laundry system is provided for students’ needs.

  <br/>• Prithvi Hall also supports community events, student committees, study groups, collaborative spaces, sports and recreation, student feedback, and an inclusive environment.`,
    },
    {
        name: 'Neeram Hall',
        path: 'neeram-hall',
        floors: 9,
        rooms: 464,
        students: 928,
        warden: 'Dr. Danie Roy A. B',
        warden_image: 'https://ced.thapar.edu/files/microfaculty/22/1749545809946.jpg',
        assistantWarden: 'Dr. Ovais Shafiq Qadri',
        dayCaretaker: 'Mr. Mandeep Daniel, Mr. Manish Kumar',
        nightCaretaker: 'Mr. Arvinder Singh, Mr. Ravi Kumar',
        contact: '9115600155, 9456338299, 9115600144, 6280678837, 9855684107, 8360322101, 9115600146',
        emailW: 'warden.neeram@thapar.edu',
        emailC: 'caretaker.neeram@thapar.edu',
        gender: 'Boys',
        image: hostelN,
        description: `Neeram Hall (previously known as Hostel-D) is the latest addition to the exceptional range of hostel facilities. This 928-seater hostel provides double-seater rooms with shared washrooms for boys.

  <br/>• Each room is fully furnished with a study table, chair, wardrobe, bookrack, shoe rack, mattress, geyser, curtains, and dustbins.

  <br/>• Students benefit from amenities such as water coolers and RO systems. The hostel features four elevators, ensuring easy access to all floors, with power backup available in emergencies.

  <br/>• Housekeeping staff maintain cleanliness, and a laundry system is provided for students’ use.

  <br/>• Students enjoy round-the-clock Wi-Fi access, allowing them to connect to high-speed internet from anywhere within the premises.

  <br/>• The hostel has a state-of-the-art gymnasium with modern fitness training machines and an excellent mess facility managed by an internationally renowned company.

  <br/>• The hostel features well-maintained lawns and water bodies, providing a pleasant and relaxing environment.

  <br/>• Safety is ensured through guards stationed at entrances and in each block, along with fire alarms installed throughout the premises.

  <br/>• An executive committee of students manages day-to-day affairs, and a night canteen is available for late-night food requirements.`,
    },
    {
        name: 'Vyan Hall',
        path: 'vyan-hall',
        floors: 3,
        rooms: 200,
        students: 680,
        warden: 'Dr. Sandeep Pandey',
        warden_image: 'https://www.thapar.edu/webroot/files/faculty/521/1570093827521.jpg',
        assistantWarden: '',
        dayCaretaker: 'Mr. Varinderdeep Singh, Mr. Shivcharan Singh',
        nightCaretaker: 'Mr. Gurpreet Singh, Mr. Kawaljeet Singh',
        contact: '8288008179, 9115608833, 9872176162, 6239138634, 7986534871, 9115611518',
        emailW: 'warden.vyan@thapar.edu',
        emailC: 'caretaker.vyan@thapar.edu',
        gender: 'Boys',
        image: hostelO,
        description: `Vyan Hall (previously known as Hostel-H) is a spacious and well-equipped hostel with a total capacity to accommodate 680 students.

  <br/>• The hostel provides ample space for residents. Sixty rooms with a capacity of 240 students are air-conditioned, offering students an added level of comfort.

  <br/>• A gymnasium is provided, allowing students to engage in physical fitness activities and maintain a healthy lifestyle.

  <br/>• A TV room is available for entertainment, and indoor games such as table tennis are also provided.

  <br/>• A reading room is available for students who prefer a quiet and focused environment for studying.

  <br/>• A hostel executive committee is constituted each semester, comprising students, the hostel warden, the caretaker, and the mess manager.

  <br/>• The committee monitors and plans various aspects of hostel life, ensuring smooth operations and addressing issues that may arise.

  <br/>• The mess facility is available within the hostel and caters to the nutritional needs of students.

  <br/>• Vyan Hall primarily accommodates 1st-year students and provides an environment focused on academics, support, and student participation in hostel management.`,
    },
    {
        name: 'Tejas Hall',
        path: 'tejas-hall',
        floors: null,
        rooms: null,
        students: 1170,
        warden: 'Dr. Atul Kumar Upadhyay',
        warden_image: 'https://www.thapar.edu/webroot/files/faculty/523/1576768425523.jpg',
        assistantWarden: 'Dr. Dinesh',
        dayCaretaker: 'Mr. Raj Kumar, Mr. Jaspal Singh',
        nightCaretaker: 'Mr. Ajay Kumar, Mr. Ram Naresh',
        contact: '9115608845, 8559010110, 7986578196, 9115611520',
        emailW: 'warden.tejas@thapar.edu',
        emailC: 'caretaker.tejas@thapar.edu',
        gender: 'Boys',
        image: hostelJ,
        description: `Tejas Hall (previously known as Hostel-J) is a multistoried boys hostel at Thapar Institute of Engineering & Technology, offering state-of-the-art facilities.

  <br/>• The hostel offers single-seated accommodation with a capacity to house 858 residents. There are 78 clusters in the hostel, each containing 11 rooms.

  <br/>• Each cluster is equipped with geysers and three-seater chairs for residents’ convenience.

  <br/>• Hostel floors have water coolers with inbuilt RO systems, ensuring access to clean drinking water.

  <br/>• A 24/7 Wi-Fi network is provided throughout the hostel premises.

  <br/>• A well-equipped gymnasium is available, along with an air-conditioned reading room.

  <br/>• Two elevators are available in the hostel, with power backup systems in case of emergencies.

  <br/>• The hostel features an open-air theatre for cultural functions and events.

  <br/>• Fully air-conditioned guest rooms are available for parents and other guests during visits.

  <br/>• Security is maintained through guards, regular patrolling, CCTV cameras, and fire alarms.

  <br/>• The hostel mess provides food services, including a Night Mess facility with various cuisines.

  <br/>• Hostel J has an in-house complaint management system for registering complaints related to equipment malfunctions and quick processing.`,
    },
    {
        name: 'Ambaram Hall',
        path: 'ambaram-hall',
        floors: 3,
        rooms: 300,
        students: 600,
        warden: 'Dr. Yogesh Tatte',
        warden_image: 'https://www.thapar.edu/webroot/files/faculty/462/1535533567462.jpg',
        assistantWarden: '',
        dayCaretaker: 'Mr. Kuldeep Singh',
        nightCaretaker: 'Mr. Satnam Singh, Mr. Jaspreet Singh',
        contact: '7789810221, 7508380066, 8427993205, 8556887825, 9115611521',
        emailW: 'warden.ambaram@thapar.edu',
        emailC: 'caretaker.ambaram@thapar.edu',
        gender: 'Boys',
        image: ['http://thapar.edu/upload/images/outer_k%281%29.jpg'],
        description: `Ambaram Hall (previously known as Hostel-K) is a well-equipped hostel that offers comfortable accommodation for students.

  <br/>• It consists of two floors and two blocks, each with separate arrangements for water purifiers and bathrooms equipped with geysers.

  <br/>• Each block has a high-speed internet connection, allowing students to stay connected and access online resources easily.

  <br/>• The hostel provides a gym facility, a TV room with sitting facilities, and access to newspapers.

  <br/>• The hostel mess serves quality food and regular cleaning is carried out in rooms and washrooms.

  <br/>• Indoor games such as table tennis and carom board are available within the hostel.

  <br/>• Reading rooms are provided for students who prefer a quiet and focused study environment.

  <br/>• A laundry room is available for students’ convenience.

  <br/>• The hostel offers two guest rooms for parents and visitors, along with a large parking area outside the hostel premises.

  <br/>• Spacious lawns are available inside and outside the hostel, creating a relaxing environment for students.`,
    },
    {
        name: 'Viyat Hall',
        path: 'viyat-hall',
        floors: 3,
        rooms: 300,
        students: 600,
        warden: 'Dr. Bharat Garg',
        warden_image: '',
        assistantWarden: '',
        dayCaretaker: 'Ms. Rajesh Kumar',
        nightCaretaker: 'Mr. Rajat Malik',
        contact: '9115608834, 9115608840, 9463217993, 9115611522',
        emailW: 'warden.viyat@thapar.edu',
        emailC: 'caretaker.viyat@thapar.edu',
        gender: 'Boys',
        image: hostelD,
        description: `Viyat Hall (previously known as Hostel-L) is a student residential facility at Thapar Institute of Engineering and Technology in Patiala.

  <br/>• This 300-bedded hostel offers a comfortable and modern living experience to its residents.

  <br/>• It is adjacent to Thapar Polytechnic and provides air-conditioned double occupancy accommodation with views of the giant ground from the entrance lobby.

  <br/>• The hostel has a double-height reception area and a dining area that can cater to 150 students at a time.

  <br/>• A fully equipped kitchen is managed by a renowned facility planning firm, ensuring hygiene and healthy food.

  <br/>• A night canteen is available to facilitate late study hours.

  <br/>• Reading areas, an air-conditioned standard room, recreational facilities, TV facilities, reading rooms, and a well-equipped gym are available.

  <br/>• Guest rooms are available on the ground floor for overnight visitors.

  <br/>• Facilities include hot water supply in washrooms, RO-treated drinking water, indoor games such as table tennis and carom, and well-maintained lawns.

  <br/>• Laundry services are available for students.

  <br/>• The mess menu is decided by students, and hostel operations are managed by an executive committee comprising residents.

  <br/>• Students celebrate functions such as Diwali night, Independence Day, Republic Day, Hostel night, and Lohri.`,
    },
    {
        name: 'Anantam Hall',
        path: 'anantam-hall',
        floors: 8,
        rooms: 800,
        students: 1148,
        warden: 'Dr. Shivendra Shivani',
        warden_image: 'https://www.thapar.edu/webroot/files/faculty/346/1536908602346.jpg',
        assistantWarden: 'Dr. Dhamodharan K',
        dayCaretaker: 'Mr. Satgur Singh, Mr. Arun Mattu, Mr. Maninderpal Singh',
        nightCaretaker: 'Mr. Jagseer Singh, Mr. Amrinder Singh',
        contact: '7889523067, 9464600180, 9115611523',
        emailW: 'warden.anantam@thapar.edu',
        emailC: 'caretaker.anantam@thapar.edu',
        gender: 'Boys',
        image: hostelC,
        description: `Anantam Hall (previously known as Hostel-M) is a modern multi-story boys' hostel with state-of-the-art facilities spanning four towers and eight floors, with a total capacity of 1148 students.

  <br/>• The accommodation options include single and double-seater air-conditioned rooms with attached and shared washrooms.

  <br/>• Each room is furnished with essentials such as a study table, chair, almirah, book rack, mattress, geyser, curtains, and dustbins.

  <br/>• Every floor is equipped with a water cooler, RO system, and sofa sets.

  <br/>• The hostel provides two elevators in each block for easy vertical movement from the ground floor to the eighth floor.

  <br/>• Housekeeping personnel maintain cleanliness throughout the hostel.

  <br/>• Students can avail laundry services for convenience.

  <br/>• The hostel premises are covered by a continuous 24/7 Wi-Fi network.

  <br/>• The gymnasium is furnished with contemporary fitness equipment.

  <br/>• Safety and security are ensured through guards at entrances and within each block.

  <br/>• Fire alarms are installed throughout the premises.

  <br/>• The hostel also provides guest rooms and sick rooms for residents’ comfort and well-being.`,
    },
    {
        name: 'Vyom Hall',
        path: 'vyom-hall',
        floors: 9,
        rooms: 464,
        students: 928,
        warden: 'Dr. Ashish Kumar Gupta',
        warden_image: 'https://eied.thapar.edu/files/microfaculty/18/166564197916656419791532.jpg',
        assistantWarden: 'Dr. Sachin Kansal',
        dayCaretaker: 'Mr. Jaspreet Singh, Mrs. Shiva Maurya',
        nightCaretaker: 'Mr. Rajeev Jindal, Mr. Gurvinder Singh',
        contact: '9993409206, 9873153996, 7009039508, 8826185872, 769667652, 8699677205, 9115611514',
        emailW: 'warden.vyom@thapar.edu',
        emailC: 'caretaker.vyom@thapar.edu',
        gender: 'Boys',
        image: ['https://www.thapar.edu/images/hostel/hostelO_1.png'],
        description: `Vyom Hall (previously known as Hostel-O) is the latest addition to the exceptional range of hostel facilities on the Thapar Institute campus.

  <br/>• This 928-seater hostel provides double-seater rooms with shared washrooms for boys.

  <br/>• Each room is fully furnished with a study table, chair, wardrobe, bookrack, shoe rack, mattress, geyser, curtains, and dustbins.

  <br/>• Residents benefit from amenities such as water coolers, RO systems, and washing machines.

  <br/>• The hostel features four elevators, ensuring easy access to all floors, with power backup available in emergencies.

  <br/>• Housekeeping staff maintain cleanliness, and a laundry system is provided for residents’ use.

  <br/>• Residents enjoy round-the-clock Wi-Fi access throughout the premises.

  <br/>• The hostel has a state-of-the-art gymnasium with modern fitness training machines.

  <br/>• The mess facility caters to nutritional needs and is managed by an internationally renowned company.

  <br/>• The hostel features well-maintained lawns and water bodies, providing a pleasant and relaxing environment.

  <br/>• Safety is ensured through guards stationed at entrances and in each block, along with fire alarms installed throughout the premises.

  <br/>• An executive committee of residents manages day-to-day hostel affairs, and a night canteen is available for late-night food requirements.`,
    },
    {
        name: 'Vasudha Hall - Block E',
        path: 'vasudha-hall-e',
        floors: null,
        rooms: null,
        students: 234,
        warden: 'Dr. Kavita',
        warden_image: 'https://som.thapar.edu/files/faculty/199/1509177309199.png',
        assistantWarden: '',
        dayCaretaker: 'S. Mukhtiar Singh',
        nightCaretaker: 'Mrs. Rinkle Sharma, Mrs. Suman',
        contact: '9557406972, 9115608806, 952949344, 9988716515, 9115611515',
        emailW: 'warden.vasudhae@thapar.edu',
        emailC: 'caretaker.vasudhae@thapar.edu',
        gender: 'Girls',
        image: ['https://www.thapar.edu/images/hostel/hostele1.jpg'],
        description: `Vasudha Hall Block E (previously Hostel-E) is a girls' hostel offering a comfortable and conducive environment for female students with a total capacity of 234.

    <br/>• Provides furnished rooms with beds, study tables, curtains, and almirah.
    <br/>• Mess facility ensures hygienic and nutritious food.
    <br/>• Student committees actively participate in hostel management.
    <br/>• Facilities include gym, games, TV, and power supply.
    <br/>• Medical support and RO water available.
    <br/>• 24/7 security and peaceful environment.`,
    },

    {
        name: 'Vasudha Hall - Block G',
        path: 'vasudha-hall-g',
        floors: null,
        rooms: null,
        students: 234,
        warden: 'Dr. Deepa Mudgal',
        warden_image: 'https://www.thapar.edu/webroot/files/faculty/239/1505826816239.jpg',
        assistantWarden: '',
        dayCaretaker: 'Mr. Vijay Kumar',
        nightCaretaker: 'Mrs. Sunita Sharma',
        contact: '8288008149, 9115608809, 9115608813, 9115611517',
        emailW: 'warden.vasudhag@thapar.edu',
        emailC: 'caretaker.vasudhag@thapar.edu',
        gender: 'Girls',
        image: ['https://www.thapar.edu/images/hostel/enteranceG.JPG'],
        description: `Vasudha Hall Block G (previously Hostel-G) accommodates 234 girls.

    <br/>• Recently renovated with modern facilities.
    <br/>• Wi-Fi and RO drinking water available.
    <br/>• Encourages student participation and leadership.
    <br/>• Provides counselor support and competitions.
    <br/>• Student-managed mess and shared hangout spaces.`,
    },

    {
        name: 'Ira Hall',
        path: 'ira-hall',
        floors: null,
        rooms: null,
        students: 406,
        warden: 'Dr. Anupam Sharma',
        warden_image: 'https://www.thapar.edu/webroot/files/faculty/178/1507896752178.png',
        assistantWarden: 'Dr. Ruchika Lamba',
        dayCaretaker: 'Mrs. Akash Sharma, Mrs. Anuradha Yadav',
        nightCaretaker: 'Ms. Lakhvir Kaur, Mrs. Amarprit Kaur',
        contact: '9855572517, 9115608807, 8699112625, 7986445408, 7973129929, 9115611519',
        emailW: 'warden.ira@thapar.edu',
        emailC: 'caretaker.ira@thapar.edu',
        gender: 'Girls',
        image: ['https://www.thapar.edu/images/hostel/Front%20viewI.jpg'],
        description: `Ira Hall (Hostel-I) provides affordable and comfortable accommodation.

    <br/>• Gymnasium for fitness.
    <br/>• Lift connectivity available 24/7.
    <br/>• Air-conditioned reading-cum-library room.
    <br/>• Guest rooms for visitors.
    <br/>• Focus on academic and social growth.`,
    },

    {
        name: 'Ananta Hall',
        path: 'ananta-hall',
        floors: null,
        rooms: null,
        students: 500,
        warden: 'Dr. Geeta Kasana',
        warden_image: 'https://csed.thapar.edu/files/microfaculty/21/17307814411000.jpg',
        assistantWarden: 'Dr. Anu Mittal',
        dayCaretaker: 'Mr. Kuldeep Singh, Mrs. Sukhwinder Kaur',
        nightCaretaker: 'Mrs. Jyoti Baduani, Mrs. Sukhwinder Kaur',
        contact: '9878262723, 9996412318, 9115608810, 9463425988, 8847488020, 9888953557, 9115611524',
        emailW: 'warden.ananta@thapar.edu',
        emailC: 'caretaker.ananta@thapar.edu',
        gender: 'Girls',
        image: ['http://thapar.edu/upload/images/1.jpg'],
        description: `Ananta Hall (Hostel-N) is a newly constructed multistory hostel.

    <br/>• Single and double-seater rooms.
    <br/>• Fully air-conditioned.
    <br/>• Gym, reading rooms, elevators, Wi-Fi.
    <br/>• Guest rooms and complaint system.
    <br/>• CCTV, guards, and fire safety.`,
    },

    {
        name: 'Dhriti Hall',
        path: 'dhriti-hall',
        floors: null,
        rooms: null,
        students: 928,
        warden: 'Dr. M. Vasundhra',
        warden_image: 'https://www.thapar.edu/webroot/files/faculty/227/1505823087227.jpg',
        assistantWarden: 'Dr. Trishna Choudhury',
        dayCaretaker: 'Mr. Sandeep Singh, Ms. Sukhpal Kaur',
        nightCaretaker: 'Mrs. Ranjit Kaur, Mrs. Varinder Kaur',
        contact: '8288008174, 9115600644, 9115608811, 8264921367, 8557072772, 7986035642, 9115611525',
        emailW: 'warden.dhriti@thapar.edu',
        emailC: 'caretaker.dhriti@thapar.edu',
        gender: 'Girls',
        image: ['https://www.thapar.edu/images/hostel/HostelPG1_3.jpeg'],
        description: `Dhriti Hall (Hostel-PG) is a modern hostel for female residents.

    <br/>• AC double occupancy rooms.
    <br/>• TV lounge, gym, study areas, café.
    <br/>• Elevators with power backup.
    <br/>• Laundry, Wi-Fi, mess facility.
    <br/>• CCTV and 24/7 security.`,
    },

    {
        name: 'Vahni Hall',
        path: 'vahni-hall',
        floors: null,
        rooms: null,
        students: 928,
        warden: 'Dr. Paramita Roy',
        warden_image: 'https://som.thapar.edu/files/microfaculty/50/1675049357652.jpg',
        assistantWarden: 'Dr. Swati Sondhi',
        dayCaretaker: 'Mr. Deepak Batish, Ms. Usha Verma',
        nightCaretaker: 'Mrs. Dilpreet Kaur, Mrs. Pooja Verma',
        contact: '9988034083, 9897152605, 9803500935, 9115130700, 7986971106, 9988814753, 9115611516',
        emailW: 'warden.vahni@thapar.edu',
        emailC: 'caretaker.vahni@thapar.edu',
        gender: 'Girls',
        image: ['http://thapar.edu/images/hostel/1OUTERVIEWQ.JPG'],
        description: `Vahni Hall (Hostel-Q) is a modern girls hostel.

    <br/>• AC double-seater rooms.
    <br/>• Gym, TV room, study areas, café.
    <br/>• Elevators with backup.
    <br/>• Wi-Fi, laundry, mess.
    <br/>• CCTV and security.`,
    },

    {
        name: 'Hostel FRF/G',
        path: 'hostel-frfg',
        floors: null,
        rooms: null,
        students: 480,
        warden: 'Dr. Swati Sondhi',
        warden_image: 'https://eied.thapar.edu/files/microfaculty/18/17048956131123.jpg',
        assistantWarden: '',
        dayCaretaker: 'Mrs. Jasvir Kaur, Mrs. Bagicha Singh, Mrs. Satwinder Kaur',
        nightCaretaker: 'Mrs. Ranjit Kaur, Mrs. Kulwinder Kaur',
        contact: '9897152605, 9646738926, 8053942297, 9646947054, 7973043577, 9056370692',
        emailW: 'warden.frfg@thapar.edu',
        emailC: 'caretaker.frfg@thapar.edu',
        gender: 'Girls',
        image: ['https://www.thapar.edu/images/hostel/frontfrfg.jpeg'],
        description: `Hostel FRF/G is a newly constructed hostel.

    <br/>• 3-seater non-AC rooms with attached washrooms.
    <br/>• High-speed Wi-Fi.
    <br/>• Mess by Sodexo.
    <br/>• Near TIET 400m track.
    <br/>• Laundry facilities.`,
    }
];

export default hostels as Hostel[];

