const CircularProgressBar = ({ percentage }: { percentage: number}) => {
  const radius = 40;
  const strokeWidth = 6;
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
        stroke="#ED7E1C"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x={radius}
        y={radius}
        className=" justify-center text-sm font-semibold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {percentage}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
