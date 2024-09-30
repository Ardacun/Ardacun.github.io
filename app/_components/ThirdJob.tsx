import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { useTranslation } from 'react-i18next';
import { Info } from "lucide-react";

// Third job component
const ThirdJob = () => {
    const { t } = useTranslation();
    
    return (
    <Dialog>
      <DialogTrigger asChild>
            <Button variant="outline" size="sm" color="accent" className="text-xs px-2 py-1 h-8"><Info size={16} /></Button>
      </DialogTrigger>
      <DialogContent className="fixed sm:max-w-[750px] w-full max-h-[70vh] h-auto sm:h-auto sm:rounded-lg flex flex-col">
        <DialogHeader className="p-4 border-b sm:p-6">
          <DialogTitle>{t('jobs.third_job.title')}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex-1 overflow-y-auto p-4 sm:p-6">
          <p>{t('jobs.third_job.project')}</p>
          <br />
          <strong>{t('jobs.third_job.project_label')}</strong>: {t('jobs.third_job.project')}
          <br /><br />
          <strong>{t('jobs.third_job.role_label')}</strong>: {t('jobs.third_job.role')}
          <br /><br />
          <strong>{t('jobs.third_job.realisations_label')}</strong>:
          <ul>
            <li>{t('jobs.third_job.realisations.1')}</li>
            <li>{t('jobs.third_job.realisations.2')}</li>
          </ul>
          <br />
          <strong>{t('jobs.third_job.environment_label')}</strong>:
          <ul>
            <li>{t('jobs.third_job.environment.1')}</li>
            <li>{t('jobs.third_job.environment.2')}</li>
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

export default ThirdJob;
