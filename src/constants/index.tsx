/**
 * Server url constant
 */
// eslint-disable-next-line no-use-before-define
const API_SERVER_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * END POINTS
 */

const API_ENDPOINTS = {
  auth: {
    signUp: 'auth/local/register',
    login: 'auth/local',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    setPassword: '/set-password',
    logout: '/logout',
    activateEmail: '/common/activate',
    uploadProfileImage: '/users/profile/upload',
    previewUserProfile: '/users/profile',
    notifications: '/notifications/user',
    readNotification: '/notifications/isRead',
  },
  misc: {
    categories: 'api/categories?populate=*',
  },
};

/**
 * Enums
 */
const USER_TYPES = {
  COMPANY: 'company',
  FREELANCER: 'freelancer',
  ADMIN: 'admin',
} as const;

const CURRENCY_TYPE = {
  CHF: 'CHF',
  EURO: 'EURO',
  USD: 'USD',
} as const;

const INVOICE_STATUS = {
  OPEN: 'OPEN',
  PAID: 'PAID',
  PARTIALLY_PAID: 'PARTIALLY_PAID',
  COMPLETED: 'COMPLETED',
} as const;

const PAYROLL_STATUS = {
  SUBMITTED: 'submitted',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  ON_HOLD: 'on_hold',
  REMOVED: 'removed',
} as const;

const SALARY_STATUS = {
  REQUESTED: 'requested',
  GENERATED: 'generated',
  CANCELLED: 'cancelled',
} as const;

const AMOUNT_TYPE = {
  GROSS_AMOUNT: 'GROSS AMOUNT',
  NET_AMOUNT: 'NET AMOUNT',
} as const;

export {
  USER_TYPES,
  API_SERVER_URL,
  API_ENDPOINTS,
  PAYROLL_STATUS,
  SALARY_STATUS,
  AMOUNT_TYPE,
  CURRENCY_TYPE,
  INVOICE_STATUS,
};
