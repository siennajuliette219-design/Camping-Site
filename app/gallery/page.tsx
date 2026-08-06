"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const galleryImages = [
  { src: "/images/tanay-windmills-camp.png", alt: "Hilltop campsite beside the wind turbines at Tanay Windmills Viewpoint", category: "Tanay" },
  { src: "/images/about-filipino-campfire.png", alt: "Campers around a firepit at dusk", category: "Camp Life" },
  { src: "/images/filipino-family-camp.png", alt: "Family and barkada group camping on the grounds", category: "Groups" },
  { src: "/images/amadeo-coffee-camp.png", alt: "Coffee-farm campsite in the Amadeo hills", category: "Amadeo" },
  { src: "/images/amadeo-firepit-night.png", alt: "Firepit night at the Amadeo coffee-farm camp", category: "Amadeo" },
  { src: "/images/amadeo-coffee-morning.png", alt: "Misty morning barako coffee at the Amadeo camp", category: "Amadeo" },
  { src: "/images/campfire.jpg", alt: "Bonfire night under the mango trees", category: "Camp Life" },
  { src: "/images/dining.jpg", alt: "Camp dining and coffee", category: "Cafe" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Gallery</h1>
          <p className="text-primary-foreground/80 text-lg">
            Campgrounds, firepit nights, group trips, cafe moments, and nature views from the Windmills experience.
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <figure key={image.alt} className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="mt-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{image.category}</p>
                <p className="font-medium">{image.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
