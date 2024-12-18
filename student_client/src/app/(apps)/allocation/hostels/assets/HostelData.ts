import type { Hostel } from '@/types/hostels';

import { hostelB, hostelM, hostelN, hostelO } from './HostelImages';

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
];

export default hostels as Hostel[];
