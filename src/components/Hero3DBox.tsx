"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCcw, Box as BoxIcon, Eye, Sparkles } from "lucide-react";

export default function Hero3DBox() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  // References for animation manipulation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const boxGroupRef = useRef<THREE.Group | null>(null);
  const flapsRef = useRef<{
    left: THREE.Mesh;
    right: THREE.Mesh;
    front: THREE.Mesh;
    back: THREE.Mesh;
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(3.2, 2.6, 4.2);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xf5ebdd, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff1dc, 2.2);
    dirLight1.position.set(5, 8, 5);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 1024;
    dirLight1.shadow.mapSize.height = 1024;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa67c52, 1.2);
    dirLight2.position.set(-5, -2, -3);
    scene.add(dirLight2);

    const spotLight = new THREE.SpotLight(0xe8a33d, 1.5, 10, Math.PI / 4, 0.4);
    spotLight.position.set(0, 5, 2);
    scene.add(spotLight);

    // --- PROCEDURAL TEXTURES ---
    // Helper to generate realistic cardboard canvas texture with stamps & tape
    function createCardboardTexture(faceType: "front" | "side" | "top" | "plain") {
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext("2d")!;

      // Kraft brown cardboard base
      ctx.fillStyle = "#A67C52";
      ctx.fillRect(0, 0, 512, 512);

      // Add kraft paper fibers / noise
      for (let i = 0; i < 4000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const radius = Math.random() * 1.5;
        ctx.fillStyle = Math.random() > 0.5 ? "rgba(90, 55, 25, 0.12)" : "rgba(255, 235, 205, 0.1)";
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Corrugated flute subtle lines
      ctx.strokeStyle = "rgba(107, 68, 35, 0.08)";
      ctx.lineWidth = 2;
      for (let y = 0; y < 512; y += 8) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(512, y);
        ctx.stroke();
      }

      // Edge shadow
      ctx.strokeStyle = "rgba(60, 35, 15, 0.35)";
      ctx.lineWidth = 14;
      ctx.strokeRect(0, 0, 512, 512);

      if (faceType === "front") {
        // Stamp: SUCHI PRINTERS
        ctx.save();
        ctx.strokeStyle = "rgba(40, 25, 15, 0.85)";
        ctx.lineWidth = 4;
        ctx.strokeRect(50, 70, 412, 110);

        ctx.fillStyle = "rgba(35, 20, 10, 0.9)";
        ctx.font = "bold 34px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("SUCHI PRINTERS", 256, 120);

        ctx.font = "bold 16px sans-serif";
        ctx.fillStyle = "#8B2500";
        ctx.fillText("KANPUR • PACKAGING EXCELLENCE", 256, 155);

        // Stamp: FRAGILE
        ctx.fillStyle = "#990000";
        ctx.strokeStyle = "#990000";
        ctx.lineWidth = 3;
        ctx.strokeRect(60, 240, 190, 60);
        ctx.font = "bold 28px sans-serif";
        ctx.fillText("FRAGILE", 155, 280);

        // Stamp: ESTD. 1995
        ctx.fillStyle = "rgba(35, 20, 10, 0.8)";
        ctx.strokeStyle = "rgba(35, 20, 10, 0.8)";
        ctx.strokeRect(270, 240, 180, 60);
        ctx.font = "bold 20px sans-serif";
        ctx.fillText("ESTD. 1995", 360, 278);

        // Barcode
        ctx.fillStyle = "rgba(25, 15, 8, 0.85)";
        for (let bx = 60; bx < 450; bx += Math.floor(Math.random() * 8 + 4)) {
          const barWidth = Math.random() > 0.4 ? 4 : 2;
          ctx.fillRect(bx, 360, barWidth, 60);
        }
        ctx.font = "14px monospace";
        ctx.fillText("*SP-KNPR-208012-ISO-CORRUGATED*", 256, 445);
        ctx.restore();
      } else if (faceType === "side") {
        // Handle with care & Arrows
        ctx.save();
        ctx.fillStyle = "rgba(30, 20, 10, 0.85)";
        ctx.font = "bold 32px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("THIS SIDE UP ⬆⬆", 256, 140);

        // Recycling Stamp Symbol
        ctx.strokeStyle = "rgba(40, 70, 30, 0.85)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(256, 260, 50, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = "rgba(40, 70, 30, 0.9)";
        ctx.font = "bold 18px sans-serif";
        ctx.fillText("100% RECYCLABLE", 256, 266);

        ctx.fillStyle = "rgba(30, 20, 10, 0.75)";
        ctx.font = "16px sans-serif";
        ctx.fillText("BURSTING FACTOR: HIGH BF", 256, 360);
        ctx.fillText("FAZALGANJ INDUSTRIAL AREA", 256, 390);
        ctx.restore();
      } else if (faceType === "top") {
        // Brown Gummed Packing Tape across center
        ctx.fillStyle = "#845B38";
        ctx.fillRect(0, 200, 512, 112);

        // Tape edges
        ctx.strokeStyle = "rgba(60, 35, 15, 0.4)";
        ctx.lineWidth = 3;
        ctx.strokeRect(0, 200, 512, 112);

        // Security tape text
        ctx.fillStyle = "rgba(245, 235, 221, 0.85)";
        ctx.font = "bold 20px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("★ SUCHI PACKAGING SEALED ★ DO NOT ACCEPT IF BROKEN ★", 256, 265);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      return texture;
    }

    const matFront = new THREE.MeshStandardMaterial({
      map: createCardboardTexture("front"),
      roughness: 0.85,
      metalness: 0.05,
    });
    const matSide = new THREE.MeshStandardMaterial({
      map: createCardboardTexture("side"),
      roughness: 0.85,
      metalness: 0.05,
    });
    const matTop = new THREE.MeshStandardMaterial({
      map: createCardboardTexture("top"),
      roughness: 0.85,
      metalness: 0.05,
    });
    const matPlain = new THREE.MeshStandardMaterial({
      map: createCardboardTexture("plain"),
      roughness: 0.9,
      metalness: 0.05,
    });

    // Box Group
    const boxGroup = new THREE.Group();
    boxGroupRef.current = boxGroup;
    scene.add(boxGroup);

    // Box Body (2 x 1.7 x 2)
    const boxWidth = 2.0;
    const boxHeight = 1.6;
    const boxDepth = 2.0;

    // Materials order: +X, -X, +Y, -Y, +Z, -Z
    const boxMaterials = [
      matSide,  // Right
      matSide,  // Left
      matTop,   // Top
      matPlain, // Bottom
      matFront, // Front
      matFront, // Back
    ];

    const boxGeom = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const boxMesh = new THREE.Mesh(boxGeom, boxMaterials);
    boxMesh.castShadow = true;
    boxMesh.receiveShadow = true;
    boxGroup.add(boxMesh);

    // Ground Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(6, 6);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.45 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -boxHeight / 2 - 0.2;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Interactive Drag Controls
    let isPointerDown = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isPointerDown = true;
      setIsDragging(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isPointerDown) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;

      if (boxGroup) {
        boxGroup.rotation.y += deltaX * 0.008;
        boxGroup.rotation.x += deltaY * 0.008;
        // Limit X rotation
        boxGroup.rotation.x = Math.max(-0.8, Math.min(0.8, boxGroup.rotation.x));
      }

      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerUp = () => {
      isPointerDown = false;
      setIsDragging(false);
    };

    container.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    container.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (boxGroup) {
        // Subtle floating movement
        boxGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;

        // Auto spin when not dragging and autoRotate is on
        if (!isPointerDown && autoRotate) {
          boxGroup.rotation.y += 0.005;
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      container.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
      renderer.dispose();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [autoRotate]);

  const handleReset = () => {
    if (boxGroupRef.current) {
      boxGroupRef.current.rotation.set(0.2, 0.4, 0);
    }
  };

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
      {/* 3D Canvas Mount Point */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-transform duration-300 ${
          isDragging ? "scale-[1.02]" : "scale-100"
        }`}
        title="Click & drag to rotate 3D box"
      />

      {/* Floating Industrial Stamps & Badges */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal-300/90 border border-kraft-500/40 rounded-full text-xs font-mono text-amberAccent shadow-lg backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive 3D Preview</span>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-10 pointer-events-none hidden sm:block">
        <div className="text-[11px] font-mono text-kraft-300/80 bg-charcoal-400/80 px-2.5 py-1 rounded border border-kraft-700/40">
          🖱 Drag to rotate 360° • Pinch to zoom
        </div>
      </div>

      {/* Interactive Controls Overlay */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded-lg text-xs font-medium border backdrop-blur-md transition-all ${
            autoRotate
              ? "bg-amberAccent/20 border-amberAccent text-amberAccent"
              : "bg-charcoal-300/80 border-kraft-700/60 text-kraft-200 hover:text-white"
          }`}
          title={autoRotate ? "Pause auto-rotation" : "Enable auto-rotation"}
        >
          <RotateCcw className={`w-4 h-4 ${autoRotate ? "animate-spin" : ""}`} />
        </button>

        <button
          onClick={handleReset}
          className="p-2 bg-charcoal-300/80 hover:bg-charcoal-200 border border-kraft-700/60 rounded-lg text-kraft-200 hover:text-white text-xs font-medium backdrop-blur-md transition-all"
          title="Reset 3D orientation"
        >
          <BoxIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Corner Kraft Tape Accents */}
      <div className="absolute -top-3 -right-3 w-16 h-5 bg-kraft-500/30 rotate-12 pointer-events-none backdrop-blur-xs border-y border-kraft-400/30" />
      <div className="absolute -bottom-3 -left-3 w-16 h-5 bg-kraft-500/30 -rotate-12 pointer-events-none backdrop-blur-xs border-y border-kraft-400/30" />
    </div>
  );
}

