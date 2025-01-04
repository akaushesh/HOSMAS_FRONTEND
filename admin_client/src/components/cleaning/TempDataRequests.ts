
interface RequestProps {
    id: string;
    roomName: string;
    slots: { from: string; to: string }[];
    assigned: string;
}
  
  export const tempRequests: RequestProps[] = [
    {
      id: '1',
      roomName: 'Room A',
      slots: [
        { from: '2022-04-17T09:00', to: '2022-04-17T10:00' },
        { from: '2022-04-17T11:00', to: '2022-04-17T12:00' },
        { from: '2022-04-17T13:00', to: '2022-04-17T14:00' },
      ],
      assigned: 'John Doe',
    },
    {
      id: '2',
      roomName: 'Room B',
      slots: [
        { from: '2022-04-17T09:30', to: '2022-04-17T10:30' },
        { from: '2022-04-17T11:30', to: '2022-04-17T12:30' },
        { from: '2022-04-17T14:00', to: '2022-04-17T15:00' },
      ],
      assigned: 'Jane Doe',
    },
    {
      id: '3',
      roomName: 'Room C',
      slots: [
        { from: '2022-04-17T10:00', to: '2022-04-17T11:00' },
        { from: '2022-04-17T12:00', to: '2022-04-17T13:00' },
        { from: '2022-04-17T14:30', to: '2022-04-17T15:30' },
      ],
      assigned: 'Mike Smith',
    },
    {
      id: '4',
      roomName: 'Room D',
      slots: [
        { from: '2022-04-17T09:15', to: '2022-04-17T10:15' },
        { from: '2022-04-17T11:15', to: '2022-04-17T12:15' },
        { from: '2022-04-17T13:15', to: '2022-04-17T14:15' },
      ],
      assigned: 'Sarah Connor',
    },
    {
      id: '5',
      roomName: 'Room E',
      slots: [
        { from: '2022-04-17T09:45', to: '2022-04-17T10:45' },
        { from: '2022-04-17T11:45', to: '2022-04-17T12:45' },
        { from: '2022-04-17T13:45', to: '2022-04-17T14:45' },
      ],
      assigned: 'Bruce Wayne',
    },
    {
      id: '6',
      roomName: 'Room F',
      slots: [
        { from: '2022-04-17T10:15', to: '2022-04-17T11:15' },
        { from: '2022-04-17T12:15', to: '2022-04-17T13:15' },
        { from: '2022-04-17T14:15', to: '2022-04-17T15:15' },
      ],
      assigned: 'Clark Kent',
    },
    {
      id: '7',
      roomName: 'Room G',
      slots: [
        { from: '2022-04-17T09:00', to: '2022-04-17T10:00' },
        { from: '2022-04-17T11:00', to: '2022-04-17T12:00' },
        { from: '2022-04-17T13:00', to: '2022-04-17T14:00' },
      ],
      assigned: 'Diana Prince',
    },
    {
      id: '8',
      roomName: 'Room H',
      slots: [
        { from: '2022-04-17T09:30', to: '2022-04-17T10:30' },
        { from: '2022-04-17T11:30', to: '2022-04-17T12:30' },
        { from: '2022-04-17T14:00', to: '2022-04-17T15:00' },
      ],
      assigned: 'Peter Parker',
    },
    {
      id: '9',
      roomName: 'Room I',
      slots: [
        { from: '2022-04-17T10:00', to: '2022-04-17T11:00' },
        { from: '2022-04-17T12:00', to: '2022-04-17T13:00' },
        { from: '2022-04-17T14:30', to: '2022-04-17T15:30' },
      ],
      assigned: 'Tony Stark',
    },
    {
      id: '10',
      roomName: 'Room J',
      slots: [
        { from: '2022-04-17T09:15', to: '2022-04-17T10:15' },
        { from: '2022-04-17T11:15', to: '2022-04-17T12:15' },
        { from: '2022-04-17T13:15', to: '2022-04-17T14:15' },
      ],
      assigned: 'Steve Rogers',
    },
    {
      id: '11',
      roomName: 'Room K',
      slots: [
        { from: '2022-04-17T09:45', to: '2022-04-17T10:45' },
        { from: '2022-04-17T11:45', to: '2022-04-17T12:45' },
        { from: '2022-04-17T13:45', to: '2022-04-17T14:45' },
      ],
      assigned: 'Natasha Romanoff',
    },
    {
      id: '12',
      roomName: 'Room L',
      slots: [
        { from: '2022-04-17T10:15', to: '2022-04-17T11:15' },
        { from: '2022-04-17T12:15', to: '2022-04-17T13:15' },
        { from: '2022-04-17T14:15', to: '2022-04-17T15:15' },
      ],
      assigned: 'Wanda Maximoff',
    },
    {
      id: '13',
      roomName: 'Room M',
      slots: [
        { from: '2022-04-17T09:00', to: '2022-04-17T10:00' },
        { from: '2022-04-17T11:00', to: '2022-04-17T12:00' },
        { from: '2022-04-17T13:00', to: '2022-04-17T14:00' },
      ],
      assigned: 'Stephen Strange',
    },
    {
      id: '14',
      roomName: 'Room N',
      slots: [
        { from: '2022-04-17T09:30', to: '2022-04-17T10:30' },
        { from: '2022-04-17T11:30', to: '2022-04-17T12:30' },
        { from: '2022-04-17T14:00', to: '2022-04-17T15:00' },
      ],
      assigned: 'Scott Lang',
    },
    {
      id: '15',
      roomName: 'Room O',
      slots: [
        { from: '2022-04-17T10:00', to: '2022-04-17T11:00' },
        { from: '2022-04-17T12:00', to: '2022-04-17T13:00' },
        { from: '2022-04-17T14:30', to: '2022-04-17T15:30' },
      ],
      assigned: 'Bruce Banner',
    },
  ];
  

  interface CleanerProps {
    id: string;
    name: string;
    present: boolean;
    img: string;
    assigned?: [{requestId:string; roomName: string; slot:{from: string; to: string}}];
  }
  export const tempCleaners: CleanerProps[] = [
    {
      id: '123',
      name: 'Rajesh',
      present: false,
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: '456',
      name: 'Vinesh',
      present: false,
      img: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: '789',
      name: 'Dinesh',
      present: false,
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: '21',
      name: 'Minesh',
      present: false,
      img: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: '1233',
      name: 'Kanishk',
      present: false,
      img: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: '1234',
      name: 'Jagya',
      present: false,
      img: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
      id: '12343',
      name: 'Suresh',
      present: false,
      img: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      id: '12223',
      name: 'Namesh',
      present: false,
      img: 'https://randomuser.me/api/portraits/men/8.jpg',
    },
    {
      id: '1293',
      name: 'Madhesh',
      present: false,
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    {
      id: '1283',
      name: 'Rajesh',
      present: true,
      img: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
    {
      id: '1273',
      name: 'Rajesh',
      present: false,
      img: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
    {
      id: '1263',
      name: 'Rajesh',
      present: true,
      img: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      id: '1253',
      name: 'Rajesh',
      present: true,
      img: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
  ];
  