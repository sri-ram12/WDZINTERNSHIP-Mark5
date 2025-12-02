import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import "./Product3D.css";

// Make sure you have the GLB model at public/assets/iphone17.glb
function IphoneModel({ scrollY }) {
  const ref = useRef();
  const { scene } = useGLTF("/assets/iphone17.glb");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scrollY * Math.PI * 2;
      ref.current.rotation.x = Math.sin(scrollY * Math.PI) * 0.2;
    }
  });

  return <primitive ref={ref} object={scene} scale={2.5} />;
}

export default function Product3D() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollY(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="product-3d-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
        <ambientLight intensity={0.8} />
        <Environment preset="city" />
        <IphoneModel scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
