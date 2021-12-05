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
        mesh_0: THREE.Mesh
        mesh_1: THREE.Mesh
        mesh_2: THREE.Mesh
        mesh_3: THREE.Mesh
        mesh_4: THREE.Mesh
        mesh_5: THREE.Mesh
        mesh_6: THREE.Mesh
        mesh_7: THREE.Mesh
        mesh_8: THREE.Mesh
    }
    materials: {
        draco_thruster: THREE.MeshStandardMaterial
        grey_plastic: THREE.MeshStandardMaterial
        ground: THREE.MeshStandardMaterial
        shiny_metal: THREE.MeshStandardMaterial
        windows: THREE.MeshStandardMaterial
        body: THREE.MeshStandardMaterial
        heatshield: THREE.MeshStandardMaterial
        trunk: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/spacex_dragon_2_exterior/scene.gltf') as unknown as GLTFResult
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
                <mesh geometry={nodes.mesh_0.geometry} material={materials.draco_thruster} />
                <mesh geometry={nodes.mesh_1.geometry} material={materials.grey_plastic} />
                <mesh geometry={nodes.mesh_2.geometry} material={materials.ground} />
                <mesh geometry={nodes.mesh_3.geometry} material={materials.shiny_metal} />
                <mesh geometry={nodes.mesh_4.geometry} material={materials.windows} />
                <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
                <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
                <mesh geometry={nodes.mesh_7.geometry} material={materials.heatshield} />
                <mesh geometry={nodes.mesh_8.geometry} material={materials.trunk} />
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "body") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">CAPSULE</h1>
                <h1 className="text-xl ">The Dragon capsule, also known as the pressurized section, allows for the transport of people as well as environmentally sensitive cargo. Dragon is equipped with Draco thrusters that allow Dragon to maneuver while on orbit and 8 SuperDracos that power the spacecraft’s launch escape system.</h1>
            </div>
        )
    }
    else if (snap.current === "heatshield") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Heat Shield</h1>
                <h1 className="text-xl">A PICA-X heat shield protects the capsule during reentry, while a movable ballast sled allows more precise attitude control of the spacecraft during the atmospheric entry phase of the return to Earth and more accurate control of the landing ellipse location.</h1>
            </div>
        )
    }
    else if (snap.current === "trunk") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">TRUNK</h1>
                <h1 className="text-xl">Dragon’s trunk not only carries unpressurized cargo but also supports the spacecraft during ascent. One half of the trunk is covered in solar panels that provide power to Dragon during flight and while on-station. The trunk remains attached to Dragon until shortly before reentry into Earth’s atmosphere.</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of SpaceX Dragon 2 to know more</h1>
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

export default function Dragon2() {
    return (
        <>

            <Head>
                <title>SpaceX Dragon 2 | AeroTrack</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="pt-4 bg-secondary text-white font-bold">

                <Link href="/explore" passHref><span className="ml-8 cursor-pointer">Go Back</span></Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                        SpaceX Dragon 2
                    </h1>
                    <div className="inline-flex mt-2 h-1 bg-primary rounded-full w-96"></div>
                    <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Dragon 2 is a class of partially reusable spacecraft developed and manufactured by American aerospace manufacturer SpaceX, primarily for flights to the International Space Station (ISS). There are two variants: Crew Dragon, a spacecraft capable of ferrying up to seven crew, and Cargo Dragon, an updated replacement for the original Dragon 1. The spacecraft consists of a reuseable space capsule and an expendable trunk module. </div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.3} />
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
