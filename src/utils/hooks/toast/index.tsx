"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Toast } from '@/components';



type ToastContextTypes = {
    ShowSuccessToast: (text: string) => void;
    ShowErrorToast: (err: any) => void;
    ShowInfoToast: (err: any) => void;
    ShowCautionToast: (text: string) => void;
    ShowApiErrorToast: (err: any) => void;
    ShowApiInfoToast: (text: string) => void;
  };
  
  

const ToastContext = createContext({} as ToastContextTypes);

function ToastProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [typeColor, setTypeColor] = useState('info');

  /**
   * This is to just open the toast for all types
   */
  const showToast = (text, colorType) => {
    setMessage(text);
    setTypeColor(colorType);
    setOpen(true);
  };

  /**
   * Fires when user closes the toast using close icon
   */
  const handleClose = () => {
    setOpen(false);
    setTypeColor('info');
  };

  /**
   * Below 4 functions fires based on the type of toast is called
   */
  const ShowSuccessToast = (text) => {
    showToast(text, 'success');
  };

  const ShowErrorToast = (text) => {
    showToast(text, 'error');
  };

  const ShowInfoToast = (text) => {
    showToast(text, 'info');
  };

  const ShowCautionToast = (text) => {
    showToast(text, 'warning');
  };



  const ShowApiErrorToast = (err) => {
    if (err?.response) {
      if (
        err.response.status !== 502 ||
        err.response.status !== 500 
   
      ) {
        ShowErrorToast(err.response.data?.error.message || err.response.data?.message);
      } else ShowErrorToast('Something went wrong!');
    }
  };

  const ShowApiInfoToast = (err) => {
    if (err?.response) {
      if (err.response.status !== 502 && err.response.status !== 500) {
        ShowInfoToast(err.response.data?.message);
      } else ShowInfoToast('Something went wrong!');
    }
  };


  /**
   * Memorizing the value just to run once
   */
  const value = React.useMemo(
    () => ({
      ShowSuccessToast,
      ShowApiErrorToast,
      ShowErrorToast,
      ShowCautionToast,
      ShowApiInfoToast,
      ShowInfoToast,
    }),
    [],
  );

  /**
   * To close modal after certain given time
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, [!!open]);

  return (
    <ToastContext.Provider value={value}>
      {open && (
        <Toast onClose={handleClose} typeColor={typeColor}>
          {message}
        </Toast>
      )}

      {children}
    </ToastContext.Provider>
  );
}

const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider');
  }

  return context;
};

export { ToastProvider, useToast };
