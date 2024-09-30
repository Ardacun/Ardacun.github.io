import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { useTranslation } from 'react-i18next';
import { Info } from "lucide-react";

// SNIR diploma component
const DiplomaSNIR = () => {
    const { t } = useTranslation();
    
    return (
    <Dialog>
      <DialogTrigger asChild>
            <Button variant="outline" size="sm" color="accent" className="text-xs px-2 py-1 h-8"><Info size={16} /></Button>
      </DialogTrigger>
      <DialogContent className="fixed sm:max-w-[650px] w-full max-h-[70vh] h-auto sm:h-auto sm:rounded-lg flex flex-col">
        <DialogHeader className="p-4 border-b sm:p-6">
          <DialogTitle>{t('education.diplomas.snir.title')}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex-1 overflow-y-auto p-4 sm:p-6">
          <p>{t('education.diplomas.snir.description')}</p>
          <br/>
          <h3>{t('education.diplomas.snir.subjects')}</h3>
          <br/>
          <ul>
            <li>- <strong>{t('education.diplomas.snir.it_re_label')}</strong>: {t('education.diplomas.snir.it_re')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.snir.archi_label')}</strong>: {t('education.diplomas.snir.archi')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.snir.languages_label')}</strong>: {t('education.diplomas.snir.languages')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.snir.maths_label')}</strong>: {t('education.diplomas.snir.maths')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.snir.physics_label')}</strong>: {t('education.diplomas.snir.physics')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.snir.project_management_label')}</strong>: {t('education.diplomas.snir.project_management')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.snir.culture_label')}</strong>: {t('education.diplomas.snir.culture')}</li>
          </ul>
        </DialogDescription>
        <DialogFooter className="p-4 border-t sm:p-6">
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

export default DiplomaSNIR;
