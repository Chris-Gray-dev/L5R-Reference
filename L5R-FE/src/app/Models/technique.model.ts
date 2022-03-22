import { Opportunity } from './opportunity.model';
import { Source } from './source.model';

export interface Technique {
  Id: string;
  Type: number; // TechniqueType
  Name: string;
  Rank: number;
  Description: string;
  Activation: string;
  Effects?: string;
  EnhancementEffect?: string;
  BurstEffect?: string;
  NewOpportunities?: Opportunity[];
  Source: Source;
  Clan?: string;
  Ring?: number; // Ring
  Style?: number; // Kata Style
}
