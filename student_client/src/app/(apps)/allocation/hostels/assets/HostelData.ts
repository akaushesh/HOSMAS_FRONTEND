import type { Hostel } from '@/types/hostels';

import { hostelA, hostelB, hostelC, hostelD, hostelJ, hostelM, hostelN, hostelO, hostelQ } from './HostelImages';

const hostels = [
  {
    name: 'Hostel B',
    path: 'hostel-b',
    floors: 3,
    rooms: 300,
    students: 724,
    warden: 'Dr. Mohit Agarwal',
    warden_image: 'https://www.thapar.edu/webroot/files/faculty/278/1508731930278.jpg',
    assistantWarden: ' Dr. Bharat Garg',
    dayCaretaker: ' Mr. Jaspreet Singh',
    nightCaretaker: 'Mr. Krishan Singh , Mr. Maninder Singh',
    contact: ' 9115608802, 9855594440',
    emailW: 'wardenb@thapar.edu',
    emailC: 'caretaker.b@thapar.edu',
    gender: 'Boys',
    image: hostelB,
    description: `Hostel-B offers a comfortable and enjoyable student environment with its easy-going and relaxing atmosphere. The rooms are designed to be spacious, bright, and clean, providing a pleasant living space. Each room has beds, study tables, chairs, and almirahs, ensuring students have a comfortable place to study and store their belongings.
        <br/>• Connectivity is essential for students, and Hostel-B understands this. Therefore, every room in the hostel provides Wi-Fi connectivity accessible 24 hours a day, allowing students to stay connected and access online resources whenever needed.
        <br/>• Hygiene and convenience are also prioritized in Hostel B. The hostel has adequate shared bathrooms with geyser facilities, ensuring hot water is available for bathing. RO-treated drinking water is also available, providing clean and safe water to the students.
        <br/>• Hostel-B provides various facilities to cater to the student’s recreational and daily needs. There is a TV room where students can relax and enjoy their favorite shows or movies. A gymnasium is also available for those who want to stay fit and active. A standard air-conditioned study room is provided for students who prefer to study together or in a quiet environment. Night canteen services are available for late-night snacks or meals.
        <br/>• For convenience, Hostel-B offers laundry services, relieving students from the burden of washing their clothes. The hostel mess, which features an air-conditioned dining area, takes care of all the students" food and nutritional requirements. The mess menu is decided by the committee of residential students, ensuring that their preferences and dietary needs are considered.
        <br/>• Hostel-B is equipped with CCTV cameras throughout the premises to address security concerns, ensuring a safe and secure environment. Additionally, a security guard is present 24 hours a day to ensure the safety of the students and the hostel premises.`,
  },
  {
    name: 'Hostel O',
    path: 'hostel-o',
    floors: 9,
    rooms: 800,
    students: 928,
    warden: 'Dr. Anil Arora',
    warden_image: 'https://www.thapar.edu/webroot/files/faculty/270/1508226424270.jpg',
    assistantWarden: 'Dr. Sachin Kansal',
    dayCaretaker: 'Mr. Hardeep Singh , Mr. Sandeep Singh',
    nightCaretaker: 'Mr. Rajeev Jindal',
    contact: '9115611514',
    emailW: 'warden.o@thapar.edu',
    emailC: 'caretaker.o@thapar.edu',
    gender: 'Boys',
    image: hostelO,
    description: `Hostel O is the latest addition to the exceptional range of hostel facilities on the Thapar Institute campus. This 928-seater hostel provides double-seater rooms with shared washrooms for boys. Each room is fully furnished, with a study table, chair, wardrobe, bookrack, shoe rack, mattress, geyser, curtains, and dustbins. Residents also benefit from amenities such as water coolers, RO systems, and washing machines for their convenience. The hostel features four elevators, ensuring easy access to all floors, with power backup available in emergencies. Housekeeping staff maintain cleanliness, and a laundry system is provided for residents' use.<br/>
        Residents of Hostel O enjoy round-the-clock Wi-Fi access, allowing them to connect to high-speed internet from anywhere within the premises. The hostel boasts a state-of-the-art gymnasium with modern fitness training machines for residents' health and well-being. Additionally, an excellent mess facility caters to the nutritional needs of the residents and is managed by an internationally renowned company known for maintaining the highest quality standards. The hostel also features well-maintained lawns and water bodies, providing a pleasant, relaxing environment.<br/>
        Safety is a priority at Hostel O, with guards stationed at entrances and in each block. Fire alarms are installed throughout the premises to ensure the safety of residents. An executive committee of residents manages the hostel's day-to-day affairs. For late-night cravings, a night canteen offers a variety of food items. Caretakers are available to provide services and assistance to the residents, ensuring their comfort and convenience.`,
  },
  {
    name: 'Hostel N',
    path: 'hostel-n',
    floors: 5,
    rooms: 500,
    students: 499,
    warden: 'Dr. Nidhi Kalra',
    warden_image: 'https://www.thapar.edu/webroot/files/faculty/402/1508850934402.jpg',
    emailW: 'wardenn@thapar.edu',
    contact: '7719619800',
    dayCaretaker: 'Mr. Rajesh Kumar , Mrs. Mandeep Kaur',
    nightCaretaker: 'Mrs. Jyoti Baduani',
    emailC: 'caretaker.n@thapar.edu',
    gender: 'Girls',
    image: hostelN,
    description: `Hostel N represents the newly constructed multistory girl's hostel at Thapar Institute of Engineering & Technology. It is regarded as one of the country's finest hostels and boasts state-of-the-art facilities. The hostel can accommodate 499 residents and offers single and double-seater rooms. Various room types are available, including single-seater rooms with attached toilets, single-seater rooms with shared toilets (shared with another single-seater room), and two-seater rooms with shared toilets.<br/>
        All rooms are equipped with essential amenities such as study tables, chairs, wardrobes, book racks, shoe racks, mattresses, curtains, and dustbins. The entire hostel is air-conditioned, ensuring a comfortable living environment for its residents. Each floor has water coolers, RO systems, and sofa sets. Housekeeping services are provided for regular cleanliness, and a laundry system is available for residents' convenience.<br/>
        • The hostel provides 24/7 Wi-Fi access, enabling residents to enjoy high-speed internet throughout the premises. A well-equipped gymnasium featuring modern exercise machinery is available for fitness enthusiasts. Additionally, air-conditioned reading rooms are situated on each floor, offering a tranquil environment for residents to focus on their studies. The hostel has two elevators to facilitate easy movement, providing access from the ground floor to the sixth floor. These elevators are also equipped with power backups in case of emergencies.<br/>
        • Hostel-N includes an open stage, an excellent platform for hosting cultural functions within the hostel premises. Guest rooms are available for visitors, ensuring their comfort during their stay. The hostel maintains strict security measures, with guards stationed at entrances and patrolling the premises day and night. Fire alarms are also installed throughout the premises, ensuring safety in emergencies.<br/>
        • The hostel's mess facility takes pride in providing hygienic and nutritious food to its residents. Meals are lovingly prepared under the supervision of a dedicated and vigilant committee. The mess menu is carefully curated by the committee members, considering the resident's preferences and nutritional requirements. Special supplements such as healthy sprouts, cornflakes, soups, and boiled eggs are included in the menu. For efficient management, Hostel-N has developed an in-house complaint management system. This online system allows residents to register complaints regarding equipment malfunction and automatically processes the complaints by extracting the relevant room details. Caretakers are available day and night to assist residents with their needs.<br/>
        • Furthermore, the hostel offers an online room allocation system, allowing residents to select their desired rooms through an interactive interface at the beginning of the academic session. The allocation is done on a first-come, first-served basis.`,
  },

  {
    name: 'Hostel M',
    path: 'hostel-m',
    floors: 8,
    rooms: 144,
    students: 1148,
    warden: 'Dr. Rahul Upadhaya',
    warden_image: 'https://www.thapar.edu/webroot/files/faculty/285/1508733465285.jpg',
    emailW: 'wardenm1@thapar.edu, wardenm2@thapar.edu',
    contact: '',
    dayCaretaker: 'Mr. Jaspal Singh, Mr. Satguru Singh, Mr. Brijesh Kumar',
    nightCaretaker: 'Mr. Amrinder Singh',
    emailC: 'caretaker.m@thapar.edu',
    gender: 'Boys',
    image: hostelM,
    description: `Iconic Hostel M is a modern multi-story boys" hostel that boasts state-of-the-art facilities spanning four towers and eight floors with a total capacity of 1148 students.<br/>
        The accommodation options include single and double-seater air-conditioned rooms with attached and shared washrooms.<br/>
        • Each room is furnished with essential amenities such as a study table, chair, almirah, book rack, mattress, geyser, curtains, and dustbins.<br/>
        • Additionally, every floor is equipped with a water cooler, RO system, and sofa sets.<br/>
        • The architectural design of Iconic Hostel M prioritizes seamless accessibility for its students, and this is exemplified by the provision of two elevators in each block. These elevators serve as essential conduits for easy vertical movement, spanning from the ground floor up to the eighth floor.<br/>
        • Upholding superior cleanliness, the hostel engages housekeeping personnel to ensure a pristine environment.<br/>
        • Students can avail themselves of a laundry unit system for their convenience.<br/>
        • The entire hostel premises are enveloped by a continuous 24/7 Wi-Fi network, granting students access to high-speed internet at all times.<br/>`,
  },


  {
    name: 'Hostel C',
    path: 'hostel-c',
    floors: 3,
    rooms: 387,
    students: 387,
    warden: 'Dr. Hari Shankar',
    warden_image: 'https://www.thapar.edu/webroot/files/faculty/285/1508733465285.jpg',
    emailW: 'wardenc@thapar.edu',
    contact: '7977389955',
    dayCaretaker: 'Mr. Gurmeet Singh, Mr. Manish Kumar',
    nightCaretaker: 'Nishan Singh',
    emailC: 'caretaker.c@thapar.edu',
    gender: 'Boys',
    image: hostelC,
    description: `Prithvi Hall is one of the oldest hostels equipped with modern amenities. With a total capacity of 387, the hostel offers air-conditioned accommodation in two-seater and three-seater rooms, each featuring a shared washroom for students.<br/>
        Every room is thoughtfully furnished, providing essential living conveniences such as a study table, chair, wardrobe, bookrack, mattress, curtains, cloth stands, and dustbins.<br/>
        Hostel C has facilities such as a water cooler with an in-built RO system, a TV/common room, a reading room, hot water availability, and indoor games like table tennis, chess, and carom. The hostel's extensive and well-maintained lawns, adorned with water fountains, create a peaceful and serene atmosphere.<br/>
        The presence of housekeeping staff ensures cleanliness, and a laundry system is provided for students' needs.<br/>
        Hostel C fosters a vibrant student community with various events, committees, study groups, and recreational activities.<br/>
        Additionally, Hostel C promotes an inclusive environment with cultural exchange programs and events celebrating student diversity.<br/>`
},

{
    name: 'Hostel D',
    path: 'hostel-d',
    floors: 4,
    rooms: 928,
    students: 928,
    warden: 'Dr. Rajendra Kumar Godara',
    warden_image: 'https://www.thapar.edu/webroot/files/faculty/285/1508733465285.jpg',
    emailW: 'wardend@thapar.edu',
    contact: '9115600146, 9456338299',
    dayCaretaker: 'Mr. Mandeep Daniel, Mr. Manish Kumar',
    nightCaretaker: 'Mr. Arwinder Singh, Mr. Gurvinder Singh',
    emailC: 'caretaker.d@thapar.edu',
    gender: 'Boys',
    image: hostelD,
    description: `Neeram Hall is the latest addition to the exceptional range of hostel facilities. This 928-seater hostel provides double-seater rooms with shared washrooms for boys. Each room is fully furnished, with a study table, chair, wardrobe, bookrack, shoe rack, mattress, geyser, curtains, and dustbins.<br/>
        Students benefit from amenities such as water coolers and RO systems. The hostel features four elevators, ensuring easy access to all floors, with power backup available in emergencies.<br/>
        Hostel D offers round-the-clock Wi-Fi, a state-of-the-art gymnasium, an excellent mess facility, well-maintained lawns, and a night canteen.<br/>
        The hostel ensures safety with guards, CCTV cameras, and fire alarms throughout the premises. A student executive committee manages the day-to-day affairs.<br/>
        Hostel D focuses on student well-being and comfort, providing various recreational and academic facilities.<br/>`
},

{
    name: 'Hostel J',
    path: 'hostel-j',
    floors: 2,
    rooms: 1170,
    students: 1170,
    warden: 'Dr. Munish Kansal',
    warden_image: 'https://www.thapar.edu/webroot/files/faculty/285/1508733465285.jpg',
    emailW: 'wardenj@thapar.edu',
    contact: '9115608845',
    dayCaretaker: 'Mr. Raj Kumar, Mr. Jaspal Singh',
    nightCaretaker: 'Mr. Ajay Kumar, Mr. Ram Naresh',
    emailC: 'caretaker.j@thapar.edu',
    gender: 'Boys',
    image: hostelJ,
    description: `Tejas Hall is a multistoried boys hostel offering single-seated accommodation for 858 residents in 78 clusters. Each cluster has geysers and three-seater chairs. The hostel offers 24/7 Wi-Fi, a well-equipped gym, and an air-conditioned reading room.<br/>
        The twin towers of Hostel J have four elevators with power backups. The hostel features an open-air theatre for cultural functions, guest rooms, a night mess, and a complaint management system.<br/>
        Security is a priority with guards, CCTV cameras, and fire alarms. The mess offers a variety of food, ensuring nutritional needs are met.<br/>
        Hostel J provides excellent services, ensuring the residents' comfort and satisfaction.<br/>`
},

{
    name: 'Hostel A',
    path: 'hostel-a',
    floors: 4,
    rooms: 928,
    students: 928,
    warden: 'M. Vasundhara',
    warden_image: 'https://www.thapar.edu/webroot/files/faculty/285/1508733465285.jpg',
    emailW: 'wardena@thapar.edu',
    contact: '8288008174, 9115600644',
    dayCaretaker: 'Mr. Sandeep Singh, Mrs. Jasvir Kaur, Mr. Deepak Batish',
    nightCaretaker: 'Mrs. Suman Kumari, Mrs. Gagandeep Kaur',
    emailC: 'caretaker.a@thapar.edu',
    gender: 'Girls',
    image: hostelA,
    description: `Agira Hall is the latest addition to the exceptional range of hostel facilities. This 928-seater hostel offers double-seater rooms with shared washrooms for girls. Each room is fully furnished with essential amenities.<br/>
        The hostel features four elevators, ensuring easy access to all floors with power backup in emergencies. Students enjoy 24/7 Wi-Fi access, a state-of-the-art gymnasium, and a well-maintained lawn.<br/>
        The hostel also has a night canteen, excellent mess facilities, and security with guards, CCTV cameras, and fire alarms.<br/>
        Agira Hall offers a comfortable, safe, and student-centric environment with a focus on student well-being and satisfaction.<br/>`
},

{
    name: 'Hostel Q',
    path: 'hostel-q',
    floors: 4,
    rooms: 928,
    students: 928,
    warden: 'Dr. Anju Bala',
    warden_image: 'https://www.thapar.edu/webroot/files/faculty/285/1508733465285.jpg',
    emailW: 'wardenq@thapar.edu',
    contact: '828808175',
    dayCaretaker: 'Mr. Amarinder Singh, Mrs. Amandeep Rani',
    nightCaretaker: 'Mrs. Dilpreet Kaur, Mrs. Pooja',
    emailC: 'caretaker.q@thapar.edu',
    gender: 'Girls',
    image: hostelQ,
    description: `Hostel Q is the newest addition to Thapar Institute's state-of-the-art housing facilities. The hostel offers 928 double-seater rooms with air conditioning and shared restrooms.<br/>
        Each room is furnished with essential amenities such as a desk, chair, bookcase, mattress, geyser, curtains, and trash cans.<br/>
        Hostel Q provides a TV room, gymnasium, study area, night café, and spacious grounds. Four elevators with power backup ensure easy access to all floors.<br/>
        The hostel has a dedicated housekeeping team, a laundry system, 24/7 Wi-Fi, and excellent mess facilities.<br/>
        The well-maintained lawn and beautiful water features add to the serene ambiance. Security is ensured with CCTV cameras and round-the-clock guards.<br/>`
}
];

export default hostels as Hostel[];
