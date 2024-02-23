const CircularProgressBar = ({ percentage = 40 , radius = 40, color = "#ED7E1C", strokeWidth = 6 }: { percentage: number, radius: number; color:string; strokeWidth:number }) => {
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
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x={radius}
        y={radius}
        className="text-xl font-semibold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {percentage}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
