import { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'

const Approach = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleTabChange = (index: number) => {
    if (index === activeTab || isTransitioning) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveTab(index)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)
  }

  const tabs = [
    {
      title: 'Como funciona',
      content: {
        headline: 'Um processo de descoberta interior',
        description:
          'A terapia psicodinâmica busca compreender os processos mentais que operam fora da consciência, explorando como experiências passadas moldam nossa forma de sentir, pensar e se relacionar.',
        points: [
          'Exploração do inconsciente através de associações livres',
          'Análise de sonhos e suas simbologias',
          'Compreensão dos padrões relacionais repetitivos',
          'Trabalho com a relação terapeuta-paciente',
        ],
        image: '/approach-1.jpg',
      },
    },
    {
      title: 'Benefícios',
      content: {
        headline: 'Transformações que perduram',
        description:
          'Os benefícios da psicoterapia psicodinâmica vão além do alívio sintomático, promovendo mudanças estruturais na personalidade que resultam em maior bem-estar e qualidade de vida.',
        points: [
          'Maior autoconhecimento e aceitação',
          'Melhora significativa nos relacionamentos',
          'Redução de sintomas de ansiedade e depressão',
          'Capacidade de lidar melhor com conflitos',
        ],
        image: '/approach-2.jpg',
      },
    },
    {
      title: 'Duração',
      content: {
        headline: 'Um processo individualizado',
        description:
          'O tempo de terapia varia de acordo com as necessidades e objetivos de cada pessoa. Alguns buscam tratamento para questões específicas, enquanto outros optam por um trabalho mais profundo.',
        points: [
          'Sessões semanais de 50 minutos',
          'Duração média de 1 a 3 anos para mudanças profundas',
          'Processo contínuo e em ritmo próprio',
          'Reavaliações periódicas dos objetivos',
        ],
        image: '/approach-3.jpg',
      },
    },
  ]

  return (
    <section
      id="abordagem"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#e9edec]/50"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          {/* Section Label */}
          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-800 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="w-12 h-[1px] bg-[#3d524c]" />
            <span className="font-body text-xs text-[#3d524c] uppercase tracking-widest">
              A Abordagem
            </span>
          </div>

          {/* Headline */}
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-[#3d524c] leading-tight transition-all duration-800 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Entenda o processo
            <br />
            <span className="italic text-[#69807a]">terapêutico</span>
          </h2>
        </div>

        {/* Tabs Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-800 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeTab === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={tab.content.image}
                    alt={tab.content.headline}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d524c]/20 to-transparent" />
            </div>

            {/* Image caption */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-xl p-4">
                <p className="font-body text-sm text-[#3d524c]">
                  {tabs[activeTab].content.headline}
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            {/* Tab Navigation */}
            <div
              className={`flex flex-wrap gap-2 mb-10 transition-all duration-800 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`px-6 py-3 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-[#3d524c] text-white'
                      : 'bg-white text-[#666666] hover:bg-[#3d524c]/10'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div
              className={`transition-all duration-800 delay-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div
                className={`transition-all duration-300 ${
                  isTransitioning
                    ? 'opacity-0 translate-y-4'
                    : 'opacity-100 translate-y-0'
                }`}
              >
                <h3 className="font-display text-2xl lg:text-3xl text-[#3d524c] mb-4">
                  {tabs[activeTab].content.headline}
                </h3>
                <p className="font-body text-base text-[#666666] leading-relaxed mb-8">
                  {tabs[activeTab].content.description}
                </p>

                <ul className="space-y-4">
                  {tabs[activeTab].content.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-6 h-6 bg-[#e9edec] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#3d524c] transition-colors duration-300">
                        <ChevronRight className="w-4 h-4 text-[#3d524c] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="font-body text-sm text-[#666666] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional info */}
            <div
              className={`mt-10 p-6 bg-white rounded-xl transition-all duration-800 delay-600 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="font-body text-sm text-[#666666] leading-relaxed">
                <span className="text-[#3d524c] font-medium">
                  Importante:
                </span>{' '}
                O processo terapêutico é único para cada pessoa. A frequência e
                duração das sessões são definidas de acordo com as necessidades
                individuais e objetivos de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach
