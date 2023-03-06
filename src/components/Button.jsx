import React from 'react';

const Button = ({ children, className = '', link = '', ...props }) => {
  //Nếu thêm 1 thuộc tính link vào component button là link thì thẻ button sẽ chuyển thành thẻ a
  if (link.length > 0)
    return (
      <a href={link} className={`rounded-2xl flex items-center justify-center gap-x-3 px-8 text-white text-2xl btn-effect ${className || ''}`} {...props}>
        {children}
      </a>
    );
  return (
    <button className={`rounded-2xl flex items-center justify-center gap-x-3 px-8 text-white text-2xl btn-effect ${className || ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
