"use client"
import { ThreeDCard } from '@/components/reusable/3DProductCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React from 'react'

const Accueil = () => {
    return (
        <div className='w-full h-screen bg-amber-100 flex justify-center items-center'>
            <div className='w-[80%] flex items-center flex-col'>
                <div className='flex flex-row items-center justify-center'>
                    <Image src={"/logo.webp"} alt={''} width={100} height={100} />
                    <h1 className='text-4xl font-bold'>Gondor Chic</h1>
                </div>
                <h2 className='text-2xl'>🧙‍♂️ Bienvenue, noble voyageur ✨</h2>
                <ThreeDCard />
                <p>"Marque ton nom, tiens ta clé, et marche dans l'ombre enchanté."</p>
                <div className='flex flex-row items-end gap-3 w-50% justify-end mt-2'>
                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="email">Nom du pelerin :</Label>
                        <Input type="email" id="email" placeholder="" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="email">Clé maqique :</Label>
                        <Input type="email" id="email" placeholder="" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Button type="submit" variant="default">
                            Ouvrir le passage
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Accueil