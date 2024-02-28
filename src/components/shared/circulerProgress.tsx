import React from "react";

const CircularProgressBar = ({
  percentage = 40,
  radius = 40,
  color = "#ED7E1C",
  strokeWidth = 6
}: {
  percentage: number;
  radius: number;
  color: string;
  strokeWidth: number;
}) => {
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="transform rotate-90">
      <circle
        className="circle-background"
        stroke="white"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        className="circle-progress rounded-lg"
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* Applying additional styles to the text element */}
      <text
        x={radius}
        y={radius - 10}
        className="text-white font-semibold" // Changing color to white and adding font-weight
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%", color: "#fff" }} // Rotating the text horizontally
      >
        {percentage}
      </text>
       <text
        x={radius}
        y={radius + 10} // Adjust the y-coordinate to position the extra text below the percentage
        className="text-sm font-normal" // You can adjust the font size and style as needed
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
      >
        Healthy
      </text>
    </svg>
  );
};

export default CircularProgressBar;
