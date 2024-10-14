import { API_ENDPOINTS, API_SERVER_URL } from "@/constants";
import { getApi, patchApi, postApi } from "../config";
import axios from "axios";

/**
 * Sign in user using email
 */
const signInUser = (data: any) => {
  return postApi(`${API_ENDPOINTS.auth.login}`, data);
};

/**
 * Sign up user
 */
const signUpUser = (data: any) => {
  return postApi(`${API_ENDPOINTS.auth.signUp}`, data);
};

/**
 * Logout user
 */
const logoutUser = (userId: string) => {
  return postApi(`${API_ENDPOINTS.auth.logout}/${userId}`, {});
};

/**
 * Activate email
 */
const activateEmail = (emailId: string) => {
  return getApi(`${API_ENDPOINTS.auth.activateEmail}/${emailId}`);
};

/**
 * Send reset password link using email
 */
const sendResetPasswordLink = (data: any) => {
  return postApi(`${API_ENDPOINTS.auth.forgotPassword}`, data);
};

/**
 * To reset to new password
 */
const resetNewPassword = ({
  data,
  userId,
  token,
}: {
  data: any;
  userId: string;
  token: string;
}) => {
  return postApi(`${API_ENDPOINTS.auth.resetPassword}/${userId}/${token}`, {
    ...data,
  });
};

/**
 * Set new password
 */
const setNewPassword = ({
  data,
  userId,
  token,
}: {
  data: any;
  userId: string;
  token: string;
}) => {
  return postApi(`${API_ENDPOINTS.auth.setPassword}/${userId}/${token}`, {
    ...data,
  });
};

/**
 * Upload user profile image s3 upload pre-signed
 */

const uploadUserProfileImage = async ({ data }: { data: any }) => {
  try {
    const response = await axios.post(
      `${API_SERVER_URL}${API_ENDPOINTS.auth.uploadProfileImage}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response) {
      return response;
    }

    return response;
  } catch (error) {
    throw error;
  }
};

/**
 * Get user profile image from bucker to preview
 */
const getUserProfileImage = async ({
  userType,
  userId,
}: {
  userType: any;
  userId: string;
}) => {
  return getApi(
    `${API_ENDPOINTS.auth.previewUserProfile}/${userId}?userType=${userType}`
  );
};

/**
 * Get notifications
 */
const getNotificationByUserId = (userId: string, userType: string) => {
  return getApi(
    `${API_ENDPOINTS.auth.notifications}/${userId}?userType=${userType}`
  );
};

/**
 * Read selected notification
 */
const readNotification = (notificationId: string) => {
  return patchApi(`${API_ENDPOINTS.auth.readNotification}/${notificationId}`, {});
};

export {
  signInUser,
  signUpUser,
  logoutUser,
  activateEmail,
  sendResetPasswordLink,
  resetNewPassword,
  setNewPassword,
  uploadUserProfileImage,
  getUserProfileImage,
  getNotificationByUserId,
  readNotification
};
