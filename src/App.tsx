

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

            {/* Additional triangles over the green circle */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 360) / 24 + 2; // Offset to point to gaps between outer triangles
              const isRed = i % 2 === 0;
              const color = isRed ? '#DC2626' : '#FCD34D';
              const innerRadius = 170;
              const outerRadius = 215;
              const angleWidth = 20;
              
              return (
                <polygon
                  key={`green-triangles-${i}`}
                  points={`${250 + innerRadius * Math.cos((angle - angleWidth) * Math.PI / 180)},${250 + innerRadius * Math.sin((angle - angleWidth) * Math.PI / 180)} ${250 + outerRadius * Math.cos(angle * Math.PI / 180)},${250 + outerRadius * Math.sin(angle * Math.PI / 180)} ${250 + innerRadius * Math.cos((angle + angleWidth) * Math.PI / 180)},${250 + innerRadius * Math.sin((angle + angleWidth) * Math.PI / 180)}`}
                  fill={color}
                />
              );
            })}

            {/* Maroon decorative ring */}
            <circle
              cx="250"
              cy="250"
              r="170"
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

            {/* Face background circle */}
            <circle
              cx="250"
              cy="250"
              r="130"
              fill="#1F2937"
            />
          </svg>

          {/* Central Mandala Pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-65 h-65">
              {/* Colorful mandala pattern from the attached image */}
              <div className="w-34 h-34 rounded-full mx-auto mt-0 border-4 border-white shadow-lg overflow-hidden bg-white">
                <img 
                  src="copy.png" 
                  alt="Center Image" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Floating decorative elements removed to disable animations */}
        </div>

      
        </div>
      </div>
    
  );
}

export default App;