import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { useTranslation } from 'react-i18next';
import { Info } from "lucide-react";

// STI2D diploma component
const DiplomaSTI2D = () => {
    const { t } = useTranslation('translation');
    
    return (
    <Dialog>
      <DialogTrigger asChild>
            <Button variant="outline" size="sm" color="accent" className="text-xs px-2 py-1 h-8"><Info size={16} /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>{t('education.diplomas.sti2d.title')}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>{t('education.diplomas.sti2d.description')}</p>
          <br />
          <h3>{t('education.diplomas.sti2d.specialties')}</h3>
          <br />
          <ul>
            <li>- <strong>{t('education.diplomas.sti2d.itec_label')}</strong>: {t('education.diplomas.sti2d.itec')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.sti2d.sin_label')}</strong>: {t('education.diplomas.sti2d.sin')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.sti2d.ee_label')}</strong>: {t('education.diplomas.sti2d.ee')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.sti2d.ac_label')}</strong>: {t('education.diplomas.sti2d.ac')}</li>
          </ul>
          <h3>{t('education.diplomas.sti2d.common_subjects')}</h3>
          <ul>
            <li>- {t('education.diplomas.sti2d.mathematics')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.sti2d.physics_label')}</strong>: {t('education.diplomas.sti2d.physics')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.sti2d.engineering_label')}</strong>: {t('education.diplomas.sti2d.engineering')}</li>
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

export default DiplomaSTI2D;
