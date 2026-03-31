import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full bg-[#2f3f3a] text-white">
      {/* Main Footer */}
      <div className="w-full px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, '#inicio')}
              className="inline-block font-display text-2xl font-semibold mb-6"
            >
              Psicologia
            </a>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-md mb-8">
              Psicoterapia psicodinâmica dedicada ao acolhimento, autoconhecimento
              e transformação interior. Um espaço seguro para sua jornada de
              desenvolvimento pessoal.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@psicologia.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-body text-sm font-medium uppercase tracking-wider mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre' },
                { href: '#servicos', label: 'Serviços' },
                { href: '#abordagem', label: 'Abordagem' },
                { href: '#depoimentos', label: 'Depoimentos' },
                { href: '#contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-body text-sm font-medium uppercase tracking-wider mb-6">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white/70">
                  Rua Example, 123 - Sala 45
                  <br />
                  São Paulo, SP
                </span>
              </li>
              <li>
                <a
                  href="tel:+5511987654321"
                  className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  (11) 98765-4321
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@psicologia.com"
                  className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  contato@psicologia.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 lg:px-12 xl:px-20 py-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/50 text-center md:text-left">
            {currentYear} Psicologia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-xs text-white/50 hover:text-white transition-colors duration-300"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="font-body text-xs text-white/50 hover:text-white transition-colors duration-300"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
