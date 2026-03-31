import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)

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

  // Auto-rotation
  useEffect(() => {
    if (isVisible) {
      autoPlayRef.current = setInterval(() => {
        goToNext()
      }, 6000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isVisible, activeIndex])

  const testimonials = [
    {
      quote:
        'A terapia transformou minha relação comigo mesma. Aprendi a reconhecer padrões que se repetiam na minha vida e, pela primeira vez, me sinto no controle das minhas escolhas. O espaço terapêutico foi fundamental para esse processo de autodescoberta.',
      author: 'Maria S.',
      role: 'Paciente há 2 anos',
    },
    {
      quote:
        'Encontrei um espaço seguro para explorar questões que carregava há muito tempo. A abordagem psicodinâmica me ajudou a conectar eventos do passado com minhas dificuldades atuais, trazendo uma compreensão profunda sobre mim mesmo.',
      author: 'João P.',
      role: 'Paciente há 1 ano',
    },
    {
      quote:
        'A abordagem psicodinâmica me ajudou a entender a raiz dos meus problemas, não apenas tratar os sintomas. A terapia me deu ferramentas para lidar melhor com a ansiedade e melhorou significativamente minhas relações pessoais.',
      author: 'Ana L.',
      role: 'Paciente há 3 anos',
    },
    {
      quote:
        'Iniciei a terapia em um momento de crise e, hoje, vejo como aquele foi o primeiro passo para uma transformação profunda. O trabalho psicodinâmico me permitiu reconstruir minha autoestima e encontrar um sentido mais claro para minha vida.',
      author: 'Carlos R.',
      role: 'Paciente há 1 ano e meio',
    },
  ]

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return
    setIsAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#3d524c] overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative w-full px-6 lg:px-12 xl:px-20">
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
            <div className="w-12 h-[1px] bg-white/40" />
            <span className="font-body text-xs text-white/60 uppercase tracking-widest">
              Depoimentos
            </span>
          </div>

          {/* Headline */}
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight transition-all duration-800 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            O que dizem os
            <br />
            <span className="italic text-white/80">pacientes</span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div
          className={`relative transition-all duration-800 delay-300 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Quote Icon */}
          <div className="absolute -top-4 left-0 lg:left-8">
            <Quote className="w-16 h-16 lg:w-24 lg:h-24 text-white/10" />
          </div>

          {/* Testimonial Content */}
          <div className="relative min-h-[300px] lg:min-h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : index < activeIndex
                    ? 'opacity-0 -translate-x-12'
                    : 'opacity-0 translate-x-12'
                }`}
              >
                <blockquote className="max-w-4xl">
                  <p className="font-display text-xl lg:text-2xl xl:text-3xl text-white leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="font-display text-lg text-white">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <cite className="font-body text-sm text-white not-italic font-medium">
                        {testimonial.author}
                      </cite>
                      <p className="font-body text-xs text-white/60">
                        {testimonial.role}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-white'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={goToPrev}
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
