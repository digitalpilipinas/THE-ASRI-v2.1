import React, { useState } from 'react'
import { Phone, Mail, Clock, Facebook, Instagram, Youtube, Send } from 'lucide-react'
import NeumorphicButton from '@/components/NeumorphicButton'
import NeumorphicCard from '@/components/NeumorphicCard'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { resortImages, contactInfo } from '@/data/mockData'
import { useTranslation } from 'react-i18next'
import { useNamespace } from '@/i18n/useNamespace'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  consent: boolean
}

const ContactPage: React.FC = () => {
  useNamespace('contact')
  const { t } = useTranslation('contact')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    consent: false
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      alert(t('form.successAlert'))
      setFormData({ name: '', email: '', phone: '', subject: 'general', message: '', consent: false })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${resortImages.hero.contact})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D7070]/70 to-[#0D7070]/80"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white mb-4">{t('hero.title')}</h1>
          <p className="font-lato text-lg text-white/90 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <NeumorphicCard>
                <h2 className="font-playfair font-bold text-2xl text-[#1A2332] mb-6">{t('form.title')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="font-lato text-[#1A2332] mb-2 block">{t('form.fields.name.label')}</Label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full" placeholder={t('form.fields.name.placeholder')} />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-lato text-[#1A2332] mb-2 block">{t('form.fields.email.label')}</Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full" placeholder={t('form.fields.email.placeholder')} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="font-lato text-[#1A2332] mb-2 block">{t('form.fields.phone.label')}</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full" placeholder={t('form.fields.phone.placeholder')} />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="font-lato text-[#1A2332] mb-2 block">{t('form.fields.subject.label')}</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-[#D4A373]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7070]"
                      >
                        <option value="general">{t('form.fields.subject.options.general')}</option>
                        <option value="booking">{t('form.fields.subject.options.booking')}</option>
                        <option value="diving">{t('form.fields.subject.options.diving')}</option>
                        <option value="courses">{t('form.fields.subject.options.courses')}</option>
                        <option value="group">{t('form.fields.subject.options.group')}</option>
                        <option value="other">{t('form.fields.subject.options.other')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-lato text-[#1A2332] mb-2 block">{t('form.fields.message.label')}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[150px]"
                      placeholder={t('form.fields.message.placeholder')}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="consent" name="consent" required checked={formData.consent} onChange={handleChange} className="mt-1" />
                    <Label htmlFor="consent" className="font-lato text-sm text-[#718096] cursor-pointer">
                      {t('form.fields.consent.label')}
                    </Label>
                  </div>

                  <NeumorphicButton type="submit" variant="coral" size="lg" disabled={isSubmitting} className="w-full">
                    <Send className="w-5 h-5" />
                    {isSubmitting ? t('form.submit.sending') : t('form.submit.default')}
                  </NeumorphicButton>
                </form>
              </NeumorphicCard>
            </div>

            <div className="space-y-6">
              <NeumorphicCard>
                <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-6">{t('quickContact.title')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0D7070] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-lato font-semibold text-[#1A2332] mb-1">{t('quickContact.phone.label')}</p>
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="font-lato text-sm text-[#0D7070] hover:underline">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#25D366] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-lato font-semibold text-[#1A2332] mb-2">{t('quickContact.whatsapp.label')}</p>
                      <WhatsAppButton position="inline" />
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF6B6B] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-lato font-semibold text-[#1A2332] mb-1">{t('quickContact.email.label')}</p>
                      <a href={`mailto:${contactInfo.email}`} className="font-lato text-sm text-[#0D7070] hover:underline">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#D4A373] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-lato font-semibold text-[#1A2332] mb-1">{t('quickContact.officeHours.label')}</p>
                      <p className="font-lato text-sm text-[#718096]">
                        {t('quickContact.officeHours.value')}<br />{t('quickContact.officeHours.frequency')}
                      </p>
                    </div>
                  </div>
                </div>
              </NeumorphicCard>

              <NeumorphicCard>
                <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-4">{t('followUs.title')}</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com/theasri" target="_blank" rel="noopener noreferrer" className="bg-[#0D7070] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#0a5555] transition-colors">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://instagram.com/theasri" target="_blank" rel="noopener noreferrer" className="bg-[#FF6B6B] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#ee5050] transition-colors">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://youtube.com/theasri" target="_blank" rel="noopener noreferrer" className="bg-[#D4A373] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#c49363] transition-colors">
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                </div>
              </NeumorphicCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#1A2332] mb-4">{t('gettingThere.title')}</h2>
            <p className="font-lato text-lg text-[#4A5568]">
              {t('gettingThere.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <NeumorphicCard className="h-[450px] overflow-hidden p-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.15676190137!2d120.87302777588731!3d13.708953786678416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdaba9c1984199%3A0xc355ebfa78da3e13!2sThe%20Asri%20Dive%20and%20Leisure%20Resort!5e0!3m2!1sen!2sph!4v1768332237496!5m2!1sen!2sph"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={t('gettingThere.mapTitle')}
              />
            </NeumorphicCard>

            <NeumorphicCard>
              <h3 className="font-playfair font-bold text-xl text-[#1A2332] mb-6">{t('gettingThere.cardTitle')}</h3>
              <p className="font-lato text-[#4A5568] mb-6">
                {t('gettingThere.cardIntro')}
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-lato font-bold text-[#0D7070] mb-2">{t('gettingThere.fromManila.title')}</h4>
                  <ol className="font-lato text-sm text-[#718096] space-y-2 list-decimal list-inside">
                    <li>{t('gettingThere.fromManila.steps.0')}</li>
                    <li>{t('gettingThere.fromManila.steps.1')}</li>
                    <li>{t('gettingThere.fromManila.steps.2')}</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-lato font-bold text-[#0D7070] mb-2">{t('gettingThere.privateTransfer.title')}</h4>
                  <p className="font-lato text-sm text-[#718096] mb-2">
                    {t('gettingThere.privateTransfer.description')}
                  </p>
                  <p className="font-lato text-sm font-bold text-[#FF6B6B]">
                    {t('gettingThere.privateTransfer.cta')}
                  </p>
                </div>

                <div className="bg-[#7C9885]/10 rounded-xl p-4">
                  <p className="font-lato text-sm text-[#4A5568]">
                    <strong>{t('gettingThere.proTip.label')}</strong> {t('gettingThere.proTip.text')}
                  </p>
                </div>
              </div>
            </NeumorphicCard>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
