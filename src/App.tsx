

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

            {/*Green circle below the pointy triangles */}
            <circle
              cx="250"
              cy="250"
              r="250"
              fill="green"
            />

            {/* Outer triangular border pattern */}
            {Array.from({ length: 32 }).map((_, i) => {
              const angle = (i * 360) / 32;
              const isRed = i % 2 === 0;
              const color = isRed ? '#7F1D1D' : '#F59E0B';
              const innerRadius = 220;
              const outerRadius = 250;
              const angleWidth = 6; // Wider triangles
              
              return (
                <polygon
                  key={i}
                  points={`${250 + innerRadius * Math.cos((angle - angleWidth) * Math.PI / 180)},${250 + innerRadius * Math.sin((angle - angleWidth) * Math.PI / 180)} ${250 + outerRadius * Math.cos(angle * Math.PI / 180)},${250 + outerRadius * Math.sin(angle * Math.PI / 180)} ${250 + innerRadius * Math.cos((angle + angleWidth) * Math.PI / 180)},${250 + innerRadius * Math.sin((angle + angleWidth) * Math.PI / 180)}`}
                  fill={color}
                />
              );
            })}

           

           {/*Green circle below the pointy triangles */}
            <circle
              cx="250"
              cy="250"
              r="219"
              fill="yellow"
            />
            {/* Additional semi-circles over the green circle */}
            {Array.from({ length: 20 }).map((_, i) => {
              const angle = (i * 360) / 20 + 2; // Offset to point to gaps between outer triangles
              const isRed = i % 2 === 0;
              const color = isRed ? 'blue' : 'blue';
              const radius = 33; // Increased radius of each semi-circle
              const centerRadius = 185; // Distance from center to semi-circle centers
              const centerX = 250 + centerRadius * Math.cos(angle * Math.PI / 180);
              const centerY = 250 + centerRadius * Math.sin(angle * Math.PI / 180);
              
              return (
                <path
                  key={`semi-circles-${i}`}
                  d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
                  fill={color}
                  transform={`rotate(${angle + 90} ${centerX} ${centerY})`}
                />
              );
            })}


            {/* Light blue semi-circles above the blue ones */}
            {Array.from({ length: 20 }).map((_, i) => {
              const angle = (i * 360) / 20 + 2; // Added 9 degrees offset to rotate right
              const color = '#87CEEB'; // Light blue color
              const radius = 33;
              const centerRadius = 175; // Position between yellow circle and blue semi-circles
              const centerX = 250 + centerRadius * Math.cos(angle * Math.PI / 180);
              const centerY = 250 + centerRadius * Math.sin(angle * Math.PI / 180);
              
              return (
                <path
                  key={`light-blue-semi-circles-${i}`}
                  d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
                  fill={color}
                  transform={`rotate(${angle + 90} ${centerX} ${centerY})`}
                />
              );
            })}

            

            {/* Maroon decorative ring */}
            <circle
              cx="250"
              cy="250"
              r="175"
              fill="#7F1D1D"
              stroke="#4a1413"
              strokeWidth="2"
            />

            {/* Inner decorative pattern */}
            <circle
              cx="250"
              cy="250"
              r="150"
              fill="#FEF3C7"
            />

          
           
          
           

            {/* Rotating rectangles pattern */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 15);
              return (
                <g key={`rect-group-${i}`} transform={`rotate(${angle + 45} 250 250)`}>
                  <rect x="145" y="145" width="210" height="210" fill="rgba(189,22,22, 0.5)" transform="rotate(45 250 250)" />
                </g>
              );
            })}

            {/* Secondary rectangle pattern */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 15);
              return (
                <g key={`rect2-group-${i}`} transform={`rotate(${angle + 7} 250 250)`}>
                  <rect x="156" y="156" width="187" height="187" fill="rgba(252,84,4, 0.5)" transform="rotate(45 250 250)" />
                </g>
              );
            })}

          

            {/* Outer design circles */}
            <circle cx="250" cy="250" r="115" fill="#470703" />
            <circle cx="250" cy="250" r="120" fill="#3d1001" />

            {/* Central crown/face area */}
            <circle cx="250" cy="250" r="50" fill="white" />
            <circle cx="250" cy="235" r="50" fill="#f27318" />
            <ellipse cx="250" cy="260" rx="32" ry="10" fill="#eb4c17" />

            {/* Eyes */}
            <ellipse cx="235" cy="240" rx="12" ry="5" fill="black" />
            <ellipse cx="235" cy="240" rx="8" ry="3" fill="white" />
            <circle cx="235" cy="240" r="2" fill="black" />
            
            <ellipse cx="265" cy="240" rx="12" ry="5" fill="black" />
            <ellipse cx="265" cy="240" rx="8" ry="3" fill="white" />
            <circle cx="265" cy="240" r="2" fill="black" />

            {/* Nose */}
            <ellipse cx="250" cy="250" rx="4" ry="6" fill="none" stroke="black" strokeWidth="1" />
            
            {/* Lips */}
            <ellipse cx="250" cy="263" rx="8" ry="3" fill="#cc0a14" />

            {/* Decorative flowers around */}
            {Array.from({ length: 28 }).map((_, i) => {
              const angle = (i * 14);
              const radius = 80;
              const x = 250 + radius * Math.cos(angle * Math.PI / 180);
              const y = 250 + radius * Math.sin(angle * Math.PI / 180);
              return (
                <g key={`flower-${i}`} transform={`translate(${x} ${y}) rotate(${angle})`}>
                  <ellipse rx="3" ry="1.5" fill="#c20a4a" />
                  <ellipse rx="3" ry="1.5" fill="#f7b705" transform="rotate(30)" />
                </g>
              );
            })}
          </svg>

          {/* Central Theyyam Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-700 shadow-lg bg-red-700">
              <img 
                src="theyam2.0.png" 
                alt="Theyyam" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        
        </div>

      
        </div>
      </div>
    
  );
}

export default App;