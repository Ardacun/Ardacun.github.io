import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { useTranslation } from 'react-i18next';
import { Info } from "lucide-react";

// ESI diploma component
const DiplomaESI = () => {
    const { t } = useTranslation();
    
    return (
    <Dialog>
      <DialogTrigger asChild>
            <Button variant="outline" size="sm" color="accent" className="text-xs px-2 py-1 h-8"><Info size={16} /></Button>
      </DialogTrigger>
      <DialogContent className="fixed sm:max-w-[650px] w-full max-h-[70vh] h-auto sm:h-auto sm:rounded-lg flex flex-col">
        <DialogHeader className="p-4 border-b sm:p-6">
          <DialogTitle>{t('education.diplomas.esi.title')}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex-1 overflow-y-auto p-4 sm:p-6">
          <p>{t('education.diplomas.esi.description')}</p>
          <br />
          <h3>{t('education.diplomas.esi.specialties')}</h3>
          <br />
          <ul>
            <li>- <strong>{t('education.diplomas.esi.architecture_label')}</strong>: {t('education.diplomas.esi.architecture')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.esi.databases_label')}</strong>: {t('education.diplomas.esi.databases')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.esi.cybersecurity_label')}</strong>: {t('education.diplomas.esi.cybersecurity')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.esi.data_management_label')}</strong>: {t('education.diplomas.esi.data_management')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.esi.development_label')}</strong>: {t('education.diplomas.esi.development')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.esi.project_management_label')}</strong>: {t('education.diplomas.esi.project_management')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.esi.degital_transformation_label')}</strong>: {t('education.diplomas.esi.degital_transformation')}</li>
            <br />
            <li>- <strong>{t('education.diplomas.esi.audit_label')}</strong>: {t('education.diplomas.esi.audit')}</li>
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

export default DiplomaESI;
