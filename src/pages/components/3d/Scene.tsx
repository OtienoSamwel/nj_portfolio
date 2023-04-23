import {useLayoutEffect, useRef} from "react";
import {degreesToRadians, mix, progress} from "popmotion";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {useScroll, useTime, useTransform} from "framer-motion";
// @ts-ignore
import * as THREE from "three";

export default function Scene({numStars = 100}) {
    const gl = useThree((state) => state.gl);
    const {scrollYProgress} = useScroll();
    const yAngle = useTransform(
        scrollYProgress,
        [0, 1],
        [0.001, degreesToRadians(180)]
    );
    const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
    const time = useTime();

    useFrame(({camera}) => {
        camera.position.setFromSphericalCoords(
            distance.get(),
            yAngle.get(),
            time.get() * 0.0005
        );
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
    });

    useLayoutEffect(() => gl.setPixelRatio(0.3));

    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<Star p={progress(0, numStars, i)}/>);
    }

    return (
        <>
            <Icosahedron/>
            {stars}
        </>
    );
}

const color = "#f1f1f1";


const Star = ({p}: { p: number }) => {
    const ref = useRef<THREE.Object3D>(null);

    useLayoutEffect(() => {
        const distance = mix(2, 3.5, Math.random());
        const yAngle = mix(
            degreesToRadians(80),
            degreesToRadians(100),
            Math.random()
        );
        const xAngle = degreesToRadians(360) * p;
        ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
    });

    return (
        <mesh ref={ref}>
            <boxGeometry args={[0.05, 0.05, 0.05]}/>
            <meshBasicMaterial wireframe color={color}/>
        </mesh>
    );
};

const Icosahedron = () => (
    <mesh rotation-x={0.35}>
        <icosahedronGeometry args={[1, 0]}/>
        <meshBasicMaterial wireframe color={color}/>
    </mesh>
);
