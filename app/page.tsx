import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="124"
          name="Orion the Star Navigator"
          topic="Linear Equations and Functions"
          subject="Math"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="125"
          name="Alex the Literary Explorer"
          topic="Major English Literary Movements"
          subject="English Literature"
          duration={30}
          color="#BDE7FF"
        />
      </section>

      <section className='home-section'>
        <CompanionsList
          title="Recently completed sesions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page