import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { useTranslation } from 'react-i18next';
import { Info } from "lucide-react";

// First job component
const FirstJob = () => {
    const { t } = useTranslation();
    
    return (
    <Dialog>
      <DialogTrigger asChild>
            <Button variant="outline" size="sm" color="accent" className="text-xs px-2 py-1 h-8"><Info size={16} /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>{t('jobs.first_job.title')}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>{t('jobs.first_job.project')}</p>
          <br/>
          <strong>{t('jobs.first_job.project_label')}</strong>: {t('jobs.first_job.project')}
          <br/> <br />
          <strong>{t('jobs.first_job.role_label')}</strong>: {t('jobs.first_job.role')}
          <br/> <br />
          <strong>{t('jobs.first_job.realisations_label')}</strong>:
          <ul>
            <li>{t('jobs.first_job.realisations.1')}</li>
            <li>{t('jobs.first_job.realisations.2')}</li>
          </ul>
          <br />
          <strong>{t('jobs.first_job.environment_label')}</strong>:
          <ul>
            <li>{t('jobs.first_job.environment.1')}</li>
            <li>{t('jobs.first_job.environment.2')}</li>
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

export default FirstJob;
