"use client";

import { useEffect, useRef } from "react";

interface GeometricBgProps {
  className?: string;
}

export function GeometricBg({ className = "" }: GeometricBgProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll(".draw-path");
    paths?.forEach((path) => {
      const length = (path as SVGPathElement).getTotalLength();
      (path as SVGPathElement).style.strokeDasharray = `${length}`;
      (path as SVGPathElement).style.strokeDashoffset = `${length}`;
      
      setTimeout(() => {
        (path as SVGPathElement).style.transition = "stroke-dashoffset 2s ease-out";
        (path as SVGPathElement).style.strokeDashoffset = "0";
      }, 500);
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="draw-path"
        d="M 100 400 L 300 400 L 350 350 L 500 350 L 550 400 L 700 400"
        fill="none"
        stroke="#3D5A35"
        strokeWidth="1"
        opacity="0.15"
      />
      <path
        className="draw-path"
        d="M 200 500 L 400 500 L 450 450 L 600 450 L 650 500 L 800 500"
        fill="none"
        stroke="#B85A28"
        strokeWidth="1"
        opacity="0.12"
      />
      <path
        className="draw-path"
        d="M 150 300 L 250 300 L 300 250 L 450 250 L 500 300 L 650 300"
        fill="none"
        stroke="#3D5A35"
        strokeWidth="0.8"
        opacity="0.1"
      />
      
      <polygon
        points="900,100 950,150 900,200 850,150"
        fill="none"
        stroke="#3D5A35"
        strokeWidth="1.5"
        opacity="0.2"
      />
      <polygon
        points="1000,250 1050,300 1000,350 950,300"
        fill="none"
        stroke="#B85A28"
        strokeWidth="1.5"
        opacity="0.15"
      />
      <circle cx="350" cy="350" r="4" fill="#3D5A35" opacity="0.3" />
      <circle cx="550" cy="400" r="3" fill="#B85A28" opacity="0.25" />
      <circle cx="450" cy="450" r="4" fill="#3D5A35" opacity="0.2" />
      <circle cx="650" cy="500" r="3" fill="#B85A28" opacity="0.2" />
      <circle cx="900" cy="150" r="3" fill="#3D5A35" opacity="0.25" />
      <circle cx="1000" cy="300" r="4" fill="#B85A28" opacity="0.2" />
    </svg>
  );
}
