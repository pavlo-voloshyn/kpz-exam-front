import { Interviewer } from './interviewer';
import { Candidate } from './candidate';

export interface Interview {
    id?: number,
    startDate?: string,
    endDate?: string,
    candidat?: Candidate,
    interviewer?: Interviewer,
    candidatId?: number,
    interviewerId?: number
}
