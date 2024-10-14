// import {
//   CancelCheckIconWhite,
//   InfoWithBorderIconWhite,
//   RightCheckIconWhite,
//   CloseIconWhite,
// } from '@/assets/icons';
import './toast.styles.css';

export function Toast({ children, typeColor, onClose }) {
  return (
    <div
      className={`st-toast-container st-toast-${typeColor} st-toast-top-center z-[30000]`}
    >
      <div className='flex items-center cursor-pointer'>
        {typeColor === 'info' && (
          <div className=''>{/* <InfoWithBorderIconWhite /> */}</div>
        )}
        {typeColor === 'success' && (
          <div className=''>{/* <RightCheckIconWhite /> */}</div>
        )}
        {typeColor === 'warning' && (
          <div className=''>{/* <InfoWithBorderIconWhite /> */}</div>
        )}
        {typeColor === 'error' && (
          <div className=''>{/* <CancelCheckIconWhite /> */}</div>
        )}
        <div className='px-2 text-h9 text-white'>{children}</div>
      </div>
      <div
        onClick={onClose}
        className='cursor-pointer ml-2 rounded-full hover:bg-gray-100 p-2'
      >
        {/* <CloseIconWhite /> */}
      </div>
    </div>
  );
}
