'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Product } from '@/types/product'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import ProductAction from './product-action'
import { memo } from 'react'
import Link from 'next/link'


const ProductCardComponent = ({ product }: { product: Product }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow flex flex-col">
      <Link href={`/product/${product.id}`} className="relative h-48 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <CardHeader>
        <CardTitle className="text-lg "> <Link href={`/product/${product.id}`}>{product.title}</Link></CardTitle>
        <CardDescription>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="pb-0">Описание:</AccordionTrigger>
              <AccordionContent>
                {product.description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardDescription>
      </CardHeader>
      <CardContent className=" mt-auto">
        Price : <span className="text-lg font-bold">{product.price}$</span>
      </CardContent>
      <CardFooter>
        <ProductAction product={product}/>
      </CardFooter>
    </Card>
  )
}

export const ProductCard = memo(ProductCardComponent)