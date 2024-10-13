import data from '../data/Exercises.json'
import type { DataListEnvelope } from './dataEnvelope'

export function getAll(): DataListEnvelope<Exercise> {
  return {
    data: data.items,
    total: data.total
  }
}

interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface Exercise {
  id: number
  name: string
  description: string
  difficulty: string
  images: string[]
  thumbnail: string
}
