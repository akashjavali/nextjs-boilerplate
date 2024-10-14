import { USER_TYPES, PAYROLL_STATUS, SALARY_STATUS } from '@/constants';
/** TYPES DIVIDED INTO TWO TYPES SERVER SIDE CONTROL AND CLIENT SIDE ACTIONS AND INTERACTIONS TYPES */

/** These are generic types which are related external controlled from the server side **/
/**
 * User role control
 */
export type RoleT = {
  _id: string;
  roleName: string;
  description?: string;
};

/**
 * Categories list table types these are related to freelancer and hardcoded data
 */

export type CategoriesT = {
  id?: string;
  name: string;
  isDeleted?: boolean;
};

/**
 * Department table, department of patron account user */
export type DepartmentT = {
  _id: string;
  departmentName: string;
  isDeleted?: boolean;
};

/**
 * Common table for all address
 */
export type AddressT = {
  zipCode: number;
  city: string;
  country: string;
  countryCode: string;
  state: string;
  locality: string;
  houseNumber: string;
  street: string;
  landmark: string;
};

/**
 * Country table types
 */

export type CountryT = {
  zipCode: string;
  name: string;
  countryCode: string;
  state: string;
  district: string;
};

/**
 * Notifications are middleware types
 */
export type NotificationT = {
  _id: string;
  company?: CompanyT;
  sendTo: CompanyT | FreelancerI;
  sent_by: CompanyUserI | FreelancerI;
  profileImage?: string;
  title: string;
  message: string;
  description?: string;
  dynamicType: string;
  isRead: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Type of Company types
 */
export type CompanyTypes = {
  _id?: string;
  name: string;
  isDeleted?: boolean;
};

/**
 * Response custom error
 */

export type Response_Error = {
  error: string;
  isOperational: boolean;
  message: string;
  status: number;
};

/**
 * Pagination
 */
export type PaginationT = {
  limit: number;
  page: number;
  totalResults: number;
};

/**END OF GENERIC TYPES */

/**These are related to user and actions happening on the client side */

/**
 * Auth model types
 */
export type AuthT = {
  email: string;
  password: string;
};

export type UserT = AuthT & {
  _id: string;
  isActive: boolean;
  isDeleted: boolean;
  isProfileUpdated: boolean;
  isPublic: boolean;
  isVerified: boolean;
  referralCode?: string;
  userType: (typeof USER_TYPES)[keyof typeof USER_TYPES];
};

/**
 * Sign up
 */
export type SignUpI = {
  userType: string;
  email: string;
  password: string;
  password2: string;
  roleId?: string;
};

/**
 * Reset and create password for users
 */
export type PasswordResetT = {
  userId: string;
  token: string;
  expireAt: Date;
};

/**
 * Reset or set new password
 */
export type ResetOrSetPasswordI = {
  password: string;
  token: string;
  userId: string;
  type: string;
};

/**
 * Types for contract with platform
 */

export type FreelancerPayrollContract = {
  userId: string;
  contractEnvelopId: string;
  isDeleted?: boolean;
};

/**
 * Freelancer other details these are boolean options **TODO** can be customized based on the requirement
 */
export type QuestionT = {
  _id?: string;
  question_name: string;
  question_type: string;
  isDeleted?: boolean;
};

/**
 * Freelancer payroll types
 */
export type PayrollT = {
  _id?: string;
  social_insurance_number: string;
  civil_status: string;
  civil_status_valid_from: string;
  partner_details: {
    full_name: string;
    partner_has_income: string;
    permit_type: string;
  };
  is_eligible_for_child_allowance: string;
  child_allowance: {
    _id?: string;
    social_insurance_number: string;
    full_name: string;
    gender: string;
    date_Of_birth: string | Date;
    isActive?: boolean;
  }[];
  questions: string[];
  is_payroll_approved: boolean;
  status: (typeof PAYROLL_STATUS)[keyof typeof PAYROLL_STATUS];
  is_contract_signed_by_freelancer: boolean;
  fak_pension: string;
  envelop_id: string;
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Freelancer profile types
 */
export type FreelancerI = {
  _id?: string;
  userId: string;
  address: AddressT;
  email: string;
  firstName: string;
  lastName: string;
  iBanNumber: string;
  dateOfBirth: any;
  phoneNumber: number;
  profileImage: any;
  gender: string;
  nationality: string;
  religion: string;
  languages: {
    name: string;
  }[];
  companies: {
    companyId: string;
    isAcceptedInvitation?: boolean;
    contactEnvelopId?: string;
    isContractSignedByCompany: boolean;
  }[];
  skills: { _id: string; skillName: string }[];
  typeOfProfile: string;
  stayPermitDetails: string;
  isFreelancerOnPayroll: boolean;
  isVerified?: boolean;
  payroll_details?: PayrollT;
  createdAt?: Date;
};

/**
 * Patron company users
 */

export type CompanyUserI = {
  userId: string;
  companyId: string;
  departmentId: string;
  // address: AddressT;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  iBanNumber: string;
  dateOfBirth: any;
  profileImage: string;
  gender: string;
  roleInCompany: string;
  isDeleted: boolean;
};

/**
 * Patron company details
 */
export type CompanyT = {
  _id?: string;
  name: string;
  address: AddressT;
  companyUsers: string[];
  email: string;
  isCompanyOutsideSwitzerland: any;
  zefix: string;
  companyLogo: string;
  typeOfCompany: string | any;
  iBanNumber: string;
  isVerified: boolean;
  nationality: string;
  freelancers: {
    freelancerId: string;
    contractEnvelopId?: string;
    isContractSignedByFreelancer: boolean;
    isAcceptedInvitation: boolean;
  }[];
  isCompanyProfileUpdate: boolean;
  referralCode?: string;
  isDeleted?: boolean;
  createdAt?: Date;
};
/**
 * Contract sign between freelancer and company
 */
export type ContractBetweenFreelancerAndCompanyT = {
  envelopeId: string;
  freelancerId: string;
  companyId: string;
  isFreelancerSigned: boolean;
  isCompanySigned: boolean;
};

/**
 * Proposal raised by the freelancer for the job
 */
export type JobProposalT = {
  _id: string;
  jobId: string;
  companyId: string;
  freelancerId: string | JobProposalT;
  amount: number;
  currency: string;
  message: string;
  startDate: any;
  endDate: any;
  isProposalAccepted: boolean;
  isDeleted?: boolean;
};
/**
 *Create job types
 */
export type JobT = {
  _id?: string;
  jobAssignedfreelancerId: string;
  companyId: string;
  acceptedProposalId: string;
  jobTitle: string;
  jobDescription: string;
  isPrivate: boolean | any;
  jobRequestFreelancers: string[];
  budget: number;
  extraordinaryExpenses: number;
  currencyType: string;
  jobTimeline: string | any;
  jobType: string;
  skills: string[];
  status: string;
  documents?: {
    name: string;
    document: string;
  }[];
  isProposalAccepted: boolean;
  isInvoiceRaised: boolean;
  isAgreedForJobAmount: string;
  isDeleted?: boolean;
  createdAt?: Date;
  jobProposalList?: (string | JobProposalT)[];
  invitedFreelancers?: string[];

  company: CompanyT;
};

/**
 * Types for invoice
 */

export type InvoiceWorkingHoursT = {
  date: string;
  startAt: string;
  endAt: string;
};

export type InvoiceT = {
  _id?: string;
  jobId: string;
  companyId: string;
  freelancerId: string;
  isCompanyFromPlatform: boolean;
  companyEmail: string;
  invoiceNumber: string;
  jobTitle?: string;
  jobDescription: string;
  totalCosting: string;
  extraordinaryExpenses: string;
  currencyType: string;
  adminDeductionAmount: string;
  status: string;
  isPaid: boolean;
  payForDuration: string;
  jobStartDate: Date;
  jobEndDate: Date;
  invoicePdfURL: string;
  companyName: string;
  totalPayable: number;
  isSelected?: boolean;
  worked_hours: InvoiceWorkingHoursT[];
  createdAt?: Date;
};

/**
 * Type for messages these messages are stored in db without using socket
 */
export type MessageT = {
  jobId?: string;
  senderId?: string;
  receiverId?: string;
  message: string;
  sentAt?: Date;
  isRead?: boolean;
  isDeleted?: boolean;
};

/**
 * Type for invitation to request by a user to the platform
 */

export type InvitationToPlatformByAUserT = {
  companyId?: string;
  freelancerEmail?: string;
  companyUserEmail?: string;
  companyEmail?: string;
  companyName?: string;
  freelancerUserId?: string;
  roleId: string;
  userType: string;
  isCompanyOutsideSwitzerland?: string;
  typeOfCompany?: string;
  referralCode: string;
};

/***
 * Job comments
 */
export type JobCommentT = {
  _id?: string;
  jobId: string;
  comment_message: string;
  senderId: string;
  attachments: string[];
  companyId?: string;
  createdBy?: string;
  createdAt?: Date;
};

/**
 * Deduction rule types
 */
export type PensionContributionRates = {
  pension_25_34: number;
  pension_35_44: number;
  pension_45_54: number;
  pension_55_64: number;
};

export type SicknessInsuranceT = {
  male: number;
  female: number;
};

export type EmployerDeductionT = {
  _id?: string;
  papa_fee: number;
  ahv_iv_eo: number; //here underscore refers to / sign mean or
  alv: number;
  fak: number;
  vk: number;
  ktg_premium: SicknessInsuranceT | number; //Sickness insurance
  nbu: number;
  pension_contribution_employer: PensionContributionRates | number; //This is based on user age
};

export type EmployeeContributionT = Pick<
  EmployerDeductionT,
  '_id' | 'ahv_iv_eo' | 'alv' | 'ktg_premium' | 'nbu'
> & {
  withholding_tax: number;
  pension_contribution_employee: PensionContributionRates | number; //This is based on user age
};

export type DeductionRule = {
  _id?: string;
  rule_name: string;
  employer_deduction: EmployerDeductionT;
  employee_contribution: EmployeeContributionT;
  is_master: boolean;
  isDeleted?: boolean;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
};

/**
 * Freelancer salary types
 */

export type SalaryT = Document & {
  _id?: string;
  payslip_number: string;
  invoice_ids: string[];
  deduction_rule_id: string;
  freelancerId: string;
  total_amount: number;
  employer_total_deduction: number;
  employee_total_contribution: number;
  vatTax: number;
  platformFee: number;
  grand_total_amount: number;
  ibanNumber: string;
  salaryPdfUrl: string;
  status?: (typeof SALARY_STATUS)[keyof typeof SALARY_STATUS];
  createdBy?: string;
  updatedBy?: string;
  invoices?: InvoiceT[];
  deduction_rule: DeductionRule[];
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * Admin user type
 */
export type AdminUserT = {
  _id?: string;
  isVerified?: boolean;
  userId?: string;
  address: AddressT;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date | any;
  phoneNumber: number;
  profileImage: any;
  gender: string;
  isDeleted: boolean;
  createdBy?: string;
  updatedBy?: string;
};
