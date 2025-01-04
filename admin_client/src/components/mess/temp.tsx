const reviews = [
	{
	  id: "1",
	  name: "Sharath Chandra Chinarigari",
	  roll_num: 2345678901,
	  rating: 5,
	  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aliquid incidunt quae quidem ea! Aut adipisci, iste tempore obcaecati mollitia quam dolorum reiciendis, eos deserunt ipsum ad sunt impedit. Est, nemo illum. Beatae, eius. Illum, placeat asperiores assumenda ullam odio suscipit quibusdam dolor non perferendis doloribus aliquam, eaque unde porro, sunt aspernatur eos mollitia tempora obcaecati corporis quis laudantium sint. Autem, eos praesentium quisquam est, ipsam blanditiis aspernatur esse veniam assumenda fuga earum ipsa. Voluptates molestiae hic perferendis, cum aspernatur tempora alias laboriosam possimus, quo fugit corporis neque officia. Hic ex, excepturi quos voluptatibus aliquam ipsum fugiat corrupti perferendis molestias.idunt quae quidem ea! Aut adipisci, iste tempore obcaecati mollitia quam dolorum reiciendis, eos deserunt ipsum ad sunt impedit. Est, nemo illum. Beatae, eius. Illum, placeat asperiores assumenda ullam odio suscipit quibusdam dolor non perferendis doloribus aliquam, eaque unde porro, sunt aspernatur eos mollitia tempora obcaecati corporis quis laudantium sint. Autem, eos praesentium quisquam est, ipsam blanditiis aspernatur esse veniam assumenda fuga earum ipsa. Voluptates molestiae hic perferendis, cum aspernatur tempora alias laboriosam possimus, quo fugit corporis neque officia. Hic ex, excepturi quos voluptatibus aliquam ipsum fugiat corrupti perferendis molestias.idunt quae quidem ea! Aut adipisci, iste tempore obcaecati mollitia quam dolorum reiciendis, eos deserunt ipsum ad sunt impedit. Est, nemo illum. Beatae, eius. Illum, placeat asperiores assumenda ullam odio suscipit quibusdam dolor non perferendis doloribus aliquam, eaque unde porro, sunt aspernatur eos mollitia tempora obcaecati corporis quis laudantium sint. Autem, eos praesentium quisquam est, ipsam blanditiis aspernatur esse veniam assumenda fuga earum ipsa. Voluptates molestiae hic perferendis, cum aspernatur tempora alias laboriosam possimus, quo fugit corporis neque officia. Hic ex, excepturi quos voluptatibus aliquam ipsum fugiat corrupti perferendis molestias.",
	  date: "2024-10-05",
	  timing: "Morning"
	},
	{
	  id: "2",
	  name: "Emma Wilson",
	  roll_num: 5678901234,
	  rating: 4,
	  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aliquid incidunt quae quidem ea! Aut adipisci, iste tempore obcaecati mollitia quam dolorum reiciendis, eos deserunt ipsum ad sunt impedit. Est, nemo illum. Beatae, eius. Illum, placeat asperiores assumenda ullam odio suscipit quibusdam dolor non perferendis doloribus aliquam, eaque unde porro, sunt aspernatur eos mollitia tempora obcaecati corporis quis laudantium sint. Autem, eos praesentium quisquam est, ipsam blanditiis aspernatur esse veniam assumenda fuga earum ipsa. Voluptates molestiae hic perferendis, cum aspernatur tempora alias laboriosam possimus, quo fugit corporis neque officia. Hic ex, excepturi quos voluptatibus aliquam ipsum fugiat corrupti perferendis molestias.",
	  date: "2024-09-10",
	  timing: "Morning"
	},
	{
	  id: "3",
	  name: "Noah Davis",
	  roll_num: 1122334455,
	  rating: 4,
	  description: "The hands-on activities made learning very engaging.",
	  date: "2024-07-21",
	  timing: "Morning"
	},
	{
	  id: "4",
	  name: "Olivia Brown",
	  roll_num: 7894561230,
	  rating: 5,
	  description: "Fantastic! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aliquid incidunt quae quidem ea! Aut adipisci, iste tempore obcaecati mollitia quam dolorum reiciendisThe instructor was clear and very supportive.",
	  date: "2024-06-17",
	  timing: "Afternoon"
	},
	{
	  id: "5",
	  name: "Ethan Moore",
	  roll_num: 3456789012,
	  rating: 3,
	  description: "A good experience overall, but some parts felt rushed.",
	  date: "2024-08-09",
	  timing: "1:45 PM"
	},
	{
	  id: "6",
	  name: "Sophia Martinez",
	  roll_num: 5672138901,
	  rating: 4,
	  description: "Engaging and insightful sessions with plenty of practical tips.",
	  date: "2024-09-12",
	  timing: "4:30 PM"
	},
	{
	  id: "7",
	  name: "Lucas Anderson",
	  roll_num: 9213456789,
	  rating: 3,
	  description: "Could have been more in-depth, but still helpful.",
	  date: "2024-07-08",
	  timing: "12:00 PM"
	},
	{
	  id: "8",
	  name: "Mia Johnson",
	  roll_num: 4719234567,
	  rating: 5,
	  description: "Great content and examples! Highly recommend.",
	  date: "2024-05-30",
	  timing: "10:30 AM"
	},
	{
	  id: "9",
	  name: "Liam Lee",
	  roll_num: 3345678901,
	  rating: 4,
	  description: "I learned a lot, but the pace could have been slower.",
	  date: "2024-09-17",
	  timing: "2:00 PM"
	},
	{
	  id: "10",
	  name: "Isabella Garcia",
	  roll_num: 1123445567,
	  rating: 5,
	  description: "Fantastic experience! Every concept was explained clearly.",
	  date: "2024-08-02",
	  timing: "1:00 PM"
	},
	{
	  id: "11",
	  name: "James Thompson",
	  roll_num: 5598764321,
	  rating: 2,
	  description: "Not very clear in some parts, I struggled to keep up.",
	  date: "2024-07-18",
	  timing: "11:30 AM"
	},
	{
	  id: "12",
	  name: "Charlotte Martinez",
	  roll_num: 8765432109,
	  rating: 4,
	  description: "The course was informative and enjoyable, but a bit repetitive.",
	  date: "2024-09-03",
	  timing: "3:15 PM"
	},
	{
	  id: "13",
	  name: "Aiden Wilson",
	  roll_num: 2456789012,
	  rating: 5,
	  description: "Excellent course! Everything was well explained.",
	  date: "2024-06-25",
	  timing: "10:45 AM"
	},
	{
	  id: "14",
	  name: "Amelia Brown",
	  roll_num: 6789054321,
	  rating: 3,
	  description: "Good but could use more real-life examples to connect concepts.",
	  date: "2024-08-18",
	  timing: "12:00 PM"
	},
	{
	  id: "15",
	  name: "Mason Taylor",
	  roll_num: 4321098765,
	  rating: 4,
	  description: "Great course, but the assignments were a bit too hard.",
	  date: "2024-09-06",
	  timing: "4:00 PM"
	},
	{
	  id: "16",
	  name: "Ella Davis",
	  roll_num: 8765092341,
	  rating: 2,
	  description: "Not enough practical exercises for a real-world application.",
	  date: "2024-07-22",
	  timing: "1:30 PM"
	},
	{
	  id: "17",
	  name: "Benjamin Harris",
	  roll_num: 2345678901,
	  rating: 4,
	  description: "Enjoyable learning experience, would have liked more case studies.",
	  date: "2024-06-05",
	  timing: "9:00 AM"
	},
	{
	  id: "18",
	  name: "Harper Walker",
	  roll_num: 7890123456,
	  rating: 5,
	  description: "Amazing course, learned a lot! Highly recommend for anyone interested.",
	  date: "2024-05-21",
	  timing: "2:15 PM"
	},
	{
	  id: "19",
	  name: "Jack Robinson",
	  roll_num: 5601234789,
	  rating: 3,
	  description: "Interesting but too theoretical for my liking.",
	  date: "2024-08-12",
	  timing: "4:45 PM"
	},
	{
	  id: "20",
	  name: "Zoe Clark",
	  roll_num: 9087654321,
	  rating: 4,
	  description: "Great experience, could use more interactive content.",
	  date: "2024-09-14",
	  timing: "12:30 PM"
	}
  ];
  

  export default reviews;