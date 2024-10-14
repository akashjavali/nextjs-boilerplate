'use client';
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   UseQueryResult,
// } from 'react-query';
import {
  signUpUser,
  signInUser,
  logoutUser,
  activateEmail,
  sendResetPasswordLink,
  resetNewPassword,
  setNewPassword,
  uploadUserProfileImage,
  getUserProfileImage,
  getNotificationByUserId,
  readNotification,
} from '@/utils/controllers/auth';
import { TYPES, HOOKS, LOCAL_STORAGE } from '@/utils';
import { USER_TYPES } from '@/constants';
import { useRouter } from 'next/navigation';
import axios from 'axios';

/**
 * Auth states
 */
type AuthState = {
  // user: TYPES.UserT;
  // setUser: (user: any) => void;
  // userProfile: any;
  // userType: string;
  // setUserType: (userType: string) => void;
  // openAuthModal: boolean;
  // setOpenAuthModal: (openAuthModal: boolean) => void;
  // authType: string;
  // setAuthType: (authType: string) => void;
  // isSignInLoading: boolean;
  // isSignUpLoading: boolean;
  // isLogoutLoading: boolean;
  // isForgotPasswordLoading: boolean;
  // isResetPasswordLoading: boolean;
  // isSetNewPasswordLoading: boolean;
  // useGetActivateEmail: (emailId: string) => UseQueryResult<string, Error>;
  // useGetUserProfileImage: (
  //   userId: string,
  //   userType: string
  // ) => UseQueryResult<string, Error>;
  // handleUploadUserProfile: (file: File) => void;
  // isProfileUploadLoading: boolean;
};

/**
 * Creating types for auth context
 */
