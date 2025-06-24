"use client"
import { ThreeDCard } from '@/components/reusable/3DProductCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Accueil = () => {
    const router = useRouter()
    const [pilgrimName, setPilgrimName] = useState('')
    const [magicKey, setMagicKey] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOpenPassage = async () => {
        setError('')
        setSuccess(false)

        // Form validation
        if (!pilgrimName.trim()) {
            setError('Veuillez entrer votre nom, noble voyageur')
            return
        }
        if (!magicKey.trim()) {
            setError('La clé magique est requise pour ouvrir le passage')
            return
        }
        if (magicKey.length < 3) {
            setError('La clé magique doit contenir au moins 3 caractères')
            return
        }

        setIsLoading(true)

        // Simulate authentication delay
        setTimeout(() => {
            // Store user data in localStorage
            const userData = {
                name: pilgrimName,
                loginTime: new Date().toISOString(),
                isAuthenticated: true
            }
            localStorage.setItem('gondorUser', JSON.stringify(userData))
            
            setSuccess(true)
            setIsLoading(false)

            // Navigate after success message
            setTimeout(() => {
                router.push('/gondor-chic')
            }, 1500)
        }, 1500)
    }

    return (
        <div className='min-h-screen w-full bg-amber-100 flex justify-center items-center py-4 px-4'>
            <div className='w-full max-w-6xl flex items-center flex-col gap-2'>
                {/* Enhanced Header */}
                <div className='relative'>
                    {/* Decorative border */}
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent h-px top-0'></div>
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent h-px bottom-0'></div>
                    
                    <div className='flex flex-col items-center justify-center gap-3 py-4 px-6'>
                        {/* Logo and Title Row */}
                        <div className='flex flex-row items-center justify-center gap-4'>
                            <div className='relative'>
                                <Image 
                                    src={"/logo.webp"} 
                                    alt={'Gondor Chic Logo'} 
                                    width={120} 
                                    height={120} 
                                    className='rounded-full shadow-2xl border-4 border-amber-400/50 hover:scale-110 transition-transform duration-500'
                                    style={{
                                        filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.4))'
                                    }}
                                />
                                {/* Magical glow effect */}
                                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-400/20 animate-pulse'></div>
                            </div>
                            
                            <div className='text-center'>
                                <h1 className='text-5xl md:text-6xl font-bold text-amber-900 mb-2 relative' style={{ 
                                    fontFamily: '"Cormorant Garamond", serif',
                                    textShadow: '3px 3px 6px rgba(139, 69, 19, 0.4), 0 0 30px rgba(245, 158, 11, 0.3)',
                                    background: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    Gondor Chic
                                </h1>
                                
                                {/* Decorative underline */}
                                <div className='flex justify-center items-center gap-2 mt-2'>
                                    <div className='w-8 h-px bg-gradient-to-r from-transparent to-amber-400'></div>
                                    <div className='text-amber-600 text-xl'>⚜️</div>
                                    <div className='w-16 h-px bg-gradient-to-r from-amber-400 to-amber-600'></div>
                                    <div className='text-amber-600 text-xl'>👑</div>
                                    <div className='w-16 h-px bg-gradient-to-r from-amber-600 to-amber-400'></div>
                                    <div className='text-amber-600 text-xl'>⚜️</div>
                                    <div className='w-8 h-px bg-gradient-to-r from-amber-400 to-transparent'></div>
                                </div>
                                
                                {/* Subtitle */}
                                <p className='text-lg text-amber-700 italic mt-3' style={{ 
                                    fontFamily: '"Cormorant Garamond", serif',
                                    textShadow: '1px 1px 2px rgba(139, 69, 19, 0.2)'
                                }}>
                                    ~ Boutique Mystique du Royaume ~
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Compact Welcome & CTA */}
                <div className='text-center'>
                    <h2 className='text-xl md:text-2xl font-semibold text-amber-800 mb-1' style={{ 
                        fontFamily: '"Cormorant Garamond", serif'
                    }}>
                        🧙‍♂️ Découvrez nos créations magiques ✨
                    </h2>
                    <p className='text-sm text-amber-600 italic' style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                        Connectez-vous pour accéder à notre collection exclusive
                    </p>
                </div>
                
                {/* Product Showcase */}
                <div className='w-full flex flex-col items-center gap-1'>
                    <div className='w-full flex justify-center'>
                        <ThreeDCard />
                    </div>
                    
                    {/* Product CTA */}
                    <div className='text-center'>
                        <p className='text-amber-700 font-medium text-sm' style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                            💎 Produit du jour - Édition limitée
                        </p>
                        <p className='text-amber-600 text-xs italic' style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                            Connectez-vous pour commander
                        </p>
                    </div>
                </div>
                
                {/* Enhanced Login Form */}
                <div className='w-full max-w-4xl'>
                    <div className='bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 rounded-2xl p-6 shadow-2xl border-2 border-amber-400/50'
                         style={{
                             boxShadow: '0 25px 50px -12px rgba(139, 69, 19, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                         }}>
                        
                        {/* Form Title */}
                        <div className='text-center mb-4'>
                            <h3 className='text-2xl font-bold text-amber-900 mb-2' style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                                ⚔️ Portail d'Accès ⚔️
                            </h3>
                            <p className='text-amber-700 italic' style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                                Identifiez-vous pour accéder aux mystères de Gondor
                            </p>
                        </div>

                        {/* Form Fields */}
                        <div className='flex flex-col md:flex-row items-end gap-6 justify-center'>
                            <div className="flex flex-col w-full max-w-sm gap-3">
                                <Label 
                                    htmlFor="pilgrim-name" 
                                    className="text-amber-800 font-semibold text-lg"
                                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                                >
                                    ⚜️ Nom du Pèlerin
                                </Label>
                                <div className="relative">
                                    <Input 
                                        type="text" 
                                        id="pilgrim-name" 
                                        value={pilgrimName}
                                        onChange={(e) => setPilgrimName(e.target.value)}
                                        placeholder="Entrez votre nom noble..."
                                        className="h-12 px-4 text-lg font-semibold text-amber-900 bg-white/80 border-2 border-amber-400 rounded-xl focus:outline-none focus:ring-3 focus:ring-amber-400/50 focus:border-amber-500 transition-all duration-300 shadow-inner"
                                        style={{ fontFamily: '"Cormorant Garamond", serif' }}
                                    />
                                    <div className="absolute top-1 right-1 w-2 h-2 bg-amber-500/60 rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full max-w-sm gap-3">
                                <Label 
                                    htmlFor="magic-key" 
                                    className="text-amber-800 font-semibold text-lg"
                                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                                >
                                    🗝️ Clé Magique
                                </Label>
                                <div className="relative">
                                    <Input 
                                        type="password" 
                                        id="magic-key" 
                                        value={magicKey}
                                        onChange={(e) => setMagicKey(e.target.value)}
                                        placeholder="Votre clé secrète..."
                                        className="h-12 px-4 text-lg font-semibold text-amber-900 bg-white/80 border-2 border-amber-400 rounded-xl focus:outline-none focus:ring-3 focus:ring-amber-400/50 focus:border-amber-500 transition-all duration-300 shadow-inner"
                                        style={{ fontFamily: '"Cormorant Garamond", serif' }}
                                    />
                                    <div className="absolute top-1 right-1 w-2 h-2 bg-amber-500/60 rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full max-w-sm gap-3">
                                <div className="h-8 md:block hidden"></div>
                                <Button 
                                    type="submit" 
                                    onClick={handleOpenPassage}
                                    disabled={isLoading || success}
                                    className="h-12 w-full text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:hover:scale-100"
                                    style={{
                                        fontFamily: '"Cormorant Garamond", serif',
                                        background: success 
                                            ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                                            : isLoading 
                                                ? 'linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%)'
                                                : 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)',
                                        borderColor: success ? '#10b981' : '#d97706',
                                        color: 'white'
                                    }}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Ouverture...
                                        </div>
                                    ) : success ? (
                                        <div className="flex items-center gap-2">
                                            ✅ Passage Ouvert!
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            🚪 Ouvrir le Passage
                                        </div>
                                    )}
                                </Button>
                            </div>
                        </div>

                        {/* Error/Success Messages */}
                        {error && (
                            <div className="mt-6 p-4 bg-red-100 border-2 border-red-400 rounded-xl text-center">
                                <p className="text-red-700 font-semibold" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                                    ⚠️ {error}
                                </p>
                            </div>
                        )}

                        {success && (
                            <div className="mt-6 p-4 bg-green-100 border-2 border-green-400 rounded-xl text-center">
                                <p className="text-green-700 font-semibold text-lg" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                                    🎉 Bienvenue, {pilgrimName}! Redirection vers Gondor...
                                </p>
                            </div>
                        )}

                        {/* Form Footer */}
                        <div className="text-center mt-6">
                            <p className="text-amber-600 text-sm italic" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                                Les données sont stockées localement pour cette démonstration
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accueil