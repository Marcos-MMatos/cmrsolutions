interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 40, showText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CMR Solutions"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Shield outline */}
        <path
          d="M50 8 L88 22 L88 52 C88 72 72 88 50 94 C28 88 12 72 12 52 L12 22 Z"
          stroke="url(#shieldGrad)"
          strokeWidth="2.5"
          fill="rgba(14, 165, 233, 0.08)"
          filter="url(#glow)"
        />

        {/* Inner circle */}
        <circle
          cx="50"
          cy="50"
          r="14"
          stroke="url(#shieldGrad)"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="50" cy="50" r="5" fill="url(#shieldGrad)" />

        {/* Circuit lines */}
        <line x1="50" y1="36" x2="50" y2="28" stroke="url(#shieldGrad)" strokeWidth="2" />
        <line x1="50" y1="64" x2="50" y2="72" stroke="url(#shieldGrad)" strokeWidth="2" />
        <line x1="36" y1="50" x2="28" y2="50" stroke="url(#shieldGrad)" strokeWidth="2" />
        <line x1="64" y1="50" x2="72" y2="50" stroke="url(#shieldGrad)" strokeWidth="2" />

        {/* Corner dots */}
        <circle cx="28" cy="28" r="2" fill="#22d3ee" />
        <circle cx="72" cy="28" r="2" fill="#22d3ee" />
        <circle cx="28" cy="72" r="2" fill="#22d3ee" />
        <circle cx="72" cy="72" r="2" fill="#22d3ee" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-white font-bold text-lg tracking-tight">CMR</span>
          <span className="text-accent-blue font-medium text-xs tracking-widest uppercase">
            Solutions
          </span>
        </div>
      )}
    </div>
  );
}
