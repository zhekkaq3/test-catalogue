// components/filters.tsx
'use client'

import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'

type FiltersProps = {
  categories: string[]
  search: string
  setSearch: (value: string) => void
  category: string
  setCategory: (value: string) => void
  priceRange: [number, number]
  setPriceRange: (value: [number, number]) => void
  sort: string
  setSort: (value: string) => void
  maxPrice: number
}

export function Filters({
  categories,
  search,
  setSearch,
  category,
  setCategory,
  priceRange,
  setPriceRange,
  sort,
  setSort,
  maxPrice
}: FiltersProps) {
  return (
    <div className="py-4 mb-4 border-b">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <Label>Поиск</Label>
          <Input
            placeholder="Название товара..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Категория</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className='min-w-[160px] cursor-pointer'>
              <SelectValue placeholder="Все категории" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все категории</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Сортировка</Label>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger  className='min-w-[160px] cursor-pointer'>
              <SelectValue placeholder="По умолчанию" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">По умолчанию</SelectItem>
              <SelectItem value="price_asc">Цена по возрастанию</SelectItem>
              <SelectItem value="price_desc">Цена по убыванию</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Диапазон цен</Label>
          <Slider
            min={0}
            max={maxPrice}
            step={10}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            className='cursor-pointer'
          />
          <div className="flex justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}