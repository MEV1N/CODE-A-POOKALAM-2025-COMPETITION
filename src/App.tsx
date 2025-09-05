import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="relative">
        <div className="relative w-[500px] h-[500px]">
          {/* SVG Container for the entire Pookalam */}
          <svg width="500" height="500" className="absolute inset-0">
            <defs>
              {/* Gradients for realistic colors */}
              <radialGradient id="redGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#7F1D1D" />
              </radialGradient>
              <radialGradient id="yellowGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#F59E0B" />
              </radialGradient>
              <radialGradient id="orangeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FB923C" />
                <stop offset="100%" stopColor="#EA580C" />
              </radialGradient>
              <radialGradient id="greenGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#15803D" />
              </radialGradient>
            </defs>

            {/* Outer triangular border pattern */}
            {Array.from({ length: 48 }).map((_, i) => {
              const angle = (i * 360) / 48;
              const isRed = Math.floor(i / 2) % 2 === 0;
              const color = isRed ? '#7F1D1D' : '#F59E0B';
              const innerRadius = 220;
              const outerRadius = 250;
              
              return (
                <polygon
                  key={i}
                  points={`250,250 ${250 + innerRadius * Math.cos((angle - 3.75) * Math.PI / 180)},${250 + innerRadius * Math.sin((angle - 3.75) * Math.PI / 180)} ${250 + outerRadius * Math.cos(angle * Math.PI / 180)},${250 + outerRadius * Math.sin(angle * Math.PI / 180)} ${250 + innerRadius * Math.cos((angle + 3.75) * Math.PI / 180)},${250 + innerRadius * Math.sin((angle + 3.75) * Math.PI / 180)}`}
                  fill={color}
                />
              );
            })}

            {/* Second ring - alternating yellow/orange */}
            {Array.from({ length: 32 }).map((_, i) => {
              const angle = (i * 360) / 32;
              const isYellow = i % 2 === 0;
              const color = isYellow ? '#FCD34D' : '#FB923C';
              const innerRadius = 190;
              const outerRadius = 220;
              
              return (
                <polygon
                  key={`ring2-${i}`}
                  points={`250,250 ${250 + innerRadius * Math.cos((angle - 5.625) * Math.PI / 180)},${250 + innerRadius * Math.sin((angle - 5.625) * Math.PI / 180)} ${250 + outerRadius * Math.cos(angle * Math.PI / 180)},${250 + outerRadius * Math.sin(angle * Math.PI / 180)} ${250 + innerRadius * Math.cos((angle + 5.625) * Math.PI / 180)},${250 + innerRadius * Math.sin((angle + 5.625) * Math.PI / 180)}`}
                  fill={color}
                />
              );
            })}

            {/* Green ring */}
            <circle
              cx="250"
              cy="250"
              r="190"
              fill="url(#greenGradient)"
            />

            {/* White decorative ring */}
            <circle
              cx="250"
              cy="250"
              r="170"
              fill="white"
              stroke="#D1D5DB"
              strokeWidth="2"
            />

            {/* Inner decorative pattern */}
            <circle
              cx="250"
              cy="250"
              r="150"
              fill="#FEF3C7"
            />

            {/* Face background circle */}
            <circle
              cx="250"
              cy="250"
              r="130"
              fill="#1F2937"
            />
          </svg>

          {/* Central Face Design */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-60 h-60">
              {/* Blue circle from the center of the pookalam */}
              <div className="w-32 h-32 rounded-full mx-auto mt-16 border-4 border-white shadow-lg" 
                   style={{ backgroundColor: '#4F46E5' }}>
                <div className="w-full h-full rounded-full border-2 border-red-800 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full border border-gray-300 flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <svg width="240" height="240" className="absolute inset-0 pointer-events-none">
                {/* Face split - Left side (Red) */}
                <path
                  d="M 120 20 A 100 100 0 0 1 120 220 Z"
                  fill="#DC2626"
                />
                
                {/* Face split - Right side (Green/Yellow) */}
                <path
                  d="M 120 20 A 100 100 0 0 0 120 220 Z"
                  fill="#059669"
                />

                {/* Traditional Kerala Ornate Crown/Headdress */}
                <path
                  d="M 50 30 Q 60 15 80 20 Q 100 10 120 15 Q 140 10 160 20 Q 180 15 190 30 Q 185 35 175 32 Q 165 25 155 28 Q 145 20 135 25 Q 125 18 120 22 Q 115 18 105 25 Q 95 20 85 28 Q 75 25 65 32 Q 55 35 50 30"
                  fill="#F59E0B"
                  stroke="#DC2626"
                  strokeWidth="2"
                />

                {/* Crown decorative elements */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <circle
                    key={`crown-jewel-${i}`}
                    cx={60 + i * 12}
                    cy={25 + Math.sin(i * 0.8) * 8}
                    r={2 + (i % 3)}
                    fill={i % 3 === 0 ? "#FFFFFF" : i % 3 === 1 ? "#DC2626" : "#F59E0B"}
                  />
                ))}

                {/* Traditional Lotus Pattern - Top Center */}
                <g>
                  {/* Lotus petals */}
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180;
                    const centerX = 120;
                    const centerY = 70;
                    return (
                      <ellipse
                        key={`lotus-petal-${i}`}
                        cx={centerX + Math.cos(angle) * 15}
                        cy={centerY + Math.sin(angle) * 15}
                        rx="8"
                        ry="20"
                        fill="white"
                        stroke="#F59E0B"
                        strokeWidth="1"
                        transform={`rotate(${i * 45} ${centerX + Math.cos(angle) * 15} ${centerY + Math.sin(angle) * 15})`}
                      />
                    );
                  })}
                  {/* Lotus center */}
                  <circle
                    cx="120"
                    cy="70"
                    r="12"
                    fill="#F59E0B"
                    stroke="white"
                    strokeWidth="2"
                  />
                </g>

                {/* Traditional Eyes Design */}
                <g>
                  {/* Left eye - elaborate design */}
                  <path
                    d="M 85 105 Q 95 95 105 105 Q 95 115 85 105"
                    fill="white"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <circle
                    cx="95"
                    cy="105"
                    r="6"
                    fill="black"
                  />
                  <circle
                    cx="97"
                    cy="103"
                    r="2"
                    fill="white"
                  />

                  {/* Right eye - elaborate design */}
                  <path
                    d="M 135 105 Q 145 95 155 105 Q 145 115 135 105"
                    fill="white"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <circle
                    cx="145"
                    cy="105"
                    r="6"
                    fill="black"
                  />
                  <circle
                    cx="147"
                    cy="103"
                    r="2"
                    fill="white"
                  />
                </g>

                {/* Traditional Nose Ornament (Nath) */}
                <g>
                  <path
                    d="M 120 125 L 115 135 Q 120 140 125 135 Z"
                    fill="white"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                  <circle
                    cx="120"
                    cy="132"
                    r="3"
                    fill="#DC2626"
                  />
                </g>

                {/* Traditional Mouth Design with Ornate Patterns */}
                <g>
                  <path
                    d="M 95 155 Q 120 165 145 155 Q 140 170 120 170 Q 100 170 95 155"
                    fill="white"
                    stroke="#DC2626"
                    strokeWidth="3"
                  />
                  {/* Decorative dots around mouth */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <circle
                      key={`mouth-dot-${i}`}
                      cx={100 + i * 8}
                      cy={150 + Math.sin(i) * 3}
                      r="2"
                      fill="#F59E0B"
                    />
                  ))}
                </g>

                {/* Left Side Traditional Patterns */}
                <g>
                  {/* Spiral patterns */}
                  <path
                    d="M 70 120 Q 75 115 80 120 Q 85 125 80 130 Q 75 135 70 130 Q 65 125 70 120"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 60 140 Q 70 135 75 145 Q 80 155 70 160 Q 60 165 55 155 Q 50 145 60 140"
                    fill="none"
                    stroke="#FCD34D"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Decorative dots */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <circle
                      key={`left-pattern-${i}`}
                      cx={50 + (i % 3) * 15}
                      cy={180 + Math.floor(i / 3) * 12}
                      r={2 + (i % 2)}
                      fill={i % 2 === 0 ? "white" : "#FCD34D"}
                    />
                  ))}
                </g>

                {/* Right Side Traditional Patterns */}
                <g>
                  {/* Paisley-like patterns */}
                  <path
                    d="M 170 120 Q 180 115 185 125 Q 190 135 180 140 Q 170 145 165 135 Q 160 125 170 120"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 165 145 Q 175 140 185 150 Q 190 160 180 165 Q 170 170 160 160 Q 155 150 165 145"
                    fill="none"
                    stroke="#FCD34D"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Traditional geometric patterns */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <polygon
                      key={`right-pattern-${i}`}
                      points={`${175 + (i % 2) * 10},${180 + i * 8} ${180 + (i % 2) * 10},${185 + i * 8} ${170 + (i % 2) * 10},${185 + i * 8}`}
                      fill={i % 2 === 0 ? "white" : "#FCD34D"}
                    />
                  ))}
                </g>

                {/* Bottom Ornamental Border */}
                <path
                  d="M 60 190 Q 70 185 80 190 Q 90 195 100 190 Q 110 185 120 190 Q 130 195 140 190 Q 150 185 160 190 Q 170 195 180 190"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Traditional Kerala Lamp (Nilavilakku) Symbol at bottom */}
                <g>
                  <path
                    d="M 115 200 L 125 200 L 123 210 L 117 210 Z"
                    fill="#F59E0B"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <ellipse
                    cx="120"
                    cy="198"
                    rx="8"
                    ry="4"
                    fill="#FCD34D"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <path
                    d="M 120 195 Q 118 192 120 190 Q 122 192 120 195"
                    fill="#DC2626"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Floating decorative elements removed to disable animations */}
        </div>

        {/* Title and description */}
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 font-serif">
            🌺 Traditional Kerala Pookalam 🌺
          </h1>
          <p className="text-gray-600 text-lg">
            Celebrating Onam with Digital Art
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;