import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Stitch Button System:
 * - Primary: Deep espresso background (#1F1E1D), warm ivory text (#FAF8F5), subtle gold micro-border on hover
 * - Secondary: Transparent background with hairline border (#1F1E1D), soft hover shift
 * - Gold / Accent: Soft champagne / antique gold accent
 * - Text / Underline: Understated editorial link with animated underline
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-sans transition-all duration-300 rounded-[3px] focus:outline-none focus:ring-1 focus:ring-[#C5A880]";
  
  const sizeStyles = {
    sm: "text-xs px-4 py-2 tracking-[0.06em] font-medium",
    md: "text-xs uppercase tracking-[0.14em] font-semibold px-6 py-3.5",
    lg: "text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold px-8 py-4",
    text: "p-0 text-xs uppercase tracking-[0.14em] font-semibold"
  };

  const variantStyles = {
    primary: "bg-[#1F1E1D] text-[#FAF8F5] hover:bg-[#050504] border border-transparent hover:border-[#C5A880] shadow-sm hover:shadow active:scale-[0.99]",
    secondary: "bg-transparent text-[#1F1E1D] border border-[#1F1E1D]/40 hover:border-[#1F1E1D] hover:bg-[#EFE9E0]/40 active:scale-[0.99]",
    gold: "bg-[#C5A880] text-[#1F1E1D] hover:bg-[#B39368] font-semibold active:scale-[0.99]",
    outlineGold: "bg-transparent text-[#1F1E1D] border border-[#C5A880] hover:bg-[#C5A880] hover:text-[#1F1E1D]",
    text: "bg-transparent text-[#1F1E1D] hover:text-[#C5A880] relative link-underline",
    white: "bg-[#FAF8F5] text-[#1F1E1D] hover:bg-[#EFE9E0] border border-white/60 shadow-sm"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
