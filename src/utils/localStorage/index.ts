"use client";
const LocalStorageService = (function () {
  const isBrowser = (): boolean => typeof window !== "undefined";

  /**
   * Get access token from local storage
   */
  const getAccessToken = () => {
    if (isBrowser()) {
      return localStorage.getItem("access_token");
    }
  };

  /**
   * Get user data object from local storage
   */
  const getUser = () => {
    if (isBrowser()) {
      const user = localStorage.getItem("user");
      if (user) {
        return JSON.parse(user);
      }
    }
  };

  /**
   * Get profile data from local storage
   */
  const getUserProfile = () => {
    if (isBrowser()) {
      const profile: any = localStorage.getItem("profile");
      if (profile !== "undefined") {
        return JSON.parse(profile);
      }
    }
  };

  /**
   * Get refresh token from local storage
   */
  const getRefreshToken = () => {
    if (isBrowser()) {
      return localStorage.getItem("refresh_token");
    }
  };

  /**
   * Set access token to local storage
   */
  const setAccessToken = (accessToken: string) => {
    if (isBrowser()) {
      return localStorage.setItem("access_token", accessToken);
    }
  };

  /**
   * Set user data to local storage
   */
  const setUser = (user: any) => {
    if (isBrowser()) {
      return localStorage.setItem("user", JSON.stringify(user));
    }
  };

  /**
   * Set user profile to local storage
   */
  const setUserProfile = (profile: any) => {
    if (isBrowser()) {
      return localStorage.setItem("profile", JSON.stringify(profile));
    }
  };

  /**
   * Set refresh to local storage
   */
  const setRefreshToken = (refreshToken: string) => {
    if (isBrowser()) {
      return localStorage.setItem("user", refreshToken);
    }
  };
  /**
   * Get all  data from local storage
   */
  const getAllFromLocalStorage = () => {
    if (isBrowser()) {
      const user = localStorage.getItem("user");
      const accessToken = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");
      const profile = localStorage.getItem("profile");
      return {
        user: user,
        accessToken: accessToken,
        refreshToken: refreshToken,
        profile: profile,
      };
    }
  };

  /**
   * Remove all from local storage
   */

  const clearLocalStorageItems = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("profile");
  };

  return {
    getAccessToken,
    getUser,
    getUserProfile,
    getRefreshToken,
    setAccessToken,
    setUser,
    setUserProfile,
    setRefreshToken,
    getAllFromLocalStorage,
    clearLocalStorageItems,
  };
})();

export { LocalStorageService };
