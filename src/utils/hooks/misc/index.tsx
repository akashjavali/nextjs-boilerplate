'use client';
import React, { createContext, useContext, ReactNode } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getUserRoles, getCategoriesList } from '@/utils/controllers/misc';
import { TYPES, HOOKS } from '@/utils';

/**
 * Creating types for misc context common api calls can be created here
 */

type MiscTypes = {
  useGetCategoriesList: () => UseQueryResult<TYPES.CategoriesT[], Error>;
};

const MiscContext = createContext<MiscTypes>({} as MiscTypes);

/**
 * If context is used outside of the wrapper throw error
 */
export const useMisc = (): MiscTypes => useContext(MiscContext);

/**
 * Types for provider function
 */
type MiscProviderProps = {
  children: ReactNode;
};

export const ProvideMisc = () => {
  // const { user } = HOOKS.useAuth();

  /**
   * To get the categories list
   */

  const useGetCategoriesList: () => UseQueryResult<
    TYPES.CategoriesT[],
    Error
  > = () =>
    useQuery({
      queryKey: ['categories'],
      queryFn: () => getCategoriesList(),
      select: (data) => data.data.data,
    });

  return {
    /**
     * Categories
     */
    useGetCategoriesList,
  };
};

export function MiscProvider({ children }: MiscProviderProps) {
  const value = ProvideMisc();
  if (value === undefined) {
    throw new Error(
      'Misc context must be used within an Misc provider context'
    );
  }
  return <MiscContext.Provider value={value}>{children}</MiscContext.Provider>;
}
