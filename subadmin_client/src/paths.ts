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
  },
  mess:{
    default:'/mess',
    dashboard:'/mess/dashboard',
    menu:'/mess/menu',
    feedback:'/mess/feedback',
  },
  errors: { notFound: '/errors/not-found' },


} as const;
