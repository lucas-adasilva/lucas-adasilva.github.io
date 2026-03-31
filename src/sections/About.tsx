import { useEffect, useRef, useState } from 'react'
import { Heart, Users, Brain, Sparkles, Award, GraduationCap } from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = -rect.top / (rect.height - window.innerHeight)
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress))
        const scaleValue = 1 + clampedProgress * 0.1
        imageRef.current.style.transform = `scale(${scaleValue})`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const benefits = [
    {
      icon: Brain,
      title: 'Autoconhecimento profundo',
      description: 'Explore seus padrões mentais e emocionais',
    },
    {
      icon: Users,
      title: 'Compreensão de padrões',
      description: 'Entenda como experiências passadas influenciam o presente',
    },
    {
      icon: Heart,
      title: 'Melhora nos relacionamentos',
      description: 'Desenvolva conexões mais saudáveis e significativas',
    },
    {
      icon: Sparkles,
      title: 'Mudanças duradouras',
      description: 'Transformações profundas que perduram ao longo do tempo',
    },
  ]

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#f8f7f5]"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="sticky top-32">
              <div className="relative overflow-hidden rounded-2xl">
                <div
                  ref={imageRef}
                  className="aspect-square w-full transition-transform duration-100"
                  style={{ willChange: 'transform' }}
                >
                  <img
                    src="/psicologo.jpg"
                    alt="Psicólogo - Profissional de psicologia"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d524c]/20 to-transparent" />
              </div>

              {/* Floating badges */}
              <div
                className={`absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-xl p-6 shadow-xl transition-all duration-800 delay-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#e9edec] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#3d524c]" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-[#3d524c]">
                      10+
                    </p>
                    <p className="font-body text-sm text-[#666666]">
                      Anos de experiência
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`absolute -top-4 -left-4 lg:-left-8 bg-[#3d524c] rounded-xl p-4 shadow-xl transition-all duration-800 delay-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-8'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-white/70">
                      Formação
                    </p>
                    <p className="font-body text-sm text-white font-medium">
                      CRP 00/00000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:pt-12">
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
                Sobre Mim
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
              Psicólogo com abordagem
              <br />
              <span className="italic text-[#69807a]">psicodinâmica</span>
            </h2>

            {/* Personal Introduction */}
            <div
              className={`p-6 bg-[#e9edec]/50 rounded-xl mb-8 transition-all duration-800 delay-250 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="font-body text-base text-[#3d524c] leading-relaxed italic">
                "Acredito que cada pessoa carrega dentro de si a capacidade de transformação. 
                Meu trabalho é oferecer um espaço seguro e acolhedor onde você possa explorar 
                seu mundo interior e descobrir novos caminhos para uma vida mais plena."
              </p>
            </div>

            {/* Description */}
            <div
              className={`space-y-6 mb-12 transition-all duration-800 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="font-body text-base lg:text-lg text-[#666666] leading-relaxed">
                Sou psicólogo formado com especialização em psicoterapia psicodinâmica, 
                uma abordagem que explora os processos mentais inconscientes, buscando 
                compreender como experiências passadas influenciam nosso presente. 
                Baseada nas teorias de Freud e desenvolvida por diversos pensadores 
                ao longo do século XX, esta abordagem oferece um caminho profundo para 
                o autoconhecimento.
              </p>
              <p className="font-body text-base lg:text-lg text-[#666666] leading-relaxed">
                O trabalho terapêutico envolve a análise de padrões relacionais, sonhos, 
                associações livres e a relação terapeuta-paciente, criando um espaço 
                seguro para a exploração do interno e promovendo mudanças significativas 
                e duradouras.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`group p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-[#e9edec] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#3d524c] transition-colors duration-300">
                    <benefit.icon className="w-5 h-5 text-[#3d524c] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-[#3d524c] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-sm text-[#666666]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
