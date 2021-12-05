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
        mesh_9: THREE.Mesh
        mesh_10: THREE.Mesh
        mesh_11: THREE.Mesh
        mesh_12: THREE.Mesh
        mesh_13: THREE.Mesh
        mesh_14: THREE.Mesh
        mesh_15: THREE.Mesh
        mesh_16: THREE.Mesh
        mesh_17: THREE.Mesh
        mesh_18: THREE.Mesh
        mesh_19: THREE.Mesh
        mesh_20: THREE.Mesh
        mesh_21: THREE.Mesh
        mesh_22: THREE.Mesh
        mesh_23: THREE.Mesh
        mesh_24: THREE.Mesh
        mesh_25: THREE.Mesh
        mesh_26: THREE.Mesh
        mesh_27: THREE.Mesh
        mesh_28: THREE.Mesh
        mesh_29: THREE.Mesh
        mesh_30: THREE.Mesh
        mesh_31: THREE.Mesh
        mesh_32: THREE.Mesh
        mesh_33: THREE.Mesh
        mesh_34: THREE.Mesh
        mesh_35: THREE.Mesh
        mesh_36: THREE.Mesh
        mesh_37: THREE.Mesh
        mesh_38: THREE.Mesh
        mesh_39: THREE.Mesh
        mesh_40: THREE.Mesh
        mesh_41: THREE.Mesh
        mesh_42: THREE.Mesh
        mesh_43: THREE.Mesh
        mesh_44: THREE.Mesh
        mesh_45: THREE.Mesh
    }
    materials: {
        material_43: THREE.MeshStandardMaterial
        material_42: THREE.MeshStandardMaterial
        material_41: THREE.MeshStandardMaterial
        material_40: THREE.MeshStandardMaterial
        material_39: THREE.MeshStandardMaterial
        material_38: THREE.MeshStandardMaterial
        material_37: THREE.MeshStandardMaterial
        material_36: THREE.MeshStandardMaterial
        material_35: THREE.MeshStandardMaterial
        material_34: THREE.MeshStandardMaterial
        material_33: THREE.MeshStandardMaterial
        material_32: THREE.MeshStandardMaterial
        material_31: THREE.MeshStandardMaterial
        material_30: THREE.MeshStandardMaterial
        material_29: THREE.MeshStandardMaterial
        material_28: THREE.MeshStandardMaterial
        material_27: THREE.MeshStandardMaterial
        material_26: THREE.MeshStandardMaterial
        material_25: THREE.MeshStandardMaterial
        material_24: THREE.MeshStandardMaterial
        material_23: THREE.MeshStandardMaterial
        material_22: THREE.MeshStandardMaterial
        material_21: THREE.MeshStandardMaterial
        material_20: THREE.MeshStandardMaterial
        material_19: THREE.MeshStandardMaterial
        material_18: THREE.MeshStandardMaterial
        material_17: THREE.MeshStandardMaterial
        material_16: THREE.MeshStandardMaterial
        material_15: THREE.MeshStandardMaterial
        material_14: THREE.MeshStandardMaterial
        material_13: THREE.MeshStandardMaterial
        material_12: THREE.MeshStandardMaterial
        material_11: THREE.MeshStandardMaterial
        material_10: THREE.MeshStandardMaterial
        material_9: THREE.MeshStandardMaterial
        material_8: THREE.MeshStandardMaterial
        material_7: THREE.MeshStandardMaterial
        material_6: THREE.MeshStandardMaterial
        material_5: THREE.MeshStandardMaterial
        material_4: THREE.MeshStandardMaterial
        material_3: THREE.MeshStandardMaterial
        material_2: THREE.MeshStandardMaterial
        material_1: THREE.MeshStandardMaterial
        material_0: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/boeing_787/scene.gltf') as unknown as GLTFResult
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
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
                    <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
                    <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
                    <mesh geometry={nodes.mesh_3.geometry} material={materials.material_42} />
                    <mesh geometry={nodes.mesh_4.geometry} material={materials.material_41} />
                    <mesh geometry={nodes.mesh_5.geometry} material={materials.material_40} />
                    <mesh geometry={nodes.mesh_6.geometry} material={materials.material_39} />
                    <mesh geometry={nodes.mesh_7.geometry} material={materials.material_38} />
                    <mesh geometry={nodes.mesh_8.geometry} material={materials.material_37} />
                    <mesh geometry={nodes.mesh_9.geometry} material={materials.material_36} />
                    <mesh geometry={nodes.mesh_10.geometry} material={materials.material_35} />
                    <mesh geometry={nodes.mesh_11.geometry} material={materials.material_34} />
                    <mesh geometry={nodes.mesh_12.geometry} material={materials.material_33} />
                    <mesh geometry={nodes.mesh_13.geometry} material={materials.material_32} />
                    <mesh geometry={nodes.mesh_14.geometry} material={materials.material_31} />
                    <mesh geometry={nodes.mesh_15.geometry} material={materials.material_30} />
                    <mesh geometry={nodes.mesh_16.geometry} material={materials.material_29} />
                    <mesh geometry={nodes.mesh_17.geometry} material={materials.material_28} />
                    <mesh geometry={nodes.mesh_18.geometry} material={materials.material_27} />
                    <mesh geometry={nodes.mesh_19.geometry} material={materials.material_26} />
                    <mesh geometry={nodes.mesh_20.geometry} material={materials.material_25} />
                    <mesh geometry={nodes.mesh_21.geometry} material={materials.material_24} />
                    <mesh geometry={nodes.mesh_22.geometry} material={materials.material_23} />
                    <mesh geometry={nodes.mesh_23.geometry} material={materials.material_22} />
                    <mesh geometry={nodes.mesh_24.geometry} material={materials.material_21} />
                    <mesh geometry={nodes.mesh_25.geometry} material={materials.material_20} />
                    <mesh geometry={nodes.mesh_26.geometry} material={materials.material_19} />
                    <mesh geometry={nodes.mesh_27.geometry} material={materials.material_18} />
                    <mesh geometry={nodes.mesh_28.geometry} material={materials.material_17} />
                    <mesh geometry={nodes.mesh_29.geometry} material={materials.material_16} />
                    <mesh geometry={nodes.mesh_30.geometry} material={materials.material_15} />
                    <mesh geometry={nodes.mesh_31.geometry} material={materials.material_14} />
                    <mesh geometry={nodes.mesh_32.geometry} material={materials.material_13} />
                    <mesh geometry={nodes.mesh_33.geometry} material={materials.material_12} />
                    <mesh geometry={nodes.mesh_34.geometry} material={materials.material_11} />
                    <mesh geometry={nodes.mesh_35.geometry} material={materials.material_10} />
                    <mesh geometry={nodes.mesh_36.geometry} material={materials.material_9} />
                    <mesh geometry={nodes.mesh_37.geometry} material={materials.material_8} />
                    <mesh geometry={nodes.mesh_38.geometry} material={materials.material_7} />
                    <mesh geometry={nodes.mesh_39.geometry} material={materials.material_6} />
                    <mesh geometry={nodes.mesh_40.geometry} material={materials.material_5} />
                    <mesh geometry={nodes.mesh_41.geometry} material={materials.material_4} />
                    <mesh geometry={nodes.mesh_42.geometry} material={materials.material_3} />
                    <mesh geometry={nodes.mesh_43.geometry} material={materials.material_2} />
                    <mesh geometry={nodes.mesh_44.geometry} material={materials.material_1} />
                    <mesh geometry={nodes.mesh_45.geometry} material={materials.material_0} />
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "material_43") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Wings</h1>
                <h1 className="text-xl">Boeing 787 has composite wings with raked wingtips where the tip of the wing has a higher degree of sweep than the rest of the wing. This aerodynamic design feature improves fuel efficiency and climb performance while shortening takeoff length.</h1>
            </div>
        )
    }
    else if (snap.current === "material_13") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Cockpit</h1>
                <h1 className="text-xl">The flight deck features multi-function LCDs, which use an industry-standard graphical user interface widget toolkit (Cockpit Display System Interfaces to User Systems / ARINC 661)</h1>
            </div>
        )
    }
     else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of Boeing 787 to know more</h1>
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

export default function Boeing787() {
    return (
        <>

            <Head>
                <title>Boeing 787 | AeroTrack</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="pt-4 bg-secondary text-white font-bold">

                <Link href="/explore" passHref><span className="ml-8 cursor-pointer">Go Back</span></Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                        Boeing 787
                    </h1>
                    <div className="inline-flex mt-2 h-1 bg-primary rounded-full w-72"></div>
                    <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">The Boeing 787 Dreamliner is an American wide-body jet airliner manufactured by Boeing Commercial Airplanes. After dropping its Sonic Cruiser project, Boeing announced the conventional 7E7 on January 29, 2003, focused on efficiency.</div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            {/* <ambientLight intensity={0} /> */}
                            <Suspense fallback={null}>
                                <Model scale={0.00009} />
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
