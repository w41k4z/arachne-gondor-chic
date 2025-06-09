"use client"
import { ThreeDCard } from '@/components/reusable/3DProductCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DailyProduct } from '@/types/models/DailyProduct'
import { productService } from '@/services/ProductService';
import { ApiResponse } from '@/types/ApiResponse'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Accueil = () => {
    const [dailyProducts, setDailyProducts] = useState<DailyProduct[]>([]);

    useEffect(() => {
        fetchDailyProducts();
    }, []);

    const fetchDailyProducts = async () => {
      const response: ApiResponse<DailyProduct[]> = await productService.getDailyProducts();
      if (response.payload && response.payload.length > 0) {
        setDailyProducts(response.payload);
      }
    };

    return (
        <div className='w-full h-screen bg-amber-100 flex justify-center items-center'>
            <div className='w-[80%] flex items-center flex-col'>
                <div className='flex flex-row items-center justify-center'>
                    <Image src={"/logo.webp"} alt={''} width={100} height={100} />
                    <h1 className='text-4xl font-bold'>Gondor Chic</h1>
                </div>
                <h2 className='text-2xl'>🧙‍♂️ Bienvenue, noble voyageur ✨</h2>
                {dailyProducts.length > 0 ? (
                    <ThreeDCard products={dailyProducts} />
                    ) : (
                    <p className="text-red-600 italic mt-4">Aucun produit mis en avant aujourd’hui</p>
                )}
                <p className='my-3'>"Marque ton nom, tiens ta clé, et marche dans l'ombre enchanté."</p>
                <div className='flex flex-row items-end gap-5 w-50% justify-end mt-4'>
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
