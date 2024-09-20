import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { useTranslation } from 'react-i18next';
import { Info } from "lucide-react";

// Second job component
const SecondJob = () => {
    const { t } = useTranslation();
    
    return (
    <Dialog>
      <DialogTrigger asChild>
            <Button variant="outline" size="sm" color="accent" className="text-xs px-2 py-1 h-8"><Info size={16} /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>{t('jobs.second_job.title')}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>{t('jobs.second_job.project')}</p>
          <br/>
          <strong>{t('jobs.second_job.project_label')}</strong>: {t('jobs.second_job.project')}
          <br/> <br />
          <strong>{t('jobs.second_job.role_label')}</strong>: {t('jobs.second_job.role')}
          <br/> <br />
          <strong>{t('jobs.second_job.realisations_label')}</strong>:
          <ul>
            <li>{t('jobs.second_job.realisations.1')}</li>
            <li>{t('jobs.second_job.realisations.2')}</li>
            <li>{t('jobs.second_job.realisations.3')}</li>
          </ul>
          <br />
          <strong>{t('jobs.second_job.environment_label')}</strong>:
          <ul>
            <li>{t('jobs.second_job.environment.1')}</li>
            <li>{t('jobs.second_job.environment.2')}</li>
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

export default SecondJob;
