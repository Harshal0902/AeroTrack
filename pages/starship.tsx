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
        Bow_Window001_Starship_0: THREE.Mesh
        Primary_Hull001_Starship_0: THREE.Mesh
        Cargo_Doors001_Starship_0: THREE.Mesh
        SeaLev_Raptors_LP001_Starship_0: THREE.Mesh
        Vacuum_Raptors_LP001_Starship_0: THREE.Mesh
        Cargo_DropBoxes001_Starship_0: THREE.Mesh
        Cabin_WindowInset001_Starship_0: THREE.Mesh
        Cabin_Windows001_Starship_0: THREE.Mesh
    }
    materials: {
        Starship: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/spacex_starship/scene.gltf') as unknown as GLTFResult
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
                <group position={[0, 42.38, -5293.18]} rotation={[-Math.PI, 0, 0]}>
                    <group rotation={[-Math.PI, 0, 0]}>
                        <group rotation={[0, 0, Math.PI / 2]} scale={[100, 100, 100]}>
                            <mesh
                                geometry={nodes.Bow_Window001_Starship_0.geometry}
                                material={nodes.Bow_Window001_Starship_0.material}
                            />
                        </group>
                        <group rotation={[0, 0, Math.PI / 2]} scale={[100, 100, 100]}>
                            <mesh
                                geometry={nodes.Primary_Hull001_Starship_0.geometry}
                                material={nodes.Primary_Hull001_Starship_0.material}
                            />
                        </group>
                        <group rotation={[0, 0, Math.PI / 2]} scale={[100, 100, 100]}>
                            <mesh
                                geometry={nodes.Cargo_Doors001_Starship_0.geometry}
                                material={nodes.Cargo_Doors001_Starship_0.material}
                            />
                        </group>
                        <group position={[0, 0, 123.11]} rotation={[0, 0, Math.PI / 2]} scale={[65.53, 65.53, 81.73]}>
                            <mesh
                                geometry={nodes.SeaLev_Raptors_LP001_Starship_0.geometry}
                                material={nodes.SeaLev_Raptors_LP001_Starship_0.material}
                            />
                        </group>
                        <group rotation={[0, 0, -Math.PI / 2]} scale={[65.53, 65.53, 81.73]}>
                            <mesh
                                geometry={nodes.Vacuum_Raptors_LP001_Starship_0.geometry}
                                material={nodes.Vacuum_Raptors_LP001_Starship_0.material}
                            />
                        </group>
                        <group position={[-1.13, -0.26, 0]} rotation={[0, 0, -Math.PI / 6]} scale={[100, 100, 100]}>
                            <mesh
                                geometry={nodes.Cargo_DropBoxes001_Starship_0.geometry}
                                material={nodes.Cargo_DropBoxes001_Starship_0.material}
                            />
                        </group>
                        <group rotation={[0, 0, Math.PI / 2]} scale={[100, 100, 100]}>
                            <mesh
                                geometry={nodes.Cabin_WindowInset001_Starship_0.geometry}
                                material={nodes.Cabin_WindowInset001_Starship_0.material}
                            />
                        </group>
                        <group rotation={[0, 0, Math.PI / 2]} scale={[100, 100, 100]}>
                            <mesh
                                geometry={nodes.Cabin_Windows001_Starship_0.geometry}
                                material={nodes.Cabin_Windows001_Starship_0.material}
                            />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "Starship") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">PAYLOAD</h1>
                <h1 className="text-xl ">The Starship payload fairing is 9 m in diameter and 18 m high, resulting in the largest usable payload volume of any current or in development launcher. This payload volume can be configured for both crew and cargo.</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of SpaceX Starship to know more</h1>
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

export default function Starship() {
    return (
        <>

            <Head>
                <title>SpaceX Starship | AeroTrack</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="pt-4 bg-secondary text-white font-bold">

                <Link href="/explore" passHref><span className="ml-8 cursor-pointer">Go Back</span></Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                        SpaceX Starship
                    </h1>
                    <div className="inline-flex mt-2 h-1 bg-primary rounded-full w-96"></div>
                    <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Starship is a fully reusable launch vehicle in development by American aerospace company SpaceX. The launch vehicle consists of a reusable Super Heavy booster and Starship spacecraft. Both are made from stainless steel and hold liquid oxygen with liquid methane use by the Raptor rocket engines.</div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.0003} />
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
