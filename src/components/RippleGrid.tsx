'use client';

import { useEffect, useRef } from 'react';

interface RippleGridProps {
  enableRainbow?: boolean;
  gridColor?: string;
  rippleIntensity?: number;
  gridSize?: number;
  gridThickness?: number;
  mouseInteraction?: boolean;
  mouseInteractionRadius?: number;
  opacity?: number;
}

export default function RippleGrid({
  enableRainbow = false,
  gridColor = "#ffffff",
  rippleIntensity = 0.05,
  gridSize = 10,
  gridThickness = 15,
  mouseInteraction = true,
  mouseInteractionRadius = 1.2,
  opacity = 0.8
}: RippleGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const ripplesRef = useRef<Array<{ x: number; y: number; time: number; intensity: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cellSize = gridSize;
      const thickness = gridThickness;
      
      // Draw grid lines
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = thickness;
      ctx.globalAlpha = opacity;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawRipples = () => {
      const currentTime = Date.now();
      
      // Update ripples
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        const age = currentTime - ripple.time;
        const maxAge = 2000; // 2 seconds
        
        if (age > maxAge) return false;
        
        // Draw ripple effect
        const progress = age / maxAge;
        const radius = progress * mouseInteractionRadius * 100;
        const alpha = (1 - progress) * rippleIntensity;
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = enableRainbow ? 
          `hsl(${(progress * 360) % 360}, 70%, 50%)` : 
          gridColor;
        ctx.lineWidth = thickness * (1 - progress);
        
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();
        
        return true;
      });
    };

    const animate = () => {
      drawGrid();
      drawRipples();
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteraction) return;
      
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseClick = (e: MouseEvent) => {
      if (!mouseInteraction) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ripplesRef.current.push({
        x,
        y,
        time: Date.now(),
        intensity: rippleIntensity
      });
    };

    // Initialize
    resizeCanvas();
    animate();

    // Event listeners
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleMouseClick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleMouseClick);
    };
  }, [enableRainbow, gridColor, rippleIntensity, gridSize, gridThickness, mouseInteraction, mouseInteractionRadius, opacity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: mouseInteraction ? 'auto' : 'none'
      }}
    />
  );
}
