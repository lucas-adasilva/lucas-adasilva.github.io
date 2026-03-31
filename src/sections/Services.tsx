import { useEffect, useRef, useState } from 'react'
import { User, Users2, Briefcase, ArrowUpRight } from 'lucide-react'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState<number | null>(null)
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

  const services = [
    {
      icon: User,
      title: 'Psicoterapia Individual',
      description:
        'Atendimento personalizado para adultos que buscam compreender-se melhor, trabalhar questões emocionais, desenvolver autoconhecimento e promover mudanças significativas em suas vidas.',
      features: [
        'Sessões semanais de 50 minutos',
        'Abordagem psicodinâmica',
        'Atendimento presencial e online',
        'Trabalho com ansiedade, depressão, questões relacionais',
      ],
      color: '#3d524c',
    },
    {
      icon: Users2,
      title: 'Psicoterapia de Casal',
      description:
        'Espaço seguro para trabalhar questões conjugais, melhorar a comunicação, compreender dinâmicas relacionais e fortalecer os laços afetivos entre os parceiros.',
      features: [
        'Sessões semanais de 60 minutos',
        'Foco na dinâmica do relacionamento',
        'Mediação de conflitos',
        'Desenvolvimento de empatia mútua',
      ],
      color: '#69807a',
    },
    {
      icon: Briefcase,
      title: 'Orientação Profissional',
      description:
        'Apoio na tomada de decisões sobre carreira, transições profissionais, desenvolvimento de habilidades e alinhamento entre propósito pessoal e trajetória profissional.',
      features: [
        'Avaliação de perfil profissional',
        'Exploração de possibilidades',
        'Planejamento de carreira',
        'Desenvolvimento de competências',
      ],
      color: '#2f3f3a',
    },
  ]

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#f8f7f5]"
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
              Serviços
            </span>
          </div>

          {/* Headline */}
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-[#3d524c] leading-tight mb-6 transition-all duration-800 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Como posso
            <br />
            <span className="italic text-[#69807a]">ajudar você</span>
          </h2>

          <p
            className={`font-body text-base lg:text-lg text-[#666666] leading-relaxed transition-all duration-800 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Ofereço diferentes modalidades de atendimento para atender às suas
            necessidades específicas, sempre com base na abordagem
            psicodinâmica.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card group relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-600 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Card Header */}
              <div className="p-8 pb-0">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon
                    className="w-7 h-7 transition-colors duration-300"
                    style={{ color: service.color }}
                  />
                </div>
                <h3 className="font-display text-2xl font-medium text-[#3d524c] mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-[#666666] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  activeService === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 pt-6">
                  <div className="w-full h-[1px] bg-[#e9edec] mb-6" />
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 font-body text-sm text-[#666666]"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: service.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-8 pt-0">
                <div
                  className={`inline-flex items-center gap-2 font-body text-sm font-medium transition-all duration-300 ${
                    activeService === index
                      ? 'text-[#3d524c]'
                      : 'text-[#666666]'
                  }`}
                >
                  Saiba mais
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeService === index
                        ? 'translate-x-1 -translate-y-1'
                        : ''
                    }`}
                  />
                </div>
              </div>

              {/* Hover border effect */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 transition-colors duration-300 pointer-events-none ${
                  activeService === index
                    ? 'border-[#3d524c]/20'
                    : 'border-transparent'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-800 delay-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-body text-sm text-[#666666] mb-4">
            Não tem certeza de qual serviço precisa?
          </p>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-[#3d524c] hover:underline"
          >
            Entre em contato para uma conversa
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
