"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

// ThreeDCard.tsx

interface ThreeDCardProps {
  stock: number;
}

export function ThreeDCard({ stock }: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-br from-orange-200 via-amber-200 to-yellow-300 relative group/card hover:shadow-2xl hover:shadow-amber-500/[0.3] border-amber-400/[0.3] w-auto sm:w-[30rem] h-auto rounded-2xl p-6 border-2 shadow-lg">
        <CardItem
          translateZ="50"
          className="text-2xl text-center w-full font-bold text-amber-900 font-serif"
          style={{
            textShadow: '1px 1px 2px rgba(139, 69, 19, 0.3)'
          }}
        >
          🌟 Produit du jour 🌟
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-6 flex justify-center">
          <div className="w-48 h-48 flex items-center justify-center">
            <Image
              src="/logo.webp"
              alt="Poudre magique"
              width={200}
              height={200}
              className="rounded-xl shadow-lg border-2 border-amber-400/30 object-cover"
            />
          </div>
        </CardItem>
        
        <div className="flex flex-col gap-3 mt-4">
          <CardItem
            translateZ="20"
            className="px-4 py-2 rounded-xl text-2xl font-bold text-amber-900 text-center font-serif"
            style={{
              textShadow: '1px 1px 2px rgba(139, 69, 19, 0.3)'
            }}
          >
            ⚗️ Poudre magique ⚗️
          </CardItem>
          
          <CardItem
            translateZ="20"
            className="px-4 py-2 rounded-xl text-lg font-semibold text-amber-800 text-center font-serif"
          >
            💰 200,00 Gendarior 💰
          </CardItem>

          <CardItem
            translateZ="20"
            className="px-4 py-2 rounded-xl text-md font-medium text-amber-700 text-center font-serif"
          >
            📚 Ref : <strong>P001</strong> 📚
          </CardItem>
          
          <CardItem
            translateZ="20"
            className="px-4 py-2 rounded-xl text-md font-medium text-amber-700 text-center font-serif"
          >
            📦 {stock} en stock 📦
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
