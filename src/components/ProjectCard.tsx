"use client";

import {
  FaVideo,
  FaServer,
  FaEthernet,
  FaFingerprint,
  FaNetworkWired,
  FaDesktop,
} from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  category: string;
  accent: "blue" | "cyan";
  iconType: string;
  size?: "small" | "wide" | "tall";
}

const TYPE_ICONS = {
  camera: FaVideo,
  server: FaServer,
  cables: FaEthernet,
  fingerprint: FaFingerprint,
  network: FaNetworkWired,
  monitor: FaDesktop,
} as const;

export default function ProjectCard({
  title,
  category,
  accent,
  iconType,
  size = "small",
}: ProjectCardProps) {
  const Icon = TYPE_ICONS[iconType as keyof typeof TYPE_ICONS] || FaVideo;
  const sizeClass =
    size === "wide"
      ? "md:col-span-2"
      : size === "tall"
        ? "md:row-span-2"
        : "";
  const accentColor = accent === "blue" ? "#0ea5e9" : "#22d3ee";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl glass cursor-pointer min-h-[260px] ${sizeClass}`}
    >
      {/* SVG illustration background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id={`pg-${title.replace(/\s/g, "")}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={accentColor} stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0.95" />
            </linearGradient>
            <pattern
              id={`grid-${title.replace(/\s/g, "")}`}
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke={accentColor}
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect
            width="400"
            height="300"
            fill={`url(#pg-${title.replace(/\s/g, "")})`}
          />
          <rect
            width="400"
            height="300"
            fill={`url(#grid-${title.replace(/\s/g, "")})`}
          />
          {/* Decorative circles */}
          <circle
            cx="320"
            cy="80"
            r="60"
            fill="none"
            stroke={accentColor}
            strokeWidth="1"
            opacity="0.5"
          />
          <circle
            cx="320"
            cy="80"
            r="40"
            fill="none"
            stroke={accentColor}
            strokeWidth="1"
            opacity="0.3"
          />
          <circle cx="320" cy="80" r="4" fill={accentColor} />
        </svg>
      </div>

      {/* Icon centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent-blue/30 transition-transform duration-500 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${accentColor}33, transparent)`,
          }}
        >
          <Icon className="text-3xl" style={{ color: accentColor }} />
        </div>
      </div>

      {/* Bottom overlay with title */}
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent">
        <span className="font-mono text-xs uppercase tracking-wider text-accent-cyan">
          {category}
        </span>
        <h3 className="text-lg font-bold text-white mt-1">{title}</h3>
      </div>

      {/* Hover ring */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-accent-cyan/50 transition-all duration-300" />
    </div>
  );
}
