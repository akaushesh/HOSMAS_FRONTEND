interface hostel{
    name:string;
    path:string;
    floors:number;
    rooms:number;
    students:number;
    warden:string;
    caretaker:string;
    contact:string;
    email:string;
    gender:string;
    image:string[];
    description:string; 
}


const hostels=[
    {
        name:"Hostel A",
        path:"hostel-a",
        floors:6,
        rooms:100,
        students:500,
        warden:"Dr. ABC",
        caretaker:"Mr. XYZ",
        contact:"9876543210",
        email:"xyz@thapar.edu",
        gender:"Boys",
        image:['https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg'],
        description:"Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university", 
    },
    {
        name:"Hostel B",
        path:"hostel-b",
        floors:6,
        rooms:100,
        students:500,
        warden:"Dr. ABC",
        caretaker:"Mr. XYZ",
        contact:"9876543210",
        email:"xyz@thapar.edu",
        gender:"Boys",
        image:['https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg'],
        description:"Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university", 
    },
    {
        name:"Hostel C",
        path:"hostel-c",
        floors:6,
        rooms:100,
        students:500,
        warden:"Dr. ABC",
        caretaker:"Mr. XYZ",
        contact:"9876543210",
        email:"xyz@thapar.edu",
        gender:"Boys",
        image:['https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg'],
        description:"Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university", 
    },
    {
        name:"Hostel D",
        path:"hostel-d",
        floors:6,
        rooms:100,
        students:500,
        warden:"Dr. ABC",
        caretaker:"Mr. XYZ",
        contact:"9876543210",
        email:"xyz@thapar.edu",
        gender:"Boys",
        image:['https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg','https://4kwallpapers.com/images/walls/thumbs_3t/8728.jpg'],
        description:"Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university Hostel A is the first hostel of Thapar University, Patiala. It is the oldest hostel of the university and is located near the main gate of the university", 
    },

]

export default hostels as hostel[];