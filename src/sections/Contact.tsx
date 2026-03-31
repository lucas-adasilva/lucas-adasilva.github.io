import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Example, 123 - Sala 45',
      subContent: 'São Paulo, SP - 01234-567',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 98765-4321',
      subContent: 'WhatsApp disponível',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@psicologia.com',
      subContent: 'Resposta em 24h',
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: 'Segunda a Sexta: 9h às 20h',
      subContent: 'Sábado: 9h às 13h',
    },
  ]

  return (
    <section
      id="contato"
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
              Contato
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
            Entre em
            <br />
            <span className="italic text-[#69807a]">contato</span>
          </h2>

          <p
            className={`font-body text-base lg:text-lg text-[#666666] leading-relaxed transition-all duration-800 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Estou aqui para ajudar no seu processo de autoconhecimento. Entre
            em contato para agendar uma consulta ou tirar suas dúvidas.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-800 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-[#e9edec] rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-[#3d524c]" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-medium text-[#3d524c] mb-1">
                      {info.title}
                    </h3>
                    <p className="font-body text-sm text-[#666666]">
                      {info.content}
                    </p>
                    <p className="font-body text-xs text-[#666666]/70">
                      {info.subContent}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-800 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-[#e9edec] rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-[#3d524c]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#3d524c] mb-2">
                    Mensagem enviada!
                  </h3>
                  <p className="font-body text-sm text-[#666666]">
                    Entrarei em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('nome')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="peer w-full px-4 py-4 bg-[#f8f7f5] border-2 border-transparent rounded-xl font-body text-sm text-[#3d524c] placeholder-transparent focus:border-[#3d524c] focus:bg-white transition-all duration-300 outline-none"
                        placeholder="Nome"
                      />
                      <label
                        htmlFor="nome"
                        className={`absolute left-4 font-body text-sm transition-all duration-300 pointer-events-none ${
                          focusedField === 'nome' || formData.nome
                            ? '-top-2.5 text-xs text-[#3d524c] bg-white px-2'
                            : 'top-4 text-[#666666]'
                        }`}
                      >
                        Nome
                      </label>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="peer w-full px-4 py-4 bg-[#f8f7f5] border-2 border-transparent rounded-xl font-body text-sm text-[#3d524c] placeholder-transparent focus:border-[#3d524c] focus:bg-white transition-all duration-300 outline-none"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-4 font-body text-sm transition-all duration-300 pointer-events-none ${
                          focusedField === 'email' || formData.email
                            ? '-top-2.5 text-xs text-[#3d524c] bg-white px-2'
                            : 'top-4 text-[#666666]'
                        }`}
                      >
                        Email
                      </label>
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('telefone')}
                      onBlur={() => setFocusedField(null)}
                      className="peer w-full px-4 py-4 bg-[#f8f7f5] border-2 border-transparent rounded-xl font-body text-sm text-[#3d524c] placeholder-transparent focus:border-[#3d524c] focus:bg-white transition-all duration-300 outline-none"
                      placeholder="Telefone"
                    />
                    <label
                      htmlFor="telefone"
                      className={`absolute left-4 font-body text-sm transition-all duration-300 pointer-events-none ${
                        focusedField === 'telefone' || formData.telefone
                          ? '-top-2.5 text-xs text-[#3d524c] bg-white px-2'
                          : 'top-4 text-[#666666]'
                      }`}
                    >
                      Telefone (opcional)
                    </label>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('mensagem')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="peer w-full px-4 py-4 bg-[#f8f7f5] border-2 border-transparent rounded-xl font-body text-sm text-[#3d524c] placeholder-transparent focus:border-[#3d524c] focus:bg-white transition-all duration-300 outline-none resize-none"
                      placeholder="Mensagem"
                    />
                    <label
                      htmlFor="mensagem"
                      className={`absolute left-4 font-body text-sm transition-all duration-300 pointer-events-none ${
                        focusedField === 'mensagem' || formData.mensagem
                          ? '-top-2.5 text-xs text-[#3d524c] bg-white px-2'
                          : 'top-4 text-[#666666]'
                      }`}
                    >
                      Mensagem
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-liquid bg-[#3d524c] text-white px-8 py-4 rounded-xl font-body text-sm font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensagem
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center font-body text-xs text-[#666666]/70">
                    Ao enviar, você concorda com o processamento dos seus dados
                    para fins de contato.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
