export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    group: '/dashboard/group',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    hostels: '/dashboard/hostels',
    preference: '/dashboard/preference',
    rooms: '/dashboard/rooms',
    faqs: '/dashboard/faqs',
    settings: '/dashboard/settings',
  },
  laundry:{
    overview:'/laundry',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
