import React from 'react'
import { NumberTicker } from '@/components/magicui/number-ticker'

const stats = [
  { number: 20, suffix: '+', label: 'Custom Software\nProjects Delivered' },
  { number: 10, suffix: '+', label: 'Mobile Apps\nLaunched' },
  { number: 3, suffix: '+', label: 'Cloud Migrations\nCompleted' },
  { number: 2, suffix: '+', label: 'Cybersecurity\nIntegrations Completed' },
  { number: 5, suffix: '+', label: 'AI-Powered\nSystems Developed' },
]

const ImpactNumbersPage = () => {
  return (
    <section className="bg-white py-16 px-6 text-center md:px-20">
      <div className="mb-8">
        <p style={{ color: '#021443' }}>Our,</p>
        <h2 className="text-4xl font-bold tracking-widest" style={{ color: '#021443' }}>
          Impact In Numbers
        </h2>
        <div className="mt-4 text-sm" style={{ color: '#021443' }}>
          Behind every number is a story of innovation,<br />
          growth, and meaningful digital transformation.
        </div>
      </div>

      <div className="my-10">
        <div className="flex items-center justify-center">
          <NumberTicker
            value={95}
            startValue={80}
            className="text-8xl font-bold"
            style={{ color: '#021443' }}
          />
          <span className="text-8xl font-bold" style={{ color: '#021443' }}>%</span>
        </div>
        <p className="mt-2 text-lg font-semibold" style={{ color: '#021443' }}>
          Client Satisfaction Rate
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-5 mt-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center">
              <NumberTicker
                value={stat.number}
                startValue={0}
                className="text-4xl font-bold"
                style={{ color: '#021443' }}
              />
              <span className="text-4xl font-bold" style={{ color: '#021443' }}>{stat.suffix}</span>
            </div>
            <p className="mt-2 text-sm whitespace-pre-line" style={{ color: '#021443' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImpactNumbersPage
