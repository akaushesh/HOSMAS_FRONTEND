const pendingApprovals = [
	{
	  id: 'uigyehhgjuk',
	  name: 'John Doe',
	  roll_num: 102217023,
	  reason: 'Sick Leave',
	  location: 'Kapurthala',
	  leaveDateFrom: '2024-11-01T00:00:00Z',
	  leaveDateTo: '2024-12-22T00:00:00Z',
		status:"a"
	},
	{
	  id: 'uigyehhgbcjdb',
	  name: 'John Doe 2',
	  roll_num: 102217022,
	  reason: 'Picnic',
	  location: 'Delhi',
	  leaveDateFrom: '2024-12-01T00:00:00Z',
	  leaveDateTo: '2024-12-28T00:00:00Z',
		status:"a"
	},
	{
	  id: 'uigyemmjbhhgjuk',
	  name: 'John Doe 3',
	  roll_num: 102217021,
	  reason: 'Hackathon',
	  location: 'Chandigarh',
	  leaveDateFrom: '2024-10-01T00:00:00Z',
	  leaveDateTo: '2024-11-28T00:00:00Z',
		status:"d"
	},
	{
	  id: 'uigyehkbzopx',
	  name: 'Jane Smith',
	  roll_num: 102217024,
	  reason: 'Family Function',
	  location: 'Mumbai',
	  leaveDateFrom: '2024-09-10T00:00:00Z',
	  leaveDateTo: '2024-09-15T00:00:00Z',
		status:"a"
	},
	{
	  id: 'uigyelwhzopx',
	  name: 'Alice Brown',
	  roll_num: 102217025,
	  reason: 'Workshop',
	  location: 'Pune',
	  leaveDateFrom: '2024-10-12T00:00:00Z',
	  leaveDateTo: '2024-10-14T00:00:00Z',
		status:"d"
	},
	{
	  id: 'uigyeuxyzcabc',
	  name: 'Michael Green',
	  roll_num: 102217026,
	  reason: 'Seminar',
	  location: 'Hyderabad',
	  leaveDateFrom: '2024-11-05T00:00:00Z',
	  leaveDateTo: '2024-11-06T00:00:00Z',
		status:"a"
	},
	{
	  id: 'uigyexjjzopx',
	  name: 'Robert Black',
	  roll_num: 102217027,
	  reason: 'Wedding',
	  location: 'Jaipur',
	  leaveDateFrom: '2024-09-25T00:00:00Z',
	  leaveDateTo: '2024-10-02T00:00:00Z',
		status:"a"
	},
	{
	  id: 'uigyeccpzopx',
	  name: 'Emma White',
	  roll_num: 102217028,
	  reason: 'Medical Emergency',
	  location: 'Lucknow',
	  leaveDateFrom: '2024-12-15T00:00:00Z',
	  leaveDateTo: '2025-01-01T00:00:00Z',
		status:"d"
	},
	{
	  id: 'uigyebbvzopx',
	  name: 'Sophia Grey',
	  roll_num: 102217029,
	  reason: 'Conference',
	  location: 'Bangalore',
	  leaveDateFrom: '2024-09-20T00:00:00Z',
	  leaveDateTo: '2024-09-22T00:00:00Z',
		status:"a"
	},
	{
	  id: 'uigyehhcnhjkl',
	  name: 'Liam Stone',
	  roll_num: 102217030,
	  reason: 'Internship',
	  location: 'Gurgaon',
	  leaveDateFrom: '2024-11-10T00:00:00Z',
	  leaveDateTo: '2024-11-30T00:00:00Z',
		status:"d"
	},
	{
	  id: 'uigyesdhzopx',
	  name: 'Noah Brown',
	  roll_num: 102217031,
	  reason: 'Sports Event',
	  location: 'Manali',
	  leaveDateFrom: '2024-10-20T00:00:00Z',
	  leaveDateTo: '2024-10-25T00:00:00Z',
		status:"d"
	},
	{
	  id: 'uigyeqwrzopx',
	  name: 'Isabella Black',
	  roll_num: 102217032,
	  reason: 'Festival',
	  location: 'Varanasi',
	  leaveDateFrom: '2024-11-01T00:00:00Z',
	  leaveDateTo: '2024-11-05T00:00:00Z',
		status:"a"
	},
	{
	  id: 'uigyewknzopx',
	  name: 'Oliver Smith',
	  roll_num: 102217033,
	  reason: 'Project Work',
	  location: 'Ahmedabad',
	  leaveDateFrom: '2024-12-10T00:00:00Z',
	  leaveDateTo: '2024-12-20T00:00:00Z',
		status:"a"
	},
	{
	  id: 'uigyeklpzopx',
	  name: 'Lucas Miller',
	  roll_num: 102217034,
	  reason: 'Excursion',
	  location: 'Kolkata',
	  leaveDateFrom: '2024-10-05T00:00:00Z',
	  leaveDateTo: '2024-10-12T00:00:00Z',
		status:"d"
	},
	{
	  id: 'uigyetqrzopx',
	  name: 'Ethan Green',
	  roll_num: 102217035,
	  reason: 'Cultural Fest',
	  location: 'Chennai',
	  leaveDateFrom: '2024-09-15T00:00:00Z',
	  leaveDateTo: '2024-09-18T00:00:00Z',
		status:"a"
	},
	{
	  id: 'uigyexwxzopx',
	  name: 'Ava Stone',
	  roll_num: 102217036,
	  reason: 'Training',
	  location: 'Shimla',
	  leaveDateFrom: '2024-12-01T00:00:00Z',
	  leaveDateTo: '2024-12-08T00:00:00Z',
		status:"a"
	},
	{
	  id: 'uigyemmnzopx',
	  name: 'Mia Adams',
	  roll_num: 102217037,
	  reason: 'Workshop',
	  location: 'Bhopal',
	  leaveDateFrom: '2024-11-25T00:00:00Z',
	  leaveDateTo: '2024-11-30T00:00:00Z',
		status:"d"
	},
	{
	  id: 'uigyenhvzopx',
	  name: 'Charlotte Grey',
	  roll_num: 102217038,
	  reason: 'Family Emergency',
	  location: 'Agra',
	  leaveDateFrom: '2024-10-10T00:00:00Z',
	  leaveDateTo: '2024-10-13T00:00:00Z',
		status:"a"
	},
	{
	  id: 'uigyetjwzopx',
	  name: 'Amelia Brown',
	  roll_num: 102217039,
	  reason: 'Hackathon',
	  location: 'Indore',
	  leaveDateFrom: '2024-11-12T00:00:00Z',
	  leaveDateTo: '2024-11-14T00:00:00Z',
		status:"d"
	},
	{
	  id: 'uigyeflpzopx',
	  name: 'Elijah Johnson',
	  roll_num: 102217040,
	  reason: 'Research Paper Presentation',
	  location: 'Surat',
	  leaveDateFrom: '2024-12-18T00:00:00Z',
	  leaveDateTo: '2024-12-21T00:00:00Z',
		status:"a"
	},
  ];
export default pendingApprovals;   