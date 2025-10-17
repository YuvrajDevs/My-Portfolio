"use client";

import React, { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let rafId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR, DPR);
    };
    resize();

    const numStars = Math.round((width * height) / 12000);
    const stars = Array.from({ length: numStars }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      d: Math.random() * 0.6 + 0.2,
      // slower twinkle speed in radians per second
      tw: Math.random() * 0.4 + 0.2, // 0.2 to 0.6 rad/s
      tp: Math.random() * Math.PI * 2,
      // small autonomous velocity for a subset of stars
      vx: Math.random() < 0.6 ? (Math.random() * 0.15 - 0.075) : 0, // -0.075..0.075 px/frame
      vy: Math.random() < 0.6 ? (Math.random() * 0.15 - 0.075) : 0,
    }));

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX / width - 0.5;
      mouseRef.current.y = e.clientY / height - 0.5;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);

    const draw = (t) => {
      // convert timestamp (ms) -> seconds for stable speeds
      const timeSec = t * 0.001;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        // very gentle background drift (slightly increased)
        s.x += (s.d - 0.4) * 0.08;
        // autonomous tiny motion regardless of mouse
        s.x += s.vx;
        s.y += s.vy;
        if (s.x > width + 2) s.x = -2;
        if (s.x < -2) s.x = width + 2;
        if (s.y > height + 2) s.y = -2;
        if (s.y < -2) s.y = height + 2;
        // subtle per-star wobble for added life
        const wobbleX = Math.sin(timeSec * (s.tw * 0.8) + s.tp) * 0.12;
        const wobbleY = Math.cos(timeSec * (s.tw * 0.7) + s.tp) * 0.12;
        const ox = mouseRef.current.x * 14 * (1 - s.d) + wobbleX;
        const oy = mouseRef.current.y * 14 * (1 - s.d) + wobbleY;
        const twinkle = 0.75 + 0.25 * Math.sin(s.tp + timeSec * s.tw);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${0.7 * twinkle})`;
        ctx.arc(s.x + ox, s.y + oy, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 block"
    />
  );
}
