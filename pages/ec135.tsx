/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import React, { Suspense, useRef, useState } from "react"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

type GLTFResult = GLTF & {
    nodes: {
        static_rotor2_Mat_maverick012_ec135bmp_0: THREE.Mesh
        static_rotor_Mat_maverick011_ec1351bmp_0: THREE.Mesh
        chassis_Mat_maverick008_ec135bmp_0: THREE.Mesh
        chassis_Mat_maverick009_ec1351bmp_0: THREE.Mesh
        chassis_Mat_maverick010_0: THREE.Mesh
    }
    materials: {
        ['Mat_maverick.012_ec135.bmp']: THREE.MeshStandardMaterial
        ['Mat_maverick.011_ec1351.bmp']: THREE.MeshStandardMaterial
        ['Mat_maverick.008_ec135.bmp']: THREE.MeshStandardMaterial
        ['Mat_maverick.009_ec1351.bmp']: THREE.MeshStandardMaterial
        ['Mat_maverick.010']: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/helicopter_v2/scene.gltf') as unknown as GLTFResult
    const [hovered, set] = useState(null)

    console.log(hovered)
    return (
        <group ref={group} {...props} dispose={null}
            //@ts-ignore
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            //@ts-ignore
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group scale={[100, 100, 100]}>
                        <mesh
                            geometry={nodes.static_rotor2_Mat_maverick012_ec135bmp_0.geometry}
                            material={materials['Mat_maverick.012_ec135.bmp']}
                        />
                    </group>
                    <group scale={[100, 100, 100]}>
                        <mesh
                            geometry={nodes.static_rotor_Mat_maverick011_ec1351bmp_0.geometry}
                            material={materials['Mat_maverick.011_ec1351.bmp']}
                        />
                    </group>
                    <group scale={[100, 100, 100]}>
                        <mesh
                            geometry={nodes.chassis_Mat_maverick008_ec135bmp_0.geometry}
                            material={materials['Mat_maverick.008_ec135.bmp']}
                        />
                        <mesh
                            geometry={nodes.chassis_Mat_maverick009_ec1351bmp_0.geometry}
                            material={materials['Mat_maverick.009_ec1351.bmp']}
                        />
                        <mesh geometry={nodes.chassis_Mat_maverick010_0.geometry} material={materials['Mat_maverick.010']} />
                    </group>
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "Mat_maverick.008_ec135.bmp") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">ROTOR HEAD</h1>
                <h1 className="text-xl">The four-bladed, bearingless, main rotor system is made of fibre-reinforced composite. The built-in anti-resonance isolation system also contributes to low vibration and noise level.</h1>
            </div>
        )
    }
    else if (snap.current === "Mat_maverick.010") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Cockpit</h1>
                <h1 className="text-xl">The helicopter is equipped with a Thales SMD45 dual screen vehicle and engine management system, Honeywell Gold Crown and Thales Avionique Nouvelle avionics, an air data computer, a SFIM automatic flight control system, a global positioning system and a Honeywell combined flight data and cockpit voice recorder.</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of Eurocopter EC135 to know more</h1>
                <p className="self-center mx-8 text-xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex p-6 text-6xl rounded-xl h-48 w-48">
                        <Image width="250" height="250" src="/dragon2qr.jpeg" alt="" />
                    </div>
                    <a href="https://go.echo3d.co/Kn7b" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function EC135() {
    return (
        <>

            <Head>
                <title>Eurocopter EC135 | AeroTrack</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="pt-4 bg-secondary text-white font-bold">

                <Link href="/explore" passHref><span className="ml-8 cursor-pointer">Go Back</span></Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                        Eurocopter EC135
                    </h1>
                    <div className="inline-flex mt-2 h-1 bg-primary rounded-full w-96"></div>
                    <p className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">The Eurocopter EC135 (now Airbus Helicopters H135) is a twin-engine civil light utility helicopter produced by Airbus Helicopters (formerly known as Eurocopter). It is capable of flight under instrument flight rules (IFR) and is outfitted with a digital automatic flight control system (AFCS). This work is based on "Helicopter v2" (https://sketchfab.com/3d-models/helicopter-v2-42927f1c939e4447978b09dd1e22521c) by Aditya3D (https://sketchfab.com/Adityakmaurya) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</p>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <Suspense fallback={null}>
                                <Model scale={0.25} />
                                <Environment preset="city" />
                                {/* @ts-ignore  */}
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            {/* @ts-ignore  */}
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="mt-56 md:mt-0 md:col-span-1 p-4">
                        <Details />
                    </div>

                </div>

            </div>

        </>
    )
}
