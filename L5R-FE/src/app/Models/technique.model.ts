import { Opportunity } from './opportunity.model';
import { Source } from './source.model';

export interface Technique {
  id: string;
  type: number; // TechniqueType
  name: string;
  rank: number;
  description: string;
  activation: string;
  effects?: string;
  enhancementEffect?: string;
  burstEffect?: string;
  newOpportunities?: Opportunity[];
  source: Source;
  clan?: string;
  ring?: number; // Ring
  style?: number; // Kata Style
  xpCost?: number; // defaults to 3 normally
}
