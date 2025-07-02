"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { ThreeDCard } from '@/components/reusable/3DProductCard'
import { Produit } from '@/types/models/Produit'

const GondorChic = () => {
    const [client, setClient] = useState<string>('Noble Voyageur')
    const [quantity, setQuantity] = useState(1)
     const [stock, setStock] = useState(8)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [error, setError] = useState<string | null>(null)
    const [produitDuJour, setProduitDuJour] = useState<Produit>({
        id: '',
        reference: '',
        libelle: '',
        estDuJour: false,
        prix: 0,
        quantiteEnStock: 8
    })

    const recupererProduitDuJour = async () => {
        setTimeout(() => {
            setProduitDuJour({
                id: '123',
                reference: '',
                libelle: '',
                estDuJour: false,
                prix: 0,
                quantiteEnStock: 8
            })
        }, 2000)
    }

    const ajouterAuPanier = async (idClient: string, idProduit: string): Promise<Produit> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Données de test pour le produit du jour
                const produitData: Produit = {
                    id: 'prod456',
                    reference: 'POTION-001',
                    libelle: 'Poudre magique de Gandalf',
                    estDuJour: true,
                    prix: 25.99,
                    quantiteEnStock: 15
                }
                resolve(produitData)
            }, 2000)
        })
    }

    useEffect(() => {
        // Get user data from localStorage
        const userData = localStorage.getItem('gondorUser')
        if (userData) {
            try {
                const parsedData = JSON.parse(userData)
                if (parsedData.clientData) {
                    // Utiliser les données complètes du client
                    const clientInfo = parsedData.clientData
                    setClient(`${clientInfo.prenom} ${clientInfo.nom}`)
                } else if (parsedData.name) {
                    // Fallback sur le nom simple
                    setClient(parsedData.name)
                }
            } catch (error) {
                console.error('Error parsing user data:', error)
            }
        }
    }, [])

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value)
        if (!isNaN(value) && value >= 1) {
            setQuantity(value)
        }
    }

const quantityx = 1 // quantité à ajouter

  const handleAddToChaudron = async () => {
    setIsAddingToCart(true)
    setError(null)

  if (quantity > produitDuJour.quantiteEnStock) {
    setIsAddingToCart(false)
    setError("⚠️ Stock insuffisant pour ajouter cette quantité au chaudron.")
    return
  }

  if (quantity <= 0) {
    setIsAddingToCart(false)
    setError("⚠️ La quantité doit être supérieure à 0.")
    return
  }

    try {
      const userData = localStorage.getItem('gondorUser')
      let clientId = 'client123'

      if (userData) {
        const parsedData = JSON.parse(userData)
        if (parsedData.clientData && parsedData.clientData.id) {
          clientId = parsedData.clientData.id
        }
      }

      const produitRetourne = await ajouterAuPanier(clientId, produitDuJour.id)

      // Décrémente le stock localement
      setStock(prev => prev - quantityx)

      console.log(`Added ${quantityx} ${produitRetourne.libelle} to chaudron`)
    } catch (error) {
      console.error('Error adding to cart:', error)
      setError("Une erreur est survenue lors de l'ajout.")
    } finally {
      setIsAddingToCart(false)
    }
  }

    useEffect(() => {
        recupererProduitDuJour()
    }, [])

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

                {/* Welcome Message for Logged In User */}
                <div className='text-center'>
                    <h2 className='text-xl md:text-2xl font-semibold text-amber-800 mb-1' style={{
                        fontFamily: '"Cormorant Garamond", serif'
                    }}>
                        ⭐ Bienvenue, {client} ⭐
                    </h2>
                    <p className='text-sm text-amber-600 italic' style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                        Les étoiles t'attendaient. L'équipage est prêt, la mission commence.
                    </p>
                </div>

                {/* Product Showcase */}
                <div className='w-full flex flex-col items-center gap-0'>
                    {produitDuJour.id && produitDuJour.id !== '' ? (
                        <>
                            <div className='w-full flex justify-center'>
                                <ThreeDCard stock={stock} />
                            </div>

                            <div className='flex flex-col items-center gap-2 -mt-6'>
                                <label className="text-lg font-semibold text-amber-900" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                                    Dose :
                                </label>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={decreaseQuantity}
                                        className="flex items-center justify-center w-10 h-10 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                                        aria-label="Diminuer la quantité"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        min="1"
                                        className="w-16 h-10 text-center text-lg font-semibold text-amber-900 bg-white border-2 border-amber-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                                    />

                                    <button
                                        onClick={increaseQuantity}
                                        className="flex items-center justify-center w-10 h-10 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                                        aria-label="Augmenter la quantité"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Add to Chaudron Button - Outside 3D Card */}
                            <br /> 
                            {error && <p className="mt-2 text-red-600 font-semibold" style={{
                                fontFamily: '"Cormorant Garamond", serif'
                            }}>{error}</p>}
                            <br />
                            <div className='flex justify-center mt-1'>
                                <button
                                    onClick={handleAddToChaudron}
                                    disabled={isAddingToCart}
                                    className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:hover:scale-100"
                                    style={{
                                        fontFamily: '"Cormorant Garamond", serif',
                                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
                                    }}
                                >
                                    {isAddingToCart ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Ajout en cours...
                                        </div>
                                    ) : (
                                        '🔥 Ajouter au chaudron 🔥'
                                    )}
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className='w-full max-w-md mx-auto'>
                            <div className='bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 rounded-2xl p-8 shadow-lg border-2 border-amber-300/40 text-center'>
                                <div className='flex flex-col items-center gap-4'>
                                    {/* Decorative icon */}
                                    <div className='w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center shadow-inner'>
                                        <span className='text-2xl'>🌙</span>
                                    </div>
                                    
                                    {/* Main message */}
                                    <h3 className='text-xl font-semibold text-amber-800 mb-2' style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                                        Aucun Produit du jour
                                    </h3>
                                    
                                    {/* Supporting text */}
                                    <p className='text-amber-600 text-sm italic' style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                                        Les astres ne révèlent aucune potion aujourd'hui...
                                    </p>
                                    
                                    {/* Decorative elements */}
                                    <div className='flex items-center gap-2 mt-2'>
                                        <div className='w-6 h-px bg-amber-300'></div>
                                        <span className='text-amber-500 text-sm'>✨</span>
                                        <div className='w-6 h-px bg-amber-300'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </div>
    )
}

export default GondorChic 