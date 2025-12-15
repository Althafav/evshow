export const HorizontalDivider = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="2"
    viewBox="0 0 1235 2"
    preserveAspectRatio="none"
    className="w-full"
    fill="none"
  >
    <path
      d="M1235 1C1214.42 0.933333 1193.83 0.87 1173.25 0.81C988 0.27 802.75 0 617.5 0C432.25 0 247 0.27 61.75 0.81C41.1667 0.87 20.5833 0.933333 0 1C20.5833 1.06667 41.1667 1.13 61.75 1.19C247 1.73 432.25 2 617.5 2C802.75 2 988 1.73 1173.25 1.19C1193.83 1.13 1214.42 1.06667 1235 1Z"
      fill="url(#hgrad)"
    />
    <defs>
      <linearGradient id="hgrad" x1="0" y1="2" x2="0" y2="0">
        <stop stopColor="#0096FF" />
        <stop offset="0.0001" stopColor="#07AFD2" />
        <stop offset="1" stopColor="#1CFB4B" />
      </linearGradient>
    </defs>
  </svg>
);
