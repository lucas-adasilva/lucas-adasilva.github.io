import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY
        const parallaxValue = scrollY * 0.15
        imageRef.current.style.transform = `translateY(${parallaxValue}px) scale(1.1)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Green Canvas Background */}
      <div
        className={`absolute top-0 left-0 h-full bg-[#3d524c] transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded ? 'w-1/2' : 'w-full'
        }`}
      />

      {/* Hero Image */}
      <div
        className={`absolute top-0 right-0 h-full overflow-hidden transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded ? 'w-1/2 opacity-100' : 'w-0 opacity-0'
        }`}
      >
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-full scale-110"
          style={{ willChange: 'transform' }}
        >
          <img
            src="/hero-image.jpg"
            alt="Ambiente terapêutico acolhedor"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d524c]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-2xl">
            {/* Headline */}
            <h1
              className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6 transition-all duration-1000 delay-500 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              Espaço de
              <br />
              <span className="italic">acolhimento</span>
              <br />
              e transformação
            </h1>

            {/* Paragraph */}
            <p
              className={`font-body text-base lg:text-lg text-white/90 max-w-md mb-6 leading-relaxed transition-all duration-800 delay-700 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              A psicoterapia psicodinâmica oferece um caminho para compreender
              suas emoções, padrões e relacionamentos, promovendo mudanças
              profundas e duradouras.
            </p>

            {/* Professional badge */}
            <div
              className={`flex items-center gap-3 mb-10 transition-all duration-800 delay-800 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                <img
                  src="/psicologo.jpg"
                  alt="Psicólogo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-body text-sm text-white font-medium">
                  Atendimento personalizado
                </p>
                <p className="font-body text-xs text-white/60">
                  CRP 00/00000
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contato"
              onClick={scrollToContact}
              className={`inline-flex items-center gap-3 btn-liquid bg-white text-[#3d524c] px-8 py-4 rounded-full font-body text-sm font-medium hover:shadow-xl transition-all duration-600 delay-900 ${
                isLoaded
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-90'
              }`}
            >
              Agende uma consulta
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className={`absolute bottom-12 left-6 lg:left-12 xl:left-20 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-white/40" />
          <span className="font-body text-xs text-white/60 uppercase tracking-widest">
            Psicoterapia Psicodinâmica
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-12 right-1/2 translate-x-1/2 lg:right-12 lg:translate-x-0 transition-all duration-1000 delay-1200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-xs text-white/60 uppercase tracking-widest hidden lg:block">
            Role para explorar
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero
