import { useMemo, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useLanguage } from '@/i18n/useLanguage'
import { isSupportedLanguage } from '@/i18n/languages'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

type LanguageSelectorProps = {
  className?: string
  triggerClassName?: string
}

export default function LanguageSelector({ className, triggerClassName }: LanguageSelectorProps) {
  const { language, setLanguage, supported } = useLanguage()
  const [isChanging, setIsChanging] = useState(false)
  const { t } = useTranslation('common')

  const options = useMemo(
    () => supported.map((l) => ({ value: l.code, label: l.nativeName })),
    [supported]
  )

  return (
    <div className={cn('min-w-[140px]', className)}>
      <Select
        value={language}
        onValueChange={(value) => {
          if (!isSupportedLanguage(value)) return
          setIsChanging(true)
          void setLanguage(value).finally(() => setIsChanging(false))
        }}
      >
        <SelectTrigger
          className={cn('h-10 rounded-xl border-white/20 bg-white/10 text-white', triggerClassName)}
          aria-label={t('languageSelector.aria')}
        >
          <SelectValue placeholder={t('languageSelector.placeholder')} />
          {isChanging ? <Loader2 className="h-4 w-4 animate-spin opacity-70" /> : null}
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
