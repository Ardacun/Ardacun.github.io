import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { useTranslation } from 'react-i18next';
import { Info } from "lucide-react";

// RPI diploma component
const DiplomaRPI = () => {
    const { t } = useTranslation();
    
    return (
    <Dialog>
      <DialogTrigger asChild>
            <Button variant="outline" size="sm" color="accent" className="text-xs px-2 py-1 h-8"><Info size={16} /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>{t('education.diplomas.rpi.title')}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>{t('education.diplomas.rpi.description')}</p>
          <br/>
          <h3>{t('education.diplomas.rpi.specialities')}</h3>
          <br/>
          <ul>
            <li>- <strong>{t('education.diplomas.rpi.needs_analysis_label')}</strong>: {t('education.diplomas.rpi.needs_analysis')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.rpi.languages_label')}</strong>: {t('education.diplomas.rpi.languages')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.rpi.databases_label')}</strong>: {t('education.diplomas.rpi.databases')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.rpi.infrastructure_label')}</strong>: {t('education.diplomas.rpi.infrastructure')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.rpi.management_label')}</strong>: {t('education.diplomas.rpi.management')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.rpi.it_rights_label')}</strong>: {t('education.diplomas.rpi.it_rights')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.rpi.technical_english_label')}</strong>: {t('education.diplomas.rpi.technical_english')}</li>
          </ul>
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" color="accent">
              {t('close')}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    );
}

export default DiplomaRPI;
