export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  overview: '/overview',
  settings:'/settings',
  laundry:'/laundry',
  cleaning:{
    default:'/cleaning',
    dashboard:'/cleaning/dashboard',
    attendance:'/cleaning/attendance',
    assignment:'/cleaning/assignment',
    addWorker:'/cleaning/add-worker',
  },
  mess:{
    default:'/mess',
    dashboard:'/mess/dashboard',
    menu:'/mess/menu',
    feedback:'/mess/feedback',
    items:'/mess/menu-items',
  },
  leave:{
    default:'/leave',
    dashboard:'/leave/dashboard',
    records:'/leave/records',
  },
  errors: { notFound: '/errors/not-found' },


} as const;
