import { API_ENDPOINTS } from "@/constants";
import { deleteApi, getApi, patchApi, postApi } from "../config";

/**
 * Create new deduction rule
 */
const createDeductionRule = (data: any) => {
  return postApi(`${API_ENDPOINTS.admin.deductionRule}`, data);
};

/**
 * Update new deduction rule
 */
const updateDeductionRuleById = ({ id, data }: { id: string; data: any }) => {
  return patchApi(`${API_ENDPOINTS.admin.deductionRule}/${id}`, data);
};

/**
 * Get all deduction rule
 */
const getAllDeductionRules = () => {
  return getApi(`${API_ENDPOINTS.admin.deductionRule}`);
};

/**
 * Get deduction rule by id
 */
const getDeductionRuleById = (id: string) => {
  return getApi(`${API_ENDPOINTS.admin.deductionRule}/${id}`);
};

/**
 * Get master deduction rule
 */
const getMasterDeductionRule = () => {
  return getApi(`${API_ENDPOINTS.admin.deductionRule}/master`);
};

/**
 * Delete a deduction rule
 */
const deleteDeductionRuleById = (id: string) => {
  return deleteApi(`$${API_ENDPOINTS.admin.deductionRule}/${id}`);
};

/**
 * Invite company to the platform
 */
const inviteCompanyToPlatform = (data: any) => {
  return postApi(`${API_ENDPOINTS.admin.inviteCompany}`, data);
};

/**
 * Invite freelancer to the platform
 */
const inviteFreelancerToPlatform = (data: any) => {
  return postApi(`${API_ENDPOINTS.admin.inviteFreelancer}`, data);
};

/**
 * Admin user/staff
 */
const createInviteAdminUser = (data: any) => {
  return postApi(`${API_ENDPOINTS.admin.inviteAdminUser}`, data);
};

/**
 * Update admin user profile
 */
const updateAdminUserProfileById = ({
  id,
  data,
}: {
  id: string;
  data: any;
}) => {
  return patchApi(`${API_ENDPOINTS.admin.adminUser}/${id}`, data);
};

/**
 * Get all admin user list
 */
const getAdminUsers = (searchValue: string, page: number, limit?: number) => {
  return getApi(
    `${API_ENDPOINTS.admin.adminUser}?search=${searchValue}&page=${page}&limit=${limit}`
  );
};

/**
 * Get admin user data by user id
 */
const getAdminUserByUserId = (userId: string) => {
  return getApi(`${API_ENDPOINTS.admin.adminUser}/auth/${userId}`);
};

/**
 * Get admin user by id
 */
const getAdminUserById = (id:string)=>{
  return getApi(`${API_ENDPOINTS.admin.adminUser}/${id}`);
}
/**
 * Get admin dashboard
 */
const getAdminDashboard = () => {
  return getApi(`${API_ENDPOINTS.admin.common}/dashboard`);
};




export {
  createDeductionRule,
  updateDeductionRuleById,
  getAllDeductionRules,
  getDeductionRuleById,
  getMasterDeductionRule,
  deleteDeductionRuleById,
  inviteCompanyToPlatform,
  inviteFreelancerToPlatform,
  createInviteAdminUser,
  updateAdminUserProfileById,
  getAdminUsers,
  getAdminUserByUserId,
  getAdminUserById,
  getAdminDashboard,
};
