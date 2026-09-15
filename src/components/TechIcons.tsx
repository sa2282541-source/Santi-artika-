import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const HtmlIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3 2L4.63636 20.3636L12 22.4L19.3636 20.3636L21 2H3Z"
      fill="#E44D26"
    />
    <path
      d="M12 3.81818V20.5455L17.8182 18.9091L19.2727 3.81818H12Z"
      fill="#F16529"
    />
    <path
      d="M12 7.45455H7.81818L8.18182 11.0909H12V7.45455ZM12 14.7273L11.9091 14.7364L9.81818 14.1818L9.63636 12.3636H7.45455L7.90909 16.5455L12 17.6364V14.7273Z"
      fill="#EBEBEB"
    />
    <path
      d="M12 7.45455V11.0909H15.8182L15.4545 14.7273L12 15.6364V17.6364L16.0909 16.5455L16.5455 11.0909H12V7.45455Z"
      fill="white"
    />
  </svg>
);

export const CssIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3 2L4.63636 20.3636L12 22.4L19.3636 20.3636L21 2H3Z"
      fill="#1572B6"
    />
    <path
      d="M12 3.81818V20.5455L17.8182 18.9091L19.2727 3.81818H12Z"
      fill="#33A9DC"
    />
    <path
      d="M12 7.45455H7.81818L8.18182 11.0909H12V7.45455ZM12 14.7273L11.9091 14.7364L9.81818 14.1818L9.63636 12.3636H7.45455L7.90909 16.5455L12 17.6364V14.7273Z"
      fill="#EBEBEB"
    />
    <path
      d="M12 7.45455V11.0909H15.8182L15.4545 14.7273L12 15.6364V17.6364L16.0909 16.5455L16.5455 11.0909H12V7.45455Z"
      fill="white"
    />
  </svg>
);

export const JavascriptIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="24" height="24" rx="3" fill="#F7DF1E" />
    <path
      d="M13.2 16.4C13.6 17.2 14.4 17.8 15.4 17.8C16.5 17.8 17.3 17.2 17.3 16.2C17.3 15.2 16.7 14.8 15.3 14.2L14.7 13.9C12.8 13.1 11.7 12.1 11.7 10.1C11.7 8.2 13.2 6.8 15.4 6.8C16.9 6.8 18 7.4 18.7 8.7L17.1 9.7C16.7 9 16.1 8.6 15.4 8.6C14.6 8.6 14 9.1 14 9.9C14 10.7 14.5 11.1 15.8 11.7L16.4 12C18.6 12.9 19.7 13.9 19.7 16C19.7 18.2 17.9 19.5 15.4 19.5C13.2 19.5 11.9 18.3 11.3 17L13.2 16.4ZM6 16.6C6.4 17.3 6.9 17.8 7.9 17.8C8.8 17.8 9.5 17.2 9.5 15.8V7.2H11.8V15.8C11.8 18.3 10.2 19.5 8 19.5C6.1 19.5 4.8 18.5 4.2 17.1L6 16.6Z"
      fill="#000000"
    />
  </svg>
);

export const FigmaIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8.5 12C6.567 12 5 10.433 5 8.5C5 6.567 6.567 5 8.5 5H12V12H8.5Z"
      fill="#F24E1E"
    />
    <path
      d="M12 5H15.5C17.433 5 19 6.567 19 8.5C19 10.433 17.433 12 15.5 12H12V5Z"
      fill="#FF7262"
    />
    <path
      d="M8.5 19C6.567 19 5 17.433 5 15.5C5 13.567 6.567 12 8.5 12H12V15.5C12 17.433 10.433 19 8.5 19Z"
      fill="#0ACF83"
    />
    <path
      d="M12 12H15.5C17.433 12 19 13.567 19 15.5C19 17.433 17.433 19 15.5 19C13.567 19 12 17.433 12 15.5V12Z"
      fill="#1ABCFE"
    />
    <path
      d="M5 15.5C5 17.433 6.567 19 8.5 19C10.433 19 12 17.433 12 15.5V19C12 20.933 10.433 22.5 8.5 22.5C6.567 22.5 5 20.933 5 19V15.5Z"
      fill="#A259FF"
    />
  </svg>
);

export const ReactIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 6C9.6 6 8.1 7.2 7.5 9.6C8.4 8.4 9.45 7.95 10.65 8.25C11.55 8.475 12.15 9.15 12.825 9.9C13.95 11.175 15.225 12.6 18 12.6C20.4 12.6 21.9 11.4 22.5 9C21.6 10.2 20.55 10.65 19.35 10.35C18.45 10.125 17.85 9.45 17.175 8.7C16.05 7.425 14.775 6 12 6ZM6 12C3.6 12 2.1 13.2 1.5 15.6C2.4 14.4 3.45 13.95 4.65 14.25C5.55 14.475 6.15 15.15 6.825 15.9C7.95 17.175 9.225 18.6 12 18.6C14.4 18.6 15.9 17.4 16.5 15C15.6 16.2 14.55 16.65 13.35 16.35C12.45 16.125 11.85 15.45 11.175 14.7C10.05 13.425 8.775 12 6 12Z"
      fill="#38BDF8"
    />
  </svg>
);
