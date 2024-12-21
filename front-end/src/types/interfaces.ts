import { ReactNode } from 'react';

export interface LoadingWrapperProps {
  children: ReactNode;
}

export interface PageWrapperProps {
  welcomePage?: boolean;
  children: ReactNode;
}

export interface LoadingState {
  isLoading: boolean;
}

export interface SnackbarState {
  message: string;
  open: boolean;
}

export interface SignerInf {
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: string;
  nationalId: string;
}

export interface UploadDocDto {
  doc: string | void;
  nationalId: string;
  phoneNumber: string;
}
