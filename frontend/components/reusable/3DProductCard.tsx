"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Produit } from "@/types/models/Produit";

type ThreeDCardProps = {
  product: Produit;
};

export function ThreeDCard({ product }: ThreeDCardProps) {
  const dailyProduct = product;

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-amber-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl text-center w-full font-bold text-neutral-600 dark:text-white"
        >
          Produit du jour
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col gap-2">
          <CardItem

            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xl font-normal dark:text-white"
          >
            { dailyProduct.libelle }
          </CardItem>
          <CardItem

            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            { dailyProduct.prix } Gondoariar
          </CardItem>
          <CardItem

            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            { dailyProduct.quantiteEnStock } en stock
          </CardItem>
        </div>


      </CardBody>
    </CardContainer>
  );
}
