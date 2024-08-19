export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  allocation: {
    group: '/allocation/group',
    account: '/allocation/account',
    customers: '/allocation/customers',
    integrations: '/allocation/integrations',
    hostels: '/allocation/hostels',
    preference: '/allocation/preference',
    rooms: '/allocation/rooms',
    faqs: '/allocation/faqs',
  },
  overview: '/overview',
  settings:'/settings',
  laundry:'/laundry',
  cleaning:'/cleaning',
  errors: { notFound: '/errors/not-found' },
} as const;