type AuthContextType = AuthState & {
  handleSignIn: (data: TYPES.AuthT) => void;
  handleSignUp: (data: any) => void;
  handleForgotPassword: (email: string) => void;
  handleResetOrSetPassword: (data: TYPES.ResetOrSetPasswordI) => void;
  setPassword: (password: string) => void;
  handleLogoutUser: () => void;
  openLogoutConfirmModal: boolean;
  handleControlLogoutConfirmModal: () => void;
  handleOpenNotificationDrawer: () => void;
  openNotificationDrawer: boolean;
  // useGetNotificationsById: (
  //   userId: string,
  //   userType: string
  // ) => UseQueryResult<TYPES.NotificationT[], Error>;
  handleNotificationDynamicRoute: (
    dynamicRoute: string,
    notificationId: string
  ) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

/**
 * If context is used outside of the wrapper throw error
 */
export const useAuth = (): AuthContextType => useContext(AuthContext);

/**
 * Types for provider function
 */
type AuthProviderProps = {
  children: ReactNode;
};

/**
 *
 * Context provider with all global functions and api calls
 */
export const ProvideAuth = () => {
  // const router = useRouter();
  // const [user, setUser] = useState<any>(undefined);
  // const [userProfile, setUserProfile] = useState(
  //   LOCAL_STORAGE.getUserProfile()
  // );
  // const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);
  // const [userType, setUserType] = useState<string>('');
  // const [authType, setAuthType] = useState('signin');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [openLogoutConfirmModal, setOpenLogoutConfirmModal] = useState(false);
  // const [openNotificationDrawer, setOpenNotificationDrawer] = useState(false);

  // /**
  //  * Added this to prevent next js client hydration
  //  */
  // useEffect(() => {
  //   if (LOCAL_STORAGE.getUser()) {
  //     axios.defaults.headers.common.Authorization = `Bearer ${LOCAL_STORAGE.getAccessToken()}`;
  //     setUser(LOCAL_STORAGE.getUser());
  //     setUserProfile(LOCAL_STORAGE.getUserProfile());
  //     setUserType(LOCAL_STORAGE.getUser().userType);
  //     router.refresh();
  //   } else {
  //     setUser(null);
  //   }
  // }, []);

  // /**
  //  * Control user routes based on user
  //  */

  // useEffect(() => {
  //   if (user && isLoggedIn) {
  //     if (userType === USER_TYPES.COMPANY) {
  //       router.push('/company/jobs');
  //     }
  //     if (userType === USER_TYPES.FREELANCER) {
  //       router.push('/freelancer/jobs');
  //     }
  //     if (userType === USER_TYPES.ADMIN) {
  //       router.push('/admin/dashboard');
  //     }
  //     router.refresh();
  //     setIsLoggedIn(false);
  //     setOpenAuthModal(false);
  //   }
  // }, [user, userType, isLoggedIn]);

  // /**
  //  * Activate email id
  //  */
  // const useGetActivateEmail: (
  //   emailId: string
  // ) => UseQueryResult<string, Error> = (emailId: string) =>
  //   useQuery(['activateEmail', emailId], () => activateEmail(emailId), {
  //     enabled: !!emailId,
  //     cacheTime: 1,
  //     select: (data) => data.data.data,
  //   });

  // /**
  //  * Get notifications based on
  //  */
  // const useGetNotificationsById: (
  //   userId: string,
  //   userType: string
  // ) => UseQueryResult<TYPES.NotificationT[], Error> = (
  //   userId: string,
  //   userType: string
  // ) =>
  //   useQuery(
  //     ['notification', userId, userType],
  //     () => getNotificationByUserId(userId, userType),
  //     {
  //       enabled: !!user,
  //       cacheTime: 1,
  //       select: (data) => data.data.data.data,
  //     }
  //   );

  // /**
  //  *To get user profile Image
  //  */
  // const useGetUserProfileImage: (
  //   userId: string,
  //   userType: string
  // ) => UseQueryResult<string, Error> = (userId: string, userType: string) =>
  //   useQuery(
  //     ['userProfileImage', userId, userType],
  //     () => getUserProfileImage({ userId, userType }),
  //     {
  //       enabled: !!user?._id,
  //       cacheTime: 1,
  //       select: (data) => data.data.data.data,
  //     }
  //   );

  // /**
  //  * Login api call and route respective user type
  //  */
  // const { mutate: mutateSignIn, isLoading: isSignInLoading } = useMutation(
  //   signInUser,
  //   {
  //     onSuccess: ({ data }) => {
  //       if (data) {
  //         LOCAL_STORAGE.setUser(data.data.data.user);
  //         LOCAL_STORAGE.setUserProfile(data.data.data.profileData);
  //         LOCAL_STORAGE.setAccessToken(data.data.access_token);
  //         setUser(data.data.data.user);
  //         setUserType(data.data.data.user.userType);
  //         setIsLoggedIn(true);
  //         axios.defaults.headers.common.Authorization = `Bearer ${data.data.access_token}`;
  //         setOpenAuthModal(false);
  //       }
  //       // ShowSuccessToast("Login success welcome to PatronPay");
  //     },
  //     onError: (err) => {
  //       // ShowApiErrorToast(err);
  //     },
  //   }
  // );

  // /**
  //  * Sign up user and api control
  //  */
  // const { mutate: mutateSignUp, isLoading: isSignUpLoading } = useMutation(
  //   signUpUser,
  //   {
  //     onSuccess: (data) => {
  //       if (data) {
  //         // ShowSuccessToast(
  //         //   "Sign up success, please check your email to activate your account"
  //         // );
  //         setAuthType('signin');
  //       }
  //     },
  //     onError: (err) => {
  //       // ShowApiErrorToast(err);
  //     },
  //   }
  // );

  // /**
  //  * Forgot password and send email to reset password
  //  */
  // const { mutate: mutateForgotPassword, isLoading: isForgotPasswordLoading } =
  //   useMutation(sendResetPasswordLink, {
  //     onSuccess(data) {
  //       if (data) {
  //         // ShowSuccessToast("Reset password link sent to your email");
  //         setOpenAuthModal(false);
  //       }
  //     },
  //     onError: (err) => {
  //       // ShowApiErrorToast(err);
  //     },
  //   });

  // /**
  //  * Reset old password to new password
  //  */
  // const { mutate: mutateResetPassword, isLoading: isResetPasswordLoading } =
  //   useMutation(resetNewPassword, {
  //     onSuccess(data) {
  //       if (data) {
  //         // ShowSuccessToast("Reset password successful");
  //         router.push('/');
  //         setOpenAuthModal(true);
  //         setAuthType('signin');
  //       }
  //     },
  //     onError: (err) => {
  //       // ShowApiErrorToast(err);
  //     },
  //   });

  // /**
  //  * Set new password
  //  */
  // const { mutate: mutateSetNewPassword, isLoading: isSetNewPasswordLoading } =
  //   useMutation(setNewPassword, {
  //     onSuccess(data) {
  //       if (data) {
  //         // ShowSuccessToast("Successfully created password");
  //         router.push('/');
  //         setOpenAuthModal(true);
  //         setAuthType('signin');
  //       }
  //     },
  //     onError: (err) => {
  //       // ShowApiErrorToast(err);
  //     },
  //   });

  // /**
  //  * Logout api call
  //  */
  // const { mutate: mutateLogout, isLoading: isLogoutLoading } = useMutation(
  //   logoutUser,
  //   {
  //     onSuccess(data) {
  //       if (data) {
  //         setOpenNotificationDrawer(false);
  //         LOCAL_STORAGE.clearLocalStorageItems();
  //         setUser(null);
  //         router.push('/');
  //         router.refresh();
  //         // ShowSuccessToast("Logout successful");
  //       }
  //     },
  //     onError: (err) => {
  //       // ShowApiErrorToast(err);
  //     },
  //   }
  // );

  // /**
  //  * upload user profile image
  //  */
  // const { mutate: mutateUploadUserProfile, isLoading: isProfileUploadLoading } =
  //   useMutation(uploadUserProfileImage, {
  //     onSuccess({ data }) {
  //       LOCAL_STORAGE.setUserProfile(data.data.data);
  //       setUserProfile(data.data.data);
  //       // ShowSuccessToast("Profile uploaded successfully");
  //     },
  //     onError: (err) => {
  //       // ShowApiErrorToast(err);
  //     },
  //   });

  // /**
  //  * Forgot password and send email to reset password
  //  */
  // const {
  //   mutate: updateReadNotification,
  //   isLoading: isReadNotificationLoading,
  // } = useMutation(readNotification, {
  //   onSuccess(data) {
  //     if (data) {
  //       setOpenAuthModal(false);
  //     }
  //   },
  //   onError: (err) => {
  //     // ShowApiErrorToast(err);
  //   },
  // });

  // /**
  //  * Login submit control
  //  */
  // const handleSignIn = (data: TYPES.AuthT) => {
  //   mutateSignIn(data);
  // };

  // /**
  //  * Sign up user
  //  */
  // const handleSignUp = (data: TYPES.SignUpI) => {
  //   mutateSignUp(data);
  // };
  // /**
  //  * To reset password using email id
  //  */
  // const handleForgotPassword = (email: string) => {
  //   mutateForgotPassword({
  //     email: email,
  //   });
  // };

  // /**
  //  *
  //  * Reset or set new password
  //  */
  // const handleResetOrSetPassword = (data: TYPES.ResetOrSetPasswordI) => {
  //   const password = { password: data.password };
  //   if (data.type === 'reset-password') {
  //     mutateResetPassword({
  //       data: password,
  //       token: data.token,
  //       userId: data.userId,
  //     });
  //   }
  //   if (data.type === 'set-password') {
  //     mutateSetNewPassword({
  //       data: password,
  //       token: data.token,
  //       userId: data.userId,
  //     });
  //   }
  // };

  // const setPassword = (password: string) => {
  //   // Implement set password logic here
  // };

  // /**
  //  * Logout submit control
  //  */

  // const handleControlLogoutConfirmModal = () => {
  //   setOpenLogoutConfirmModal((prev) => !prev);
  // };

  // const handleLogoutUser = () => {
  //   mutateLogout(user._id);
  // };

  // /**
  //  * Upload user profile
  //  */
  // const handleUploadUserProfile = (file: File) => {
  //   const formData = new FormData();
  //   formData.append('profileFile', file);
  //   formData.append('fileName', file.name);
  //   formData.append('fileType', file.type);
  //   formData.append('userId', user?._id);
  //   formData.append('userType', user?.userType);

  //   if (formData) {
  //     mutateUploadUserProfile({
  //       data: formData,
  //     });
  //   }
  // };

  // /**
  //  * Notifications
  //  */
  // const handleOpenNotificationDrawer = () => {
  //   setOpenNotificationDrawer((prev) => !prev);
  // };
  // /**
  //  * Notification dynamic route
  //  */
  // const handleNotificationDynamicRoute = (
  //   dynamicRoute: string,
  //   notificationId: string
  // ) => {
  //   updateReadNotification(notificationId);
  //   router.push(dynamicRoute);
  //   setOpenNotificationDrawer(false);
  // };

  return {
    // /**
    //  * Auth modal
    //  */
    // openAuthModal,
    // setOpenAuthModal,
    // user,
    // setUser,
    // userType,
    // setUserType,
    // userProfile,
    // authType,
    // setAuthType,
    // /**
    //  * Sign in
    //  */
    // isSignInLoading,
    // handleSignIn,
    // /**
    //  * Sign up
    //  */
    // isSignUpLoading,
    // handleSignUp,
    // setPassword,
    // /**
    //  * Reset and set new password
    //  */
    // isSetNewPasswordLoading,
    // isResetPasswordLoading,
    // handleResetOrSetPassword,
    // /**
    //  * Forgot password
    //  */
    // isForgotPasswordLoading,
    // handleForgotPassword,
    // /**
    //  * Logout user
    //  */
    // handleLogoutUser,
    // openLogoutConfirmModal,
    // handleControlLogoutConfirmModal,
    // isLogoutLoading,
    // /**
    //  * Activate email id
    //  */
    // useGetActivateEmail,
    // /**
    //  * Upload user profile image
    //  */
    // handleUploadUserProfile,
    // isProfileUploadLoading,
    // useGetUserProfileImage,
    // /**
    //  * Notifications
    //  */
    // handleOpenNotificationDrawer,
    // handleNotificationDynamicRoute,
    // openNotificationDrawer,
    // useGetNotificationsById,
  };
};

export function AuthProvider({ children }: AuthProviderProps) {
  const value = ProvideAuth();
  if (value === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
