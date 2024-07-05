'use client';

import { Role } from '@/types';
import { usePathname } from 'next/navigation';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type UserContextType = {
  role: Role;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('user');
  const pathname = usePathname();

  console.log({ pathname });

  useEffect(() => {
    const isAdmin = pathname?.includes('/admin');
    setRole(isAdmin ? 'admin' : 'user');
  }, [pathname]);

  return (
    <UserContext.Provider value={{ role }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
