import React from "react";

export default function ChevronDoubleUp({ color = "#333333", size = 20 }) {
  return (
    <span>
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5446 16.6976C10.4731 16.7692 10.3882 16.8261 10.2948 16.8648C10.2013 16.9036 10.1012 16.9236 10 16.9236C9.89883 16.9236 9.79865 16.9036 9.70521 16.8648C9.61176 16.8261 9.52689 16.7692 9.45544 16.6976L0.225565 7.46774C0.0811386 7.32332 0 7.12743 0 6.92318C0 6.71893 0.0811386 6.52305 0.225565 6.37862C0.369991 6.23419 0.565878 6.15305 0.770128 6.15305C0.974379 6.15305 1.17026 6.23419 1.31469 6.37862L10 15.0655L18.6853 6.37862C18.8297 6.23419 19.0256 6.15305 19.2299 6.15305C19.4341 6.15305 19.63 6.23419 19.7744 6.37862C19.9189 6.52305 20 6.71893 20 6.92318C20 7.12743 19.9189 7.32332 19.7744 7.46774L10.5446 16.6976Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5446 10.5443C10.4731 10.6159 10.3882 10.6728 10.2948 10.7115C10.2013 10.7503 10.1012 10.7703 10 10.7703C9.89883 10.7703 9.79865 10.7503 9.70521 10.7115C9.61176 10.6728 9.52689 10.6159 9.45544 10.5443L0.225565 1.31442C0.0811386 1.17 0 0.974112 0 0.76986C0 0.56561 0.0811386 0.369725 0.225565 0.225298C0.369991 0.0808706 0.565878 -0.000267029 0.770128 -0.000267029C0.974379 -0.000267029 1.17026 0.0808706 1.31469 0.225298L10 8.91215L18.6853 0.225298C18.8297 0.0808706 19.0256 -0.000267029 19.2299 -0.000267029C19.4341 -0.000267029 19.63 0.0808706 19.7744 0.225298C19.9189 0.369725 20 0.56561 20 0.76986C20 0.974112 19.9189 1.17 19.7744 1.31442L10.5446 10.5443Z"
          fill={color}
        />
      </svg>
    </span>
  );
}
